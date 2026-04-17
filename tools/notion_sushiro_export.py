#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path


ROOT_PAGE_ID = "85f5f34c-dfd3-4b9c-bda0-7b862d887c90"
API_BASE = "https://web-on.notion.site/api/v3/loadCachedPageChunk"
USER_AGENT = "Mozilla/5.0 (Codex Notion Export)"


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "untitled"


def request_json(url: str, payload: dict) -> dict:
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={
            "Content-Type": "application/json",
            "User-Agent": USER_AGENT,
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def download_file(url: str, destination: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as response:
        destination.write_bytes(response.read())


def extract_rich_text(prop: list | None) -> str:
    if not prop:
        return ""
    parts: list[str] = []
    for part in prop:
        if isinstance(part, list) and part:
            parts.append(part[0])
    return "".join(parts).strip()


def block_value(raw: dict) -> dict | None:
    try:
        return raw["value"]["value"]
    except Exception:
        return None


class NotionExporter:
    def __init__(self, root_page_id: str) -> None:
        self.root_page_id = root_page_id
        self.blocks: dict[str, dict] = {}
        self.loaded_pages: set[str] = set()

    def load_page(self, page_id: str) -> None:
        if page_id in self.loaded_pages:
            return
        self.loaded_pages.add(page_id)

        cursor = {"stack": []}
        chunk_number = 0
        while True:
            payload = {
                "pageId": page_id,
                "limit": 100,
                "cursor": cursor,
                "chunkNumber": chunk_number,
                "verticalColumns": False,
            }
            data = request_json(API_BASE, payload)
            for block_id, raw in data.get("recordMap", {}).get("block", {}).items():
                value = block_value(raw)
                if value:
                    self.blocks[block_id] = value
            if not data.get("hasMore"):
                break
            cursor = data["cursor"]
            chunk_number += 1

    def load_tree(self) -> None:
        self.load_page(self.root_page_id)
        while True:
            pending = [
                block_id
                for block_id, block in self.blocks.items()
                if block.get("type") == "page" and block_id not in self.loaded_pages
            ]
            if not pending:
                return
            for page_id in pending:
                self.load_page(page_id)

    def title(self, block_id: str) -> str:
        block = self.blocks[block_id]
        return extract_rich_text(block.get("properties", {}).get("title")) or "Untitled"

    def child_pages(self, page_id: str) -> list[str]:
        block = self.blocks[page_id]
        return [
            child_id
            for child_id in block.get("content", [])
            if child_id in self.blocks and self.blocks[child_id].get("type") == "page"
        ]

    def walk_descendants(self, block_id: str) -> list[str]:
        results: list[str] = []
        for child_id in self.blocks.get(block_id, {}).get("content", []):
            if child_id not in self.blocks:
                continue
            results.append(child_id)
            if self.blocks[child_id].get("type") != "page":
                results.extend(self.walk_descendants(child_id))
        return results

    def media_sources(self, page_id: str) -> list[tuple[str, str, str]]:
        media: list[tuple[str, str, str]] = []
        for block_id in self.walk_descendants(page_id):
            block = self.blocks[block_id]
            if block.get("type") != "image":
                continue
            fmt = block.get("format", {})
            props = block.get("properties", {})
            source = fmt.get("display_source")
            if not source:
                source_prop = props.get("source")
                if source_prop and source_prop[0]:
                    source = source_prop[0][0]
            if source:
                media.append((block_id, source, block.get("space_id", "")))
        return media

    def text_lines(self, page_id: str) -> list[str]:
        lines: list[str] = []
        for block_id in self.walk_descendants(page_id):
            block = self.blocks[block_id]
            block_type = block.get("type")
            title = extract_rich_text(block.get("properties", {}).get("title"))
            if not title:
                continue
            if block_type in {
                "header",
                "sub_header",
                "sub_sub_header",
                "text",
                "bulleted_list",
                "numbered_list",
                "quote",
                "callout",
                "toggle",
            }:
                prefix = ""
                if block_type == "bulleted_list":
                    prefix = "- "
                elif block_type == "numbered_list":
                    prefix = "1. "
                elif block_type in {"header", "sub_header", "sub_sub_header"}:
                    prefix = "## "
                lines.append(prefix + title)
        return lines


def infer_extension(url: str) -> str:
    path = urllib.parse.urlparse(url).path
    ext = Path(path).suffix.lower()
    if ext in {".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".heic"}:
        return ext
    return ".png"


def notion_image_url(source: str, block_id: str, space_id: str) -> str:
    encoded = urllib.parse.quote(source, safe="")
    params = urllib.parse.urlencode(
        {
            "table": "block",
            "id": block_id,
            "spaceId": space_id,
            "width": 4000,
            "cache": "v2",
        }
    )
    return f"https://web-on.notion.site/image/{encoded}?{params}"


def write_summary(exporter: NotionExporter, summary_path: Path, downloaded_counts: dict[str, int]) -> None:
    summary_path.parent.mkdir(parents=True, exist_ok=True)
    top_pages = exporter.child_pages(exporter.root_page_id)

    lines: list[str] = [
        "# SushiroHK Self-Payment Kiosk User Guide Summary",
        "",
        "This guide covers both customer-facing payment flows and staff/operations procedures for the SushiroHK self-payment kiosk.",
        "",
        "## Overall Structure",
        "",
        "- End-user screens and payment flows",
        "- Payment-specific examples for Octopus and Global Payment",
        "- Error references for scanning, Octopus, Global Payment, BBMSL, and printing",
        "- Staff operations including hidden login, reprint, system management, day end, screen saver, void, and web portal administration",
        "",
        "## Page-by-Page Summary",
        "",
    ]

    for page_id in top_pages:
        title = exporter.title(page_id).strip()
        text_lines = exporter.text_lines(page_id)
        image_count = downloaded_counts.get(title, 0)
        useful_lines = [
            line for line in text_lines if line.strip() and not line.startswith("## ")
        ]
        headings = [line[3:] for line in text_lines if line.startswith("## ")]

        lines.append(f"### {title}")
        if title == "Key Screens":
            lines.append(
                "Shows the full user journey: landing page, language selection, order review, confirmation, payment selection, payment-in-progress, and completion screens for Octopus, card, and Alipay."
            )
        elif title == "Paid by Octopus":
            lines.append(
                "Demonstrates Octopus success and failure flows, with a pointer to the dedicated Octopus error reference for detailed troubleshooting."
            )
        elif title == "Paid by Global Payment":
            lines.append(
                "Demonstrates contactless and mobile wallet payment flows, including success, failure, and timeout outcomes."
            )
        elif title == "Errors while scanning":
            lines.append(
                "Explains scan failures caused by invalid barcodes or payment tags attached to orders that are already being paid, paid, or cancelled."
            )
        elif title == "Octopus Errors":
            lines.append(
                "Maps Octopus error screens to backend error codes, covering tap-again prompts, invalid cards, insufficient funds, quota exceeded, incomplete transactions, and retry behavior."
            )
        elif title == "Global Payment Errors":
            lines.append(
                "Defines the generic Global Payment error format returned by the payment API."
            )
        elif title == "BBMSL Errors":
            lines.append(
                "Defines the generic BBMSL error format and field layout used in API error messages."
            )
        elif title == "Printing Errors":
            lines.append(
                "Shows common printer-related error screens and examples."
            )
        elif title == "Enter the Staff Panel":
            lines.append(
                "Explains the hidden staff entry gesture and login flow. Staff reach the login panel by pressing the middle area of the welcome page 10 times within 3 seconds, then sign in with the same code and password as FTL POS."
            )
        elif title == "Reprint Receipt":
            lines.append(
                "Explains how receipt reprints work, including the rule that only successful print jobs receive a `Reprint` label."
            )
        elif title == "System Management":
            lines.append(
                "Describes the kiosk control screen used to view shop and kiosk codes, reboot or shut down the kiosk, reconnect the payment reader, and run reader tests."
            )
        elif title == "Day End":
            lines.append(
                "Covers day-end success and retry flows, error handling, and how to inspect `dayEndResult` records. It also notes that `SETTLEMENT CONFIRM` must be enabled under `management/config/ECR`."
            )
        elif title == "Screen-saver":
            lines.append(
                "Lists media specifications for kiosk screen saver images and videos."
            )
        elif title == "Void Transaction":
            lines.append(
                "Explains that unsupported tenders cannot be voided until void is enabled in `management/config/issuer/enable void`."
            )
        elif title == "Web Management Portal":
            lines.append(
                "Documents the cloud admin portal, including login, report filters, custom date ranges, screen saver management, and `$3` coupon CSV management."
            )
        else:
            lines.append("Contains screenshots and short notes for this topic.")

        if headings:
            lines.append("")
            lines.append("Notable subsections:")
            for heading in headings[:10]:
                lines.append(f"- {heading}")

        specific_lines = []
        seen = set()
        for line in useful_lines:
            normalized = line.strip()
            if normalized and normalized not in seen:
                specific_lines.append(normalized)
                seen.add(normalized)
            if len(specific_lines) >= 5:
                break
        if specific_lines:
            lines.append("")
            lines.append("Notes from the page:")
            for line in specific_lines:
                lines.append(f"- {line}")

        lines.append("")
        lines.append(f"Image count downloaded from this page: {image_count}")
        lines.append("")

    summary_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def export_images(exporter: NotionExporter, output_dir: Path) -> dict[str, int]:
    output_dir.mkdir(parents=True, exist_ok=True)
    counts: dict[str, int] = {}

    for page_id in exporter.child_pages(exporter.root_page_id):
        title = exporter.title(page_id).strip()
        page_dir = output_dir / slugify(title)
        page_dir.mkdir(parents=True, exist_ok=True)

        count = 0
        for index, (block_id, source, space_id) in enumerate(exporter.media_sources(page_id), start=1):
            extension = infer_extension(source)
            destination = page_dir / f"{index:03d}{extension}"
            try:
                download_file(notion_image_url(source, block_id, space_id), destination)
                count += 1
                time.sleep(0.1)
            except Exception as exc:
                print(f"warning: failed to download {source}: {exc}", file=sys.stderr)
        counts[title] = count

    return counts


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--output-dir",
        default="downloads/sushirohk-self-payment-kiosk",
        help="Directory for exported images and summary.",
    )
    args = parser.parse_args()

    output_dir = Path(args.output_dir).resolve()
    exporter = NotionExporter(ROOT_PAGE_ID)
    exporter.load_tree()

    counts = export_images(exporter, output_dir / "images")
    write_summary(exporter, output_dir / "SUMMARY.md", counts)

    print(f"Exported assets to {output_dir}")
    for title, count in counts.items():
        print(f"{title}: {count} images")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

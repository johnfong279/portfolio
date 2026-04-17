# Food Label Translator

Food Label Translator is a full-stack web app for converting international food labels into Canadian-ready packaging content. Users can upload label photos for OCR extraction, enter nutrition data manually, translate product information into bilingual English and French output, generate CFIA-style Nutrition Facts Table previews, run compliance checks, and export label assets. The project combines a Next.js front end with a FastAPI backend, configurable AI-assisted translation and OCR flows, and server-side label rendering for production-oriented outputs.

## Key Features

- Image-based intake with drag-and-drop OCR, mobile camera capture, and optional barcode lookup for extracting nutrition and product details.
- Manual-entry, dashboard, and food-management flows for creating labels, linking them to foods, and editing ingredients and importer information.
- US-to-Canada nutrient mapping and bilingual label generation backed by data-driven CFIA terminology, allergen, and daily-value reference files.
- Server-side Nutrition Facts Table generation with multiple CFIA-oriented SVG layouts, front-of-package symbol logic, and export support for PDF and JPG outputs.
- FastAPI backend with auth, compliance reporting, bulk import endpoints, and a database layer that defaults to SQLite with PostgreSQL support via configuration.

## Thumbnail Alt Text

Interactive demo showing US-to-Canadian bilingual nutrition label mapping in Food Label Translator.

# Trade Tools

Trade Tools is a local trading review and classification app built around a React frontend and Flask backend. It combines a performance dashboard for synced trade history with two focused review workflows: one for classifying individual trades and another for tagging daily chart setups from saved intraday screenshots. The app reads local trading data, serves chart assets through a lightweight API, and gives a structured way to review P&L, trading patterns, and rule adherence across a personal trading journal.

## Key Features
- React + Vite frontend with three primary views: a trading dashboard, a trade classifier, and a pattern-classifier workflow for daily chart screenshots.
- Flask backend exposes local API routes for trade data, classification state, daily chart image serving, and screenshot lookups tied to Notion-backed trade records.
- Dashboard aggregates local trade history into KPIs and analysis views such as equity curve, period summaries, trade history, and breakdowns by ticker or session.
- Classification flows support structured tagging with trade quality, strategy method, setup criteria, and rule violations, then persist those labels to local JSON files.
- Uses local cached trading data and generated chart image folders to support repeatable review workflows without requiring a heavy database setup.

## Included Files
- `project-thumbnail.png`
- `dashboard-equity.png`
- `dashboard-period-summary-top.png`
- `dashboard-period-summary-analysis.png`
- `dashboard-trade-history.png`
- `dashboard-trade-history-modal-chart.png`
- `dashboard-trade-history-modal.png`
- `dashboard-breakdown.png`
- `trade-classifier.png`
- `pattern-classifier.png`

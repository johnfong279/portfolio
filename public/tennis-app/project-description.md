# Tennis App

Tennis App is a full-stack tennis court booking system with separate user and admin workflows for reservations, balances, and booking oversight. The frontend uses Vue 3, Vite, PrimeVue, and Tailwind CSS, while the backend is built with NestJS, Prisma, and PostgreSQL with JWT-based role access. Users can add and review their own bookings through a calendar-driven dashboard, and admins can manage bookings, funding, and reporting from a dedicated dashboard. The repository also includes an MCP server for natural-language operations against the app.

## Key Features
- Role-based authentication with dedicated user and admin dashboards backed by JWT auth in NestJS.
- User booking flow with district and court selection, date/time inputs, partner details, and a personal booking calendar.
- Admin tools for booking management, monthly calendar views, user funding, and financial metrics.
- Bilingual interface in English and Traditional Chinese using organized i18n labels across the Vue app.
- Additional operational features include email reminder cron jobs and a separate MCP server that exposes booking, funding, and reporting actions.

## Included Files
- `project-thumbnail.png`

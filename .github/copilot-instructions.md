# RENOA Development Instructions

## Project

RENOA by Treeblock is an interior design and project management platform.

The platform will support:

- Interior design
- 2D design
- 3D visualization
- Residential projects
- Commercial projects
- Project enquiries
- Client accounts
- Project tracking
- Quotations
- Payments
- Construction coordination
- Project handover

## Architecture

This is a pnpm monorepo.

Applications:

- apps/web — React frontend
- apps/api — Node.js API

Packages:

- packages/shared — shared types/constants
- packages/config — shared configuration

## Frontend

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- React Router

Use feature-based architecture.

Do not create giant components.

Keep business logic outside presentation components.

Prefer reusable UI primitives.

## Responsive design

Mobile-first is mandatory.

Design for:

1. Small mobile
2. Large mobile
3. Tablet
4. Desktop
5. Large desktop

Do not design desktop first and shrink it.

Touch targets should generally be at least 44px.

Avoid horizontal scrolling.

Images must be responsive.

Typography must use responsive sizing.

## Accessibility

Use:

- semantic HTML
- accessible buttons
- labels for forms
- keyboard navigation
- visible focus states
- meaningful alt text

Do not use clickable divs when a button or link is appropriate.

## Backend

Use:

- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma

API code must be separated into:

- routes
- controllers
- services
- repositories/data access
- validation
- middleware

## Security

Never:

- commit secrets
- expose database credentials
- trust client-side authorization
- put private keys in frontend code

Validate external input.

## Code quality

Use TypeScript strict mode.

Do not use `any` unless there is a documented reason.

Prefer small functions.

Avoid duplicated logic.

Do not add dependencies without a reason.

Before adding a new library, check whether an existing dependency already solves the problem.

## UI

RENOA should feel:

- premium
- architectural
- minimal
- warm
- sophisticated
- trustworthy

Animations should be subtle and purposeful.

Avoid excessive animations.

Respect reduced-motion preferences.

## Business rule

RENOA handles design and the associated digital project workflow.

Treeblock handles construction/execution responsibilities according to the business agreement.

Do not invent financial, legal, tax, or payment rules.

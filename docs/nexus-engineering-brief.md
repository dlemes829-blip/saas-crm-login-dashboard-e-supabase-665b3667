# Nexus Engineering Brief

Project: SaaS CRM login, dashboard e Supabase
Kind: fullstack
Domain: CRM comercial
Created: 2026-06-05T07:07:21.859Z

## Request

Crie um SaaS CRM com login, dashboard e Supabase

## Model routing

- Router: nexus-engineering-router-v1
- Selected model: gpt-4o-mini
- Reason: full-stack SaaS needs architecture, frontend, backend and database reasoning
- Policy: Pick the strongest configured model for architecture first, then use coding, design and test roles for the build loop.

## Helper agents

- Nexus Researcher: Find context, risks, references and conversion language.
- Nexus Product Architect: Define product scope, data model, routes and user journeys.
- Nexus Frontend Designer: Raise visual quality, animations, responsiveness and UI states.
- Nexus Backend Engineer: Create APIs, health checks, persistence and integration contracts.
- Nexus Database Engineer: Design Supabase schema, seeds, policies and env rules.
- Nexus Test Engineer: Run smoke checks, syntax validation and repair loops.
- Nexus Deploy Engineer: Prepare GitHub, Render, public URL checks and publish notes.
- Nexus Security Reviewer: Keep secrets out of the project and protect deploy files.
- Nexus Project Memory: Preserve project-specific context for future improvements.
- Nexus Delivery Lead: Summarize what changed and what is ready for the user.

## Heavy tools

- Research: Prepare company, market, competitor and reference context before writing files.
- Plan: Turn the request into screens, entities, routes, file map and acceptance criteria.
- Build: Create real project files, configs, docs and editable source code.
- Database: Model Supabase tables, activity logs, env example and integration notes.
- Design: Check hierarchy, responsiveness, copy, CTA and premium 2026 polish.
- Validate: Run smoke tests and syntax checks with logs stored in the manifest.
- Repair: Iterate up to five cycles when validation fails.
- Preview: Open the generated preview and keep it connected to project memory.
- Version: Prepare a repository without secrets and record GitHub delivery steps.
- Deploy: Create or reuse Render deployment, warm the public URL and verify readiness.

## Acceptance criteria

- Create real editable source files, not only a placeholder preview.
- Ship a Supabase schema and environment example for the project database.
- Expose a visual preview that matches the requested domain.
- Run smoke tests and syntax checks up to five cycles.
- Keep every project attached to its own memory, files, preview and publish pipeline.
- Never commit secrets or frontend API keys into generated files.
- Provide a production start command so Render can serve the built frontend and API.
- Provide /health and at least one API route for backend verification.

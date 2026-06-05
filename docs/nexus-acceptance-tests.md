# Acceptance Tests

These checks define the minimum standard for this Nexus project.

1. Create real editable source files, not only a placeholder preview.
2. Ship a Supabase schema and environment example for the project database.
3. Expose a visual preview that matches the requested domain.
4. Run smoke tests and syntax checks up to five cycles.
5. Keep every project attached to its own memory, files, preview and publish pipeline.
6. Never commit secrets or frontend API keys into generated files.
7. Provide a production start command so Render can serve the built frontend and API.
8. Provide /health and at least one API route for backend verification.

## Validation loop

Nexus must run smoke tests and syntax checks, inspect logs, repair failures and retry up to five cycles before marking the project ready.

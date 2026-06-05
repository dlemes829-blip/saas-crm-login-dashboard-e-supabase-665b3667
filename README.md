# SaaS CRM login, dashboard e Supabase

Projeto SaaS full stack criado pelo Agent Nexus.

## O que ja vem pronto

- Interface React/Vite pronta para evoluir.
- Supabase como banco padrao em `supabase/schema.sql`.
- Cliente Supabase em `src/lib/supabaseClient.js`.
- Smoke tests em `tests/smoke.test.mjs`.
- Preview e ZIP pelo Agent Nexus.

## Rodar

```bash
npm install
npm run dev
```

## Banco

1. Rode o SQL de `supabase/schema.sql` no Supabase.
2. Copie `.env.example` para `.env.local`.
3. Preencha as chaves publicas do Supabase.

## Testes

```bash
npm test
```

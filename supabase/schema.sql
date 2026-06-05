-- Supabase schema for SaaS CRM login, dashboard e Supabase
create extension if not exists pgcrypto;

create table if not exists public.saas_crm_login_dashboard_e_supabase_workspaces (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  name text not null,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists public.saas_crm_login_dashboard_e_supabase_items (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.saas_crm_login_dashboard_e_supabase_workspaces(id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'todo',
  amount numeric,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.saas_crm_login_dashboard_e_supabase_activity (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.saas_crm_login_dashboard_e_supabase_workspaces(id) on delete cascade,
  actor text not null default 'Agent Nexus',
  event text not null,
  created_at timestamptz not null default now()
);

alter table public.saas_crm_login_dashboard_e_supabase_workspaces enable row level security;
alter table public.saas_crm_login_dashboard_e_supabase_items enable row level security;
alter table public.saas_crm_login_dashboard_e_supabase_activity enable row level security;

create policy "saas_crm_login_dashboard_e_supabase_workspaces_read" on public.saas_crm_login_dashboard_e_supabase_workspaces for select using (true);
create policy "saas_crm_login_dashboard_e_supabase_items_read" on public.saas_crm_login_dashboard_e_supabase_items for select using (true);
create policy "saas_crm_login_dashboard_e_supabase_activity_read" on public.saas_crm_login_dashboard_e_supabase_activity for select using (true);

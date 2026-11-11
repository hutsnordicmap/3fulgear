-- Catalog for the Finnish 3F UL GEAR affiliate site.
-- Safe to run in the same Supabase project as huts.fi: tables are separate.

create table if not exists public.gear_products (
  id bigint,
  slug text primary key,
  name text not null,
  name_fi text not null,
  category text not null,
  permalink text not null,
  images jsonb not null default '[]'::jsonb,
  in_stock boolean not null default true,
  on_sale boolean not null default false,
  variations jsonb not null default '[]'::jsonb,
  eur_summary jsonb not null default '[]'::jsonb,
  summary_fi text not null default '',
  bullets_fi jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.gear_products enable row level security;

drop policy if exists "public read gear products" on public.gear_products;
create policy "public read gear products"
  on public.gear_products
  for select
  using (true);

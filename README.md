# 3fulgear.fi

Finnish affiliate guide for [3F UL GEAR](https://3fulgear.com/). Purchases happen on the official store. The discount code is `HUTSNORDIC10` (10%). Outbound links add `no=647`.

## Why pages stay small

Product photos are not stored in this repository and are not proxied by Next.js image optimization. The browser loads them from `3fulgear.com`. A deploy only ships templates plus a text catalog of roughly 70 KB.

The same catalog can live in Supabase table `gear_products` (see `supabase/schema.sql`). The site reads that table when `SUPABASE_URL` and `SUPABASE_ANON_KEY` are set, and falls back to `data/products.json` and `data/copy.json` otherwise. Pages revalidate hourly. `POST /api/revalidate` with header `x-revalidate-secret` refreshes them sooner.

This can use the same Supabase project as huts.fi. The table name does not overlap with huts content. In that project, run `supabase/schema.sql` once, then `supabase/seed.sql`. The seed can be run again after a catalog refresh.

## Commands

```bash
npm run dev
npm run build
python3 scripts/build-catalog.py   # refresh euro prices and image URLs from the official shop
python3 scripts/emit-seed-sql.py   # rewrite supabase/seed.sql after a catalog refresh
node scripts/seed-supabase.mjs     # optional: load the catalog with the service role in the shell
```

Copy for the Finnish text lives in `data/copy.json`. Prices and image URLs live in `data/products.json`.

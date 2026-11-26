# Thrive cloud login troubleshooting

If login succeeds but Thrive says online account data could not load:

1. Open the correct Supabase project for this build.
2. Open SQL Editor.
3. Run the complete `supabase_setup.sql` included in this ZIP.
4. Confirm `public.user_data` exists and Row Level Security is enabled.
5. Confirm authenticated users can select, insert and update only their own row (`user_id = auth.uid()`).
6. Reload Thrive and sign in again.

The updated app now reports more specific errors. If a local cache exists, it opens that cache without automatically uploading it over cloud data. While cloud data is unavailable, edits remain local and are not treated as synced. Once the database issue is fixed, reload and sign in to load the cloud copy.

Never put a Supabase service-role key in frontend code. The publishable/anon key is intended for client use only when paired with correctly configured RLS.

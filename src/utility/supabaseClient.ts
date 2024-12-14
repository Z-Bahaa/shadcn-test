import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://zjezqbpfaixyexnpmvrk.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZXpxYnBmYWl4eWV4bnBtdnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNjU5MTUsImV4cCI6MjA0OTc0MTkxNX0.DRKseaU6Artp6woQkgMHme4a44K3ljA5psuSVRI6yRc";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});

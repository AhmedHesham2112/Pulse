import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fvpwsarpnmqxycmojmqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2cHdzYXJwbm1xeHljbW9qbXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NzY1NjQsImV4cCI6MjA2NzU1MjU2NH0.slmmqW7_sDf_DT-j76ohJ4GBjlqZCP2yJ2crBlMncCs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

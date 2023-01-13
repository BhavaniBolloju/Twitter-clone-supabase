import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://uhonnlezgjyrztnpreym.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVob25ubGV6Z2p5cnp0bnByZXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1NDczOTEsImV4cCI6MTk4OTEyMzM5MX0._ojqEPhkXW124LCjHGI20JJ1APq4vA2587Zd-W46fjk";
export const supabase = createClient(supabaseURL, supabaseAnonKey);

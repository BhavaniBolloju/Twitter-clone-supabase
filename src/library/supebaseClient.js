import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://bumojibwsxhdxxchpusi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1bW9qaWJ3c3hoZHh4Y2hwdXNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyODAwNjIsImV4cCI6MTk4ODg1NjA2Mn0.iFQT94nHrxzv9kUJkFcWKWarrnKxkYxl78IpwQvYQyA";
export const supabase = createClient(supabaseURL, supabaseAnonKey);

// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pcnatpkkokguqrpwpnlo.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjbmF0cGtrb2tndXFycHdwbmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MjYxNTksImV4cCI6MjA1MzUwMjE1OX0.S-buPLXG-MHpY-9SS1cNvgNIg0AgKO6bX9ZU3oHVezM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// src/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://whwfnyohtfnjsmoayhex.supabase.co'; // e.g., https://your-project-id.supabase.co
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indod2ZueW9odGZuanNtb2F5aGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MzYwMzYsImV4cCI6MjA2MjIxMjAzNn0.lB5l02gnA838dfjvlddjLg9444pxJ8h3PUIh8dWw50U';

export const supabase = createClient(supabaseUrl, supabaseKey);
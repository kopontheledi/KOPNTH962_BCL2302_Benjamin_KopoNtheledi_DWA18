import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lmayjliyulorcummcvae.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtYXlqbGl5dWxvcmN1bW1jdmFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3OTM1NzEsImV4cCI6MjAwNjM2OTU3MX0.bcgkXFf-u5_cpe9OEIkLA49cFFka6CcGNi8KjtXBUDo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

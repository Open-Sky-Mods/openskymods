import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

const supabaseUrl = import.meta.env.RENDERER_VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.RENDERER_VITE_SUPABASE_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

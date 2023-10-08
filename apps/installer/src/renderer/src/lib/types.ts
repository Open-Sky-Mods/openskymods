import { Database } from '../supabase/types';

export type Profile = Database['public']['Tables']['profiles']['Insert'];

export type MinimalProfile = Pick<Profile, 'airport' | 'airportCreator'>;

export type AppConfig = {
  gsxProfilePath?: string;
};

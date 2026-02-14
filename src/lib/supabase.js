// Lightweight shim for supabase used by the contact form.
// If you later want to use a real Supabase project, replace this file with a
// proper client e.g.:
// import { createClient } from '@supabase/supabase-js'
// export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// For now this fallback keeps the app working in development by logging
// submissions and returning a success-like response.

export const isSupabaseShim = true;

export const supabase = {
  from: (table) => ({
    insert: async (rows) => {
      // here you could also write to localStorage or send to a server endpoint
      // for now we just log to the console to simulate a successful save
      try {
        console.log(`[supabase shim] insert into ${table}:`, rows);
      } catch (e) {
        /* ignore */
      }

      // simulate small delay
      await new Promise((r) => setTimeout(r, 350));

      return { error: null };
    },
  }),
};

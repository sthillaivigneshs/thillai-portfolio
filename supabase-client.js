// ============================================================================
// SUPABASE CLIENT INITIALIZATION — THILLAI VIGNESH PORTFOLIO
// Official Client: @supabase/supabase-js v2
// ============================================================================

// Base Supabase URL and Publishable Key (safe for browser client-side use)
export const SUPABASE_URL = 'https://ulcqbufljoqkhyiosvcl.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_bocongavzeM_Fr-94oHUPA_gNwzmpD-';

// Load Supabase Client from official CDN or global bundle
let supabaseInstance = null;

export async function getSupabase() {
  if (supabaseInstance) return supabaseInstance;

  if (window.supabase && typeof window.supabase.createClient === 'function') {
    supabaseInstance = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabaseInstance;
  }

  // Fallback to dynamic ES module import
  try {
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    supabaseInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabaseInstance;
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    throw error;
  }
}

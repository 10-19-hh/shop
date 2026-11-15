import { createClient } from "@supabase/supabase-js";

// 서버 전용 클라이언트. 퍼블리셔블 키만 쓰며 RLS가 읽기 전용으로 제한한다.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "",
  { auth: { persistSession: false, autoRefreshToken: false } },
);

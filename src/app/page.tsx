import { createServerSupabaseClient } from "@/lib/serverHooks";
import { ROUTE_PATHS } from "@/types";
import { redirect } from "next/navigation";

export default async function Landing() {
  const supabase = createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect(ROUTE_PATHS.ARCADIA);
  } else {
    redirect(ROUTE_PATHS.LOGIN);
  }
}

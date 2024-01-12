import { createServerSupabaseClient } from "@/lib/serverHooks";
import { ROUTE_PATHS } from "@/enums";
import { redirect } from "next/navigation";

// TODO: Make bitmoji connection and send bitmoji data through browser URI
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

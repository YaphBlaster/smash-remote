import { createServerSupabaseClient } from "@/lib/serverHooks";
import { ROUTE_PATHS } from "@/types";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Arcadia = async (props: Props) => {
  const supabase = createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect(ROUTE_PATHS.LOGIN);
  } else {
    redirect(ROUTE_PATHS.DASHBOARD);
  }
};

export default Arcadia;

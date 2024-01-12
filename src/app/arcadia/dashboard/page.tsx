import ObsContainer from "@/components/ObsContainer";
import { createServerSupabaseClient } from "@/lib/serverHooks";
import { ROUTE_PATHS } from "@/enums";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  const supabase = createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect(ROUTE_PATHS.LOGIN);
  }
  return <ObsContainer />;
};

export default Dashboard;

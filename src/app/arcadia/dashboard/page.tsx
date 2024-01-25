import ObsContainer from "@/components/ObsContainer";
import { createServerSupabaseClient } from "@/lib/serverHooks";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  const supabase = createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <ObsContainer />;
};

export default Dashboard;

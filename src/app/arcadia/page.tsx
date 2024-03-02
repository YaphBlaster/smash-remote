import ObsContainer from "@/components/ObsContainer";
import { createServerSupabaseClient } from "@/lib/serverHooks";
import React from "react";

type Props = {};

// TODO: Find the Remote Resizable shadui

const Arcadia = async (props: Props) => {
  const supabase = createServerSupabaseClient();
  await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return <div>Loading</div>;

  return <ObsContainer userId={user.id} />;
};

export default Arcadia;

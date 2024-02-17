import ObsContainer from "@/components/ObsContainer";
import { createServerSupabaseClient } from "@/lib/serverHooks";
import React from "react";

type Props = {};

const Arcadia = async (props: Props) => {
  const supabase = createServerSupabaseClient();
  await supabase.auth.getSession();

  return <ObsContainer />;
};

export default Arcadia;

import { createServerSupabaseClient } from "@/lib/serverHooks";
import { ROUTE_PATHS } from "@/enums";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Arcadia = async (props: Props) => {
  redirect(ROUTE_PATHS.DASHBOARD);
};

export default Arcadia;

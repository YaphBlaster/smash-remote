"use client";
import React from "react";
import { Button } from "./ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

type Props = {};

const SignOutButton = (props: Props) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const onSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return <Button onClick={onSignOut}>Sign Out</Button>;
};

export default SignOutButton;

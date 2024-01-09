import React from "react";
import { createServerSupabaseClient } from "@/lib/serverHooks";
import SignOutButton from "./SignOutButton";

type Props = {};

const Header = async (props: Props) => {
  const supabase = createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="flex justify-center">
      <div>
        <span className="text-secondary-foreground">SMASH</span>
        <span className="text-primary">MOUTH</span>
      </div>
      {session ? <SignOutButton /> : null}
    </div>
  );
};

export default Header;

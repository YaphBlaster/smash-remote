"use client";
import React, { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { useRouter } from "next/navigation";

type Props = {};

const SignInSignUp = (props: Props) => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.refresh();
      }
    });

    return () => subscription.unsubscribe();
  });

  return (
    <Card className="w-[350px]">
      <CardContent>
        <CardHeader>
          <CardTitle>Smash Mouth</CardTitle>
        </CardHeader>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          theme={
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "default"
          }
          redirectTo={`${location.origin}/auth/callback`}
        />
      </CardContent>
    </Card>
  );
};

export default SignInSignUp;

import React from "react";
import { createServerSupabaseClient } from "@/lib/serverHooks";
import ProfileAvatar from "./ProfileAvatar";
import HeaderLogo from "./HeaderLogo";
import MusicPlayer from "./MusicPlayer";
import prisma from "@/db";

type Props = {};

const Header = async (props: Props) => {
  const supabase = createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profile = await prisma.profile.findFirst({
    where: { id: user?.id },
  });

  await supabase.auth.getSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="overflow-hidden container flex h-14 max-w-screen-2xl items-center gap-2">
        <HeaderLogo />
        <MusicPlayer />
        {profile ? <ProfileAvatar profile={profile} /> : null}
      </div>
    </header>
  );
};

export default Header;

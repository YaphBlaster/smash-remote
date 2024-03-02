import type { NextRequest } from "next/server";
import prisma from "@/db";
import { Prisma } from "@prisma/client";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { cookies } from "next/headers";

export async function PATCH(request: NextRequest) {
  const { actionId } = await request.json();

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });

  const { data } = await supabase.auth.getSession();

  const args: Prisma.ProfileUpdateArgs = {
    where: {
      id: data.session?.user.id,
    },
    data: {
      favourites: {
        push: actionId,
      },
    },
  };

  const updatedProfile = await prisma.profile.update(args);

  return Response.json({ updatedProfile });
}

export async function DELETE(request: NextRequest) {
  const { profileId, actionId } = await request.json();

  const { favourites } = await prisma.profile.findFirstOrThrow({
    where: { id: profileId },
  });

  const args: Prisma.ProfileUpdateArgs = {
    where: {
      id: profileId,
    },
    data: {
      favourites: {
        set: favourites.filter(
          (favouriteActionId) => favouriteActionId !== actionId
        ),
      },
    },
  };

  const updatedProfile = await prisma.profile.update(args);

  return Response.json({
    updatedProfile,
  });
}

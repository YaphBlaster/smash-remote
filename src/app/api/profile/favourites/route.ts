import type { NextRequest } from "next/server";
import prisma from "@/db";
import { Prisma } from "@prisma/client";

export async function PATCH(request: NextRequest) {
  const { profileId, actionId } = await request.json();

  const args: Prisma.ProfileUpdateArgs = {
    where: {
      id: profileId,
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

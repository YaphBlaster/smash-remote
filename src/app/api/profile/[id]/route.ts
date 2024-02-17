import type { NextRequest } from "next/server";
import prisma from "@/db";
import { Prisma } from "@prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const args: Prisma.ProfileFindUniqueOrThrowArgs = {
    where: { id },
  };

  console.log("hit");
  const profile = await prisma.profile.findUnique(args);

  return Response.json({ profile });
}

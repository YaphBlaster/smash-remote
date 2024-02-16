import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

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
  const profile = await prisma.profile.findUnique(args);

  return Response.json({ profile });
}

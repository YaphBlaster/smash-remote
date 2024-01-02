import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/lib/database.types";
import prisma from "@/db";

export async function GET(request: NextRequest) {
  console.log("🚀 hit");

  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
      cookies: () => cookieStore,
    });
    const {
      data: { user },
    } = await supabase.auth.exchangeCodeForSession(code);
    console.log("🚀 ~ file: route.ts:20 ~ GET ~ user:", user);

    if (user) {
      prisma.profile.create({
        data: {
          displayName: user?.email!,
          email: user?.email!,
          id: user.id,
        },
      });
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}

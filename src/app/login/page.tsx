import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginSignUp from "./LoginSignUp";
import fs from "fs";
import LogoCard from "./LogoCard";
import { cookies } from "next/headers";
import { Separator } from "@/components/ui/separator";

export default function Login() {
  const forceDynamicRoute = cookies();
  const logoFiles = fs
    .readdirSync(process.cwd() + "/public/logos")
    .filter((file) => file.endsWith(".png"));
  const randomLogoFile =
    logoFiles[Math.floor(Math.random() * logoFiles.length)];

  const backdropFiles = fs
    .readdirSync(process.cwd() + "/public/backdrops")
    .filter((file) => file.endsWith(".jpg"));
  const randomBackdropFile =
    backdropFiles[Math.floor(Math.random() * backdropFiles.length)];

  return (
    <Card>
      <CardContent className="flex  flex-col lg:flex-row p-4 gap-3 items-center lg:items-start">
        <LogoCard
          logoFilePath={randomLogoFile}
          backdropFilePath={randomBackdropFile}
        />
        <LoginSignUp />
      </CardContent>
    </Card>
  );
}

"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PropsWithChildren } from "react";
import { ModeToggle } from "./ModeToggle";

type Props = {};

const ActionBrowser = ({ children }: PropsWithChildren) => {
  return (
    <Card className="w-full min-w-min max-w-3xl">
      <CardHeader>
        <CardTitle className="flex justify-between ">
          <div>Smash Mouth</div>
          <ModeToggle />
        </CardTitle>
        <CardDescription className="flex">
          Talk shit and tell us how you really feel
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ActionBrowser;

"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PropsWithChildren, ReactNode } from "react";
import { ModeToggle } from "./ModeToggle";

type Props = {
  footerContent: ReactNode;
};

const ActionBrowser = ({
  children,
  footerContent,
}: PropsWithChildren<Props>) => {
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
      <CardFooter>{footerContent}</CardFooter>
    </Card>
  );
};

export default ActionBrowser;

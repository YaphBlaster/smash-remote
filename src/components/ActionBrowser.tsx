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

type Props = {};

const ActionBrowser = ({ children }: PropsWithChildren) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between ">
          <div>Smash Mouth</div>
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

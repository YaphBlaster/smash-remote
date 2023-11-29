import React, { PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

const ActionBrowser = ({ children }: PropsWithChildren) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Smash Talk</CardTitle>
        <CardDescription>
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

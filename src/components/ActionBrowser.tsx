"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useStreamerBotContext } from "./streamerbot-context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Circle, VideoIcon, VideoOff } from "lucide-react";

type Props = {};

const ActionBrowser = ({ children }: PropsWithChildren) => {
  const { isObsConnected } = useStreamerBotContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between ">
          <div>Smash Mouth</div>

          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                {isObsConnected ? (
                  <div className="relative">
                    <VideoIcon className="stroke-primary" />
                    <Circle
                      className="fill-red-600 stroke-none animate-pulse absolute bottom-2 left-1"
                      size={9}
                    />
                  </div>
                ) : (
                  <VideoOff className="stroke-primary opacity-20" />
                )}
              </TooltipTrigger>
              <TooltipContent>
                {isObsConnected ? "OBS Connected" : "OBS Disconnected"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
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

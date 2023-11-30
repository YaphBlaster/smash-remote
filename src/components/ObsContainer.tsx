"use client";
import React, { useEffect, useRef, useState } from "react";
import OBSWebSocket from "obs-websocket-js";
import { Button } from "./ui/button";
import { StreamerbotAction, StreamerbotClient } from "@streamerbot/client";
import { useQuery } from "@tanstack/react-query";
import ActionCommand from "./ActionCommand";
import ActionBrowser from "./ActionBrowser";
import { DataTable } from "./DataTable";
import { useStreamerBotContext } from "./streamerbot-context";
import { useColumns } from "../lib/hooks";
import GiphySearch from "./GiphySearch";

import { VideoIcon, VideoOffIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Badge } from "./ui/badge";

type Props = {};

const ObsContainer = (props: Props) => {
  const { streamerbotClient: client } = useStreamerBotContext();

  const columns = useColumns();

  const fetchActions = async () => {
    const { actions } = await client.getActions();

    const commandMap: Record<string, StreamerbotAction[]> = {};
    actions.forEach((action) => {
      if (commandMap[action.group]) {
        commandMap[action.group].push({ ...action });
      } else {
        commandMap[action.group] = [{ ...action }];
      }
    });
    return { actionsRaw: actions, commandMap };
  };

  const { data, isFetching } = useQuery({
    queryKey: ["actions"],
    queryFn: fetchActions,
  });

  return isFetching ? (
    <div>Loading</div>
  ) : (
    <div>
      <ActionBrowser>
        <GiphySearch />
        {data?.actionsRaw && (
          <DataTable columns={columns} data={data.actionsRaw} />
        )}
      </ActionBrowser>
    </div>
  );
};

export default ObsContainer;

"use client";
import React, { useRef, useState } from "react";
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

  const subscribe = async () => {
    return await client.subscribe("*");
  };

  const { data, isFetching } = useQuery({
    queryKey: ["actions"],
    queryFn: fetchActions,
  });

  const response = useQuery({
    queryKey: ["subscribe"],
    queryFn: subscribe,
  });

  const playAction = async (actionId: string) => {
    await client.doAction(actionId, {
      bonesaw: "Yaphet",
      humanSpider: "Travis",
    });
  };

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

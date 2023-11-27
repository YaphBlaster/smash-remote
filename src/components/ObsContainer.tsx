"use client";
import React, { useEffect, useRef, useState } from "react";
import OBSWebSocket from "obs-websocket-js";
import { Button } from "./ui/button";
import { StreamerbotAction, StreamerbotClient } from "@streamerbot/client";
import { useQuery } from "@tanstack/react-query";
import ActionCommand from "./ActionCommand";

type _SceneItem = {
  sceneItemId: number;
  sceneItemIndex: string;
  sourceName: string;
};

type Props = {};

const ObsContainer = (props: Props) => {
  const { current: client } = useRef(new StreamerbotClient());

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
      <ActionCommand actions={data?.commandMap} />
      {data?.actionsRaw?.map((action) => {
        const { id, name } = action;
        return (
          <Button key={id} onClick={() => playAction(id)}>
            {name}
          </Button>
        );
      })}
    </div>
  );
};

export default ObsContainer;

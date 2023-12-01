"use client";
import React from "react";
import { StreamerbotAction } from "@streamerbot/client";
import { useQuery } from "@tanstack/react-query";
import ActionBrowser from "./ActionBrowser";
import { DataTable } from "./DataTable";
import { useStreamerBotContext } from "./streamerbot-context";
import { useColumns } from "../lib/hooks";
import GiphySearch from "./GiphySearch";

import TickerForm from "./TickerForm";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export type _FetchActionsType = {
  actionsRaw: StreamerbotAction[];
  commandMap: Record<string, StreamerbotAction[]>;
};

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
    <ActionBrowser>
      <div className="flex flex-col gap-y-6">
        <TickerForm />
        <GiphySearch />
        {data?.actionsRaw && (
          <ScrollArea className="rounded-md border container py-10 ">
            <DataTable columns={columns} data={data.actionsRaw} />
          </ScrollArea>
        )}
      </div>
    </ActionBrowser>
  );
};

export default ObsContainer;

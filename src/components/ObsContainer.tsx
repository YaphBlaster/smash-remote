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
import { ScrollArea } from "./ui/scroll-area";
import Loading from "./Loading";
import { Button } from "./ui/button";
import { TimerReset } from "lucide-react";

export type _FetchActionsType = {
  actionsRaw: StreamerbotAction[];
  actionsTableData: Record<string, _DataTableAction>;
};

export type _DataTableAction = StreamerbotAction & {
  currentMana: number;
  manaState: "idle" | "charging";
};

const dataTableActionCategories = [
  "Ace Ventura",
  "Cartoons",
  "Community",
  "Eric Andrew Show",
  "Hamilton",
  "Kylo Ren",
  "PKMN",
  "Spongebob",
  "Trump",
  "WWE",
];

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

    const idToDataTableActions: Record<string, _DataTableAction> = {};
    actions.forEach((action) => {
      idToDataTableActions[action.id] = {
        ...action,
        currentMana: 100,
        manaState: "idle",
      };
    });

    return { actionsRaw: actions, actionsTableData: idToDataTableActions };
  };

  const { data, isFetching } = useQuery({
    queryKey: ["actions"],
    queryFn: fetchActions,
  });

  const replayAction = data?.actionsRaw.find(
    (action) => action.group === "Replay"
  );

  const instantReplay = async () => {
    if (replayAction) {
      await client.doAction(replayAction?.id);
    }
  };

  return isFetching ? (
    <Loading />
  ) : (
    <ActionBrowser
      footerContent={
        replayAction ? (
          <Button onClick={instantReplay} className="self-start ">
            <TimerReset className="mr-2 h-4 w-4 " />
            Instant Replay
          </Button>
        ) : null
      }
    >
      <div className="flex flex-col gap-y-6">
        <TickerForm />
        <GiphySearch />
        {data?.actionsTableData && (
          <ScrollArea className="rounded-md border container py-10 ">
            <DataTable
              columns={columns}
              data={
                data.actionsTableData &&
                Object.values(data.actionsTableData).filter((action) =>
                  dataTableActionCategories.includes(action.group)
                )
              }
            />
          </ScrollArea>
        )}
      </div>
    </ActionBrowser>
  );
};

export default ObsContainer;

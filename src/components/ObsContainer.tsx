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
  tableInfo: {
    name: string;
    tags: string[];
  };
};

const dataTableActionCategories = [
  "Ace Ventura",
  "Cartoons",
  "Community",
  "Eric Andre Show",
  "Hamilton",
  "Kylo Ren",
  "Memes",
  "PKMN",
  "Spiderman",
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

    const actionGroupsSet = new Set<string>();
    const idToDataTableActions: Record<string, _DataTableAction> = {};
    actions.forEach((action) => {
      const [name, tagsInText] = action.name.split("-");
      const tags = tagsInText ? tagsInText.slice(1, -1).split(",") : [];
      if (dataTableActionCategories.includes(action.group)) {
        actionGroupsSet.add(action.group);
      }

      idToDataTableActions[action.id] = {
        ...action,
        tableInfo: {
          name,
          tags,
        },
      };
    });

    return {
      actionsRaw: actions,
      actionTableData: idToDataTableActions,
      actionTableGroups: Array.from(actionGroupsSet),
    };
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
    <div className="flex flex-col gap-y-6">
      {replayAction ? (
        <Button onClick={instantReplay} className="self-start ">
          <TimerReset className="mr-2 h-4 w-4 " />
          Instant Replay
        </Button>
      ) : null}
      <TickerForm />
      <GiphySearch />
      {data?.actionTableData && (
        <DataTable
          groups={data.actionTableGroups}
          columns={columns}
          data={
            data.actionTableData &&
            Object.values(data.actionTableData).filter((action) =>
              dataTableActionCategories.includes(action.group)
            )
          }
        />
      )}
    </div>
  );
};

export default ObsContainer;

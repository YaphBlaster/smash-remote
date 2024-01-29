"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { _DataTableAction, _FetchActionsType } from "@/components/ObsContainer";
import CooldownBarProvider from "@/components/cooldownbar-context";
import ActionButtonGroup from "@/components/ActionButtonGroup";
import { useQuery } from "@tanstack/react-query";
import { useStreamerBotContext } from "@/components/streamerbot-context";
import { useEffect, useRef, useState } from "react";

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

export const useColumns = () => {
  const columns: ColumnDef<_DataTableAction>[] = [
    {
      accessorKey: "name",
      header: "Clip",
      cell: ({ row }) => {
        const action = row.original;

        return (
          <div className="md:text-left text-center">
            {action.tableInfo.name}
          </div>
        );
      },
    },
    {
      accessorKey: "group",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Group
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      cell: ({ row }) => {
        const action = row.original;

        return <div className="md:text-left text-center">{action.group}</div>;
      },
    },
    {
      id: "tags",
      header: ({ column }) => {
        return <div className="text-left ml-3">Tags</div>;
      },

      cell: ({ row }) => {
        const action = row.original;

        return (
          <div className="md:text-left text-center">
            {action.tableInfo.tags.map((tag) => (
              <div className="md:text-left text-center" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      id: "actions",
      header: ({ column }) => {
        return <div className="text-left ml-3">Action</div>;
      },
      cell: ({ row }) => {
        const action = row.original;

        return (
          <CooldownBarProvider cooldownSeconds={1}>
            <ActionButtonGroup actionId={action.id} />
          </CooldownBarProvider>
        );
      },
    },
  ];

  return columns;
};

export const useFetchActions = () => {
  const { streamerbotClient: client } = useStreamerBotContext();

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

  return useQuery({
    queryKey: ["actions"],
    queryFn: fetchActions,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};

export const useThrottleCustom = (value: any, limit: number) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(function () {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};

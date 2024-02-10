"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import CooldownBarProvider from "@/components/cooldownbar-context";
import ActionButtonGroup from "@/components/ActionButtonGroup";
import { useQuery } from "@tanstack/react-query";
import { useStreamerBotContext } from "@/components/streamerbot-context";
import { useEffect, useRef, useState } from "react";
import { StreamerbotAction } from "@streamerbot/client";

const blackList = ["Utils", "Replay"];

export const useColumns = () => {
  const columns: ColumnDef<StreamerbotAction>[] = [
    {
      accessorKey: "name",
      header: "Clip",
      cell: ({ row }) => {
        const action = row.original;

        return <div className="md:text-left text-center">{action.name}</div>;
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

    const groupingCallback = ({ group }: StreamerbotAction) => {
      return blackList.includes(group) ? "utilities" : group;
    };

    const result = Object.groupBy(actions, groupingCallback);

    return {
      actionsRaw: actions,
      groupedActions: result,
      actionTableGroups: Object.values(result),
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

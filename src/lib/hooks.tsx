"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { StreamerbotAction } from "@streamerbot/client";
import { useStreamerBotContext } from "../components/streamerbot-context";
import FormSheet, { actionIdToSchema } from "@/components/FormSheet";
import { useEffect, useReducer, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { _DataTableAction, _FetchActionsType } from "@/components/ObsContainer";
import { useQueryClient } from "@tanstack/react-query";
import useInterval from "use-interval";
import CooldownBarProvider from "@/components/cooldownbar-context";
import ActionButtonGroup from "@/components/ActionButtonGroup";

const initialState: InitialState = {
  bonesaw: "",
  humanSpider: "",
};

type setupActionTableData = {
  type: "setupActionTableData";
  payload: {
    actionTableData: Record<string, _DataTableAction>;
  };
};

type updateManaState = {
  type: "updateManaState";
  payload: {
    actionId: string;
    newManaState: "charging" | "idle";
  };
};

type updateManaCharge = {
  type: "updateManaCharge";
  payload: {
    actionId: string;
    currentMana: number;
  };
};

const actionDataTableReducer = (
  state: Record<string, _DataTableAction>,
  action: updateManaState | setupActionTableData | updateManaCharge
): Record<string, _DataTableAction> => {
  switch (action.type) {
    case "updateManaState":
      return {
        ...state,
        [action.payload.actionId]: {
          ...state[action.payload.actionId],
          currentMana:
            action.payload.newManaState === "charging"
              ? 0
              : state[action.payload.actionId].currentMana,
          manaState: action.payload.newManaState,
        },
      };
    case "setupActionTableData":
      return {
        ...action.payload.actionTableData,
      };
    case "updateManaCharge":
      return {
        ...state,
        [action.payload.actionId]: {
          ...state[action.payload.actionId],
          currentMana: action.payload.currentMana,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export const useCooldownTimer = () => {
  const [cooldown, setCooldown] = useState(0);
  const [status, setStatus] = useState<"idle" | "charging">("idle");
  const cooldownMaxSeconds = 120; //1m 40s
  const interval = cooldownMaxSeconds * 10; //1000ms

  useEffect(() => {
    let tempInterval: NodeJS.Timeout;
    if (status === "charging") {
      tempInterval = setInterval(() => {
        setCooldown(cooldown + 1);
      }, interval);

      if (!cooldown) {
        clearInterval(tempInterval);
      }
    }

    return () => {
      if (tempInterval) {
        clearInterval(tempInterval);
      }
    };
  }, [cooldown, interval, status]);

  const useMove = () => {
    setCooldown(0);
    setStatus("charging");
  };

  const stopRecharging = () => {
    setStatus("idle");
  };

  return { useMove, stopRecharging };
};

export const useColumns = () => {
  const { streamerbotClient } = useStreamerBotContext();
  const queryClient = useQueryClient();

  const actions = queryClient.getQueryData(["actions"]) as _FetchActionsType;

  const [state, dispatch] = useReducer(
    actionDataTableReducer,
    actions?.actionsTableData
  );

  useEffect(() => {
    if (actions?.actionsTableData) {
      dispatch({
        type: "setupActionTableData",
        payload: {
          actionTableData: actions?.actionsTableData,
        },
      });
    }
  }, [actions?.actionsTableData]);

  const columns: ColumnDef<_DataTableAction>[] = [
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && "indeterminate")
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
    {
      accessorKey: "name",
      header: "Name",
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
          <CooldownBarProvider cooldownSeconds={120}>
            <ActionButtonGroup actionId={action.id} />
          </CooldownBarProvider>
        );
      },
    },
  ];

  return columns;
};

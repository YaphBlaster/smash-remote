"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import CooldownBarProvider from "@/components/cooldownbar-context";
import ActionButtonGroup from "@/components/ActionButtonGroup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useStreamerBotContext } from "@/components/streamerbot-context";
import { useEffect, useRef, useState } from "react";
import { StreamerbotAction } from "@streamerbot/client";
import { cookies } from "next/headers";
import { getCookie, getCookies } from "cookies-next";
import { Profile } from "@prisma/client";

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
    const groupedActionsById = Object.groupBy(actions, ({ id }) => id);

    return {
      actionsRaw: actions,
      groupedActions: result,
      groupedActionsById: groupedActionsById,
      actionTableGroups: Object.values(result),
    };
  };

  return useQuery({
    queryKey: ["actions"],
    queryFn: fetchActions,
  });
};

export const useFetchProfile = () => {
  const userId = getCookie("userId");

  const fetchProfile = async (): Promise<Profile> => {
    const response = await fetch(`/api/profile/${userId}`);
    const json = await response.json();

    return json.profile;
  };

  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });
};

export const useAddFavourite = ({ actionId }: { actionId: string }) => {
  const userId = getCookie("userId");
  const query = useQueryClient();

  const addFavourite = async (): Promise<Profile> => {
    const response = await fetch(`/api/profile/favourites`, {
      method: "PATCH",
      body: JSON.stringify({ actionId, profileId: userId }),
    });
    const json = await response.json();

    return json.updatedProfile;
  };

  return useMutation({
    mutationFn: addFavourite,
    onSuccess: (data) => {
      query.setQueryData(["profile"], data);
    },
  });
};

export const useDeleteFavourite = ({ actionId }: { actionId: string }) => {
  const userId = getCookie("userId");
  const query = useQueryClient();

  const deleteFavourite = async (): Promise<Profile> => {
    const response = await fetch(`/api/profile/favourites`, {
      method: "DELETE",
      body: JSON.stringify({ actionId, profileId: userId }),
    });
    const json = await response.json();

    return json.updatedProfile;
  };

  return useMutation({
    mutationFn: deleteFavourite,
    onSuccess: (data) => {
      query.setQueryData(["profile"], data);
    },
  });
};

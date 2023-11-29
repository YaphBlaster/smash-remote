"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Dna,
  Edit,
  MoreHorizontal,
  PlayCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { StreamerbotAction } from "@streamerbot/client";
import { useStreamerBotContext } from "./streamerbot-context";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const initialState: InitialState = {
  bonesaw: "",
  humanSpider: "",
};

export const useColumns = () => {
  const { streamerbotClient } = useStreamerBotContext();
  const columns: ColumnDef<StreamerbotAction>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
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
            Group Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const action = row.original;

        const doAction = async () => {
          await streamerbotClient.doAction(action.id, {
            ...initialState,
          });
        };

        return (
          <>
            <Button variant="ghost" onClick={doAction} size="icon">
              <PlayCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" onClick={doAction} size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </>
        );
      },
    },
  ];

  return columns;
};

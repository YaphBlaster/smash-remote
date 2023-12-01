"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { StreamerbotAction } from "@streamerbot/client";
import { useStreamerBotContext } from "../components/streamerbot-context";
import FormSheet, { actionIdToSchema } from "@/components/FormSheet";

const initialState: InitialState = {
  bonesaw: "",
  humanSpider: "",
};

export const useColumns = () => {
  const { streamerbotClient } = useStreamerBotContext();
  const columns: ColumnDef<StreamerbotAction>[] = [
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
        return <div className="text-center">Action</div>;
      },
      cell: ({ row }) => {
        const action = row.original;

        const doAction = async () => {
          await streamerbotClient.doAction(action.id, {
            ...initialState,
          });
        };

        const hasEditableFields = actionIdToSchema[action.id];

        return (
          <div className="flex flex-wrap justify-center">
            <Button variant="ghost" onClick={doAction} size="icon">
              <Play className=" h-4 w-4" />
            </Button>
            <Button variant="ghost" disabled={!hasEditableFields} size="icon">
              <FormSheet actionId={action.id}>
                <Edit className=" h-4 w-4" />
              </FormSheet>
            </Button>
          </div>
        );
      },
    },
  ];

  return columns;
};

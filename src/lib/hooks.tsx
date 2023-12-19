"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { _DataTableAction, _FetchActionsType } from "@/components/ObsContainer";
import CooldownBarProvider from "@/components/cooldownbar-context";
import ActionButtonGroup from "@/components/ActionButtonGroup";

export const useColumns = () => {
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

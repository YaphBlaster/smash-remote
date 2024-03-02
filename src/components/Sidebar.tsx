import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { ROUTE_PATHS } from "@/enums";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <ScrollArea className="relative overflow-hidden h-full py-6 pr-6 lg:py-8 ">
      <div className="min-w-full table">
        <div className="grid grid-flow-row auto-rows-max text-sm text-left">
          <Link href={ROUTE_PATHS.ARCADIA}>Home</Link>
          <Link href={ROUTE_PATHS.REMOTE}>Remote</Link>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Sidebar;

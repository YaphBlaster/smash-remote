import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside>
      <ScrollArea className="-left-80">
        <div className="flex flex-col fixed">
          <Link href="/arcadia/data-table">Data Table</Link>
          <Link href="arcadia/price-is-right">Price is Right</Link>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;

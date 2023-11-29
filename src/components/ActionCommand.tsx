"use client";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { StreamerbotAction } from "@streamerbot/client";
import { Button } from "./ui/button";

type Props = {
  actions: Record<string, StreamerbotAction[]> | undefined;
};

const ActionCommand = ({ actions = {} }: Props) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Toggle</Button>
      <Command value={value} onValueChange={setValue}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(actions).map(([groupKey, actionData]) => (
            <span key={groupKey}>
              <CommandGroup heading={groupKey}>
                {actionData.map((action) => (
                  <CommandItem className="cursor-pointer" key={action.id}>
                    {action.name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </span>
          ))}

          <CommandSeparator />
        </CommandList>
      </Command>
    </>
  );
};

export default ActionCommand;

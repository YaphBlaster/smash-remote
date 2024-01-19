"use client";
import { Joystick, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useMedia } from "react-use";
type Props = {};

const HeaderLogo = (props: Props) => {
  const isDesktop = useMedia("(min-width: 768px)");

  if (isDesktop) {
    return (
      <span className=" flex items-center">
        <Joystick className="h-4 w-4 mr-1 fill-primary" />
        <span className="text-secondary-foreground">SMASH</span>
        <span className="text-primary">MOUTH</span>
      </span>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <span className="flex-1 flex items-center">
              <Joystick className="h-5 w-5 mr-1 fill-primary" />
              <span className="text-secondary-foreground">SMASH</span>
              <span className="text-primary">MOUTH</span>
            </span>
          </SheetTitle>
          <Sidebar />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderLogo;

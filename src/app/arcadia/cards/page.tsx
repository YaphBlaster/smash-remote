"use client";
import ActionCard from "@/components/ActionCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFetchActions } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { HoverVideoPlayerProps } from "@/types";
import React from "react";

type Props = {};

const Cards = (props: Props) => {
  const { data, isFetching } = useFetchActions();

  const action1 = data?.actionTableData["0014b8b3-5a8e-45c3-9f38-b346cc4618ac"];
  const action2 = data?.actionTableData["e07f1f50-9f31-42ff-bd25-f5ef3a7605b6"];

  return (
    <div className="grid grid-cols-2 sm md:grid-cols-3 lg:grid-cols-4 gap-8 ">
      {data &&
        Object.values(data?.actionTableData).map((action) => (
          <ActionCard key={action.id} action={action} />
        ))}
    </div>
  );
};

export default Cards;

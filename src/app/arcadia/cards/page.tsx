"use client";
import ActionCard from "@/components/ActionCard";
import { useFetchActions } from "@/lib/hooks";
import React from "react";

type Props = {};

const Cards = (props: Props) => {
  const { data } = useFetchActions();

  return (
    <div className="grid grid-cols-2 sm md:grid-cols-3 lg:grid-cols-4 gap-8 ">
      {data &&
        Object.values(data?.groupedActions).map((groupedAction) => {
          if (groupedAction) {
            return groupedAction.map((action) => (
              <ActionCard action={action} key={action.id} />
            ));
          }
        })}
    </div>
  );
};

export default Cards;

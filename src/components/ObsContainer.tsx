"use client";
import React, { useEffect, useState } from "react";
import { useStreamerBotContext } from "./streamerbot-context";
import { useFetchActions, useFetchProfile } from "../lib/hooks";
import GiphySearch from "./GiphySearch";

import TickerForm from "./TickerForm";
import Loading from "./Loading";
import { Button } from "./ui/button";
import { TimerReset } from "lucide-react";
import ActionCard from "./ActionCard";
import { MultiSelect, OptionType } from "./MultiSelect";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import ActionCardsProvider from "./actioncards-context";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import { StreamerbotAction } from "@streamerbot/client";
import { ScrollArea } from "./ui/scroll-area";
import { getCookie } from "cookies-next";

const formSchema = z.object({
  groups: z.array(z.string()),
});

type Props = {};

const ObsContainer = (props: Props) => {
  const userId = getCookie("userId");

  const profileData = useFetchProfile({ id: userId! });

  const [selectedActionGroups, setSelectedActionGroups] = useState<
    Partial<Record<string, StreamerbotAction[]>>
  >({});
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      groups: ["All"],
    },
  });

  const { watch } = form;
  const groupsFromForm = watch("groups");

  const { streamerbotClient: client } = useStreamerBotContext();

  const { data, isFetching } = useFetchActions();

  const groups: OptionType[] | undefined = data && [
    { label: "All", value: "All" },
    ...Object.keys(data.groupedActions).map((groupName) => {
      return { label: groupName, value: groupName };
    }),
  ];

  const replayAction = data?.actionsRaw.find(
    (action) => action.group === "Replay"
  );

  const instantReplay = async () => {
    if (replayAction) {
      await client.doAction(replayAction?.id);
    }
  };

  useEffect(() => {
    let temp: Partial<Record<string, StreamerbotAction[]>> = {};
    if (groupsFromForm.includes("All")) {
      temp = { ...data?.groupedActions };
    } else {
      groupsFromForm.forEach((groupName) => {
        temp[groupName] = data?.groupedActions[groupName];
      });
    }
    setSelectedActionGroups(temp);

    return () => {};
  }, [data?.groupedActions, groupsFromForm]);

  return isFetching && data ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-y-6">
      {replayAction ? (
        <Button onClick={instantReplay} className="self-start ">
          <TimerReset className="mr-2 h-4 w-4 " />
          Instant Replay
        </Button>
      ) : null}
      <TickerForm />
      <GiphySearch />
      {data && groups && (
        <Form {...form}>
          <FormField
            control={form.control}
            name="groups"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Groups</FormLabel>
                <MultiSelect
                  {...field}
                  selected={field.value}
                  options={groups}
                  onChange={field.onChange}
                  className="sm:w-[510px]"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <DevTool control={form.control} /> {/* set up the dev tool */}
        </Form>
      )}

      <ActionCardsProvider>
        <ScrollArea className="h-[500px] md:h-[600px] lg:h-[800px] w-full rounded-md border p-4">
          <div className="grid grid-cols-2 sm md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {data &&
              Object.values(selectedActionGroups).map((actions) => {
                return actions?.map((action) => (
                  <ActionCard action={action} key={action.id} />
                ));
              })}
          </div>
        </ScrollArea>
      </ActionCardsProvider>
    </div>
  );
};

export default ObsContainer;

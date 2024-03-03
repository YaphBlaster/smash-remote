"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useStreamerBotContext } from "./streamerbot-context";
import { useFetchActions, useFetchProfile } from "../lib/hooks";
import GiphySearch from "./GiphySearch";

import TickerForm from "./TickerForm";
import Loading from "./Loading";
import { Button } from "./ui/button";
import { PowerOffIcon, TimerReset } from "lucide-react";
import ActionCard from "./ActionCard";
import { MultiSelect, OptionType } from "./MultiSelect";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import ActionCardsProvider from "./actioncards-context";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import { StreamerbotAction } from "@streamerbot/client";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ActionCarousel from "./ActionCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const formSchema = z.object({
  groups: z.array(z.string()),
});

type Props = {
  userId: string;
};

const ObsContainer = ({ userId }: Props) => {
  const { data: profileData } = useFetchProfile({ id: userId });

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

  const { data: fetchActionData, isFetching } = useFetchActions();

  const groups: OptionType[] | undefined = fetchActionData && [
    { label: "All", value: "All" },
    {
      label: `Favourites [${profileData?.favourites.length}]`,
      value: "Favourites",
    },
    ...Object.entries(fetchActionData.groupedActions)
      .filter(([groupName, actions]) => !!groupName)
      .map(([groupName, actions]) => {
        return { label: `${groupName} [${actions?.length}]`, value: groupName };
      }),
  ];

  const replayAction = fetchActionData?.actionsRaw.find(
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
      temp = { ...fetchActionData?.groupedActions };
    } else {
      groupsFromForm.forEach((groupName) => {
        temp[groupName] = fetchActionData?.groupedActions[groupName];
      });
    }

    if (
      groupsFromForm.includes("Favourites") &&
      profileData &&
      fetchActionData
    ) {
      temp["Favourites"] = profileData.favourites.map(
        (actionId) => fetchActionData.groupedActionsById[actionId]![0]
      );
    }

    setSelectedActionGroups(temp);

    return () => {};
  }, [fetchActionData, groupsFromForm, profileData]);

  const filteredActions = useMemo(
    () =>
      Object.entries(selectedActionGroups).map(([groupName, actions]) => {
        return actions?.filter((action) => {
          return action?.group;
        });
      }),
    [selectedActionGroups]
  );

  return isFetching && fetchActionData ? (
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
      {fetchActionData && groups && (
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
        <Tabs defaultValue="carousel">
          <TabsList>
            <TabsTrigger value="tiles">Tiles</TabsTrigger>
            <TabsTrigger value="carousel">Carousel</TabsTrigger>
            <TabsTrigger value="remote">Remote</TabsTrigger>
          </TabsList>
          <TabsContent value="tiles">
            <ScrollArea className="h-[500px] md:h-[600px] lg:h-[800px] w-full rounded-md border p-4">
              <div className="grid grid-cols-2 sm md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {fetchActionData &&
                  filteredActions.map((actions) => {
                    return actions?.map((action) => (
                      <ActionCard
                        isFavourited={profileData?.favourites.includes(
                          action.id
                        )}
                        action={action}
                        key={action.id}
                      />
                    ));
                  })}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="carousel">
            <Carousel
              className="w-full"
              plugins={[WheelGesturesPlugin()]}
              opts={{ loop: true }}
            >
              <CarouselContent>
                {fetchActionData &&
                  filteredActions.map((actions) => {
                    return actions?.map((action) => (
                      <CarouselItem
                        key={action.id}
                        className="basis-1/1 md:basis-1/2 lg:basis-1/3"
                      >
                        <ActionCard
                          isFavourited={profileData?.favourites.includes(
                            action.id
                          )}
                          action={action}
                          key={action.id}
                        />
                      </CarouselItem>
                    ));
                  })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>

          <TabsContent value="remote">
            <ResizablePanelGroup direction="horizontal" className="flex-wrap">
              {profileData?.favourites.map((actionId) => {
                const name =
                  fetchActionData?.groupedActionsById[actionId]![0].name;
                return (
                  <div key={actionId}>
                    <ResizablePanel>{name}</ResizablePanel>
                    <ResizableHandle withHandle />
                  </div>
                );
              })}
            </ResizablePanelGroup>
          </TabsContent>
        </Tabs>
      </ActionCardsProvider>
    </div>
  );
};

export default ObsContainer;

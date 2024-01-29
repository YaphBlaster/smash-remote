"use client";
import { useStreamerBotContext } from "@/components/streamerbot-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useFetchActions, useThrottleCustom } from "@/lib/hooks";
import { ChevronLeft } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

type Props = {};

const PriceIsRight = (props: Props) => {
  const { streamerbotClient } = useStreamerBotContext();
  const [api, setApi] = React.useState<CarouselApi>();
  const { data, isFetching } = useFetchActions();

  const playAction = useCallback(
    async (id: string) => {
      await streamerbotClient.doAction(id);
    },
    [streamerbotClient]
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      if (data) {
        navigator.vibrate(200);
      }
    });

    api.on("settle", () => {
      if (data) {
        navigator.vibrate(200);
        playAction(data.actionsRaw[api.selectedScrollSnap()].id);
      }
    });

    api.on("slidesInView", () => {
      navigator.vibrate(30);
    });
  }, [api, data, playAction]);

  if (isFetching) {
    return <div>Loading</div>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Button
            onClick={() => {
              data &&
                api?.scrollTo(
                  Math.floor(Math.random() * data.actionsRaw.length)
                );
            }}
          >
            Spin
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className=" overflow-hidden ">
          <Carousel
            setApi={setApi}
            opts={{
              containScroll: "trimSnaps",
              skipSnaps: true,
              // dragFree: true,
              // dragThreshold: 1,

              loop: true,
              align: "center",
            }}
            className="w-full"
            orientation="vertical"
          >
            <CarouselContent className="items-center h-full max-h-[800px]">
              {data &&
                Object.values(data.actionTableData).map((item) => (
                  <CarouselItem key={item.id} className="basis-1/5">
                    <Card className="w-[200px]">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {item.name}
                        </span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceIsRight;

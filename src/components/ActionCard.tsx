"use client";
import React, { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import HoverVideoPlayer from "react-hover-video-player";
import VideoThumbnail from "react-video-thumbnail";
import { AspectRatio } from "./ui/aspect-ratio";
import { StreamerbotAction } from "@streamerbot/client";
import { Button } from "./ui/button";
import { Heart, Loader2, Play, Volume2, VolumeX } from "lucide-react";
import { useStreamerBotContext } from "./streamerbot-context";
import { useActionCardsContext } from "./actioncards-context";
import Image from "next/image";
import { useAddFavourite, useDeleteFavourite, useGetVideo } from "@/lib/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { Profile } from "@prisma/client";

const HoverPlayerWithProps = (hoverPlayerProps: HoverVideoPlayerProps) => {
  return <HoverVideoPlayer {...hoverPlayerProps} />;
};

type Props = {
  isFavourited?: boolean;
  action: StreamerbotAction;
};

const ActionCard = ({ action, isFavourited }: Props) => {
  const queryClient = useQueryClient();
  const profile = queryClient.getQueryData<Profile>(["profile"]);
  const { streamerbotClient: client } = useStreamerBotContext();
  const { isMuted, setIsMuted } = useActionCardsContext();
  const [thumbnailData, setThumbnailData] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const { data: url } = useGetVideo({ actionId: action.id });

  const { mutate: addFav, isPending: addFavPending } = useAddFavourite({
    actionId: action.id,
  });
  const { mutate: deleteFav, isPending: deleteFavPending } = useDeleteFavourite(
    { actionId: action.id }
  );
  const doAction = async () => {
    await client.doAction(action.id, {
      author: profile?.display_name,
      delay: secondsToMillis(videoRef.current?.duration) || 5000,
    });
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFavourite = () => {
    isFavourited ? deleteFav() : addFav();
  };

  const secondsToMillis = (minute?: number) => (minute ? minute * 1000 : 0);

  const isPending = addFavPending || deleteFavPending;

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-ellipsis overflow-hidden whitespace-nowrap leading-5">
            {action.name}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFavourite}
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Heart
                className={`h-4 w-4  ${
                  isFavourited && "fill-pink-600 stroke-pink-400"
                }}`}
              />
            )}
          </Button>
        </div>
        <CardDescription>{action.group}</CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded ">
          <div className="w-full h-full">
            {isPlaying ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="absolute z-10 right-1 top-1 opacity-75 rounded-full "
                onMouseEnter={() => {
                  setIsPlaying(true);
                }}
                onMouseLeave={() => {
                  setIsPlaying(false);
                }}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
            ) : null}

            <HoverPlayerWithProps
              videoSrc={url}
              focused={isPlaying}
              className="rounded w-full"
              videoRef={videoRef}
              muted={isMuted}
              onMouseEnter={() => {
                setIsPlaying(true);
              }}
              onMouseLeave={() => {
                setIsPlaying(false);
              }}
              disableDefaultEventHandling
              preload="metadata"
              restartOnPaused
              pausedOverlay={
                <div>
                  <VideoThumbnail
                    videoUrl={url}
                    alt={action.name}
                    thumbnailHandler={(thumbnail: string) =>
                      setThumbnailData(thumbnail)
                    }
                    renderThumbnail={false}
                  />
                  {thumbnailData ? (
                    <Image
                      alt={action.name}
                      src={thumbnailData}
                      fill
                      className="rounded w-full h-full"
                      quality={50}
                    />
                  ) : null}
                </div>
              }
            />
          </div>
        </AspectRatio>
      </CardContent>
      <CardFooter className="flex justify-around">
        <Button size="icon" variant="ghost" onClick={doAction}>
          <Play className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActionCard;

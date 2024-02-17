"use client";
import React, { useState } from "react";
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
import { Heart, Play, Volume2, VolumeX } from "lucide-react";
import { useStreamerBotContext } from "./streamerbot-context";
import { useActionCardsContext } from "./actioncards-context";
import Image from "next/image";

const HoverPlayerWithProps = (hoverPlayerProps: HoverVideoPlayerProps) => {
  return <HoverVideoPlayer {...hoverPlayerProps} />;
};

type Props = {
  action: StreamerbotAction;
};

const ActionCard = ({ action }: Props) => {
  const { streamerbotClient: client } = useStreamerBotContext();
  const { isMuted, setIsMuted } = useActionCardsContext();
  const [thumbnailData, setThumbnailData] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoURL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/videos/${action.id}.webm`;

  const doAction = async () => {
    await client.doAction(action.id);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-ellipsis overflow-hidden whitespace-nowrap leading-5">
            {action.name}
          </CardTitle>
          <Button variant="ghost" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription>{action.group}</CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded">
          {isPlaying ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              className="absolute z-10 right-1 top-1 opacity-75 rounded-full"
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
            videoSrc={videoURL}
            focused={isPlaying}
            className="rounded"
            muted={isMuted}
            onMouseEnter={() => {
              setIsPlaying(true);
            }}
            onMouseLeave={() => {
              setIsPlaying(false);
            }}
            disableDefaultEventHandling
            unloadVideoOnPaused
            restartOnPaused
            pausedOverlay={
              <div>
                <VideoThumbnail
                  videoUrl={videoURL}
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
                    width={10}
                    height={10}
                    className="rounded w-full h-full"
                    quality={50}
                  />
                ) : null}
              </div>
            }
          />
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

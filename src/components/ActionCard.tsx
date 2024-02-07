import React from "react";
import { _DataTableAction } from "./ObsContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import HoverVideoPlayer from "react-hover-video-player";
import { HoverVideoPlayerProps } from "@/types";
import VideoThumbnail from "react-video-thumbnail"; // use npm published version
import { AspectRatio } from "./ui/aspect-ratio";

const HoverPlayerWithProps = (hoverPlayerProps: HoverVideoPlayerProps) => {
  return <HoverVideoPlayer {...hoverPlayerProps} />;
};

type Props = {
  action: _DataTableAction;
};

const ActionCard = ({ action }: Props) => {
  const videoURL = `https://jckbhcjugnyjzhsdvbhk.supabase.co/storage/v1/object/public/media/videos/${action.id}.webm`;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{action.name}</CardTitle>
        <CardDescription>{action.group}</CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <HoverPlayerWithProps
            videoSrc={videoURL}
            unloadVideoOnPaused
            pausedOverlay={
              <VideoThumbnail videoUrl={videoURL} alt={action.name} />
            }
          />
        </AspectRatio>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default ActionCard;

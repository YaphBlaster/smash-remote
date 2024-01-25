"use client";
import { MouseEvent, useEffect, useReducer, useRef, useState } from "react";
import jukebox, { pocketMonstersAnimeOST } from "@/jukeboxAlbums";
import { useAudio, useMount } from "react-use";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  ChevronDown,
  Contact,
  Disc3,
  KeySquare,
  ListMusic,
  Music4,
  Pause,
  Play,
  PlaySquare,
  SkipBack,
  SkipForward,
  Sparkles,
  Theater,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import AudioMotionAnalyzer from "audiomotion-analyzer";
import { Progress } from "./ui/progress";
import { Slider } from "@/components/ui/slider";
import { secondsToMinutes } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import Marquee from "react-fast-marquee";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { VISUALIZER_MODES } from "@/enums";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type Props = {};

type MusicPlayerState = {
  visualizers: Record<string, AudioMotionAnalyzer>;
  lastMode: number;
  loading: boolean;
  current: {
    track: Track;
    album: Album;
  };
};

type SetIsLoading = {
  type: "SetIsLoading";
  payload: {
    isLoading: boolean;
  };
};

type SetCurrentTrack = {
  type: "SetCurrentTrack";
  payload: {
    newTrackNumber: number;
  };
};

type SetCurrentAlbum = {
  type: "SetCurrentAlbum";
  payload: {
    newAlbum: Album;
  };
};

type SetLastVisualizerMode = {
  type: "SetLastVisualizerMode";
  payload: {
    newMode: number;
  };
};

type SetupVisualizer = {
  type: "SetupVisualizer";
  payload: {
    visualizerId: string;
    audioMotionAnalyzer: AudioMotionAnalyzer;
  };
};

type Actions =
  | SetCurrentTrack
  | SetIsLoading
  | SetCurrentAlbum
  | SetLastVisualizerMode
  | SetupVisualizer;

const reducer = (
  state: MusicPlayerState,
  action: Actions
): MusicPlayerState => {
  switch (action.type) {
    case "SetIsLoading":
      return {
        ...state,
        loading: action.payload.isLoading,
      };
    case "SetCurrentTrack":
      return {
        ...state,
        current: {
          ...state.current,
          track: state.current.album.tracks[action.payload.newTrackNumber - 1],
        },
      };
    case "SetCurrentAlbum":
      return {
        ...state,
        current: {
          ...state.current,
          album: action.payload.newAlbum,
        },
      };
    case "SetLastVisualizerMode":
      return {
        ...state,
        lastMode: action.payload.newMode,
      };
    case "SetupVisualizer":
      return {
        ...state,
        visualizers: {
          ...state.visualizers,
          [action.payload.visualizerId]: action.payload.audioMotionAnalyzer,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

const musicPlayerInitialState: MusicPlayerState = {
  visualizers: {},
  lastMode: 0,
  loading: true,
  current: {
    album: pocketMonstersAnimeOST,
    track: pocketMonstersAnimeOST.tracks[0],
  },
};

const MusicPlayer = (props: Props) => {
  const [musicPlayerState, dispatch] = useReducer(
    reducer,
    musicPlayerInitialState
  );
  const {
    loading,
    lastMode,
    visualizers,
    current: { album, track },
  } = musicPlayerState;
  const audioSource = document.getElementById("audio") as HTMLAudioElement;
  const albumByArtist = useRef({
    ...Object.groupBy(jukebox.albums, ({ artist }) => artist),
    ...Object.groupBy(jukebox.audioBooks, ({ artist }) => artist),
  });

  const [api, setApi] = useState<CarouselApi>();
  const firstId = `container-${0}`;

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("settle", (emblaApi, event) => {
      const index = emblaApi.selectedScrollSnap();
      dispatch({
        type: "SetCurrentTrack",
        payload: { newTrackNumber: index + 1 },
      });
    });
  }, [api]);

  useEffect(() => {
    if (audioSource && !visualizers[firstId]) {
      dispatch({
        type: "SetupVisualizer",
        payload: {
          visualizerId: firstId,
          audioMotionAnalyzer: new AudioMotionAnalyzer(
            document.getElementById(firstId)!,
            {
              mode: 0,
              useCanvas: false,
              volume: 0.5,
              source: audioSource,
              connectSpeakers: true,
            }
          ),
        },
      });
    }
  }, [audioSource, firstId, lastMode, visualizers]);

  const nextSong = () => {
    api?.scrollTo(api.selectedScrollSnap() + 1);
  };

  const previousSong = () => {
    api?.scrollTo(api.selectedScrollSnap() - 1);
  };

  const [audio, state, controls] = useAudio(
    <audio
      id="audio"
      src={`${album.baseURI}${track.url}`}
      preload="true"
      crossOrigin="anonymous"
      onCanPlayThrough={() => {
        controls.play();
      }}
      onEnded={nextSong}
      onLoadStart={() =>
        dispatch({
          type: "SetIsLoading",
          payload: { isLoading: true },
        })
      }
      onLoadedData={() => {
        dispatch({
          type: "SetIsLoading",
          payload: { isLoading: false },
        });
      }}
    />
  );

  const seekAt = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const mouseClickXPosition = e.pageX - e.currentTarget.offsetLeft;
    const max = e.currentTarget.clientWidth;
    const seekPercent = mouseClickXPosition / max;
    const time = state.duration * seekPercent;
    controls.seek(time);
  };

  const playToggle = () => {
    state.paused ? controls.play() : controls.pause();
  };

  const getSpecificAlbum = ({
    artistName,
    baseURI,
  }: {
    artistName: string;
    baseURI: string;
  }) => {
    return albumByArtist.current[artistName]?.find(
      (album) => album.baseURI === baseURI
    );
  };

  const setNextVisualizer = () => {
    const currentModeString = VISUALIZER_MODES[visualizers["container-1"].mode];
    let nextMode =
      VISUALIZER_MODES[currentModeString as keyof typeof VISUALIZER_MODES] + 1;

    switch (visualizers["container-1"].mode) {
      case 10:
        nextMode = VISUALIZER_MODES["Discrete frequencies"];
        break;
      case 8:
        nextMode = VISUALIZER_MODES.Graph;
        break;
    }

    visualizers["container-1"].mode = nextMode;
    dispatch({ type: "SetLastVisualizerMode", payload: { newMode: nextMode } });
  };

  useMount(() => {
    controls.volume(0.7);
  });

  return (
    <div className="flex-1">
      <div className="containers hidden" id="container-0" />
      {audio}

      <Card className="w-full max-w-s overflow-hidden gap-2 flex items-center compact border-none">
        <CardHeader className="p-0">
          <CardDescription className="w-16 md:w-44">
            <Marquee>{track.title}/</Marquee>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex min-w-min flex-row p-0 gap-2 self-center ">
          <Button
            onClick={previousSong}
            variant="outline"
            size="icon"
            disabled={!track.number || loading}
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button
            onClick={playToggle}
            variant="outline"
            size="icon"
            disabled={musicPlayerState.loading}
          >
            {state.paused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </Button>

          <Button
            onClick={nextSong}
            variant="outline"
            size="icon"
            disabled={musicPlayerState.loading}
          >
            <SkipForward className="h-4 w-4" />
          </Button>
          <Drawer
            onOpenChange={(open) => {
              if (open) {
                setTimeout(() => {
                  if (visualizers[firstId]) {
                    const id = `container-${1}`;
                    dispatch({
                      type: "SetupVisualizer",
                      payload: {
                        visualizerId: id,
                        audioMotionAnalyzer: new AudioMotionAnalyzer(
                          document.getElementById(`container-${1}`)!,
                          {
                            mode: lastMode,
                            volume: 0,
                            source: visualizers[firstId].connectedSources[0],
                            connectSpeakers: false,
                            height: 160,
                          }
                        ),
                      },
                    });
                  }
                });
              }
            }}
          >
            <DrawerTrigger>
              <Button variant="ghost" asChild size="icon">
                <Disc3
                  className={`${
                    state.playing && "animate-spin"
                  } hover:stroke-primary hover:bg-transparent`}
                />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="flex items-center">
              <DrawerHeader className="gap-4">
                <DrawerTitle className="text-center">
                  {album.artist}
                </DrawerTitle>
                <DrawerDescription>
                  <Select
                    defaultValue={`${album.baseURI},${album.artist}`}
                    onValueChange={(value) => {
                      const [baseURI, ...artists] = value.split(",");

                      const album = getSpecificAlbum({
                        artistName: artists.join(),
                        baseURI,
                      });
                      if (album) {
                        dispatch({
                          type: "SetCurrentAlbum",
                          payload: { newAlbum: album },
                        });
                        dispatch({
                          type: "SetCurrentTrack",
                          payload: { newTrackNumber: 1 },
                        });
                      }
                    }}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Select an album" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(albumByArtist.current).map(
                        ([artist, albums], index) => (
                          <SelectGroup key={artist} className="flex flex-col ">
                            <SelectLabel>{artist}</SelectLabel>
                            <span>
                              {albums?.map((album) => (
                                <SelectItem
                                  key={album.baseURI}
                                  value={`${album.baseURI},${artist}`}
                                >
                                  {album.name}
                                </SelectItem>
                              ))}
                            </span>
                            {albums && index !== albums.length ? (
                              <Separator />
                            ) : null}
                          </SelectGroup>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </DrawerDescription>
              </DrawerHeader>

              <Card className="w-[400px] h-[540px] ">
                <Tabs defaultValue="now-playing">
                  <CardHeader>
                    <TabsList className="justify-around">
                      <TabsTrigger value="now-playing" className="w-full">
                        <PlaySquare />
                      </TabsTrigger>
                      <TabsTrigger value="tracks" className="w-full">
                        <ListMusic />
                      </TabsTrigger>
                    </TabsList>
                  </CardHeader>
                  <TabsContent value="now-playing">
                    <CardContent className="flex flex-col gap-5">
                      <Carousel setApi={setApi} opts={{ loop: true }}>
                        <CarouselContent>
                          {album.tracks.map((track) => (
                            <CarouselItem key={track.url}>
                              <Card className="h-full">
                                <CardHeader className="pb-0" />

                                <CardContent>
                                  <Image
                                    width={200}
                                    height={200}
                                    src={album.imageURI}
                                    alt="album-image"
                                    className="m-auto rounded-sm aspect-square"
                                    quality={50}
                                    priority
                                  />
                                </CardContent>
                                <CardFooter className="whitespace-nowrap">
                                  <CardTitle className="overflow-hidden text-ellipsis">
                                    {track.title}
                                  </CardTitle>
                                </CardFooter>
                              </Card>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>

                      <div className="flex gap-2 items-center">
                        <span>{secondsToMinutes(state.time)}</span>
                        <Progress
                          className="cursor-pointer"
                          onClick={(e) => seekAt(e)}
                          value={(state.time / state.duration) * 100}
                        />
                        <span>{secondsToMinutes(state.duration)}</span>
                      </div>
                      <div className="flex gap-2 w-full justify-center">
                        <Button
                          onClick={previousSong}
                          variant="outline"
                          size="icon"
                          disabled={!track.number || loading}
                        >
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={playToggle}
                          variant="outline"
                          size="icon"
                          disabled={musicPlayerState.loading}
                        >
                          {state.paused ? (
                            <Play className="h-4 w-4" />
                          ) : (
                            <Pause className="h-4 w-4" />
                          )}
                        </Button>

                        <Button
                          onClick={nextSong}
                          variant="outline"
                          size="icon"
                          disabled={musicPlayerState.loading}
                        >
                          <SkipForward className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex gap-2 w-full">
                        <Button
                          onClick={
                            state.muted ? controls.unmute : controls.mute
                          }
                          variant="outline"
                          size="icon"
                        >
                          {state.muted ? (
                            <VolumeX className="h-4 w-4" />
                          ) : !state.volume ? (
                            <VolumeX className="h-4 w-4" />
                          ) : state.volume < 0.6 ? (
                            <Volume1 className="h-4 w-4" />
                          ) : (
                            <Volume2 className="h-4 w-4" />
                          )}
                        </Button>

                        <Slider
                          defaultValue={[69 + 1]}
                          max={100}
                          step={1}
                          value={[state.volume * 100]}
                          className=" cursor-pointer"
                          onValueChange={([value]) => {
                            controls.volume(value / 100);
                          }}
                          disabled={state.muted}
                        />
                        <span>{Math.floor(state.volume * 100)}</span>
                      </div>
                    </CardContent>
                  </TabsContent>
                  <TabsContent value="tracks">
                    <CardContent className="h-full">
                      <h4 className="mb-4 text-sm font-medium leading-none">
                        Tracks
                      </h4>

                      <ScrollArea className="h-[400px] w-full  ">
                        {album.tracks.map((trackItem) => (
                          <>
                            <Button
                              defaultChecked={true}
                              variant={"ghost"}
                              onClick={() => {
                                console.log(api);
                                api?.scrollTo(trackItem.number - 1);
                              }}
                              key={trackItem.url}
                              className={`p-2 text-sm w-4/5 justify-start ${
                                trackItem.number === track.number &&
                                "bg-accent rounded-sm"
                              } `}
                            >
                              <div className="text-left  whitespace-nowrap w-full overflow-hidden text-ellipsis">
                                {trackItem.title}
                              </div>
                            </Button>
                            <Separator className="my-2" />
                          </>
                        ))}
                      </ScrollArea>
                    </CardContent>
                  </TabsContent>
                </Tabs>

                <CardFooter></CardFooter>
              </Card>
              <Button
                asChild
                variant="ghost"
                className="h-full cursor-pointer"
                onClick={setNextVisualizer}
              >
                <div className={`containers w-full`} id="container-1" />
              </Button>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </CardContent>
      </Card>
    </div>
  );
};

export default MusicPlayer;

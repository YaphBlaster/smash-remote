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
  Disc3,
  ListMusic,
  Pause,
  Play,
  PlaySquare,
  SkipBack,
  SkipForward,
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
} from "./ui/carousel";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { SliderThumb, Thumb } from "@radix-ui/react-slider";
import * as SliderPrimitive from "@radix-ui/react-slider";

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

const defaultAlbum = pocketMonstersAnimeOST;
const defaultTrack = pocketMonstersAnimeOST.tracks[0];

const musicPlayerInitialState: MusicPlayerState = {
  visualizers: {},
  lastMode: 0,
  loading: true,
  current: {
    album: pocketMonstersAnimeOST,
    track: defaultTrack,
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
    console.log("🚀 ~ seekAt ~ e:", e);
    console.log("🚀 ~ seekAt ~ e.currentTarget:", e.currentTarget);
    const mouseClickXPosition = e.pageX - e.currentTarget.offsetLeft;
    console.log("🚀 ~ seekAt ~ mouseClickXPosition:", mouseClickXPosition);
    console.log({ ...e.currentTarget });

    const max = e.currentTarget.clientWidth;
    console.log("🚀 ~ seekAt ~ max:", max);
    const seekPercent = mouseClickXPosition / max;
    const time = state.duration * seekPercent;

    // controls.seek(time);
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
            dismissible={false}
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
                            bgAlpha: 0,
                            volume: 0,
                            source: visualizers[firstId].connectedSources[0],
                            connectSpeakers: false,
                            mode: 0,
                            channelLayout: "single",
                            frequencyScale: "bark",
                            gradient: "rainbow",
                            linearAmplitude: true,
                            linearBoost: 1.8,
                            maxFreq: 20000,
                            minFreq: 20,
                            mirror: 0,
                            overlay: true,
                            radial: false,
                            reflexAlpha: 0.25,
                            reflexBright: 1,
                            reflexFit: true,
                            reflexRatio: 0.3,
                            showPeaks: true,
                            weightingFilter: "D",
                            showScaleX: false,
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

              <Card className="w-[400px] h-[500px] bg-card/[.2] backdrop-blur-sm ">
                <CardHeader className="flex-row gap-4">
                  <Select
                    value={(api && api.selectedScrollSnap() + 1)?.toString()}
                    defaultValue={defaultTrack.number.toString()}
                    onValueChange={(value) => {
                      api?.scrollTo(Number(value) - 1);
                    }}
                  >
                    <SelectTrigger className="overflow-hidden">
                      <SelectValue placeholder="Track List" />
                    </SelectTrigger>
                    <SelectContent>
                      {album.tracks.map((track) => (
                        <SelectItem
                          key={track.url}
                          onClick={() => console.log("test")}
                          value={track.number.toString()}
                        >
                          <div className="text-ellipsis overflow-hidden whitespace-nowrap max-w-xs">
                            {track.title}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Popover>
                    <PopoverTrigger>
                      {state.muted ? (
                        <VolumeX className="h-4 w-4" />
                      ) : !state.volume ? (
                        <VolumeX className="h-4 w-4" />
                      ) : state.volume < 0.6 ? (
                        <Volume1 className="h-4 w-4" />
                      ) : (
                        <Volume2 className="h-4 w-4" />
                      )}
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col">
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
                      >
                        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
                      </Slider>
                      <span>{Math.floor(state.volume * 100)}</span>
                    </PopoverContent>
                  </Popover>
                </CardHeader>
                <CardContent className="flex items-center flex-col gap-2">
                  <Carousel
                    setApi={setApi}
                    opts={{ loop: true }}
                    className="w-full max-w-xs "
                  >
                    <CarouselContent>
                      {album.tracks.map((track) => (
                        <CarouselItem key={track.url}>
                          <Card className="h-full bg-transparent">
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

                  <div className="flex gap-2 items-center w-full">
                    <span>{secondsToMinutes(state.time)}</span>
                    <Slider
                      className="cursor-pointer"
                      max={100}
                      step={1}
                      defaultValue={[0]}
                      onValueChange={([value]) => {
                        controls.seek(state.duration * (value / 100));
                      }}
                      value={[(state.time / state.duration) * 100]}
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
                </CardContent>

                <CardFooter></CardFooter>
              </Card>
              <Button
                asChild
                variant="ghost"
                className="h-full cursor-pointer"
                onClick={setNextVisualizer}
              >
                <div
                  className={`containers w-full h-full absolute -z-10`}
                  id="container-1"
                />
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

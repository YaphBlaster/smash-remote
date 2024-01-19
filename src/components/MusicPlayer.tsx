"use client";
import {
  MouseEvent,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import jukebox, {
  pocketMonstersAnimeOST,
  smoothMcGroove3,
} from "@/jukeboxAlbums";
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
  KeySquare,
  Pause,
  Play,
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

type Props = {};

type MusicPlayerState = {
  loading: boolean;
};

type SetIsLoading = {
  type: "SetIsLoading";
  payload: {
    isLoading: boolean;
  };
};

const reducer = (
  state: MusicPlayerState,
  action: SetIsLoading
): MusicPlayerState => {
  switch (action.type) {
    case "SetIsLoading":
      return {
        ...state,
        loading: action.payload.isLoading,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

const musicPlayerInitialState: MusicPlayerState = { loading: true };

const MusicPlayer = (props: Props) => {
  const [musicPlayerState, dispatch] = useReducer(
    reducer,
    musicPlayerInitialState
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const audioSource = document.getElementById("audio") as HTMLAudioElement;
  const audioMotion = useRef<AudioMotionAnalyzer[]>([]);
  const albumByArtist = useRef(
    Object.groupBy(jukebox.albums, ({ artist }) => artist)
  );
  const [currentAlbum, setCurrentAlbum] = useState(pocketMonstersAnimeOST);
  const [currentSongIndex, setCurrentSongIndex] = useState(3);
  const defaultAlbumValue = `${currentAlbum.artist},${currentAlbum.baseURI}`;
  useEffect(() => {
    if (audioSource) {
      audioMotion.current[0] = new AudioMotionAnalyzer(
        document.getElementById(`container-${0}`)!,
        {
          volume: 0.5,
          source: audioSource,
          connectSpeakers: true,
        }
      );
    }
    return () => {
      if (audioMotion.current && audioSource) {
        audioMotion.current[0].disconnectInput();
      }
    };
  }, [audioSource]);

  const nextSong = () => {
    const nextSongIndex =
      currentAlbum?.tracks.length === currentSongIndex + 1
        ? 0
        : currentSongIndex + 1;

    setCurrentSongIndex(nextSongIndex);
  };

  const previousSong = () => {
    setCurrentSongIndex(currentSongIndex - 1);
  };

  const [audio, state, controls] = useAudio({
    id: "audio",
    src: `${currentAlbum.baseURI}${currentAlbum.tracks[currentSongIndex].url}`,
    preload: "true",
    crossOrigin: "anonymous",
    onCanPlayThrough: () => {
      controls.play();
    },
    onEnded: () => setCurrentSongIndex(currentSongIndex + 1),
    onLoadStart: () =>
      dispatch({
        type: "SetIsLoading",
        payload: { isLoading: true },
      }),
    onLoadedData: () => {
      dispatch({
        type: "SetIsLoading",
        payload: { isLoading: false },
      });
    },
  });

  const songProgress = (state.time / state.duration) * 100;

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

  useMount(() => {
    controls.volume(0.7);
    controls.play();
  });

  return (
    <div className="flex-1">
      <div className="containers hidden" id="container-0" />
      {audio}

      <Card className="w-full max-w-s overflow-hidden gap-2 flex items-center compact border-none">
        <CardHeader className="p-0">
          <CardDescription className="w-16 md:w-44">
            <Marquee>{currentAlbum?.tracks?.[currentSongIndex].title}/</Marquee>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex min-w-min flex-row p-0 gap-2 self-center ">
          <Button
            onClick={previousSong}
            variant="outline"
            size="icon"
            disabled={!currentSongIndex || musicPlayerState.loading}
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
            open={isDrawerOpen}
            onOpenChange={(open) => {
              setIsDrawerOpen(open);
              if (open) {
                setTimeout(() => {
                  audioMotion.current[1] = new AudioMotionAnalyzer(
                    document.getElementById(`container-${1}`)!,
                    {
                      volume: 0,
                      source: audioMotion.current[0].connectedSources[0],
                      connectSpeakers: false,
                      height: 160,
                    }
                  );
                }, 0);
              }
            }}
          >
            <DrawerTrigger>
              <Button variant="ghost" asChild size="icon">
                <Disc3
                  className={`${
                    isDrawerOpen && "animate-spin"
                  } hover:animate-spin`}
                />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="flex items-center">
              <DrawerHeader>
                <DrawerClose className="right-0">
                  <Button variant="outline">Close</Button>
                </DrawerClose>
                <DrawerTitle>
                  {currentAlbum.artist}-{currentAlbum.name}
                </DrawerTitle>
                <DrawerDescription>
                  {currentAlbum?.tracks?.[currentSongIndex].title}
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex gap-2 flex-col items-center md:flex-row lg:flex-row ">
                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex gap-2">
                        <KeySquare className="h-4 w-4" />{" "}
                        <span>Keygen Jukebox</span>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      {currentAlbum?.tracks?.[currentSongIndex].title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-5">
                    <Select
                      defaultValue={defaultAlbumValue}
                      onValueChange={(value) => {
                        const [artistName, baseURI] = value.split(",");
                        const album = getSpecificAlbum({
                          artistName,
                          baseURI,
                        });
                        if (album) {
                          setCurrentAlbum(album);
                          setCurrentSongIndex(0);
                        }
                      }}
                    >
                      <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Select an album" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(albumByArtist.current).map(
                          ([artist, albums]) => (
                            <SelectGroup key={artist}>
                              <SelectLabel>{artist}</SelectLabel>
                              {albums?.map((album) => (
                                <SelectItem
                                  key={album.baseURI}
                                  value={`${artist},${album.baseURI}`}
                                >
                                  {album.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <div className="containers" id="container-1" />
                    <div className="flex gap-2 w-full justify-center">
                      <Button
                        onClick={previousSong}
                        variant="outline"
                        size="icon"
                        disabled={!currentSongIndex || musicPlayerState.loading}
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
                    <div className="flex gap-2 items-center">
                      <span>{secondsToMinutes(state.time)}</span>
                      <Progress
                        className="cursor-pointer"
                        onClick={(e) => seekAt(e)}
                        value={songProgress}
                      />
                      <span>{secondsToMinutes(state.duration)}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-2 w-full">
                      <Button
                        onClick={state.muted ? controls.unmute : controls.mute}
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
                  </CardFooter>
                </Card>
                <ScrollArea className=" h-36 md:h-[520px] w-full rounded-md border">
                  <div className="p-6">
                    <h4 className="mb-4 text-sm font-medium leading-none">
                      Tracks
                    </h4>

                    {currentAlbum.tracks.map((track) => (
                      <>
                        <Button
                          defaultChecked={true}
                          variant={"outline"}
                          onClick={() => setCurrentSongIndex(track.number - 1)}
                          key={track.url}
                          className={`p-2 text-sm w-64 justify-start ${
                            track.number === currentSongIndex + 1 &&
                            "bg-accent rounded-sm"
                          } `}
                        >
                          <div className="text-left  whitespace-nowrap w-full overflow-hidden text-ellipsis">
                            {track.title}
                          </div>
                        </Button>
                        <Separator className="my-2" />
                      </>
                    ))}
                  </div>
                </ScrollArea>
              </div>
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

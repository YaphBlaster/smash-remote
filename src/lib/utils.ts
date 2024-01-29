import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export enum ROUTE_PATHS {
  ARCADIA = "/arcadia",
  LOGIN = "/login",
  DASHBOARD = "/arcadia/dashboard",
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const secondsToMinutes = (seconds: number) => {
  let minutes: string | number = Math.floor(seconds / 60);
  let extraSeconds: string | number = seconds % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

  return `${minutes}:${extraSeconds.toString().slice(0, 2)}`;
};

const getAlbum = (trackCharacterStartIndex = 0) => {
  const name = document.querySelector("title")?.innerHTML;
  const allTableLinks = document.querySelectorAll("td>a");
  const mp3Links = [...allTableLinks].filter((element) =>
    element.innerHTML.includes(".mp3")
  );
  const baseURI = mp3Links[0].baseURI;

  const tracks = mp3Links.map((mp3Link) => {
    return {
      title: mp3Link.innerHTML,
      url: mp3Link.getAttribute("href"),
      number: parseInt(
        mp3Link.innerHTML
          .slice(trackCharacterStartIndex, trackCharacterStartIndex + 3)
          .replace(/\D/g, "")
      ),
    };
  });

  const album = {
    name,
    baseURI,
    tracks,
  };
};

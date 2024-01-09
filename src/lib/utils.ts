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

"use client";
import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StreamerbotProvider from "../components/streamerbot-context";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
const queryClient = new QueryClient();

type Props = {};

const Providers = ({
  children,
  ...props
}: PropsWithChildren<ThemeProviderProps>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StreamerbotProvider>
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
      </StreamerbotProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;

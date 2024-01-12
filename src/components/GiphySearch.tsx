"use client";
import { GiphyFetch } from "@giphy/js-fetch-api";
import {
  Grid,
  SearchBar,
  SearchContext,
  SearchContextManager,
} from "@giphy/react-components";
import React, { PropsWithChildren, useContext, useState } from "react";

import { useStreamerBotContext } from "./streamerbot-context";
import { ScrollArea } from "./ui/scroll-area";
import { FormLabel } from "./ui/form";
import { Label } from "./ui/label";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

// the search experience consists of the manager and its child components that use SearchContext
const SearchExperience = ({ children }: PropsWithChildren) => {
  const { resolvedTheme } = useTheme();

  return (
    <SearchContextManager
      theme={{ darkMode: resolvedTheme === "dark" }}
      options={{ rating: "r" }}
      apiKey={process.env.NEXT_PUBLIC_GIPHY_KEY!}
    >
      <GiphySearch />
    </SearchContextManager>
  );
};

type Props = {};

const GiphySearch = (props: Props) => {
  const { streamerbotClient } = useStreamerBotContext();
  const { fetchGifs, searchKey } = useContext(SearchContext);

  return (
    <div className="space-y-2 ">
      <Label>Send Giphy</Label>
      <SearchBar
        className="!bg-transparent dark:text-white  text-red-500 shadow shadow-sm transition-colors border-input border rounded-md"
        placeholder="giph it to me"
      />
      {searchKey && (
        <div className="absolute z-[1]">
          <ScrollArea className="h-[200px] rounded-md border p-4 bg-white">
            <Grid
              hideAttribution
              noLink
              onGifClick={async (gif, e) => {
                await streamerbotClient.doAction(
                  "adad546b-d669-4804-9ba5-77ef887cfa20",
                  {
                    giphy: gif.embed_url,
                  }
                );
              }}
              className="h-[200px]"
              key={searchKey}
              columns={3}
              width={400}
              fetchGifs={fetchGifs}
            />
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default SearchExperience;

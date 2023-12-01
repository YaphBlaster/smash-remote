"use client";
import React, { PropsWithChildren, useContext } from "react";
import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SearchContextManager, // the context manager, includes the Context.Provider
} from "@giphy/react-components";
import { ScrollArea } from "./ui/scroll-area";
import { useStreamerBotContext } from "./streamerbot-context";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { GiphyFetch } from "@giphy/js-fetch-api";

// the search experience consists of the manager and its child components that use SearchContext
const SearchExperience = ({ children }: PropsWithChildren) => (
  <SearchContextManager
    options={{ rating: "r" }}
    apiKey={process.env.NEXT_PUBLIC_GIPHY_KEY!}
  >
    <GiphySearch />
  </SearchContextManager>
);

type Props = {};

const GiphySearch = (props: Props) => {
  const { streamerbotClient } = useStreamerBotContext();
  const { fetchGifs, searchKey } = useContext(SearchContext);
  const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_KEY!);

  return (
    <div>
      <SearchBar className="shadow shadow-sm transition-colors border-input border rounded-md" />

      {searchKey && (
        <div className="absolute z-[1]">
          <ScrollArea className="h-[200px] rounded-md border p-4 bg-white">
            <Grid
              hideAttribution
              noLink
              onGifClick={async (gif, e) => {
                console.log(
                  "🚀 ~ file: GiphySearch.tsx:43 ~ onGifClick={ ~ gif:",
                  gif
                );
                const { frames }: any = gif.images.original;

                const response = await gf.gif(gif.id as string);
                console.log(
                  "🚀 ~ file: GiphySearch.tsx:44 ~ onGifClick={ ~ response:",
                  response
                );
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

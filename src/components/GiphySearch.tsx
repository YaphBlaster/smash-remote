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

  return (
    <div>
      <SearchBar />

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

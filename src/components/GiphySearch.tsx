"use client";
import React from "react";
import { Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useQuery } from "@tanstack/react-query";

type Props = {};

const GiphySearch = (props: Props) => {
  const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_KEY!);

  const fetchData = async () => {
    return await gf.gif("fpXxIjftmkk9y");
  };
  const query = useQuery({
    queryKey: ["giphyResponse"],
    queryFn: fetchData,
  });

  return <div>GiphySearch</div>;
};

export default GiphySearch;

import { StreamerbotClient } from "@streamerbot/client";
import { PropsWithChildren, createContext, useContext, useRef } from "react";

export type _StreamerbotContextType = {
  streamerbotClient: StreamerbotClient;
};

export const StreamerbotContext = createContext<_StreamerbotContextType>(
  {} as _StreamerbotContextType
);

export const useStreamerBotContext = () => {
  const streamerbotContext = useContext(StreamerbotContext);

  if (!streamerbotContext) {
    throw new Error("must be used inside a StreamerbotProvider");
  }
  return streamerbotContext;
};
const StreamerbotProvider = ({ children }: PropsWithChildren) => {
  const { current: client } = useRef(
    new StreamerbotClient({
      host: process.env.NEXT_PUBLIC_STREAMERBOT_HOST,
      port: parseInt(process.env.NEXT_PUBLIC_STREAMERBOT_PORT!),
      endpoint: "/",
    })
  );

  return (
    <StreamerbotContext.Provider value={{ streamerbotClient: client }}>
      {children}
    </StreamerbotContext.Provider>
  );
};

export default StreamerbotProvider;

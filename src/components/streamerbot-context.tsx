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
  const client = useRef(new StreamerbotClient());

  return (
    <StreamerbotContext.Provider value={{ streamerbotClient: client.current }}>
      {children}
    </StreamerbotContext.Provider>
  );
};

export default StreamerbotProvider;

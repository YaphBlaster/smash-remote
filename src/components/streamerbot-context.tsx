import { StreamerbotClient } from "@streamerbot/client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export type _StreamerbotContextType = {
  streamerbotClient: StreamerbotClient;
  isObsConnected: boolean;
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
  const [isObsConnected, setIsObsConnected] = useState(false);

  const { current: client } = useRef(
    new StreamerbotClient({
      subscribe: {
        Obs: ["Connected", "Disconnected"],
      },
    })
  );

  useEffect(() => {
    client.on("Obs.Connected", () => setIsObsConnected(true));
    client.on("Obs.Disconnected", () => setIsObsConnected(false));
  }, [client]);

  return (
    <StreamerbotContext.Provider
      value={{ streamerbotClient: client, isObsConnected }}
    >
      {children}
    </StreamerbotContext.Provider>
  );
};

export default StreamerbotProvider;

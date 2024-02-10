import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type _ActionCardsContextType = {
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;
};

export const ActionCardsContext = createContext<_ActionCardsContextType>(
  {} as _ActionCardsContextType
);

export const useActionCardsContext = () => {
  const actionCardsContext = useContext(ActionCardsContext);

  if (!actionCardsContext) {
    throw new Error(
      "useActionCardsContext should be used within <ActionCardsProvider>"
    );
  }
  return actionCardsContext;
};
const ActionCardsProvider = ({ children }: PropsWithChildren) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <ActionCardsContext.Provider
      value={useMemo(() => {
        return { isMuted, setIsMuted };
      }, [isMuted])}
    >
      {children}
    </ActionCardsContext.Provider>
  );
};

export default ActionCardsProvider;

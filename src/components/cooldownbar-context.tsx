import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import useInterval from "use-interval";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { AlarmClockIcon } from "lucide-react";
import { secondsToMinutes } from "@/lib/utils";

type _CooldownBarType = {
  isRunning: boolean;
  startTimer: () => void;
};

const CooldownBarContext = createContext({} as _CooldownBarType);

export const useCooldownBarContext = () => {
  const context = useContext(CooldownBarContext);

  if (!context) {
    throw new Error(
      "useCooldownBarContext should be used within <CooldownBarProvider>"
    );
  }
  return context;
};

type Props = {
  cooldownSeconds: number;
};

const CooldownBarProvider = ({
  children,
  cooldownSeconds,
}: PropsWithChildren<Props>) => {
  const [secondsLeft, setSecondsLeft] = useState(cooldownSeconds);

  const [minutesLeft, setMinutesLeft] = useState(
    secondsToMinutes(cooldownSeconds)
  );
  const [progressValue, setProgressValue] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const chargeUnitPerSecond = 100 / cooldownSeconds;

  useInterval(
    () => {
      const currentProgress = progressValue + chargeUnitPerSecond;
      const currentSecondsLeft = secondsLeft - 1;
      const currentMinutesLeft = secondsToMinutes(currentSecondsLeft);
      setMinutesLeft(currentMinutesLeft);
      setProgressValue(currentProgress);
      setSecondsLeft(currentSecondsLeft);
    },
    isRunning ? 1000 : null
  );

  useEffect(() => {
    if (progressValue >= 100) {
      setIsRunning(false);
      setSecondsLeft(cooldownSeconds);
    }
  }, [cooldownSeconds, progressValue]);

  const startTimer = () => {
    setProgressValue(0);
    setIsRunning(true);
  };

  return (
    <CooldownBarContext.Provider value={{ isRunning, startTimer }}>
      <div className="flex flex-wrap justify-start">
        {children}

        <TooltipProvider>
          <Tooltip disableHoverableContent={true} delayDuration={200}>
            <TooltipTrigger
              aria-hidden={!isRunning}
              className={`${
                isRunning ? "visible animate-pulse" : "invisible animate-none"
              } `}
            >
              <Button variant="ghost" size="icon">
                <AlarmClockIcon className=" h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{minutesLeft}</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* <Progress
            value={progressValue}
            className={`${isRunning ? "animate-pulse " : undefined}  `}
          /> */}
      </div>
    </CooldownBarContext.Provider>
  );
};

export default CooldownBarProvider;

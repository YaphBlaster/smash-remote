import { Play, Edit } from "lucide-react";
import React from "react";
import FormSheet, { actionIdToSchema } from "./FormSheet";
import { Button } from "./ui/button";
import { useStreamerBotContext } from "./streamerbot-context";
import { useCooldownBarContext } from "./cooldownbar-context";

const initialState: InitialState = {
  bonesaw: "",
  humanSpider: "",
};

type Props = {
  actionId: string;
};

const ActionButtonGroup = ({ actionId }: Props) => {
  const { streamerbotClient } = useStreamerBotContext();
  const { startTimer, isRunning } = useCooldownBarContext();
  const hasEditableFields = Boolean(actionIdToSchema[actionId]);

  const runAction = async () => {
    await streamerbotClient.doAction(actionId, {
      ...initialState,
    });
    startTimer();
  };

  return (
    <>
      <Button
        variant="ghost"
        onClick={runAction}
        size="icon"
        disabled={isRunning}
      >
        <Play className=" h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        disabled={!hasEditableFields || isRunning}
      >
        <FormSheet actionId={actionId}>
          <Edit className=" h-4 w-4" />
        </FormSheet>
      </Button>
    </>
  );
};

export default ActionButtonGroup;

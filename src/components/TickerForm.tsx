"use client";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";
import { DevTool } from "@hookform/devtools";
import { useQueryClient } from "@tanstack/react-query";
import {
  _StreamerbotContextType,
  useStreamerBotContext,
} from "./streamerbot-context";
import { useFetchActions } from "@/lib/hooks";

const formSchema = z.object({
  tickerText: z.string().trim().max(69),
});
type Props = {};

const TickerForm = (props: Props) => {
  const queryClient = useQueryClient();
  const { streamerbotClient: client } = useStreamerBotContext();
  const { data } = useFetchActions();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tickerText: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const tickerActionId = data?.actionsRaw.find(
      (action) => action.name === "Show Ticker"
    )?.id;

    if (tickerActionId) {
      await client.doAction(tickerActionId, { ...values });
      form.reset();
    }
  }

  const tickerTextLength = form.watch("tickerText").length;
  const isButtonDisabled = !tickerTextLength;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="tickerText"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Send Ticker</FormLabel>
                <FormDescription>
                  {tickerTextLength}/69{" "}
                  {tickerTextLength === 69 ? (
                    <>
                      🍆<span className="animate-pulse">💦</span>
                    </>
                  ) : null}
                </FormDescription>
              </div>

              <FormControl>
                <div className="flex w-full items-center space-x-2 justify-between">
                  <Input maxLength={69} placeholder="this just in" {...field} />
                  <Button
                    type="submit"
                    variant="outline"
                    size="icon"
                    disabled={isButtonDisabled}
                  >
                    <SendIcon className="stroke-primary h-4 w-4" />
                  </Button>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      {/* <DevTool control={form.control} /> */}
    </Form>
  );
};

export default TickerForm;

"use client";

import React, { PropsWithChildren } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Zod, * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStreamerBotContext } from "./streamerbot-context";

const getSchemaKeys = (schema: Zod.ZodType): string[] => {
  // Adjusted: Signature now uses Zod.ZodType to eliminate null& undefined check
  // check if schema is nullable or optional
  if (schema instanceof Zod.ZodNullable || schema instanceof Zod.ZodOptional) {
    return getSchemaKeys(schema.unwrap());
  }
  // check if schema is an array
  if (schema instanceof Zod.ZodArray) {
    return getSchemaKeys(schema.element);
  }
  // check if schema is an object
  if (schema instanceof Zod.ZodObject) {
    // get key/value pairs from schema
    const entries = Object.entries<Zod.ZodType>(schema.shape); // Adjusted: Uses Zod.ZodType as generic to remove instanceof check. Since .shape returns ZodRawShape which has Zod.ZodType as type for each key.
    // loop through key/value pairs
    return entries.flatMap(([key, value]) => {
      // get nested keys
      const nested = getSchemaKeys(value).map((subKey) => `${key}.${subKey}`);
      // return nested keys
      return nested.length ? nested : key;
    });
  }
  // return empty array
  return [];
};

const threeMinutesSchema = z.object({
  bonesaw: z.string().trim().min(2),
  humanSpider: z.string().trim().min(2),
});

const vinceSadSchema = z.object({
  vince: z.string().trim().min(2),
});

export const actionIdToSchema: Record<
  string,
  typeof threeMinutesSchema | typeof vinceSadSchema
> = {
  "f7a41a28-ed27-42ce-91bc-2fb8312646ee": threeMinutesSchema,

  "215efc44-8607-4c9a-be64-95d66bd2735f": vinceSadSchema,
};

const camelToFlat = (input: string) => {
  const camelCase = input.replace(/([a-z])([A-Z])/g, "$1 $2");

  return camelCase;
};

type Props = {
  actionId: string;
};

const FormSheet = ({ children, actionId }: PropsWithChildren<Props>) => {
  const { streamerbotClient } = useStreamerBotContext();
  const schema = actionIdToSchema[actionId];

  const currentFormKeyList = getSchemaKeys(schema);

  // 1. Define your form.
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      bonesaw: "",
      humanSpider: "",
      vince: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await streamerbotClient.doAction(actionId, { ...values });
  }

  type _dictionaryType = keyof z.infer<typeof schema>;

  return (
    <Sheet onOpenChange={() => form.reset()}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Make it personal</SheetTitle>
          <SheetDescription>Buff your meme for max power</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {currentFormKeyList.map((key) => (
              <FormField
                key={key}
                control={form.control}
                name={key as _dictionaryType}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      {camelToFlat(key)}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default FormSheet;

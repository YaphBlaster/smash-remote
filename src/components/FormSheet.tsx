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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const getPropertyPaths = (schema: Zod.ZodType): string[] => {
  // Adjusted: Signature now uses Zod.ZodType to eliminate null& undefined check
  // check if schema is nullable or optional
  if (schema instanceof Zod.ZodNullable || schema instanceof Zod.ZodOptional) {
    return getPropertyPaths(schema.unwrap());
  }
  // check if schema is an array
  if (schema instanceof Zod.ZodArray) {
    return getPropertyPaths(schema.element);
  }
  // check if schema is an object
  if (schema instanceof Zod.ZodObject) {
    // get key/value pairs from schema
    const entries = Object.entries<Zod.ZodType>(schema.shape); // Adjusted: Uses Zod.ZodType as generic to remove instanceof check. Since .shape returns ZodRawShape which has Zod.ZodType as type for each key.
    // loop through key/value pairs
    return entries.flatMap(([key, value]) => {
      // get nested keys
      const nested = getPropertyPaths(value).map(
        (subKey) => `${key}.${subKey}`
      );
      // return nested keys
      return nested.length ? nested : key;
    });
  }
  // return empty array
  return [];
};

const threeMinutesSchema = z.object({
  boneSaw: z.string().min(2),
  humanSpider: z.string().min(2),
});

const vinceSadSchema = z.object({
  vince: z.string().min(2),
});

const dictionary: Record<
  string,
  {
    schema: typeof threeMinutesSchema | typeof vinceSadSchema;
  }
> = {
  "f7a41a28-ed27-42ce-91bc-2fb8312646ee": {
    schema: threeMinutesSchema,
  },
  "215efc44-8607-4c9a-be64-95d66bd2735f": {
    schema: vinceSadSchema,
  },
};

const camelToFlat = (input: string) => {
  const camelCase = input.replace(/([a-z])([A-Z])/g, "$1 $2");

  return camelCase;
};

type Props = {
  actionId: string;
};

const FormSheet = ({ children, actionId }: PropsWithChildren<Props>) => {
  const dictionaryItem = dictionary[actionId];

  const currentFormKeyList = getPropertyPaths(dictionaryItem?.schema);

  if (dictionaryItem?.schema) {
    console.log(Object.keys(dictionaryItem?.schema));
  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof dictionaryItem.schema>>({
    resolver: zodResolver(dictionaryItem?.schema),
    defaultValues: {
      boneSaw: "",
      humanSpider: "",
      vince: "",
    },
  });

  const formValues = form.getValues();

  const objectKeysFormValues = Object.entries(formValues).map(
    ([key, value]) => {
      if (currentFormKeyList.includes(key)) {
        return {
          key,
          value,
        };
      }
      return null;
    }
  );
  console.log(
    "🚀 ~ file: FormSheet.tsx:137 ~ FormSheet ~ objectKeysFormValues:",
    objectKeysFormValues
  );

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof dictionaryItem.schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  type _dictionaryType = keyof z.infer<typeof dictionaryItem.schema>;

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
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
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
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

"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Database } from "@/lib/database.types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PrismaClient } from "@prisma/client";
import prisma from "@/db";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().trim().min(5),
});

const signUpFormSchema = z.object({
  email: z.string().email(),
  password: z.string().trim().min(5),
  displayName: z.string().trim().min(3).max(20),
});

type SignUpFormInput = z.infer<typeof signUpFormSchema>;
type LoginFormInput = z.infer<typeof loginFormSchema>;

export default function Login() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const loginForm = useForm<LoginFormInput>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginFormSchema),
  });
  const signUpForm = useForm<SignUpFormInput>({
    defaultValues: { displayName: "", email: "", password: "" },
    resolver: zodResolver(signUpFormSchema),
  });

  const handleSignUp = async ({
    email,
    password,
    displayName,
  }: {
    email: string;
    password: string;
    displayName: string;
  }) => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          displayName: "butthole",
        },
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    router.refresh();
  };

  const handleSignIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const onSignUpSubmit = ({
    email,
    displayName,
    password,
  }: SignUpFormInput) => {
    handleSignUp({ email, password, displayName });
  };

  const onLoginSubmit = ({ email, password }: LoginFormInput) => {
    handleSignIn({ email, password });
  };

  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Hop in jabroni 🕶️</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Form {...loginForm}>
              <form
                onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                className="space-y-8"
                id="login-form"
              >
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <Button type="submit" form="login-form">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="sign-up">
        <Card>
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>Join us and believe 🛐</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Form {...signUpForm}>
              <form
                onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}
                className="space-y-8"
                id="login-form"
              >
                <FormField
                  control={signUpForm.control}
                  name="displayName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Display Name</FormLabel>
                      <FormControl>
                        <Input placeholder="display name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={signUpForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={signUpForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <Button type="submit" form="login-form">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

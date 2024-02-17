"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Drama, HeartHandshake, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { ROUTE_PATHS } from "@/enums";
import { setCookie } from "cookies-next";

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

export default function LoginSignUp() {
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

  const onSignUpSubmit = useMutation({
    mutationFn: async ({
      email,
      displayName: display_name,
      password,
    }: SignUpFormInput) => {
      const emailRedirectTo = `${location.origin}/api/auth/callback`;

      await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name,
          },
          emailRedirectTo,
        },
      });

      router.refresh();
    },
    onSuccess: () => toast("Sign up confirmed, please check your email"),
  });

  const onSignInSubmit = useMutation({
    mutationFn: async ({ email, password }: LoginFormInput) => {
      return await supabase.auth.signInWithPassword({
        email,
        password,
      });
    },
    onSuccess: ({ data: { user } }) => {
      setCookie("userId", user?.id);
      router.refresh();
    },
  });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push(ROUTE_PATHS.DASHBOARD);
      }
    });

    return () => subscription.unsubscribe();
  });

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
                onSubmit={loginForm.handleSubmit((data) =>
                  onSignInSubmit.mutate({ ...data })
                )}
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
                        <Input
                          placeholder="email"
                          {...field}
                          autoComplete="email"
                        />
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
                          autoComplete="current-password"
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
          <CardFooter className="flex justify-end">
            <Button
              disabled={onSignInSubmit.isPending}
              type="submit"
              form="login-form"
            >
              {onSignInSubmit.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              <div className="flex items-center justify-center">
                <Drama className="mr-2 h-4 w-4" />
                <span>My body is ready</span>
              </div>
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
                onSubmit={signUpForm.handleSubmit((data) =>
                  onSignUpSubmit.mutate({ ...data })
                )}
                className="space-y-8"
                id="sign-up-form"
              >
                <FormField
                  control={signUpForm.control}
                  name="displayName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Display Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="display name"
                          {...field}
                          autoComplete="display-name"
                        />
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
                        <Input
                          placeholder="email"
                          {...field}
                          autoComplete="email"
                        />
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
                          autoComplete="new-password"
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
          <CardFooter className="flex justify-end">
            <Button
              disabled={onSignUpSubmit.isPending}
              type="submit"
              form="sign-up-form"
            >
              {onSignUpSubmit.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              <div className="flex items-center justify-center">
                <HeartHandshake className="mr-2 h-4 w-4" />
                <span>I want in</span>
              </div>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

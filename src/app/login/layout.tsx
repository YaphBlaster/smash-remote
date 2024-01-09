import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Smash Mouth - Arcadia",
  description: "Welcome to the OC Machine",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mt-5 flex justify-center">{children}</main>;
}

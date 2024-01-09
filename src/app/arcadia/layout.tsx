import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smash Mouth - Arcadia",
  description: "Welcome to the OC Machine",
};

export default function ArcadiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="flex flex-1 items-start justify-center">
        <Sidebar />
        <main className="max-w-4xl w-full">{children}</main>
      </div>
    </div>
  );
}

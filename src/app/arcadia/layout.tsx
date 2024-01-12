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
    <>
      <Header />
      <main className="flex-1">
        <div className="border-b">
          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
              <Sidebar />
            </aside>

            <main>{children}</main>
          </div>
        </div>
      </main>
    </>
  );
}

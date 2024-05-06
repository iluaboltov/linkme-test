import type { Metadata } from "next";

import { PageAnimatePresence } from "../components/HOC/page-animate-presence";
import "./globals.css";


export const metadata: Metadata = {
  title: "Linkme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <PageAnimatePresence>
      <body className={'flex font-Graphik'}>
        {children}
      </body>
    </PageAnimatePresence>
    </html>
  );
}

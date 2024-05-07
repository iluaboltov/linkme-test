import type { Metadata } from "next";

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
      <body className={'flex font-Graphik'}>
          {children}
      </body>
    </html>
  );
}

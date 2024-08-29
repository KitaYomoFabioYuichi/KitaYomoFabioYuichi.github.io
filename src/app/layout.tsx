import type { Metadata } from "next";
import "./globals.css";
import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[14px]  md:text-[16px]">
      <body className={`${openSans.className} text-gray-950`}>
        {children}
      </body>
    </html>
  );
}

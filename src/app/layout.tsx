import type { Metadata } from "next";
import "./globals.css";
import FramerMotionContext from "@/contexts/framer-motion-context";
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
    <html lang="en" className={`text-[14px]   md:text-[16px] ${openSans.className} text-gray-950`}>
      <body>
        <FramerMotionContext>
          {children}
        </FramerMotionContext>
      </body>
    </html>
  );
}

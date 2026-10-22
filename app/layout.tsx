import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DoorStep Services | Home Services in Bengaluru, Booked in Minutes",
  description:
    "AC repair, deep cleaning, salon at home, plumbing, electrical and painting services across Bengaluru. Pick a slot, book instantly, pay on completion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-[#eef1ee] text-[#122019] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

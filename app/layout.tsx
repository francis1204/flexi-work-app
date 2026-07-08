import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import Loader from "@/components/Loader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flexiwork.ph"),
  title: "Flexi Work — Premium Video Editing Agency | Philippines",
  description:
    "Flexi Work transforms raw footage into cinematic content that captures attention, builds brands, and drives results. YouTube, TikTok, corporate and real estate video editing based in Roxas, Isabela, Philippines.",
  keywords: [
    "video editing agency",
    "YouTube video editing",
    "TikTok video editing",
    "Philippines video editor",
    "cinematic video editing",
    "corporate video editing",
  ],
  openGraph: {
    title: "Flexi Work — Edit. Create. Elevate.",
    description:
      "Premium cinematic video editing for creators and businesses. Your story, edited to perfection.",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexi Work — Edit. Create. Elevate.",
    description:
      "Premium cinematic video editing for creators and businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-rich text-white antialiased`}
        style={{ backgroundColor: "#09090B" }}
        suppressHydrationWarning
      >
        <Loader />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}

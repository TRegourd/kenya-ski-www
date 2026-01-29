import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenya Ski Federation | Official Website",
  description: "The official body governing and developing Alpine and Nordic skiing in Kenya. Supporting athletes on the road to the Winter Olympics.",
  openGraph: {
    title: "Kenya Ski Federation",
    description: "Developing world-class winter sports athletes from the Savannah to the Slopes.",
    type: "website",
    locale: "en_KE",
    siteName: "Kenya Ski Federation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

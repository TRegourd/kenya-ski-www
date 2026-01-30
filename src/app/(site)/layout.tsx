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
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://www.kenyaski.com"),
  title: {
    default: "Kenya Ski Federation | Official Website",
    template: "%s | Kenya Ski Federation"
  },
  description: "The official body governing and developing Alpine and Nordic skiing in Kenya. Supporting athletes on the road to the Winter Olympics.",
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: "Kenya Ski Federation",
    description: "Developing world-class winter sports athletes from the Savannah to the Slopes.",
    type: "website",
    locale: "en_KE",
    siteName: "Kenya Ski Federation",
    images: [
      {
        url: '/images/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Kenya Ski Federation Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  }
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

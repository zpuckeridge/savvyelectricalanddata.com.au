import { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://savvyelectricalanddata.com.au/"),
  applicationName: "savvyelectricalanddata.com.au",
  generator: "Next.js",
  keywords: [
    "savvyelectrical",
    "savvy",
    "electrical",
    "savvy electrical",
    "electrically savvy",
    "savy electrical",
    "savy electric",
    "electrical and data",
    "savvy electrical and data",
    "savvyelectricalanddata.com.au",
  ],
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/logo.webp",
  },
  appleWebApp: {
    title: "savvyelectricalanddata.com.au",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  title: {
    default: "Savvy Electrical and Data",
    template: "%s | Savvy Electrical and Data",
  },
  description:
    "We are a Brisbane based electrical and data installation service provider prioritize achieving complete customer satisfaction by offering various services such as renovations, new builds, security cameras, home automation, and more. Our team is readily available to assist you in any project.",
  openGraph: {
    url: "https://savvyelectricalanddata.com.au",
    title: "Savvy Electrical and Data",
    description:
      "We are a Brisbane based electrical and data installation service provider prioritize achieving complete customer satisfaction by offering various services such as renovations, new builds, security cameras, home automation, and more. Our team is readily available to assist you in any project.",
    images: "/avatar.jpg",
    siteName: "Savvy Electrical and Data",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased selection:bg-black selection:text-white",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <script
          async
          src="https://analytics.speedy.af/script.js"
          data-website-id="16068174-f3e3-40e5-92ef-5bf514ca4237"
        />
        {children}
      </body>
    </html>
  );
}

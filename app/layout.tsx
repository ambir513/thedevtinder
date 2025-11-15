import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Devtinder",
    template: "%s - The Devtinder",
  },
  description: "A platform to connect developers around the world.",
  keywords: [
    "The DevTinder",
    "Developer Tinder",
    "developer",
    "community",
    "networking",
    "tech",
    "programming",
    "coding",
    "software development",
    "collaboration",
    "chatting",
  ],
  authors: [{ name: "Amar Biradar", url: "https://devtinder.com" }],
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}

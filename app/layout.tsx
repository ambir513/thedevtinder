import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The DevTinder",
  description: "A platform to connect developers around the world.",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

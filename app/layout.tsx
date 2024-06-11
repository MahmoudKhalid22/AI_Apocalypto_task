import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";

const inter = Comic_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NFT Market Place",
  description: "This is market for NFT Web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

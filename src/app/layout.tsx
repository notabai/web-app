import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "No Tab",
  description:
    "Use the internet without a browser. Let AI agents do the work for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

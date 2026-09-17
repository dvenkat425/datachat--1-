import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataChat — Talk to your spreadsheet",
  description:
    "Upload any CSV and ask questions in plain English. Built with Next.js and the Claude API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}

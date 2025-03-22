import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vt323 = {
  variable: "--font-vt323",
};

const jersey10 = {
  variable: "--font-jersey10",
};

export const metadata: Metadata = {
  title: "RugCheck - Solana Token Checker",
  description: "Check Solana token markets for security and reliability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vt323.variable} ${jersey10.variable} antialiased bg-black text-foreground font-mono`}
        style={{ backgroundImage: 'none !important' }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@shared/global/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bianca Caroline - Portfólio",
  description: "Portfólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen text-white relative overflow-x-hidden bg-black">
        <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

        <div
          className="fixed inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, black 5%, transparent 60%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 60%)",
          }}
        />

        <div className="fixed top-0 left-0 w-[700px] h-[700px] bg-blue-600 opacity-15 blur-[200px]" />
        <div className="fixed bottom-0 right-0 w-[700px] h-[700px] bg-purple-600 opacity-15 blur-[200px]" />

        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}
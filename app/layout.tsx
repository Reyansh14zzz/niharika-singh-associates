import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Niharika Singh & Associates",
  description: "Premium Legal Services and Strategic Counsel",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#111",
      color: "#fff",
      border: "1px solid rgba(234,179,8,.3)",
    },
  }}
/>

  <Toaster position="top-left" />

      </body>
    </html>
  );
}

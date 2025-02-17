'use client';
import { useEffect } from "react";
import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],  // Subsets you need (optional)
  weight: ['400', '500', '600', '700'],
})

// export const metadata: Metadata = {
//   title: "Akauntme",
//   description: "Your smart accounting padi...",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((err) =>
        console.log('Service Worker registration failed:', err)
      );
    }
  }, []);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

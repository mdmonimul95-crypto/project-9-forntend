"use client";

import { useState, useEffect } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber";
import LoadingSpinner from "@/components/LoadingSpinner";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="h-full antialiased">
      <body className={manrope.className}>
        <Navber />

        {loading ? (
          <div className="flex justify-center items-center min-h-[70vh]">
            <LoadingSpinner />
          </div>
        ) : (
          children
        )}

        <Footer />
      </body>
    </html>
  );
}
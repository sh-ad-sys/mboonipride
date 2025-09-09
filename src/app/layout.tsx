import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mbooni Pride Hotel",
  description: "Luxury and Comfort in Mbooni Hills",
  icons: {
    icon: [
      { url: "/logo2.png", type: "image/png", sizes: "32x32" },
      { url: "/logo2.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: { url: "/logo2.png" },
    apple: { url: "/logo2.png" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Content shifted down by 80px to match h-20 header */}
        <main className="pt-20">{children}</main>

        {/* Optional Footer */}
        <Footer />
      </body>
    </html>
  );
}

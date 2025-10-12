import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mbooni Pride Hotel", // can also be a string or null
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

// Type-safe title extraction
function getSafeTitle(title: Metadata["title"]): string {
  if (!title) return "Mbooni Pride Hotel"; // fallback if null/undefined
  if (typeof title === "string") return title;
  if (typeof title === "object") {
    // could have "default" or "absolute" properties internally
    // safely access known string properties
    if ("absolute" in title && typeof title.absolute === "string") return title.absolute;
    if ("default" in title && typeof title.default === "string") return title.default;
  }
  return "Mbooni Pride Hotel";
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const safeTitle = getSafeTitle(metadata.title);

  return (
    <html lang="en">
      <Head>
        <title>{safeTitle}</title>
        <meta name="description" content={metadata.description ?? ""} />
        <link rel="icon" href="/logo2.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/logo2.png" sizes="16x16" type="image/png" />
        <link rel="shortcut icon" href="/logo2.png" />
        <link rel="apple-touch-icon" href="/logo2.png" />
      </Head>

      <body className="bg-white text-gray-800">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

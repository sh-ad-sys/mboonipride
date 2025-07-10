import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

export const metadata = {
  title: "Mbooni Pride Hotel",
  description: "Luxury and Comfort in Mbooni Hills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Content shifted down by 80px to match h-20 header */}
        <main className="pt-20">
          {children}
        </main>

        {/* Optional Footer */}
        <Footer />
      </body>
    </html>
  );
}

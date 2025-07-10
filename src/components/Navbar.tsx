"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Events & Conferences", href: "/events" },
    { label: "Booking", href: "/booking" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 w-full h-20 shadow z-50 text-white"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-16 h-16">
            <Image
              src="/logo2.png"
              alt="Mbooni Pride Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <span className="text-xl font-bold text-yellow-500">
            Mbooni Pride Hotel
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex space-x-6 text-base items-center">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-bold text-white hover:text-yellow-500 transition-colors capitalize"
            >
              {label}
            </Link>
          ))}

          {/* Our Services Dropdown - group-hover based */}
          <div className="relative group">
            <button className="font-bold text-white capitalize">Our Services</button>

            <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
              <Link
                href="/spa"
                className="block px-4 py-2 text-black hover:text-green-600"
              >
                Spa & Wellness
              </Link>
              <Link
                href="/restaurant"
                className="block px-4 py-2 text-black hover:text-green-600"
              >
                Restaurant & Bar
              </Link>
              <Link
                href="/transport"
                className="block px-4 py-2 text-black hover:text-green-600"
              >
                Transport Services
              </Link>
              <Link
                href="/kids"
                className="block px-4 py-2 text-black hover:text-green-600"
              >
                Family and Kids
              </Link>
              <Link
                href="/addons"
                className="block px-4 py-2 text-black hover:text-green-600"
              >
                Special Addons
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

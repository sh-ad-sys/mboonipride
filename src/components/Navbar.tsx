"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Events & Conferences", href: "/events" },
    { label: "Booking", href: "/booking" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="fixed top-0 w-full h-20 shadow z-50 text-white"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
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

        <nav className="flex space-x-6 text-base items-center relative">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-bold text-white hover:text-yellow-500 transition-colors capitalize"
            >
              {label}
            </Link>
          ))}

          {/* Our Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="font-bold text-white capitalize focus:outline-none"
            >
              Our Services
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-screen max-w-xs sm:max-w-sm bg-white rounded shadow-lg z-50">

                {[
                  { label: "Spa & Wellness", href: "/spa" },
                  { label: "Restaurant & Bar", href: "/restaurant" },
                  { label: "Transport Services", href: "/transport" },
                  { label: "Family and Kids", href: "/kids" },
                  { label: "Special Addons", href: "/addons" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-black hover:text-green-600"
                    onClick={() => setServicesOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

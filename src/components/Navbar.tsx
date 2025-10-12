"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const roomsRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (roomsRef.current && !roomsRef.current.contains(event.target as Node)) {
        setRoomsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full h-20 shadow z-50 text-white bg-[#0f172a]">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-base items-center relative">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative font-bold capitalize hover:text-yellow-500 group"
            >
              {label}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Rooms Dropdown */}
          <div
            className="relative"
            ref={roomsRef}
            onMouseEnter={() => setRoomsOpen(true)}
            onMouseLeave={() => setRoomsOpen(false)}
          >
            <button
              onClick={() => setRoomsOpen(!roomsOpen)}
              className="relative font-bold capitalize hover:text-yellow-500 flex items-center gap-1 group focus:outline-none"
            >
              Rooms
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  roomsOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {roomsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white rounded-lg shadow-lg z-50">
                <div className="flex flex-col text-center">
                  {[
                    { label: "Single Room", href: "/rooms/single" },
                    { label: "Twin Room", href: "/rooms/twin" },
                    { label: "Deluxe Room", href: "/rooms/deluxe" },
                  ].map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="px-4 py-2 text-black hover:bg-gray-100 hover:text-yellow-600 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {[
            { label: "Events & Conferences", href: "/events" },
            { label: "Booking", href: "/booking" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact Us", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative font-bold capitalize hover:text-yellow-500 group"
            >
              {label}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a] p-4 space-y-3 text-white">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>

          {/* Mobile Rooms Dropdown */}
          <details className="text-white">
            <summary className="cursor-pointer font-bold">Rooms</summary>
            <div className="flex flex-col items-start space-y-2 mt-2 ml-4">
              <Link href="/rooms/single" onClick={() => setMobileMenuOpen(false)}>
                Single Room
              </Link>
              <Link href="/rooms/twin" onClick={() => setMobileMenuOpen(false)}>
                Twin Room
              </Link>
              <Link href="/rooms/deluxe" onClick={() => setMobileMenuOpen(false)}>
                Deluxe Room
              </Link>
            </div>
          </details>

          <Link href="/events" onClick={() => setMobileMenuOpen(false)}>
            Events & Conferences
          </Link>
          <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
            Booking
          </Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}

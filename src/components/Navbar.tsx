"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#0f172a]/95 backdrop-blur-lg z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/logo2.png"
              alt="Mbooni Pride Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <span className="text-lg sm:text-xl font-bold text-yellow-500 tracking-wide">
            Mbooni Pride Hotel
          </span>
        </Link>

        {/* ✅ Mobile toggle */}
        <button
          className="md:hidden text-white hover:text-yellow-400 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-base items-center text-white">
          {/* Static links before Rooms */}
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative font-semibold hover:text-yellow-500 group"
            >
              {label}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* ✅ Rooms Dropdown */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setRoomsOpen(true)}
            onMouseLeave={() => setRoomsOpen(false)}
          >
            <span className="flex items-center gap-1 font-semibold hover:text-yellow-500">
              Rooms <ChevronDown size={16} />
            </span>
            <AnimatePresence>
              {roomsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 right-0 bg-white text-black rounded-lg shadow-lg py-2 w-44"
                >
                  {[
                    { label: "Single Suite", href: "/rooms/single" },
                    { label: "Twin Suite", href: "/rooms/twin" },
                    { label: "Deluxe Suite", href: "/rooms/deluxe" },
                  ].map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-600 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Remaining static links */}
          {[
            { label: "Events & Conferences", href: "/events" },
            { label: "Gallery", href: "/gallery" },
            { label: "Booking", href: "/booking" },
            { label: "Contact Us", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative font-semibold hover:text-yellow-500 group"
            >
              {label}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f172a] text-white px-6 pb-5 rounded-b-2xl shadow-lg"
          >
            <div className="flex flex-col space-y-4 mt-3">
              {/* Top links */}
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-lg hover:text-yellow-500 transition"
                >
                  {label}
                </Link>
              ))}

              {/* ✅ Mobile Rooms Dropdown */}
              <details className="group">
                <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
                  Rooms{" "}
                  <ChevronDown
                    className="inline ml-2 group-open:rotate-180 transition-transform"
                    size={18}
                  />
                </summary>
                <div className="ml-4 mt-2 space-y-2">
                  {[
                    { label: "Single Suite", href: "/rooms/single" },
                    { label: "Twin Suite", href: "/rooms/twin" },
                    { label: "Deluxe Suite", href: "/rooms/deluxe" },
                  ].map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-base hover:text-yellow-400 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </details>

              {/* Remaining links */}
              {[
                { label: "Events & Conferences", href: "/events" },
                { label: "Gallery", href: "/gallery" },
                { label: "Booking", href: "/booking" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-lg hover:text-yellow-500 transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

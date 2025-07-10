"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <main className="bg-white text-gray-800 pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-screen border-b border-gray-200">
        <Image
          src="/pride.jpg"
          alt="Luxury Hotel"
          width={1920}
          height={1080}
          className="w-full h-full object-cover brightness-[0.85]"
          priority
        />
      </section>

      {/* Book With Us Now Dropdown Section */}
      <section className="py-10 flex justify-center">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition"
          >
            Book With Us Now
          </button>

          {dropdownOpen && (
            <div className="absolute mt-2 w-64 bg-white text-black rounded shadow-lg z-50">
              <Link
                href="/booking?type=room"
                className="block px-4 py-3 hover:bg-green-100"
                onClick={() => setDropdownOpen(false)}
              >
                Room Booking
              </Link>
              <Link
                href="/booking?type=event"
                className="block px-4 py-3 hover:bg-green-100"
                onClick={() => setDropdownOpen(false)}
              >
                Events & Conferences
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20 px-6 sm:px-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-8 text-lg leading-relaxed text-gray-700">
          <p>
            Welcome to Mbooni Pride Hotel — a modern haven of comfort and style
            nestled in the heart of Mbooni. Whether you're here for business or
            leisure, we offer an unforgettable experience with luxurious rooms,
            exceptional dining, and warm hospitality. Let the serene
            environment, elegant design, and personalized service make your stay
            truly special.
          </p>
        </div>
      </section>
    </main>
  );
}

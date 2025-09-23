"use client";

import Image from "next/image";
import { Wifi, Tv, Snowflake, Coffee, Bath, Users } from "lucide-react";

export default function DeluxeRoom() {
  const amenities = [
    { icon: Wifi, label: "Free Wi-Fi" },
    { icon: Tv, label: "Smart TV" },
    { icon: Snowflake, label: "Air Conditioning" },
    { icon: Coffee, label: "Breakfast Included" },
    { icon: Bath, label: "Private Bathroom" },
    { icon: Users, label: "Sleeps 2 Adults" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen pt-24 pb-12 px-4">
      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/room2.jpeg"
            alt="Deluxe Room"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-6 text-gray-900">
          Deluxe Room
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
          Our Deluxe Room offers the perfect blend of comfort and luxury with
          stunning views, modern amenities, and a relaxing ambiance for a
          memorable stay.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {["room4.jpg", "room2.jpeg", "deluxe3.jpg"].map((img, index) => (
          <div
            key={index}
            className="relative h-56 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform"
          >
            <Image
              src={`/${img}`}
              alt={`Deluxe Room view ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {/* Amenities Section */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Room Amenities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <Icon className="text-yellow-500 w-8 h-8 mb-3" />
              <p className="text-gray-700 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Call to Action */}
      <section className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-700 text-lg mb-4">
          Ready to enjoy a relaxing stay in our Deluxe Room?
        </p>
        <a
          href="/booking"
          className="inline-block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-yellow-600 transition"
        >
          Book Now
        </a>
      </section>
    </main>
  );
}

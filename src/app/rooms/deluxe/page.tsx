"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Wifi, Tv, Snowflake, Coffee, Bath, Users } from "lucide-react";

interface Room {
  room_id: number;
  room_number: string;
  room_type: "single" | "twin" | "deluxe";
  status: "available" | "booked" | "maintenance";
  image_url?: string;
  created_at?: string;
  capacity: number;
  description: string;
}

export default function DeluxeRoom() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const res = await fetch(
          "http://localhost/mboonipride/backend/rooms.php?type=deluxe"
        );

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        if (data.success && Array.isArray(data.rooms)) {
          setRooms(data.rooms);
        } else {
          setRooms([]);
        }
      } catch (err) {
        console.error("Failed to fetch rooms:", err);
        setRooms([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRooms();
  }, []);

  const amenities = [
    { icon: Wifi, label: "Free Wi-Fi" },
    { icon: Tv, label: "Smart TV" },
    { icon: Snowflake, label: "Air Conditioning" },
    { icon: Coffee, label: "Breakfast Included" },
    { icon: Bath, label: "Private Bathroom" },
    { icon: Users, label: "Sleeps 2 Adults" },
  ];

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Loading Deluxe Suites...</p>
      </main>
    );
  }

  if (rooms.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">No Deluxe Suites available.</p>
      </main>
    );
  }

  const room = rooms[0];

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={room.image_url ? `/${room.image_url}` : "/room2.jpeg"}
          alt={room.room_type}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl capitalize">
            {room.room_type} Suite
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl mx-auto mt-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About This Suite
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our Deluxe Suites offer the perfect combination of comfort and
          elegance, ensuring a relaxing stay. Enjoy modern amenities and a cozy
          atmosphere designed for your ultimate comfort.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {["room4.jpg", "room2.jpeg", "deluxe3.jpg"].map((img, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform"
          >
            <Image
              src={`/${img}`}
              alt={`Deluxe Room view ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </section>

      {/* Amenities Section */}
      <section className="max-w-4xl mx-auto mt-12 px-4">
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

      {/* Booking Section */}
      <section className="max-w-4xl mx-auto mt-12 text-center pb-12">
        <p className="text-gray-900 text-xl font-bold mb-4">Ksh 3,500 / Night</p>
        <p className="text-gray-700 text-lg mb-4">
          Ready to enjoy a relaxing stay in our {room.room_type} Room?
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

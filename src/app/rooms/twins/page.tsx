"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wifi, Tv, Snowflake, BedDouble, Coffee, Car } from "lucide-react";

interface Room {
  room_id: number;
  room_type: string;
  status: string;
  image_url?: string;
  created_at?: string;
}

export default function TwinRoom() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const res = await fetch("http://localhost/mboonipride/backend/rooms.php?type=twin");
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

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading Twin Rooms...</p>
      </main>
    );
  }

  if (rooms.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">No Twin Rooms available.</p>
      </main>
    );
  }

  const room = rooms[0];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={room.image_url ? `/${room.image_url}` : "/room3.jpg"}
          alt={room.room_type}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl capitalize">
            {room.room_type} Room
          </h1>
        </div>
      </section>

      {/* Room Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Spacious Comfort for Two
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our Twin Rooms are designed for comfort and functionality, featuring two single beds,
            elegant interiors, and all the modern amenities you need for a relaxing stay.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {["room3.jpg", "twin1.jpg", "twin3.jpg"].map((img, idx) => (
            <div key={idx} className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={`/${img}`}
                alt={`${room.room_type} ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">
            Room Amenities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Wifi size={32} className="text-yellow-400 mb-2" />
              <span className="text-gray-700 text-sm">Free Wi-Fi</span>
            </div>
            <div className="flex flex-col items-center">
              <Tv size={32} className="text-yellow-400 mb-2" />
              <span className="text-gray-700 text-sm">Smart TV</span>
            </div>
            <div className="flex flex-col items-center">
              <Snowflake size={32} className="text-yellow-400 mb-2" />
              <span className="text-gray-700 text-sm">Air Conditioning</span>
            </div>
            <div className="flex flex-col items-center">
              <BedDouble size={32} className="text-yellow-400 mb-2" />
              <span className="text-gray-700 text-sm">2 Single Beds</span>
            </div>
            <div className="flex flex-col items-center">
              <Coffee size={32} className="text-yellow-400 mb-2" />
              <span className="text-gray-700 text-sm">Breakfast Included</span>
            </div>
            <div className="flex flex-col items-center">
              <Car size={32} className="text-yellow-400 mb-2" />
              <span className="text-gray-700 text-sm">Free Parking</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-gray-900 mb-4">Ksh 3,500 / Night</p>
          <a
            href="/booking"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Book Now
          </a>
        </motion.div>
      </section>
    </main>
  );
}

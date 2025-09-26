"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wifi, Tv, Coffee, Snowflake, BedDouble, Bath, Users } from "lucide-react";

interface Room {
  room_id: number;
  room_number: string;
  room_type: string;
  capacity: number;
  status: string;
  description: string;
}

export default function SingleRoom() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const res = await fetch("http://localhost/mboonipride/backend/rooms.php?type=Single");
        const data = await res.json();
        setRooms(data.rooms || []);
      } catch (err) {
        console.error("Failed to fetch rooms:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRooms();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading Single Rooms...</p>
      </main>
    );
  }

  if (rooms.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">No Single Rooms available.</p>
      </main>
    );
  }

  const room = rooms[0]; // show first Single room for now

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/room1.jpg" // Replace with room.image_url if added in DB
          alt={room.room_type}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl">
            {room.room_type}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Room Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Relax in Comfort
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {room.description}
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {["room5.jpg", "room1.jpg", "single3.jpg"].map((img, i) => (
            <div key={i} className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={`/${img}`}
                alt={`${room.room_type} ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Tv, label: "Flat-Screen TV" },
            { icon: Coffee, label: "Breakfast" },
            { icon: Snowflake, label: "Air Conditioning" },
            { icon: BedDouble, label: "Single Bed" },
            { icon: Bath, label: "Private Bathroom" },
            { icon: Users, label: "1 Guest" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
            >
              <Icon className="text-yellow-600 w-8 h-8 mb-2" />
              <span className="text-gray-700 font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Price & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-gray-900 mb-4">Ksh. 2,500 / Night</p>
           <a
          href="/booking"
          className="inline-block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-yellow-600 transition"
        >
          Book Now
        </a>
        </motion.div>
      </section>
    </main>
  );
}

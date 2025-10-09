"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wifi, Tv, Coffee, Snowflake, BedDouble, Bath, Users } from "lucide-react";

interface Room {
  room_id: number;
  room_number: string;
  room_type: string;
<<<<<<< HEAD
  status: string;
  image_url?: string;
  created_at?: string;
=======
  capacity: number;
  status: string;
  description: string;
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
}

export default function SingleRoom() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
<<<<<<< HEAD
        const res = await fetch("http://localhost/mboonipride/backend/rooms.php?type=single");
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
=======
        const res = await fetch("http://localhost/mboonipride/backend/rooms.php?type=Single");
        const data = await res.json();
        setRooms(data.rooms || []);
      } catch (err) {
        console.error("Failed to fetch rooms:", err);
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
      } finally {
        setLoading(false);
      }
    }
<<<<<<< HEAD

=======
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
    fetchRooms();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
<<<<<<< HEAD
        <p className="text-gray-600 text-lg">Loading Single Beds...</p>
=======
        <p className="text-gray-600 text-lg">Loading Single Rooms...</p>
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
      </main>
    );
  }

  if (rooms.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
<<<<<<< HEAD
        <p className="text-gray-600 text-lg">No Single Beds available.</p>
=======
        <p className="text-gray-600 text-lg">No Single Rooms available.</p>
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
      </main>
    );
  }

<<<<<<< HEAD
  const room = rooms[0]; // Display first single room entry for now
=======
  const room = rooms[0]; // show first Single room for now
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
<<<<<<< HEAD
          src={room.image_url ? `/${room.image_url}` : "/room1.jpg"}
=======
          src="/room1.jpg" // Replace with room.image_url if added in DB
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
          alt={room.room_type}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
<<<<<<< HEAD
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl capitalize">
            {room.room_type} Room
=======
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl">
            {room.room_type}
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
          </h1>
        </div>
      </section>

<<<<<<< HEAD
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
=======
      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Room Info */}
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
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
<<<<<<< HEAD
            Experience peace and comfort in our elegant Single Rooms, ideal for solo travelers. 
            Enjoy cozy furnishings, top-tier amenities, and the privacy you deserve.
          </p>
        </motion.div>

        {/* Gallery Section */}
=======
            {room.description}
          </p>
        </motion.div>

        {/* Image Gallery */}
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
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

<<<<<<< HEAD
        {/* Amenities Section */}
=======
        {/* Amenities */}
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Tv, label: "Flat-Screen TV" },
<<<<<<< HEAD
            { icon: Coffee, label: "Breakfast Included" },
=======
            { icon: Coffee, label: "Breakfast" },
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
            { icon: Snowflake, label: "Air Conditioning" },
            { icon: BedDouble, label: "Single Bed" },
            { icon: Bath, label: "Private Bathroom" },
            { icon: Users, label: "1 Guest" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
            >
<<<<<<< HEAD
              <Icon className="text-yellow-400 w-8 h-8 mb-2" />
=======
              <Icon className="text-yellow-600 w-8 h-8 mb-2" />
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
              <span className="text-gray-700 font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

<<<<<<< HEAD
        {/* Price & Booking CTA */}
=======
        {/* Price & CTA */}
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
<<<<<<< HEAD
          <p className="text-2xl font-bold text-gray-900 mb-4">Ksh 2,500 / Night</p>
          <p className="text-gray-700 mb-4">
            Book your stay today and enjoy premium comfort at unbeatable value.
          </p>
          <a
            href="/booking"
            className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-yellow-600 transition"
          >
            Book Now
          </a>
=======
          <p className="text-2xl font-bold text-gray-900 mb-4">Ksh. 2,500 / Night</p>
           <a
          href="/booking"
          className="inline-block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-yellow-600 transition"
        >
          Book Now
        </a>
>>>>>>> 2f1c36eff76846b36e47b35d4c747403695cd57e
        </motion.div>
      </section>
    </main>
  );
}

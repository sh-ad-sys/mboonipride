"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Wifi, Tv, Snowflake, Coffee, Bath, Users } from "lucide-react";

interface Room {
  room_id: number;
  room_number: string;
  room_type: string;
  capacity: number;
  status: string;
  description: string;
  image_url?: string;
}

export default function DeluxeRoom() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const res = await fetch(
          "http://localhost/mboonipride/backend/rooms.php?type=Deluxe"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

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
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading Deluxe Rooms...</p>
      </main>
    );
  }

  if (rooms.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">No Deluxe Rooms available.</p>
      </main>
    );
  }

  const room = rooms[0];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section (Big image right below navbar) */}
      <section className="relative h-[60vh] w-full">
            <Image
              src="/room2.jpeg" // Replace with room.image_url if added in DB
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
<section className="max-w-4xl mx-auto mt-12 px-4 text-center">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Room</h2>
  <p className="text-gray-700 mb-2">
    Our Deluxe Room offers a perfect blend of comfort and elegance, ensuring a relaxing stay. 
    Enjoy modern amenities and a cozy atmosphere designed for your ultimate comfort.
  </p>
</section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
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

      {/* Amenities */}
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

      {/* Booking CTA with Price */}
      <section className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-900 text-xl font-bold mb-4">
          Ksh 3,500 / Night
        </p>
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

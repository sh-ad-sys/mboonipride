"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Wifi, Tv, Wind, BedDouble, Coffee, Car } from "lucide-react";

type Room = {
  id: number;
  room_type: string;
  description: string;
  price: string;
  images: string; // comma-separated paths in DB e.g. "twin1.jpg,room3.jpg,twin3.jpg"
};

export default function TwinRoom() {
  const [roomData, setRoomData] = useState<Room | null>(null);

  useEffect(() => {
    async function fetchRoom() {
      try {
        const res = await fetch("http://localhost/mboonipride/backend/rooms.php?type=Twin");
        const data = await res.json();
        if (data.success && data.rooms.length > 0) {
          setRoomData(data.rooms[0]); // take the first Twin room
        }
      } catch (error) {
        console.error("Error fetching Twin Room:", error);
      }
    }
    fetchRoom();
  }, []);

  if (!roomData) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading Twin Room details...</p>
      </main>
    );
  }

  // Split images into array
  const images = roomData.images ? roomData.images.split(",") : ["room3.jpg"];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={`/${images[0]}`}
          alt="Twin"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl">
            {roomData.room_type}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Room Description */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {roomData.room_type}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{roomData.description}</p>
        </div>

        {/* Room Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={`/${img}`}
                alt={`${roomData.room_type} ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Room Amenities */}
        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          Room Amenities
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Wifi size={32} className="text-green-600 mb-2" />
            <span className="text-gray-700 text-sm">Free Wi-Fi</span>
          </div>
          <div className="flex flex-col items-center">
            <Tv size={32} className="text-green-600 mb-2" />
            <span className="text-gray-700 text-sm">Smart TV</span>
          </div>
          <div className="flex flex-col items-center">
            <Wind size={32} className="text-green-600 mb-2" />
            <span className="text-gray-700 text-sm">Air Conditioning</span>
          </div>
          <div className="flex flex-col items-center">
            <BedDouble size={32} className="text-green-600 mb-2" />
            <span className="text-gray-700 text-sm">2 Single Beds</span>
          </div>
          <div className="flex flex-col items-center">
            <Coffee size={32} className="text-green-600 mb-2" />
            <span className="text-gray-700 text-sm">Breakfast Included</span>
          </div>
          <div className="flex flex-col items-center">
            <Car size={32} className="text-green-600 mb-2" />
            <span className="text-gray-700 text-sm">Free Parking</span>
          </div>
        </div>

        {/* Booking Call to Action */}
        <div className="text-center mt-12">
           <p className="text-2xl font-bold text-gray-900 mb-4">Ksh. 3,500 / Night</p>
          
          <a
            href="/booking"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Book Now
          </a>
        </div>
      </section>
    </main>
  );
}

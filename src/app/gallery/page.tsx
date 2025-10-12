"use client";

import Image from "next/image";

const images = [
  "/image1.jpeg",
  "/image2.jpeg",
  "/image3.jpeg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
  "/image8.jpg",
  "/image9.jpg",
  "/image10.jpg",
  "/image11.jpg",
  "/image12.jpg",
  "/image13.jpg",
  "/image14.jpg",
];

export default function GalleryPage() {
  return (
    <section className="space-y-6 pt-20 px-6">
      <h2 className="text-3xl font-bold text-center">Hotel Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={src}
              alt={`Gallery Image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

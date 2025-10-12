'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const layoutImages = [
  "/image13.jpg",
  "/image2.jpg",
  "/image7.jpg",
  "/image3.jpg",
];

export default function LayoutCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 min-h-[300px]">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {layoutImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px]">
              <Image
                src={src}
                alt={`Layout ${index + 1}`}
                fill
                className="rounded-xl object-cover shadow-lg"
                priority={index === 0} // preloads first image for better LCP
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

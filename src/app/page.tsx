'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LayoutCarousel: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  const images: string[] = [
    '/image13.jpg',
    '/image6.jpg',
    '/image7.jpg',
    '/image5.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    fade: false,
    cssEase: 'ease-in-out',
  };

  return (
    <>
      {/* Carousel Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <Slider {...settings}>
          {images.map((src: string, index: number) => (
            <div key={index} className="w-full h-screen relative">
              <Image
                src={src}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </div>
          ))}
        </Slider>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-xl">
            Discover Luxury at Mbooni Pride
          </h1>

          <div className="relative">
            <button
              className="bg-yellow-500 text-white px-8 py-3 rounded text-xl hover:bg-yellow-600 transition"
              onClick={() => setShowOptions(!showOptions)}
            >
              Book With Us Now
            </button>

            {showOptions && (
              <div className="absolute mt-2 bg-white shadow-lg rounded w-64 text-gray-800 z-40">
                <Link href="/rooms">
                  <div className="px-6 py-3 hover:bg-yellow-100 cursor-pointer">
                    Rooms Booking
                  </div>
                </Link>
                <Link href="/events">
                  <div className="px-6 py-3 hover:bg-green-600 cursor-pointer">
                    Events & Conferences
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-100 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            About Mbooni Pride Hotel
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Mbooni Pride is a premier boutigue-style hotel that is tailored for unforgattable stays, memorable dining experiences, conferencing and a well organized cateering program. It's located in Kikima, Mbooni West, within Makueni County, Kenya specifically along Kitundu Kithungo Road, near Kikima Market. 
          </p>
        </div>

      {/* Location Map Section */}
<div className="w-full bg-white py-12 px-6">
  <div className="max-w-4xl mx-auto text-center mb-6">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
      Find Us Here
    </h3>

  </div>

  <div className="w-full h-96 max-w-5xl mx-auto">
   <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.1388686785276!2d37.4466693747253!3d-1.6624938983220807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1825674a8abceb5b%3A0x5fc016c94c81473f!2sMbooni%20Pride%20Hotel!5e0!3m2!1sen!2ske!4v1753258440406!5m2!1sen!2ske"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

  </div>
</div>

          
        
      </div>
    </>
  );
};

export default LayoutCarousel;

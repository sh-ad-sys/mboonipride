'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
}

const LayoutCarousel: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [reviews, setReviews] = useState<GoogleReview[]>([]);

  const images: string[] = ['/image13.jpg', '/image6.jpg', '/image7.jpg', '/image5.jpg'];

  useEffect(() => {
    fetch('http://localhost/mboonipride/backend/google-reviews.php')
      .then((res) => res.json())
      .then((data: GoogleReview[]) => setReviews(data))
      .catch((err) => console.error('Error fetching reviews:', err));
  }, []);

  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    fade: true,
    cssEase: 'ease-in-out',
  };

  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[85vh] sm:h-screen overflow-hidden">
        <Slider {...heroSettings}>
          {images.map((src, index) => (
            <div key={index} className="w-full h-[85vh] sm:h-screen relative">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-cover brightness-75"
                priority={index === 0}
              />
            </div>
          ))}
        </Slider>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
            Discover Luxury at Mbooni Pride
          </h1>
          

          <div className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-xl text-lg sm:text-xl font-semibold transition-all shadow-lg hover:scale-105"
            >
              Book With Us Now
            </button>

            {showOptions && (
              <div className="absolute mt-3 w-64 bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
                <Link href="/rooms">
                  <div className="px-6 py-3 hover:bg-yellow-100 cursor-pointer font-medium">
                    Rooms Booking
                  </div>
                </Link>
                <Link href="/events">
                  <div className="px-6 py-3 bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer font-medium">
                    Events & Conferences
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ✅ About Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-5 text-gray-800">About Mbooni Pride Hotel</h3>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            Mbooni Pride is a boutique-style hotel designed for unforgettable stays, memorable dining,
            and well-organized conferences. Located in Kikima, Mbooni West — Makueni County, Kenya, along
            Kitundu Kithungo Road near Kikima Market.
          </p>
        </div>
      </section>

      {/* ✅ Google Reviews Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold mb-10 text-gray-800">
            What Our Guests Say About Us
          </h3>

          {reviews.length > 0 ? (
            <Slider {...reviewSettings}>
              {reviews.slice(0, 8).map((review, index) => (
                <div key={index} className="px-3">
                  <div className="bg-gray-50 p-6 rounded-2xl shadow-md h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                    <div>
                      <div className="flex justify-center mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-lg" />
                        ))}
                      </div>
                      <p className="italic text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
                        “{review.text?.slice(0, 180) || 'No review text available.'}”
                      </p>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-lg">{review.author_name}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-gray-500 text-lg animate-pulse">Loading reviews...</p>
          )}
        </div>
      </section>

      {/* ✅ Map Section */}
      <section className="w-full bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Find Us Here</h3>
        </div>

        <div className="w-full h-80 sm:h-96 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
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
      </section>

      {/* ✅ Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <span className="bg-white text-green-600 font-medium px-3 py-2 rounded-xl shadow-md hidden sm:block">
          Chat with us
        </span>

        <a
          href={
            /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
              ? 'whatsapp://send?phone=254 748607114&text=Hello%20👋'
              : 'https://wa.me/254 748607114?text=Hello%2C%20welcome%20to%20Mbooni%20Pride%20Hotel%20👋'
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 animate-bounce"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </>
  );
};

export default LayoutCarousel;

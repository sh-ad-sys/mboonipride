"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaBriefcase, FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";

export default function EventsPage() {
  return (
    <main className="bg-white text-gray-800 pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/image6.jpg"
          alt="Events and Conferences"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-extrabold tracking-wide"
          >
            Events & Conferences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-lg mt-4 max-w-2xl"
          >
            Crafting unforgettable experiences with elegance, precision, and care.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 sm:px-10 md:px-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Elegant Spaces for Memorable Moments
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            At Mbooni Pride Hotel, we specialize in hosting exceptional events — from 
            intimate meetings to grand celebrations. Our versatile spaces, 
            expert planning team, and premium facilities guarantee a seamless experience.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 sm:px-10 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaBriefcase className="text-yellow-500 text-5xl mx-auto mb-4" />,
              title: "Business Conferences",
              desc: "Host impactful meetings and corporate events with modern AV equipment and high-speed WiFi.",
            },
            {
              icon: <FaUsers className="text-yellow-500 text-5xl mx-auto mb-4" />,
              title: "Weddings & Ceremonies",
              desc: "Celebrate love and joy in our elegant indoor and outdoor spaces designed for lasting memories.",
            },
            {
              icon: <FaChalkboardTeacher className="text-yellow-500 text-5xl mx-auto mb-4" />,
              title: "Workshops & Seminars",
              desc: "Inspire creativity and collaboration with flexible setups for training sessions and learning events.",
            },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all bg-white"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-10 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Why Host With Mbooni Pride?
            </h3>
            <ul className="space-y-4">
              {[
                "Versatile halls for both large and small events",
                "High-speed internet and presentation equipment",
                "On-site catering with customizable menus",
                "Ample parking and top-notch security",
                "Dedicated event planning support team",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-yellow-500 w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/event1.jpg"
              alt="Conference Setup"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0f172a] py-20 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to Host Your Event?
          </h3>
          <p className="text-lg text-gray-200">
            From conferences to weddings — let our expert team bring your ideas to life.
          </p>
          <a
            href="/booking"
            className="inline-block bg-yellow-500 text-[#0f172a] font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all duration-300"
          >
            Book Your Event Now
          </a>
        </motion.div>
      </section>
    </main>
  );
}

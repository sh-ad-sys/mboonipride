"use client";

import Image from "next/image";
import {
  FaUsers,
  FaBriefcase,
  FaChalkboardTeacher,
} from "react-icons/fa"; // Removed FaRegClock

export default function EventsPage() {
  return (
    <main className="bg-white text-gray-800 pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/image6.jpg"
          alt="Events and Conferences"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Events &amp; Conferences
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 sm:px-10 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Elegant Spaces for Memorable Moments
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            At Mbooni Pride Hotel, we specialize in hosting exceptional events
            and conferences &mdash; from intimate meetings to grand
            celebrations. Our well-equipped facilities, flexible spaces, and
            dedicated planning team ensure a seamless experience tailored to
            your needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 sm:px-10 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="border rounded-xl p-8 shadow hover:shadow-lg transition">
              <FaBriefcase className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Business Conferences
              </h3>
              <p className="text-gray-600">
                Host productive meetings and corporate events with modern AV
                equipment and high-speed internet.
              </p>
            </div>
            <div className="border rounded-xl p-8 shadow hover:shadow-lg transition">
              <FaUsers className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Weddings &amp; Ceremonies
              </h3>
              <p className="text-gray-600">
                Create unforgettable wedding memories in our elegant indoor and
                outdoor venues.
              </p>
            </div>
            <div className="border rounded-xl p-8 shadow hover:shadow-lg transition">
              <FaChalkboardTeacher className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Workshops &amp; Seminars
              </h3>
              <p className="text-gray-600">
                Engage your audience in inspiring workshop spaces with
                customizable seating arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 sm:px-10 md:px-20 bg-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-700">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Why Host With Mbooni Pride?
            </h3>
            <ul className="space-y-3">
              <li>âœ”ï¸ Versatile halls for both large and small events</li>
              <li>âœ”ï¸ High-speed internet and presentation equipment</li>
              <li>âœ”ï¸ On-site catering with customizable menus</li>
              <li>âœ”ï¸ Ample parking and security services</li>
              <li>âœ”ï¸ Dedicated event planning support</li>
            </ul>
          </div>
          <div>
            <Image
              src="/event1.jpg"
              alt="Conference Setup"
              width={600}
              height={400}
              className="rounded-xl shadow"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16 text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold">Ready to Host Your Event?</h3>
          <p className="text-lg">
            Whether it&apos;s a conference, wedding, or private meeting &mdash;
            our team is here to turn your vision into reality.
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
          >
            Book Your Event Now
          </a>
        </div>
      </section>
    </main>
  );
}

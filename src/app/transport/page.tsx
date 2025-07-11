"use client";

import Image from "next/image";

export default function TransportPage() {
  return (
    <main className="pt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/transport1.jpg"
          alt="Transport Services"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl">
            Transport Services
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <p>
            Mbooni Pride Hotel ensures your comfort doesn’t stop at our doors. With our reliable and
            flexible transport services, you can explore Mbooni and beyond with ease. Whether you’re
            heading to the airport, exploring the countryside, or attending an event, we’ve got you covered.
          </p>
          <p>
            Our professional drivers, modern vehicles, and 24/7 availability guarantee you a seamless
            travel experience — always safe, prompt, and convenient.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Transport Options</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {transportOptions.map((option) => (
              <div
                key={option.title}
                className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300 p-6 text-center"
              >
                <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 text-black py-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Ride?</h2>
        <p className="mb-6 text-lg">Book your transport service in advance and travel stress-free.</p>
        <a
          href="/booking?type=transport"
          className="bg-black text-white hover:bg-green-600 hover:text-black font-semibold py-3 px-6 rounded transition"
        >
          Request Transport
        </a>
      </section>
    </main>
  );
}

const transportOptions = [
  {
    title: "Airport Pick-up & Drop-off",
    description: "Punctual and professional airport transfers to ensure your arrival and departure are smooth.",
    image: "/transport1.jpeg",
  },
  {
    title: "City Shuttle Service",
    description: "Explore Mbooni town and nearby attractions with our scheduled shuttle rides.",
    image: "/transport2.jpeg",
  },
  {
    title: "Private Chauffeur",
    description: "Enjoy personalized transport with our courteous private drivers for any occasion.",
    image: "/transport3.jpeg",
  },
  {
    title: "Tour Packages",
    description: "Discover scenic spots and local culture with our organized day trips and tour services.",
    image: "/transport4.jpeg",
  },
  {
    title: "Group Transport",
    description: "Spacious vehicles available for weddings, events, conferences and group excursions.",
    image: "/transport5.jpeg",
  },
  {
    title: "Executive Car Rental",
    description: "Hire a luxury vehicle with or without a driver — perfect for business travel.",
    image: "/transport6.jpeg",
  },
];

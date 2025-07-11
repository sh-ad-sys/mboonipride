"use client";

import Image from "next/image";

export default function AddOnsPage() {
  return (
    <main className="pt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/addons1.jpeg"
          alt="Special Add-ons"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl">
            Special Add-Ons
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <p>
            Make your stay at <strong>Mbooni Pride Hotel</strong> even more unforgettable with our curated special add-ons. Whether you’re celebrating a milestone, treating a loved one, or simply elevating your experience — we offer customizable extras that bring a personal touch to your visit.
          </p>
          <p>
            These services are available during booking or upon request at the reception. Let us take care of the magic, while you enjoy every moment.
          </p>
        </div>
      </section>

      {/* Add-Ons Grid */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Customize Your Experience</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {addOns.map((item) => (
              <div
                key={item.title}
                className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300 p-6 text-center"
              >
                <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-400 text-black py-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Add Something Special</h2>
        <p className="mb-6 text-lg">
          Surprise your loved ones or treat yourself. Add these extras to your booking today.
        </p>
        <a
          href="/booking?type=addons"
          className="bg-black text-white hover:bg-green-600 font-semibold py-3 px-6 rounded transition"
        >
          Add to My Booking
        </a>
      </section>
    </main>
  );
}

const addOns = [
  {
    title: "Romantic Room Setup",
    description:
      "Includes rose petals, candles, sparkling wine, and custom message card for a romantic atmosphere.",
    image: "/addons2.jpeg",
  },
  {
    title: "Birthday Surprise Package",
    description:
      "Includes cake, balloons, décor, and room surprise setup tailored to your birthday preferences.",
    image: "/addons3.jpeg",
  },
  {
    title: "Anniversary Add-On",
    description:
      "Celebrate with flowers, a champagne toast, chocolate treats, and a framed photo souvenir.",
    image: "/addons4.jpeg",
  },
  {
    title: "Express Check-In & Checkout",
    description:
      "Skip the queues and save time with personalized fast-track services for arrival and departure.",
    image: "/addons5.jpeg",
  },
  {
    title: "Gift Shop Voucher",
    description:
      "Enjoy a shopping voucher to spend at our souvenir and essentials boutique — perfect for gifting.",
    image: "/addons6.jpeg",
  },
  {
    title: "Luxury Essentials Kit",
    description:
      "Includes plush slippers, robe, travel-sized skincare, and scented candles to upgrade your room.",
    image: "/addons7.jpeg",
  },
];

"use client";

import Image from "next/image";

export default function SpaPage() {
  return (
    <main className="pt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/spa1.jpeg"
          alt="Spa & Wellness"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl">
            Spa & Wellness
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <p>
            Escape into a world of relaxation and rejuvenation at our exclusive Spa & Wellness center. 
            Whether you're unwinding after a long journey or treating yourself to a weekend of indulgence, 
            our state-of-the-art spa offers an oasis of peace, healing, and renewal.
          </p>
          <p>
            Our professionally trained therapists are here to deliver personalized treatments designed to 
            melt away stress and invigorate the senses. Come experience true tranquility, the Mbooni Pride way.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Spa Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {spaServices.map((service) => (
              <div
                key={service.title}
                className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300 p-6 text-center"
              >
                <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-yellow-500 text-black py-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to unwind?</h2>
        <p className="mb-6 text-lg">Book your spa appointment today and step into serenity.</p>
        <a
          href="/booking?type=spa"
          className="bg-black text-white hover:bg-green-600 hover:text-black font-semibold py-3 px-6 rounded transition"
        >
          Book Spa Session
        </a>
      </section>
    </main>
  );
}

const spaServices = [
  {
    title: "Full Body Massage",
    description: "Relieve muscle tension and improve circulation with a 60 or 90-minute full-body massage.",
    image: "/spa2.jpeg",
  },
  {
    title: "Facial Treatment",
    description: "Deep cleansing and rejuvenating facials tailored to your skin type.",
    image: "/spa3.jpeg",
  },
  {
    title: "Aromatherapy",
    description: "Calming essential oils used during massage to enhance emotional and physical well-being.",
    image: "/spa4.jpeg",
  },
  {
    title: "Steam & Sauna",
    description: "Enjoy detoxifying heat therapy in our modern steam rooms and saunas.",
    image: "/spa5.jpeg",
  },
  {
    title: "Hot Stone Therapy",
    description: "Melt away stress with smooth, heated stones that promote deep relaxation.",
    image: "/spa6.jpeg",
  },
  {
    title: "Manicure & Pedicure",
    description: "Pamper your hands and feet with our spa-grade mani-pedi sessions.",
    image: "/spa7.jpeg",
  },
];

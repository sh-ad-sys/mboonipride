"use client";

import Image from "next/image";

export default function FamilyPage() {
  return (
    <main className="pt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/family1.png"
          alt="Family and Kids Services"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl">
            Family & Kids Services
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <p>
            At Mbooni Pride Hotel, we believe that a family getaway should be fun, relaxing, and unforgettable — for both parents and kids. Our Family & Kids Services are thoughtfully designed to cater to the comfort, safety, and enjoyment of all age groups.
          </p>
          <p>
            From spacious family rooms to supervised play areas and kid-friendly dining, we’ve got everything covered to make your family feel right at home.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Family-Friendly Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {familyServices.map((service) => (
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

      {/* CTA Section */}
      <section className="bg-yellow-400 text-black py-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Plan Your Family Getaway</h2>
        <p className="mb-6 text-lg">
          Make the most of your stay with our curated family packages and kid-friendly experiences.
        </p>
        <a
          href="/booking?type=family"
          className="bg-black text-white hover:bg-green-600 font-semibold py-3 px-6 rounded transition"
        >
          Book Family Stay
        </a>
      </section>
    </main>
  );
}

const familyServices = [
  {
    title: "Family Rooms",
    description:
      "Spacious interconnected rooms with extra beds, baby cots, and storage — ideal for families of all sizes.",
    image: "/family/family-room.jpg",
  },
  {
    title: "Kids’ Play Zone",
    description:
      "Supervised indoor and outdoor play areas with games, toys, swings, and climbing equipment.",
    image: "/family/playzone.jpg",
  },
  {
    title: "Babysitting Services",
    description:
      "Trusted caregivers available upon request to give parents a worry-free break or night out.",
    image: "/family/babysitting.jpg",
  },
  {
    title: "Kid-Friendly Dining",
    description:
      "Special kids’ menu with fun meals, colorful cutlery, and allergy-conscious options.",
    image: "/family/kids-dining.jpg",
  },
  {
    title: "Entertainment & Activities",
    description:
      "Cartoon channels, kids’ movie nights, face painting, and weekend puppet shows.",
    image: "/family/activities.jpg",
  },
  {
    title: "Welcome Kits",
    description:
      "Fun welcome packs for children with coloring books, crayons, puzzles, and snacks.",
    image: "/family/welcome-kit.jpg",
  },
];

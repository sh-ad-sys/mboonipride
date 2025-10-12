"use client";

import Image from "next/image";

export default function RestaurantPage() {
  return (
    <main className="pt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/restaurant1.jpg"
          alt="Restaurant & Bar"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl">
            Restaurant &amp; Bar
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <p>
            Discover exceptional dining at Mbooni Pride Hotel&rsquo;s elegant Restaurant &amp; Bar.
            From morning breakfasts to late-night cocktails, we serve a diverse menu curated by
            top chefs using locally sourced ingredients. Our ambiance is perfect for both casual
            meals and fine dining experiences.
          </p>
          <p>
            Whether you&apos;re here for a romantic dinner, a business lunch, or just a refreshing
            drink at the bar, we guarantee a culinary journey that delights the senses.
          </p>
        </div>
      </section>

      {/* Food & Drinks Grid */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Culinary Highlights</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {diningHighlights.map((item) => (
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

      {/* CTA */}
      <section className="bg-yellow-500 text-black py-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Reserve Your Table</h2>
        <p className="mb-6 text-lg">
          Join us for a memorable dining experience at Mbooni Pride Hotel.
        </p>
        <a
          href="/booking?type=restaurant"
          className="bg-black text-white hover:bg-green-600 font-semibold py-3 px-6 rounded transition"
        >
          Book a Table
        </a>
      </section>
    </main>
  );
}

const diningHighlights = [
  {
    title: "Signature Dishes",
    description:
      "Enjoy our chef&rsquo;s specialties combining traditional African flavors with global cuisines.",
    image: "/restaurant1.jpeg",
  },
  {
    title: "All-Day Breakfast",
    description:
      "Kickstart your day with freshly made breakfast served till late morning.",
    image: "/restaurant2.png",
  },
  {
    title: "Cocktail & Wine Bar",
    description:
      "Unwind with a variety of crafted cocktails, fine wines, and premium spirits.",
    image: "/restaurant3.jpeg",
  },
  {
    title: "Outdoor Garden Dining",
    description:
      "Dine under the stars in our beautifully landscaped garden seating area.",
    image: "/restaurant4.jpeg",
  },
  {
    title: "Buffet & Ã€ la Carte",
    description:
      "Choose from rotating buffet themes or pick from our extensive Ã  la carte menu.",
    image: "/restaurant5.jpeg",
  },
  {
    title: "Private Dining",
    description:
      "Host intimate dinners or VIP meetings with our exclusive private dining service.",
    image: "/restaurant6.jpeg",
  },
];

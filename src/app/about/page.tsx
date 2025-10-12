export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">About Mbooni Pride Hotel</h1>
      <p className="text-lg leading-relaxed text-center">
        Mbooni Pride is a premier boutique-style hotel that is tailored for unforgettable stays, memorable dinning experiences, conferencing and a well organized catering program.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Elegant Design</h2>
          <p className="text-gray-600">Each room is crafted with modern elegance and royal heritage for unforgettable comfort.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">3-Star Service</h2>
          <p className="text-gray-600">Enjoy attentive service designed to make your stay relaxing and hassle-free. We offer friendly 24/7 assistance, cozy accommodations, on-site dining, and essential amenities to ensure a pleasant experience for both business and leisure travelers.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Guest-Favorite Experience</h2>
          <p className="text-gray-600">Rated highly for value, convenience, and friendly service, our hotel is a preferred stop for travelers seeking a quality stay without compromising comfort.</p>
        </div>
      </div>
    </section>
  );
}

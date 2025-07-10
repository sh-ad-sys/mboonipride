
const rooms = [
  { type: "Single Bed and Breakfast", price: "KSH. 2,500", image: "/room1.jpg", description: "Spacious suite with city view, king bed, and private balcony." },
  { type: "Deluxe Bed and Breakfast", price: "KSH. 3,500", image: "/room2.jpeg", description: "Modern comfort with a luxurious feel for business or leisure." },
  { type: "Twin Bed and Breakfast", price: "KSH. 4,000", image: "/room3.jpg", description: "Affordable elegance with essential amenities and queen bed." },
  { type: "Double-bedrooms", price: "KSH. 5,500", image:"room4.jpg", description: ""},
  { type: "Single Rooms", price: "KSH. 1,500", image:"room5.jpg", description: ""},
  { type: "Executive Rooms", price: "KSH. 8,500", image:"room6.jpeg", description: "Comfortable king-sized bed, separate desk and bathroom with bath and shower, all decorated in a timeless Art Deco style."},
];

export default function RoomsPage() {
  return (
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-center">Our Rooms & Suites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={room.image} alt={room.type} className="w-full h-56 object-cover" />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">{room.type}</h3>
              <p className="text-gray-500">{room.description}</p>
              <p className="text-yellow-500 font-bold">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

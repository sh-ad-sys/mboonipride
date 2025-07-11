import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700">
      {/* Upper Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Mbooni Pride Hotel</h3>
            <p className="text-sm text-gray-300 max-w-xs">
              Luxury meets comfort at Mbooni Pride. Whether you&rsquo;re here for leisure or business, expect only the best.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-400">About</a></li>
              <li><a href="/rooms" className="hover:text-yellow-400">Rooms</a></li>
              <li><a href="/booking" className="hover:text-yellow-400">Booking</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Get in Touch</h3>
            <p className="text-sm text-gray-300">info@mboonipridehotel.com</p>
            <p className="text-sm text-gray-300 mb-4">+254 710 292 540</p>
            <div className="flex justify-center space-x-4 text-yellow-400 text-lg">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center py-4 text-sm text-gray-400 border-t border-gray-700">
        © {new Date().getFullYear()} Mbooni Pride Hotel. All rights reserved.
      </div>
    </footer>
  );
}

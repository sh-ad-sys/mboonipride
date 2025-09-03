"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function BookingPage() {
  const [bookingType, setBookingType] = useState<"" | "room" | "event" | "service">("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Single",
    eventType: "Conference",
    serviceType: "Spa",
    guests: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const typeLabel =
      bookingType === "room"
        ? "Room"
        : bookingType === "event"
        ? "Event/Conference"
        : "Service";

    toast.success(`🎉 Thank you for booking a ${typeLabel} with Mbooni Pride Hotel!`);
  };

  return (
    <main className="min-h-screen pt-28 pb-16 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Book With Us</h2>

        {/* Booking Type Dropdown */}
        <div className="bg-white p-6 rounded shadow">
          <label className="block text-lg font-medium mb-2 text-gray-700">
            Choose Booking Type
          </label>
          <select
            onChange={(e) =>
              setBookingType(e.target.value as "room" | "event" | "service")
            }
            className="w-full p-3 border rounded text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              -- Select Booking Type --
            </option>
            <option value="room">Room Booking</option>
            <option value="event">Event or Conference Booking</option>
            <option value="service">Our Services</option>
          </select>
        </div>

        {/* Booking Form */}
        {bookingType && (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white shadow p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2 capitalize">
              {bookingType === "room"
                ? "Room Booking"
                : bookingType === "event"
                ? "Event/Conference Booking"
                : "Service Booking"}{" "}
              Form
            </h3>

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded"
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border rounded"
              onChange={handleChange}
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="checkIn"
                type="date"
                required
                className="w-full p-3 border rounded"
                onChange={handleChange}
              />
              <input
                name="checkOut"
                type="date"
                required
                className="w-full p-3 border rounded"
                onChange={handleChange}
              />
            </div>

            {/* Room Booking Fields */}
            {bookingType === "room" && (
              <select
                name="roomType"
                className="w-full p-3 border rounded"
                onChange={handleChange}
              >
                <option value="Single">Single Bed and Breakfast</option>
                <option value="Double">Deluxe Bed and Breakfast</option>
                <option value="Twin">Twin Bed and Breakfast</option>
                <option value="Double-Bedroom">Double Bedrooms</option>
                <option value="Executive">Executive Rooms</option>
              </select>
            )}

            {/* Event Booking Fields */}
            {bookingType === "event" && (
              <>
                <select
                  name="eventType"
                  className="w-full p-3 border rounded"
                  onChange={handleChange}
                >
                  <option value="Conference">Conference</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Corporate Meeting">Corporate Meeting</option>
                </select>

                <input
                  name="guests"
                  type="number"
                  placeholder="Expected Number of Guests"
                  required
                  className="w-full p-3 border rounded"
                  onChange={handleChange}
                />
              </>
            )}

            {/* Our Services Booking Fields */}
            {bookingType === "service" && (
              <select
                name="serviceType"
                className="w-full p-3 border rounded"
                onChange={handleChange}
              >
                <option value="Spa">Spa &amp; Wellness</option>
                <option value="Restaurant">Restaurant &amp; Bar</option>
                <option value="Transport">Transport Services</option>
                <option value="Family">Family &amp; Kids</option>
                <option value="Addons">Special Add-ons</option>
              </select>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded font-semibold"
            >
              Confirm Booking
            </button>
          </form>
        )}

        {/* Toast Container */}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </main>
  );
}

"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
 } from "@/components/ui/dialog";



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

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogStatus, setDialogStatus] = useState<"success" | "error">("success");
  // Auto close modal after 4 seconds if success
useEffect(() => {
  if (dialogOpen && dialogStatus === "success") {
    const timer = setTimeout(() => {
      setDialogOpen(false);
    }, 4000);
    return () => clearTimeout(timer);
  }
}, [dialogOpen, dialogStatus]);


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    // ⏳ Fake API request simulation (replace with real API later)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Example "fake response"
    const response = { ok: true }; // change to false to test error modal

    if (response.ok) {
      setDialogStatus("success");
    } else {
      setDialogStatus("error");
    }

    setDialogOpen(true); // ✅ opens modal after response
  } catch (err) {
    console.error("Booking error:", err);
    setDialogStatus("error");
    setDialogOpen(true);
  }
};


  const typeLabel =
    bookingType === "room"
      ? "Room"
      : bookingType === "event"
      ? "Event/Conference"
      : "Service";

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
              {typeLabel} Booking Form
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
    min={new Date().toISOString().split("T")[0]} // today or later
    className="w-full p-3 border rounded"
    onChange={handleChange}
  />
  <input
    name="checkOut"
    type="date"
    required
    min={form.checkIn || new Date().toISOString().split("T")[0]} // same or after check-in
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
                   min="2"
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
{/* ✅ Modern Success Modal */}
<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
  <DialogContent className="bg-white rounded-2xl shadow-2xl border-l-8 border-green-500 animate-in fade-in duration-500">
    <DialogHeader className="space-y-3 text-center">
      <div className="flex justify-center">
        {/* Success Icon */}
        <div className="flex items-center justify-center">
  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
    <svg
      className="w-12 h-12 text-green-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        className="text-green-300"
      />
      <path
        d="M6 12l4 4 8-8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="checkmark"
      />
    </svg>
  </div>
</div>

      </div>
      <DialogTitle className="text-2xl font-bold text-yellow-600">
        Booking Confirmed 🎉
      </DialogTitle>
      <DialogDescription className="text-black-600 leading-relaxed">
        Thank you for booking a <span className="font-semibold">{typeLabel}</span> 
        with <span className="font-semibold">Mbooni Pride Hotel</span>.  
        A confirmation email has been sent to <span className="text-green-700 font-medium">{form.email}</span>.  
        We look forward to hosting you!
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

      </div>
    </main>
  );
}

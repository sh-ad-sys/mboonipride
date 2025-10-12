"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function BookingPage() {
  const [bookingType, setBookingType] = useState<"" | "room" | "event">("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Single",
    roomId: "3", // maps roomType to DB room_id
    eventType: "Conference",
    guests: "",
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogStatus, setDialogStatus] = useState<"success" | "error">("success");

  // Map room types to DB room IDs (adjust IDs if needed)
  const roomMap: { [key: string]: string } = {
    Single: "3",
    Twin: "2",
    Deluxe: "1",
  };

  useEffect(() => {
    if (dialogOpen && dialogStatus === "success") {
      const timer = setTimeout(() => setDialogOpen(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [dialogOpen, dialogStatus]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "roomType" ? { roomId: roomMap[value] } : {}),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/mboonipride/backend/booking.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingType,
          name: form.name,
          email: form.email,
          checkIn: form.checkIn,
          checkOut: form.checkOut,
          roomId: form.roomId,
          roomType: form.roomType,
          eventType: form.eventType,
          guests: form.guests,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setDialogStatus("success");
        setForm({
          name: "",
          email: "",
          checkIn: "",
          checkOut: "",
          roomType: "Single",
          roomId: "3",
          eventType: "Conference",
          guests: "",
        });
      } else {
        setDialogStatus("error");
      }

      setDialogOpen(true);
    } catch (err) {
      console.error("Booking error:", err);
      setDialogStatus("error");
      setDialogOpen(true);
    }
  };

  const typeLabel =
    bookingType === "room" ? "Room" : bookingType === "event" ? "Event/Conference" : "";

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
            onChange={(e) => setBookingType(e.target.value as "room" | "event")}
            className="w-full p-3 border rounded text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              -- Select Booking Type --
            </option>
            <option value="room">Room Booking</option>
            <option value="event">Event or Conference Booking</option>
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
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border rounded"
              value={form.email}
              onChange={handleChange}
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="checkIn"
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-3 border rounded"
                value={form.checkIn}
                onChange={handleChange}
              />
              <input
                name="checkOut"
                type="date"
                required
                min={form.checkIn || new Date().toISOString().split("T")[0]}
                className="w-full p-3 border rounded"
                value={form.checkOut}
                onChange={handleChange}
              />
            </div>

            {/* Room Booking Fields */}
            {bookingType === "room" && (
              <select
                name="roomType"
                className="w-full p-3 border rounded"
                onChange={handleChange}
                value={form.roomType}
              >
                <option value="Single">Single Bed</option>
                <option value="Twin">Twin Bed</option>
                <option value="Deluxe">Deluxe Bed</option>
              </select>
            )}

            {/* Event Booking Fields */}
            {bookingType === "event" && (
              <>
                <select
                  name="eventType"
                  className="w-full p-3 border rounded"
                  onChange={handleChange}
                  value={form.eventType}
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
                  value={form.guests}
                  onChange={handleChange}
                />
              </>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded font-semibold"
            >
              Confirm Booking
            </button>
          </form>
        )}

        {/* Success/Error Modal */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="rounded-2xl shadow-xl p-6 text-center max-w-md bg-white">
            <div className="flex justify-center mb-4">
              {dialogStatus === "success" ? (
                <svg
                  className="w-20 h-20 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    className="stroke-current text-green-300"
                    strokeDasharray="62.8"
                    strokeDashoffset="62.8"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="62.8"
                      to="0"
                      dur="0.6s"
                      fill="freeze"
                    />
                  </circle>
                  <path
                    d="M7 13l3 3 7-7"
                    className="stroke-current text-green-600"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="20"
                    strokeDashoffset="20"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="20"
                      to="0"
                      dur="0.4s"
                      begin="0.6s"
                      fill="freeze"
                    />
                  </path>
                </svg>
              ) : (
                <svg
                  className="w-20 h-20 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 8l8 8M8 16l8-8" />
                </svg>
              )}
            </div>

            <DialogTitle
              className={`text-2xl font-bold ${
                dialogStatus === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {dialogStatus === "success"
                ? "Booking Successful 🎉"
                : "Booking Failed ❌"}
            </DialogTitle>

            <p className="text-gray-700 mt-2 font-medium">
              {dialogStatus === "success"
                ? "Your booking has been confirmed."
                : "There was a problem with your booking. Please try again."}
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}

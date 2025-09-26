'use client';

import { useState, ChangeEvent, FormEvent} from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost/mboonipride/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setDialogOpen(true);
      setForm({ name: "", email: "", message: "" });

      // Auto-close modal after 4s
      setTimeout(() => setDialogOpen(false), 4000);
    } else {
      alert(result.error || "Something went wrong!");
    }
  } catch (err) {
    console.error("Error submitting message:", err);
    alert("Server error. Please try again later.");
  }
};

  return (
    <section className="max-w-2xl mx-auto space-y-6 pt-28 pb-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow p-6 rounded-lg"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          value={form.message}
          className="w-full p-3 border rounded"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-5 rounded font-semibold w-full"
        >
          Send Message
        </button>
      </form>

      {/* Success Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="text-center space-y-4">
          <div className="flex items-center justify-center">
            {/* Animated Checkmark */}
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
    
            </div>
          
          <DialogHeader>
            <DialogTitle className="text-green-600 text-center font-bold">
              Message Sent Successfully 🎉
            </DialogTitle>
            <DialogDescription className="text-gray-700 text-center">
              Thanks for reaching out! We’ll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}

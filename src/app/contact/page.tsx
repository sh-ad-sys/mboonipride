'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Thanks for reaching out. We&apos;ll contact you soon!');
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
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full p-3 border rounded"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-5 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

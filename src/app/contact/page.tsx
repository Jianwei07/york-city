"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { SlimLayout } from "@/components/SlimLayout";
import { useState } from "react";
import { SplitLayout } from "@/components/SplitLayout";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    subject: "",
    enquiryType: "general enquiry",
    property: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg p-4 bg-white shadow-md rounded-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="contactNo"
          className="block text-gray-700 font-bold mb-2"
        >
          Contact No. with Country Code
        </label>
        <input
          type="tel"
          id="contactNo"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="enquiryType"
          className="block text-gray-700 font-bold mb-2"
        >
          Enquiry Type
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="general enquiry">General Enquiry</option>
          <option value="report a problem">Report a Problem</option>
          <option value="book a viewing">Book a Viewing</option>
          <option value="book a room">Book a Room</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="property"
          className="block text-gray-700 font-bold mb-2"
        >
          Property
        </label>
        <select
          id="property"
          name="property"
          value={formData.property}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Property</option>
          <option value="property1">Property 1</option>
          <option value="property2">Property 2</option>
          <option value="property3">Property 3</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={5}
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <SplitLayout>
      <div className="flex justify-between items-start">
        <div className="w-1/2 pr-4">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
          <h1 className="mt-8 text-2xl font-semibold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-4 text-sm text-gray-700">
            If you have any questions or need further assistance, please fill
            out the form on the right. Our team will get back to you as soon as
            possible.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Alternatively, you can reach us at:
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Email: support@example.com
          </p>
          <p className="mt-2 text-sm text-gray-700">Phone: +1 234 567 890</p>
        </div>
        <div className="w-1/2 pl-4">
          <ContactForm />
        </div>
      </div>
    </SplitLayout>
  );
}

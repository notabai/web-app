"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">
      <Image src="/logo.png" alt="No Tab Logo" width={300} height={300} />
      <div className="text-2xl mt-12">
        A new way to browse the internet with AI agents.
      </div>
      <div className="max-w-md mx-auto mt-10">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-lg mb-4 font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-4 px-8 bg-gray-100"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <div className="text-green-800 font-semibold text-lg">
            <div>
              We&apos;ll notify you once we have more space in our beta program.
              Stay tuned!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

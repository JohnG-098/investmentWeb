import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen pt-20 px-4 flex items-center justify-center
      bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/assets/galaxy.png')]
      bg-cover bg-center"
    >
      {/* Main Card */}
      <div className="w-full max-w-5xl bg-black/40 backdrop-blur-lg border border-amber-400/20 rounded-2xl shadow-2xl p-8 md:p-12">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-4">
          Contact Us
        </h2>

        <p className="text-center text-gray-400 mb-10">
          Have questions or need help? Reach out to us anytime.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left: Contact Info */}
          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-amber-400 text-xl" />
              <span className="text-gray-300">support@cryptovault.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-amber-400 text-xl" />
              <span className="text-gray-300">+1 234 567 890</span>
            </div>

            <div className="flex items-center gap-4">
              <FaLocationDot className="text-amber-400 text-xl" />
              <span className="text-gray-300">New York, USA</span>
            </div>

            {/* Socials */}
            <div className="flex gap-6 mt-4 text-2xl text-slate-400">
              <FaInstagram className="cursor-pointer hover:text-amber-400 transition" />
              <FaFacebook className="cursor-pointer hover:text-amber-400 transition" />
              <FaXTwitter className="cursor-pointer hover:text-amber-400 transition" />
            </div>

          </div>

          {/* Right: Contact Form */}
          <form className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3
              text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3
              text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3
              text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition resize-none"
            />

            <button
              className="bg-amber-400 text-black font-semibold py-3 rounded-lg
              hover:bg-amber-500 transition cursor-pointer"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
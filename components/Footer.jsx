"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#090E73] text-white py-12 shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Row 1: Logo and Basic Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 pb-8 border-b border-white/20">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold ml-3 tracking-wide">Brother Nur</h2>
          </div>
          <p className="text-center sm:text-left text-sm text-white/80 max-w-md">
            Your tagline or mission statement goes here. Express your brand’s purpose in a few words.
          </p>
        </div>

        {/* Row 2: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-semibold tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/90 hover:text-[#2EA60D] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#2EA60D] transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#2EA60D] transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#2EA60D] transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/90 hover:text-[#2EA60D] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#2EA60D] transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#2EA60D] transition-colors">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-wider mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/90 hover:text-[#2EA60D] transition-colors">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#2EA60D] transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#2EA60D] transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 3: Newsletter or Contact Info */}
        <div className="text-center py-10 border-t border-b border-white/10">
          <p className="text-lg mb-4">Subscribe to our Newsletter</p>
          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-64 border border-white/20 bg-white/10 placeholder-white/70 text-white focus:outline-none focus:border-[#2EA60D]"
            />
            <button className="bg-[#2EA60D] text-white px-6 py-3 rounded-lg hover:bg-[#248d0a] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-6 text-sm text-white/70">
          <p>© {new Date().getFullYear()} BES. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

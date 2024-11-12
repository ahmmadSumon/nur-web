"use client"
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#090E73] text-white py-12">
      <div className="max-w-6xl mx-auto px-5">
        {/* Row 1: Logo and Basic Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 pb-8 border-b border-white/20">
          <div className="flex items-center">
          
            <h2 className="text-2xl font-bold ml-3">Brother Nur</h2>
          </div>
          <p className="text-center sm:text-left text-sm text-white/80">Your tagline or mission statement goes here.</p>
        </div>

        {/* Row 2: Links */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 py-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-[#2EA60D]">About Us</a></li>
              <li><a href="#" className="hover:text-[#2EA60D]">Services</a></li>
              <li><a href="#" className="hover:text-[#2EA60D]">Blog</a></li>
              <li><a href="#" className="hover:text-[#2EA60D]">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-[#2EA60D]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#2EA60D]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#2EA60D]">Support</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-[#2EA60D]">Facebook</a></li>
              <li><a href="#" className="hover:text-[#2EA60D]">Twitter</a></li>
              <li><a href="#" className="hover:text-[#2EA60D]">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Row 3: Newsletter or Contact Info */}
        <div className="text-center py-8">
          <p className="text-lg">Subscribe to our Newsletter</p>
          <div className="flex justify-center gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg w-64"
            />
            <button className="bg-[#2EA60D] text-white px-6 py-2 rounded-lg">Subscribe</button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-4 text-sm">
          <p>© {new Date().getFullYear()} BES. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

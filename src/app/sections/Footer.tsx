"use client";

import { ArrowRightIcon, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Inter } from "next/font/google";

const bebasNeue = Inter({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "700",
});

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className={`${bebasNeue.className} text-3xl font-bold text-white mb-4`}>
              AD <span className="px-2 bg-white text-black">VIBE</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Grow your brand with result-driven digital marketing solutions that drive measurable growth and success.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">
                  Services
                </a>
              </li>
              
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">
                  Digital Advertising
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">
                  Brand Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">
                  Analytics & Reporting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:hello@advibe.com" className="text-gray-400 hover:text-white transition duration-300">
                  hello@advibe.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition duration-300">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <p className="text-gray-400">
                  123 Digital Street,<br />
                  Marketing City, MC 12345
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:opacity-80 transition duration-300 flex items-center gap-1">
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 AD VIBE. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

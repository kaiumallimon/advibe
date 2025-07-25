"use client";

import { ArrowRightIcon, MenuIcon, X } from "lucide-react";
import { Inter } from "next/font/google";
import { useState } from "react";

const bebasNeue = Inter({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "700",
});

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-black/60 ">

      {/* TopBar */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 py-3 bg-black text-white text-sm px-4">

                <p className="hidden md:block text-white/60 text-sm">
                    Grow your brand with result-driven digital marketing solutions.
                </p>

                <div className="flex items-center cursor-pointer hover:underline">
                    <p>Get started</p>
                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                </div>

            </div>

      {/* Main Header */}
      <div className="py-5 px-5 md:px-10 flex justify-center items-center">
        <div className="container flex justify-between items-center">
          <h1 className={`${bebasNeue.className} text-3xl font-bold text-black dark:text-white`}>
            AD <span className="px-2 bg-black text-white">VIBE</span>
          </h1>

          {isMobileMenuOpen ? (
            <X 
              className="cursor-pointer md:hidden text-black/80 dark:text-white/80 transition duration-300 hover:opacity-60" 
              onClick={toggleMobileMenu}
            />
          ) : (
            <MenuIcon 
              className="cursor-pointer md:hidden text-black/80 dark:text-white/80 transition duration-300 hover:opacity-60" 
              onClick={toggleMobileMenu}
            />
          )}

          <nav className="hidden md:flex items-center gap-8 text-black/80 dark:text-white/80">
            <a href="#" className="transition duration-300 hover:underline">Home</a>
            <a href="#" className="transition duration-300 hover:underline">About</a>
            <a href="#" className="transition duration-300 hover:underline">Services</a>
            <a href="#" className="transition duration-300 hover:underline">Contact</a>

            <button className="bg-black text-white px-4 py-2 rounded-3xl text-sm hover:opacity-60 transition duration-300">
              Get Started
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/60 dark:bg-black/60 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col py-4 px-5">
            <a 
              href="#" 
              className="py-3 text-black/80 dark:text-white/80 transition duration-300 hover:underline border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#" 
              className="py-3 text-black/80 dark:text-white/80 transition duration-300 hover:underline border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#" 
              className="py-3 text-black/80 dark:text-white/80 transition duration-300 hover:underline border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#" 
              className="py-3 text-black/80 dark:text-white/80 transition duration-300 hover:underline border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button 
              className="bg-black text-white px-4 py-3 rounded-3xl text-sm hover:opacity-60 transition duration-300 mt-4 self-start"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </nav>
        </div>
      )}

    </header>
  );
}

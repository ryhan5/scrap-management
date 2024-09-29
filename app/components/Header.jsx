"use client"; // Use this for Next.js

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ScrapSmart
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-green-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-200">
            About
          </Link>
          <Link href="/services" className="hover:text-green-200">
            Services
          </Link>
          {/* Link to Scrap Rates */}
          <Link href="/scrap-rates" className="hover:text-green-200">
            Scrap Rates
          </Link>
          <Link href="/contact" className="hover:text-green-200">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/submit"
          className="hidden md:inline-block bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-100 transition duration-300"
        >
          Submit Item
        </Link>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-green-700 px-4 py-2">
          <Link href="/" className="block py-2 hover:text-green-200">
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-green-200">
            About
          </Link>
          <Link href="/services" className="block py-2 hover:text-green-200">
            Services
          </Link>
          {/* Mobile link to Scrap Rates */}
          <Link href="/scrap-rates" className="block py-2 hover:text-green-200">
            Scrap Rates
          </Link>
          <Link href="/contact" className="block py-2 hover:text-green-200">
            Contact
          </Link>
          <Link
            href="/submit"
            className="block py-2 mt-2 bg-white text-green-600 text-center rounded-full font-semibold hover:bg-green-100 transition duration-300"
          >
            Submit Item
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

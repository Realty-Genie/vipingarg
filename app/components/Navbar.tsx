"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Coaching", href: "/coaching" },
    { label: "Investing", href: "#services" },
    { label: "Mortgages", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
          : "bg-navy-dark/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-main flex items-center justify-between h-[64px]">
        <Link href="/" className={`font-bold text-lg tracking-tight ${scrolled ? "text-navy" : "text-white"}`}>
          <span className="font-extrabold">VIPIN GARG</span>
          <span className={`text-xs font-medium ml-2 tracking-widest uppercase hidden sm:inline ${scrolled ? "text-grey-500" : "text-navy-200"}`}>
            Finance
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  scrolled ? "text-grey-600 hover:text-navy" : "text-navy-100 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  scrolled ? "text-grey-600 hover:text-navy" : "text-navy-100 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            )
          ))}
          <a
            href="#contact"
            className={`ml-3 text-[13px] font-semibold px-5 py-2.5 transition-colors duration-200 ${
              scrolled
                ? "bg-navy text-white hover:bg-navy-dark"
                : "bg-gold text-navy-dark hover:bg-gold-dark hover:text-white"
            }`}
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden text-2xl leading-none p-1 ${scrolled ? "text-navy" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-grey-200 pb-4 shadow-lg">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-5 py-3 text-grey-700 hover:text-navy hover:bg-navy-50 text-sm font-medium border-b border-grey-100"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-5 py-3 text-grey-700 hover:text-navy hover:bg-navy-50 text-sm font-medium border-b border-grey-100"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li className="px-5 pt-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-navy text-white text-sm font-semibold px-4 py-2.5 hover:bg-navy-dark transition-colors duration-200"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

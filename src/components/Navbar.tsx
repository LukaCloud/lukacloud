
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled
          ? "py-3 bg-white bg-opacity-80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-luka-navy">LUKA</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#security" className="nav-link">
            Security
          </a>
          <a href="#cloud" className="nav-link">
            Luka Cloud
          </a>
          <a href="#box" className="nav-link">
            Luka Box
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#waitlist" className="btn-primary">
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-luka-navy" />
          ) : (
            <Menu className="w-6 h-6 text-luka-navy" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4 bg-white shadow-md">
          <div className="flex flex-col space-y-4 pt-2 pb-4">
            <a
              href="#features"
              className="nav-link px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#security"
              className="nav-link px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Security
            </a>
            <a
              href="#cloud"
              className="nav-link px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Luka Cloud
            </a>
            <a
              href="#box"
              className="nav-link px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Luka Box
            </a>
            <a
              href="#waitlist"
              className="btn-primary w-full justify-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

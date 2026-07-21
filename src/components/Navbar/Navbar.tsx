import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import logoSvg from '../../assets/logos/hublogo (1).svg';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: 'Why Us', path: '#why-us' },
    { name: 'Amenities', path: '#amenities' },
    { name: 'Master Plan', path: '#master-plan' },
    { name: 'Location', path: '#location' },
    { name: 'Reviews', path: '#reviews' },
    { name: 'Gallery', path: '#gallery' },
  ];

  // Hide navbar when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div
      className={`fixed w-full z-50 top-4 px-4 md:px-8 transition-all duration-500 ${
        hidden ? '-translate-y-32 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto bg-gradient-to-r from-[#121316]/95 via-[#1a1c22]/95 to-[#121316]/95 backdrop-blur-lg rounded-full px-6 py-2.5 flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/15">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logoSvg}
            alt="Aliens Hub Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-white font-serif font-bold tracking-widest text-lg hidden sm:block">ALIENS HUB</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="font-semibold text-[14px] text-white hover:text-[#8ac440] transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-enquire-modal'))}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5bb1d9] to-[#60b6cc] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            <span>Schedule a Visit</span>
            <FaArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#8ac440] focus:outline-none"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-full left-4 right-4 mt-2 bg-[#1a1c22]/95 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 ease-in-out border border-white/10 ${
          isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-base font-semibold text-white hover:text-[#8ac440] rounded-lg hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              window.dispatchEvent(new CustomEvent('open-enquire-modal'));
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 mt-4 rounded-full bg-gradient-to-r from-[#5bb1d9] to-[#60b6cc] text-white font-semibold"
          >
            <span>Schedule a Visit</span>
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

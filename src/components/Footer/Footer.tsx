import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { Container } from '../Common/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Company Info */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
              ALIENS HUB
            </h2>
            <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
              Premium Plotted Development on Srisailam Highway featuring Renaissance-themed living with world-class amenities,For more info visit our Website : <br />
              <a href="https://aliensgroup.in/alienshub/overview" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                https://aliensgroup.in/alienshub/overview
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-900 hover:text-[#8ac440] transition-colors">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="text-gray-900 hover:text-[#8ac440] transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-gray-900 hover:text-[#8ac440] transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-900 hover:text-[#8ac440] transition-colors">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="text-gray-900 hover:text-[#8ac440] transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-500 hover:text-gray-900 text-[13.5px] transition-colors">Why Us</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-gray-900 text-[13.5px] transition-colors">Amenities</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-gray-900 text-[13.5px] transition-colors">Master Plan</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-gray-900 text-[13.5px] transition-colors">Location</Link></li>
              <li><Link to="#" className="text-gray-500 hover:text-gray-900 text-[13.5px] transition-colors">Reviews</Link></li>
              <li><Link to="/gallery" className="text-gray-500 hover:text-gray-900 text-[13.5px] transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Investors */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">
              Investors
            </h3>
            <ul className="space-y-3">
              <li><span className="text-gray-500 text-[13.5px]">Swamih</span></li>
              <li><span className="text-gray-500 text-[13.5px]">Phoenix</span></li>
              <li><span className="text-gray-500 text-[13.5px]">Nifco</span></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-gray-500 flex-shrink-0" size={16} />
                <span className="text-gray-500 text-[13.5px]">7330-640-040</span>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-gray-500 flex-shrink-0" size={16} />
                <span className="text-gray-500 text-[13.5px]">info@alienshub.com</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-gray-500 flex-shrink-0" size={16} />
                <span className="text-gray-500 text-[13.5px] leading-snug">Srisailam Highway, Hyderabad, <br /> Telangana</span>
              </li>
            </ul>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-enquire-modal'))}
              className="bg-gradient-to-r from-[#8ac440] to-[#5bb1d9] text-white px-6 py-2.5 rounded text-sm font-semibold shadow-md hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              ENQUIRE NOW <span>→</span>
            </button>
          </div>

        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col items-center text-center">
          <h4 className="text-[15px] font-bold text-gray-800 mb-3 font-serif">Disclaimer</h4>
          <p className="text-gray-500 text-[12.5px] leading-relaxed max-w-4xl mx-auto">
            Aliens Group values your privacy and collects only basic details like your name, contact information, and project preferences—never financial data. We use this information solely to respond to inquiries and share updates with your consent. Your data is never sold or shared and is protected with strict security measures, then deleted when no longer needed. You may request to update or remove your information or opt out of communications anytime. This Policy may be updated periodically.
          </p>
        </div>
      </Container>
    </footer>
  );
};

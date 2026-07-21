import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

export const EnquireModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-enquire-modal', handleOpen);
    return () => window.removeEventListener('open-enquire-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-xl rounded shadow-2xl relative animate-in zoom-in-95 duration-300 overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors z-10"
        >
          <FaTimes size={12} />
        </button>

        <div className="px-10 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-[22px] font-semibold text-gray-900 tracking-wide mb-3">
              Book Your Visit Now
            </h2>
            <p className="text-gray-500 text-[14.5px]">
              Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="relative">
                <label className="text-[11px] text-gray-900 uppercase font-semibold tracking-wider mb-2 block">
                  Full Name <span className="text-black">*</span>
                </label>
                <input 
                  type="text"
                  className="w-full border-b border-gray-300 pb-2 text-sm text-gray-900 focus:outline-none focus:border-gray-900 bg-transparent"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <label className="text-[11px] text-gray-900 uppercase font-semibold tracking-wider mb-2 block">
                  Phone Number <span className="text-black">*</span>
                </label>
                <div className="flex border-b border-gray-300 pb-2 items-end">
                  <select className="bg-transparent text-sm text-gray-900 focus:outline-none cursor-pointer pr-1">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input 
                    type="tel"
                    className="w-full pl-2 text-sm text-gray-900 focus:outline-none focus:border-gray-900 bg-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="relative">
                <label className="text-[11px] text-gray-900 uppercase font-semibold tracking-wider mb-2 block">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full border-b border-gray-300 pb-2 text-sm text-gray-900 focus:outline-none focus:border-gray-900 bg-transparent"
                />
              </div>

              {/* Budget */}
              <div className="relative">
                <label className="text-[11px] text-gray-900 uppercase font-semibold tracking-wider mb-2 block">
                  Budget
                </label>
                <select className="w-full border-b border-gray-300 pb-2 text-sm text-gray-400 focus:outline-none focus:border-gray-900 bg-transparent cursor-pointer appearance-none">
                  <option value="" disabled selected>Select Budget</option>
                  <option value="50L-1Cr" className="text-black">50L - 1Cr</option>
                  <option value="1Cr-3Cr" className="text-black">1Cr - 3Cr</option>
                  <option value="3Cr+" className="text-black">3Cr+</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-0 bottom-3 pointer-events-none text-gray-400">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button 
                type="submit"
                className="bg-gradient-to-r from-[#8ac440] to-[#5bb1d9] text-white px-8 py-2.5 rounded text-[13px] font-bold tracking-wide shadow-md hover:opacity-90 transition-opacity inline-flex items-center gap-2 uppercase"
              >
                SUBMIT
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

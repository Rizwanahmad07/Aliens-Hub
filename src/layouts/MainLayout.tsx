import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { EnquireModal } from '../components/Modal/EnquireModal';
import { FaRegEdit } from 'react-icons/fa';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const openModal = () => {
    window.dispatchEvent(new CustomEvent('open-enquire-modal'));
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Global Enquire Modal */}
      <EnquireModal />

      {/* Sticky Enquire Side Tab */}
      <button 
        onClick={openModal}
        className="fixed right-0 top-[60%] sm:top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-[#5bb1d9] to-[#8ac440] text-white px-1.5 sm:px-2 py-3 sm:py-4 rounded-l-md shadow-lg z-40 flex flex-col items-center gap-1 hover:opacity-90 transition-opacity opacity-90 hover:opacity-100"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Enquire"
      >
        <FaRegEdit className="w-3 h-3 sm:w-4 sm:h-4 mb-1 rotate-90" />
        <span className="font-semibold tracking-widest text-[10px] sm:text-[13px] uppercase">Enquire</span>
      </button>
    </div>
  );
};

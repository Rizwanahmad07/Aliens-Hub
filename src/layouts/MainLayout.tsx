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
    <div className="flex flex-col min-h-screen relative">
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
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-[#5bb1d9] to-[#8ac440] text-white px-2 py-4 rounded-l-md shadow-lg z-40 flex flex-col items-center gap-2 hover:opacity-90 transition-opacity"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <FaRegEdit className="w-4 h-4 mb-1 rotate-90" />
        <span className="font-semibold tracking-widest text-[13px] uppercase">Enquire</span>
      </button>
    </div>
  );
};

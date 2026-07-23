import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../Common/Container';
import { FaLock, FaChevronLeft } from 'react-icons/fa';

import MasterplanMain from '../../assets/images/MASTER PLAN & LAYOUT/Masterplan_main.png';

import cytheriaImg from '../../assets/images/MASTER PLAN & LAYOUT/cytheria.png';
import cytheriaLayout from '../../assets/images/MASTER PLAN & LAYOUT/cytherialayout.png';

import bloomingForestImg from '../../assets/images/MASTER PLAN & LAYOUT/blooming_forest.png';
import bloomingLayout from '../../assets/images/MASTER PLAN & LAYOUT/bloominglayout.png';

import breezyHillsImg from '../../assets/images/MASTER PLAN & LAYOUT/breezyhillshub.png';
import breezyHillsLayout from '../../assets/images/MASTER PLAN & LAYOUT/breezyhillslayout.png';

import mangoGardenImg from '../../assets/images/MASTER PLAN & LAYOUT/mangogardenhub.png';
import mangoGardenLayout from '../../assets/images/MASTER PLAN & LAYOUT/mangogardenlayout.png';

import corinthHillImg from '../../assets/images/MASTER PLAN & LAYOUT/corithhill.png';
import corinthHillLayout from '../../assets/images/MASTER PLAN & LAYOUT/corinthhilllayout.png';

import tigerLineImg from '../../assets/images/MASTER PLAN & LAYOUT/tigerlinehub.png';
import tigerLineLayout from '../../assets/images/MASTER PLAN & LAYOUT/tigerlinelayout.png';

import unlockBanner from '../../assets/images/MASTER PLAN & LAYOUT/sec5bg.avif';

const layoutsData = [
  {
    id: "blooming-forest",
    name: "Blooming Forest",
    description: "Discover a serene layout nested in nature's lap with lush greenery and peaceful surroundings. Perfectly designed for those seeking tranquility away from the bustling city.",
    mainImage: bloomingForestImg,
    thumbnail: bloomingLayout,
  },
  {
    id: "cytheria",
    name: "Cytheria",
    description: "Welcome to Cytheria, the most prestigious layout in Aliens Hub, crafted for those who dream big. With grand plots, it's the ideal canvas for your private estate villa, surrounded by nature and elegance. Perfectly located at the heart of the Hub, Cytheria offers unmatched access to key amenities — just steps from the lake and clubhouse.",
    mainImage: cytheriaImg,
    thumbnail: cytheriaLayout,
  },
  {
    id: "breezy-hills",
    name: "Breezy Hills",
    description: "Experience elevated living at Breezy Hills, offering breathtaking panoramic views and a constant gentle breeze. An ideal setting for luxury villas surrounded by pristine landscapes.",
    mainImage: breezyHillsImg,
    thumbnail: breezyHillsLayout,
  },
  {
    id: "mango-garden",
    name: "Mango Garden",
    description: "Immerse yourself in the lush, verdant environment of Mango Garden. A beautiful neighborhood that blends natural beauty with premium amenities for a perfect family home.",
    mainImage: mangoGardenImg,
    thumbnail: mangoGardenLayout,
  },
  {
    id: "corinth-hill",
    name: "Corinth Hill",
    description: "Corinth Hill presents an exclusive hilltop living experience. Enjoy ultimate privacy, spectacular sunrise views, and easy access to the hub's recreational facilities.",
    mainImage: corinthHillImg,
    thumbnail: corinthHillLayout,
  },
  {
    id: "tiger-line",
    name: "Tiger Line",
    description: "Strategically positioned adjacent to the 18-hole golf course, Tiger Line offers unparalleled views of the fairways and greens. The perfect enclave for golf enthusiasts.",
    mainImage: tigerLineImg,
    thumbnail: tigerLineLayout,
  }
];

export const MasterPlan: React.FC = () => {
  const [activeLayoutId, setActiveLayoutId] = useState<string | null>(null);

  const activeLayout = layoutsData.find(l => l.id === activeLayoutId);

  return (
    <section className="flex flex-col">
      {/* Top Banner: Unlock plot prices */}
      <div className="relative w-full min-h-[300px] md:h-[320px] py-8 md:py-12 flex flex-col items-center justify-center bg-black/40">
        <img src={unlockBanner} alt="Unlock plot prices" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
          <h2 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold italic font-serif mb-6 md:mb-10 drop-shadow-lg">
            Unlock plot prices
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 px-2 sm:px-4 w-full max-w-5xl">
            {['< 300 Sq Yards', '300 - 500 Sq Yards', '> 500 Sq Yards'].map((label, idx) => (
              <button 
                key={idx}
                onClick={() => window.dispatchEvent(new CustomEvent('open-enquire-modal'))}
                className="flex flex-col items-center justify-center gap-1.5 border border-white/40 bg-black/35 backdrop-blur-md px-4 py-3 md:px-8 md:py-5 rounded-md hover:bg-black/55 transition-colors w-full"
              >
                <span className="text-white font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">{label}</span>
                <FaLock className="text-white text-base md:text-2xl mt-0.5 opacity-90" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white py-12 md:py-20">
        <Container>
          <h2 className="text-center text-[24px] sm:text-[28px] md:text-[36px] font-serif uppercase tracking-widest text-gray-900 mb-8 md:mb-12">
            Master Plan & Layout
          </h2>

          {/* MOBILE VIEW (Stack & Scrollable Tabs) */}
          <div className="block md:hidden space-y-6">
            {/* Phase Selector Horizontal Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none snap-x px-1">
              <button
                onClick={() => setActiveLayoutId(null)}
                className={`flex-shrink-0 px-4 py-2 text-xs font-bold rounded-lg border transition-colors snap-start ${
                  activeLayoutId === null
                    ? 'bg-black text-white border-black'
                    : 'bg-gray-100 text-gray-700 border-gray-200'
                }`}
              >
                Main Overview
              </button>
              {layoutsData.map((layout) => (
                <button
                  key={layout.id}
                  onClick={() => setActiveLayoutId(layout.id)}
                  className={`flex-shrink-0 px-4 py-2 text-xs font-bold rounded-lg border transition-colors snap-start ${
                    activeLayoutId === layout.id
                      ? 'bg-black text-white border-black'
                      : 'bg-gray-100 text-gray-700 border-gray-200'
                  }`}
                >
                  {layout.name}
                </button>
              ))}
            </div>

            {/* Layout Map Display */}
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-[#fafafa] shadow-md relative min-h-[250px] flex items-center justify-center p-2">
              <img
                src={activeLayout ? activeLayout.mainImage : MasterplanMain}
                alt={activeLayout ? activeLayout.name : "Masterplan Main"}
                className="w-full h-auto max-h-[350px] object-contain rounded-lg"
              />
              {activeLayout && (
                <button 
                  onClick={() => setActiveLayoutId(null)}
                  className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md"
                >
                  <FaChevronLeft size={10} /> Back
                </button>
              )}
            </div>

            {/* Layout Details on Mobile */}
            {activeLayout && (
              <div className="bg-gray-900 text-white p-5 rounded-xl space-y-4 shadow-lg">
                <h3 className="text-xl font-bold">{activeLayout.name}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">{activeLayout.description}</p>
                {activeLayout.thumbnail && (
                  <div className="border border-white/20 rounded-lg overflow-hidden mt-3 max-w-[200px]">
                    <img src={activeLayout.thumbnail} alt={`${activeLayout.name} Thumbnail`} className="w-full h-auto object-cover" />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* DESKTOP VIEW (Interactive Overlay) */}
          <div className="hidden md:block relative w-full max-w-6xl mx-auto h-[600px] lg:h-[700px] shadow-2xl overflow-hidden border border-gray-100 bg-white group">
            
            <AnimatePresence mode="wait">
              {!activeLayout ? (
                /* Default View (Map) */
                <motion.div
                  key="map-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full bg-[#fafafa]"
                >
                  <img 
                    src={MasterplanMain} 
                    alt="Masterplan Main Layout" 
                    className="w-full h-full object-contain mix-blend-multiply opacity-95 p-8"
                  />
                  
                  {/* Left Menu - Default State */}
                  <div className="absolute top-12 left-12 flex flex-col gap-3 z-20">
                    {layoutsData.map((layout) => (
                      <button
                        key={layout.id}
                        onClick={() => setActiveLayoutId(layout.id)}
                        className="bg-black text-white text-[15px] font-bold px-6 py-2.5 min-w-[200px] border border-white/20 hover:bg-gray-800 transition-colors shadow-lg"
                      >
                        {layout.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                /* Detail View (Specific Layout) */
                <motion.div
                  key="detail-view"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={activeLayout.mainImage} 
                    alt={activeLayout.name} 
                    className="w-full h-full object-cover"
                  />

                  {/* Back Button */}
                  <button 
                    onClick={() => setActiveLayoutId(null)}
                    className="absolute top-8 left-12 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors z-30 shadow-lg"
                  >
                    <FaChevronLeft className="mr-1" />
                  </button>

                  {/* Left Menu - Detail State */}
                  <div className="absolute top-24 left-12 flex flex-col gap-3 z-20">
                    {layoutsData.map((layout) => (
                      <button
                        key={layout.id}
                        onClick={() => setActiveLayoutId(layout.id)}
                        className={`text-[15px] font-bold px-6 py-2.5 min-w-[200px] border shadow-lg transition-colors ${
                          activeLayoutId === layout.id 
                            ? 'bg-black text-white border-white/30' 
                            : 'bg-black text-white border-white/20 hover:bg-gray-800'
                        }`}
                      >
                        {layout.name}
                      </button>
                    ))}
                  </div>

                  {/* Bottom Left Thumbnail */}
                  <div className="absolute bottom-6 left-12 z-20 border-[3px] border-white shadow-2xl bg-white w-[280px]">
                    <img 
                      src={activeLayout.thumbnail} 
                      alt={`${activeLayout.name} Layout Plan`} 
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Bottom Right Details Box */}
                  <div className="absolute bottom-6 right-12 z-20 bg-black/60 backdrop-blur-md border border-white/20 rounded-md p-6 max-w-md shadow-2xl">
                    <h3 className="text-white text-2xl font-bold mb-3">
                      {activeLayout.name}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {activeLayout.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Container>
      </div>
    </section>
  );
};

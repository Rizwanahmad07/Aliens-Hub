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
      <div className="relative w-full h-[250px] md:h-[300px]">
        <img src={unlockBanner} alt="Unlock plot prices" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center pt-8">
          <h2 className="text-white text-5xl md:text-7xl font-bold italic font-serif mb-12 drop-shadow-lg">
            Unlock plot prices
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4 w-full max-w-5xl">
            {['< 300 Sq Yards', '300 - 500 Sq Yards', '> 500 Sq Yards'].map((label, idx) => (
              <button 
                key={idx}
                className="flex flex-col items-center justify-center gap-2 border border-white/40 bg-black/20 backdrop-blur-md px-6 py-4 md:px-10 md:py-6 rounded-md hover:bg-black/40 transition-colors flex-1 max-w-[280px]"
              >
                <span className="text-white font-bold text-sm md:text-lg whitespace-nowrap">{label}</span>
                <FaLock className="text-white text-xl md:text-2xl mt-1 opacity-90" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="text-center text-[28px] md:text-[36px] font-serif uppercase tracking-widest text-gray-900 mb-12">
            Master Plan & Layout
          </h2>

          <div className="relative w-full max-w-6xl mx-auto h-[500px] md:h-[600px] lg:h-[700px] shadow-2xl overflow-hidden border border-gray-100 bg-white group">
            
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
                    className="w-full h-full object-contain mix-blend-multiply opacity-95 p-4 md:p-8"
                  />
                  
                  {/* Left Menu - Default State */}
                  <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-3 z-20">
                    {layoutsData.map((layout) => (
                      <button
                        key={layout.id}
                        onClick={() => setActiveLayoutId(layout.id)}
                        className="bg-black text-white text-[13px] md:text-[15px] font-bold px-6 py-2.5 min-w-[160px] md:min-w-[200px] border border-white/20 hover:bg-gray-800 transition-colors shadow-lg"
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
                    className="absolute top-8 left-6 md:left-12 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors z-30 shadow-lg"
                  >
                    <FaChevronLeft className="mr-1" />
                  </button>

                  {/* Left Menu - Detail State */}
                  <div className="absolute top-24 left-6 md:left-12 flex flex-col gap-3 z-20">
                    {layoutsData.map((layout) => (
                      <button
                        key={layout.id}
                        onClick={() => setActiveLayoutId(layout.id)}
                        className={`text-[13px] md:text-[15px] font-bold px-6 py-2.5 min-w-[160px] md:min-w-[200px] border shadow-lg transition-colors ${
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
                  <div className="absolute bottom-6 left-6 md:left-12 z-20 border-[3px] border-white shadow-2xl bg-white w-[200px] md:w-[280px]">
                    <img 
                      src={activeLayout.thumbnail} 
                      alt={`${activeLayout.name} Layout Plan`} 
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Bottom Right Details Box */}
                  <div className="absolute bottom-6 right-6 md:right-12 z-20 bg-black/60 backdrop-blur-md border border-white/20 rounded-md p-6 max-w-sm md:max-w-md shadow-2xl">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
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

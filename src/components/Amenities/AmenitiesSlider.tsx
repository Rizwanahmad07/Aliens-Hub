import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../Common/Container';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import artemisImg from '../../assets/images/Amenities/artemis-night-camping.png';
import golfImg from '../../assets/images/Amenities/golfcourse.png';
import oureaImg from '../../assets/images/Amenities/daios-amphitheatre.png';
import atlantisImg from '../../assets/images/Amenities/atlantis-lakeside-amenities.png';
import enigmaImg from '../../assets/images/Amenities/enigma-cave-living.png';
import grandImg from '../../assets/images/Amenities/grand-hilltop-clubhouse.png';
import astraImg from '../../assets/images/Amenities/astra-night-trails.png';

const amenitiesData = [
  {
    id: 0,
    title: "Artemis Night Camping",
    description: "Set on a stunning highland, Artemis offers the perfect backdrop for stargazing and camping under the open sky, where every night feels like an escape.",
    button: "See More",
    image: artemisImg
  },
  {
    id: 1,
    title: "18-hole Hilltop Golf Course",
    description: "Aliens Hub offers a world-class 18-hole championship golf course spread across 69 scenic acres, where natural ponds, rugged boulders, and wild terrain turn every game into an immersive experience.",
    button: "See More",
    image: golfImg
  },
  {
    id: 2,
    title: "Ourea Nature Park",
    description: "Ourea is a vibrant outdoor park designed for families to enjoy together, offering tree climbs, giant slides, bike tracks, zip lines and a variety of exciting activities that create fun and memorable experiences.",
    button: "See More",
    image: oureaImg
  },
  {
    id: 3,
    title: "Atlantis Lakeside Amenities",
    description: "Every lake in the project is wrapped in thoughtfully designed sit out zones, each with its own unique theme, offering peaceful corners for reflection and relaxation.",
    button: "See More",
    image: atlantisImg
  },
  {
    id: 4,
    title: "Enigma Cave Living",
    description: "Embrace the rare natural cave dwellings, transformed into private hideaways that offer solitude, serenity, and a connection to the earth.",
    button: "See More",
    image: enigmaImg
  },
  {
    id: 5,
    title: "Grand Hilltop Clubhouse",
    description: "Rising majestically across 10 acres, the 3-floor grand clubhouse which can host over 800 guests redefines luxury with a mini cinema, gym, indoor and outdoor pools, conference spaces, stay cottages, and many more.",
    button: "See More",
    image: grandImg
  },
  {
    id: 6,
    title: "Astra Night Trails",
    description: "Wander through starlit hills, valleys and open fields with curated night trails that cater to different time commitments and fitness targets, making nature your nighttime companion.",
    button: "See More",
    image: astraImg
  }
];

export const AmenitiesSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % amenitiesData.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + amenitiesData.length) % amenitiesData.length);
  };

  const getVisibleThumbnails = () => {
    const thumbs = [];
    // Show the next 3 slides
    for (let i = 1; i <= 3; i++) {
      thumbs.push(amenitiesData[(activeIndex + i) % amenitiesData.length]);
    }
    return thumbs;
  };

  const currentAmenity = amenitiesData[activeIndex];

  return (
    <section className="py-20 bg-[#fafafa]">
      <Container>
        {/* Centered Heading */}
        <h2 className="text-3xl md:text-[40px] font-serif text-center mb-16 tracking-widest text-gray-900 uppercase">
          Amenities
        </h2>

        {/* Main Slider Container */}
        <div className="relative w-full mx-auto h-[450px] md:h-[600px] overflow-hidden bg-black shadow-lg">
          
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={currentAmenity.image}
              alt={currentAmenity.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Left Overlay Content */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-gradient-to-r from-black/90 via-black/60 to-transparent p-8 md:p-16 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-[26px] md:text-[34px] font-bold text-white mb-4 uppercase leading-tight font-serif tracking-wide">
                  {currentAmenity.title}
                </h3>
                <p className="text-white/95 text-[14.5px] leading-relaxed mb-8 max-w-md">
                  {currentAmenity.description}
                </p>
                <button className="bg-white text-black font-bold px-7 py-2.5 rounded shadow hover:bg-gray-100 transition-colors text-sm">
                  {currentAmenity.button}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Download Brochure Button at Bottom Center */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <button className="bg-gradient-to-r from-[#8ac440] to-[#5bb1d9] text-white px-7 py-2.5 rounded-full font-bold shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2 text-sm tracking-wide">
              Download Brochure →
            </button>
          </div>

          {/* Navigation Arrows at Bottom Right */}
          <div className="absolute bottom-6 right-6 z-20 flex gap-3">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Thumbnails (Desktop Only) */}
          <div className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 gap-4 translate-x-1/4 pr-8 z-20">
            {getVisibleThumbnails().map((thumb, idx) => (
              <motion.div
                key={thumb.id + "-" + activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveIndex(thumb.id)}
                className={`relative w-44 lg:w-48 h-60 lg:h-64 rounded-xl overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105`}
              >
                <img src={thumb.image} alt={thumb.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

        </div>
        
        {/* Mobile Thumbnails */}
        <div className="md:hidden flex overflow-x-auto gap-3 mt-6 pb-4 px-4 snap-x">
          {amenitiesData.map((thumb) => (
            <div 
              key={thumb.id}
              onClick={() => setActiveIndex(thumb.id)}
              className={`flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden snap-center cursor-pointer border-2 transition-all ${activeIndex === thumb.id ? 'border-[#8ac440]' : 'border-transparent opacity-60'}`}
            >
              <img src={thumb.image} alt={thumb.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

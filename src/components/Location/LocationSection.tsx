import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import mapImage from '../../assets/images/AreaMap/Map.jpg';

export const LocationSection: React.FC = () => {
  const connectivityData = [
    { label: 'RRR', time: '05 Mins' },
    { label: 'Airport', time: '35 Mins' },
    { label: 'Mucherla 4th City', time: '15 Mins' },
    { label: 'Manchester International School', time: '15 Mins' },
    { label: 'Amazon Data Center', time: '25 Mins' },
  ];

  return (
    <section id="location" className="py-20 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <h2 className="text-center text-[24px] sm:text-[28px] md:text-[36px] font-serif uppercase tracking-widest text-gray-900 mb-8 md:mb-12">
          Location
        </h2>

        {/* Map & Connectivity Container */}
        <div className="max-w-5xl mx-auto flex flex-col md:block relative">

          {/* Seamless Connectivity Card (Mobile: stacked first, Desktop: absolute overlay) */}
          <div className="relative md:absolute md:top-10 md:left-10 bg-[#faf9f6] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-5 sm:p-6 md:p-8 w-full md:w-[320px] z-20 border border-gray-100 mb-6 md:mb-0">
            <h3 className="text-lg sm:text-[22px] font-serif text-gray-800 mb-4 sm:mb-6 tracking-wide font-bold">
              Seamless Connectivity
            </h3>
            
            <ul className="space-y-3 sm:space-y-4">
              {connectivityData.map((item, index) => (
                <li key={index} className="flex justify-between items-center text-xs sm:text-[14px]">
                  <span className="text-gray-700 font-medium">{item.label}</span>
                  <span className="text-gray-900 font-semibold ml-2 flex-shrink-0">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Container */}
          <div className="relative w-full rounded-xl shadow-lg border border-gray-100 bg-white overflow-hidden">
            <a 
              href="https://www.google.com/maps/search/Aliens+Hub,+Srisailam+Highway,+Hyderabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer"
            >
              <img 
                src={mapImage} 
                alt="Aliens Hub Location Map" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 min-h-[260px] max-h-[600px]"
                style={{ objectPosition: 'center' }}
              />
            </a>

            {/* View Map Button */}
            <div className="mt-4 pb-4 md:pb-0 md:mt-0 flex justify-center md:absolute md:-bottom-5 md:left-1/2 md:transform md:-translate-x-1/2 md:z-20">
              <a 
                href="https://www.google.com/maps/search/Aliens+Hub,+Srisailam+Highway,+Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 text-gray-900 font-medium px-6 sm:px-8 py-2.5 sm:py-3 flex items-center gap-2.5 shadow-md hover:shadow-lg transition-shadow rounded-full sm:rounded-sm text-xs sm:text-sm"
              >
                <span>View Google Map</span>
                <FaArrowRight size={12} className="text-gray-900" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

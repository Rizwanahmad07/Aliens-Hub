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
        <h2 className="text-center text-[28px] md:text-[36px] font-serif uppercase tracking-widest text-gray-900 mb-12">
          Location
        </h2>

        {/* Map Container */}
        <div className="relative w-full max-w-5xl mx-auto rounded-xl shadow-lg border border-gray-100 bg-white">
          
          {/* Map Image */}
          <div className="w-full overflow-hidden cursor-pointer">
            <a 
              href="https://www.google.com/maps/search/Aliens+Hub,+Srisailam+Highway,+Hyderabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img 
                src={mapImage} 
                alt="Aliens Hub Location Map" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                style={{ maxHeight: '600px', objectPosition: 'center' }}
              />
            </a>
          </div>

          {/* Floating Connectivity Card */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12 bg-[#faf9f6] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 w-[280px] md:w-[320px] z-10 border border-gray-100">
            <h3 className="text-[22px] font-serif text-gray-800 mb-6 tracking-wide">
              Seamless Connectivity
            </h3>
            
            <ul className="space-y-4">
              {connectivityData.map((item, index) => (
                <li key={index} className="flex justify-between items-center text-[13px] md:text-[14px]">
                  <span className="text-gray-700 font-medium">{item.label}</span>
                  <span className="text-gray-900 font-semibold">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* View Map Button (Overlapping Bottom Center) */}
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-20">
            <a 
              href="https://www.google.com/maps/search/Aliens+Hub,+Srisailam+Highway,+Hyderabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 text-gray-900 font-medium px-8 py-3 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow rounded-sm text-sm"
            >
              View Map
              <FaArrowRight size={12} className="text-gray-900" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import gallery1 from '../../assets/images/Gallary/gallery1.avif';
import gallery2 from '../../assets/images/Gallary/gallery2.avif';
import gallery3 from '../../assets/images/Gallary/gallery3.webp';
import gallery4 from '../../assets/images/Gallary/gallery4.webp';
import gallery5 from '../../assets/images/Gallary/gallery5.webp';
import gallery6 from '../../assets/images/Gallary/gallery6.webp';
import gallery8 from '../../assets/images/Gallary/gallery8.avif';
import gallery9 from '../../assets/images/Gallary/gallery9.webp';
import gallery10 from '../../assets/images/Gallary/gallery10.webp';
import gallery11 from '../../assets/images/Gallary/gallery11.webp';

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery8, gallery9, gallery10, gallery11
];

export const GallerySection: React.FC = () => {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-center text-[28px] md:text-[36px] font-serif uppercase tracking-widest text-gray-900 mb-12">
          Gallery
        </h2>
        
        <div className="w-full">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full py-10"
            style={{ 
              '--swiper-pagination-color': '#000000', 
              '--swiper-pagination-bullet-inactive-color': '#cccccc',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-size': '8px',
              '--swiper-pagination-bullet-horizontal-gap': '6px'
            } as React.CSSProperties}
          >
            {galleryImages.map((img, index) => (
              <SwiperSlide key={index} className="bg-transparent flex justify-center items-center py-4">
                {({ isActive }) => (
                  <div className={`transition-all duration-500 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full max-w-[400px] mx-auto h-[350px] md:h-[500px] ${isActive ? 'opacity-100 scale-100 blur-none z-10 relative' : 'opacity-70 scale-[0.85] blur-[1px]'}`}>
                    <img 
                      src={img} 
                      alt={`Gallery image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

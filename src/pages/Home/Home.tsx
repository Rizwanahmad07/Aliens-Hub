import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '../../components/Common/Container';
import { AmenitiesSlider } from '../../components/Amenities/AmenitiesSlider';
import { MasterPlan } from '../../components/MasterPlan/MasterPlan';
import { GallerySection } from '../../components/Gallery/GallerySection';
import { LocationSection } from '../../components/Location/LocationSection';

// Mock Data
import heroImage from '../../assets/images/Header/hublanding_banner4_desktop.avif';
import whyUsImage from '../../assets/images/whyus/New_Jubilee_Hills_Aboutus.webp';

// Project Highlights icons
import approveIcon from '../../assets/images/project/approve.svg';
import locationIcon from '../../assets/images/project/google-marker.svg';
import planeIcon from '../../assets/images/project/plane.svg';
import woodIcon from '../../assets/images/project/wood.svg';
import flagIcon from '../../assets/images/project/flag.svg';
import golfIcon from '../../assets/images/project/golf-club.svg';
import hillsIcon from '../../assets/images/project/hills.svg';
import wifiIcon from '../../assets/images/project/wifi.svg';
import destinationIcon from '../../assets/images/project/destination.svg';

// AreaMap images
import areaMapImage from '../../assets/images/AreaMap/Map.jpg';
import areaMapBg from '../../assets/images/AreaMap/sec3bg.avif';

export const Home: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('Major Landmarks');
  const reviewsScrollRef = useRef<HTMLDivElement>(null);

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      reviewsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const locationAccordionData = [
    {
      title: 'Major Landmarks',
      content: [
        { label: 'Airport', value: '30 Min' },
        { label: 'ORR Exit 14', value: '20 Min' },
        { label: 'Bharat Future City', value: '10 Min' }
      ]
    },
    {
      title: 'Education',
      content: [
        { label: 'Manchester Global School', value: '15 mins' },
        { label: 'Aga Khan Academy', value: '25 mins' },
        { label: 'Delhi Public School', value: '30 mins' }
      ]
    },
    {
      title: 'Hospitals',
      content: [
        { label: 'Apollo Hospitals', value: '30 mins' },
        { label: 'Local Hospital Near Tukkuguda', value: '20 mins' }
      ]
    },
    {
      title: 'Connectivity',
      content: [
        { label: 'Srisailam Highway', value: '10 mins' },
        { label: 'Outer Ring Road', value: '20 mins' },
        { label: 'Regional Ring Road', value: '5 mins' }
      ]
    },
    {
      title: 'Weekend Gateways',
      content: [
        { label: 'Srisailam', value: '' },
        { label: 'Nagarjuna Sagar', value: '' },
        { label: 'Ananthagiri Hills', value: '' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Aliens Hub | Premium Real Estate</title>
        <meta name="description" content="Discover premium luxury living with Aliens Hub. Explore our exclusive projects and properties." />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative min-h-[100dvh] flex items-center bg-cover bg-center bg-no-repeat py-24 sm:py-32"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay with subtle gradient */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

        {/* Content left-aligned with responsive padding */}
        <Container className="relative z-10 text-white pt-12 sm:pt-20 px-4 sm:px-8 md:pl-16 max-w-4xl w-full self-center">

          {/* Cursive intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Great_Vibes'] text-3xl sm:text-4xl md:text-[44px] mb-1 leading-tight text-[#8ac440]"
          >
            Hyderabad's
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px] leading-[1.08] font-bold font-serif mb-4"
          >
            Premium
            <br />
            <span className="text-[#8ac440]">Hilltop</span>{' '}
            <span className="text-white">Plots</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-lg md:text-[19px] mb-6 font-normal text-white/90"
          >
            Own a scenic hilltop plot at Aliens Hub
          </motion.p>

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-2 sm:gap-3 mb-8 max-w-md sm:max-w-lg"
          >
            {[
              { value: '35 Mins', label: 'AIRPORT' },
              { value: '200-1500', label: 'SQ YARDS' },
              { value: '1500+', label: 'CUSTOMERS' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-black/50 backdrop-blur-sm border border-[#8ac440]/70 rounded-lg px-2 sm:px-4 py-2 sm:py-3 text-center min-w-0"
              >
                <div className="text-xs sm:text-lg md:text-[22px] font-bold italic text-white leading-tight mb-1 truncate">
                  {stat.value}
                </div>
                <div className="text-[8px] sm:text-[10px] tracking-wider font-bold text-gray-300 uppercase truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Enquire CTA */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => window.dispatchEvent(new CustomEvent('open-enquire-modal'))}
            className="flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-md bg-[#8ac440] hover:bg-[#79b038] text-white font-semibold text-base sm:text-[17px] transition-colors shadow-lg"
          >
            <span>Enquire Now</span>
            <span className="text-lg">→</span>
          </motion.button>
        </Container>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden xs:block">
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50">
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            aria-label="WhatsApp Contact"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825.001 6.938 3.113 6.939 6.938-.001 3.825-3.114 6.938-6.939 6.938z" />
            </svg>
          </a>
        </div>
      </section>

      {/* About / Why Us Section */}
      <section id="why-us" className="py-20 md:py-32 relative overflow-hidden bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* LEFT — Text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Heading */}
              <h2 className="text-[28px] md:text-[34px] font-bold text-gray-900 leading-snug mb-1">
                Build your Dream Villa at
              </h2>
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#8ac440] leading-snug mb-5">
                Aliens Hub
              </h2>

              {/* Italic subtitle */}
              <p className="text-gray-500 italic text-[15px] mb-5">
                ...where scenic living meets smart investment
              </p>

              {/* Para 1 */}
              <p className="text-gray-700 text-[14.5px] leading-[1.8] mb-4 text-justify">
                Discover Aliens Hub, a <strong>RERA approved premium hilltop plotted community</strong> along the <strong>Srisailam highway</strong>, designed for buyers seeking natural surroundings, location advantage &amp; long-term value.
              </p>

              {/* Para 2 */}
              <p className="text-gray-700 text-[14.5px] leading-[1.8] mb-4 text-justify">
                Just <strong>35 Mins from RGI Airport</strong>, <strong>15 mins from Bharat Future City</strong>, this <strong>700+ acre township</strong> features an upcoming <strong>18-hole golf course</strong>, creating a destination that feels strategically placed and naturally elevated.
              </p>

              {/* Para 3 */}
              <p className="text-gray-700 text-[14.5px] leading-[1.8] mb-4 text-justify">
                Choose from hilltop plots, forest-view plots, golf-view plots, sunset view plots, surrounded by <strong>4000+ acres of Reserved forest</strong>.
              </p>

              {/* Para 4 */}
              <p className="text-gray-700 text-[14.5px] leading-[1.8] text-justify">
                Aliens Hub blends location strength and nature to invest in plots in Hyderabad built for future investment and serene living.
              </p>
            </motion.div>

            {/* RIGHT — Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center"
            >
              <img
                src={whyUsImage}
                alt="Family at Aliens Hub"
                className="w-full max-w-[520px] object-contain"
              />
            </motion.div>

          </div>
        </Container>
      </section>
      {/* Project Highlights Section */}
      <section className="py-16 bg-gray-100">
        <Container>
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[26px] md:text-[30px] font-bold tracking-widest text-gray-800 uppercase mb-10"
          >
            Project Highlights
          </motion.h2>

          {/* 3×3 Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: approveIcon, label: 'RERA & HMDA Approved' },
              { icon: locationIcon, label: '15 mins from Bharat Future City' },
              { icon: planeIcon, label: '35 mins from Airport' },
              { icon: woodIcon, label: '4000+ acres of Reserve Forest' },
              { icon: flagIcon, label: 'Plot sizes - 200 - 1500+ Sq yds' },
              { icon: golfIcon, label: '18 Hole Golf Course' },
              { icon: hillsIcon, label: 'Hilltop & Forest view plots' },
              { icon: wifiIcon, label: '10+ Acre Hilltop Clubhouse' },
              { icon: destinationIcon, label: '60+ Lifestyle Amenities' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center py-7 px-4 gap-4 hover:shadow-md transition-shadow"
              >
                {/* Circular icon container */}
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <img src={item.icon} alt={item.label} className="w-9 h-9 object-contain" />
                </div>
                <p className="text-[13px] text-gray-700 font-medium text-center leading-snug">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Area Map & Location Section */}
      <section className="flex flex-col">
        {/* Banner */}
        <div className="relative w-full h-[250px] md:h-[350px]">
          <img src={areaMapBg} alt="Growth Corridor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl md:text-7xl tracking-widest font-black font-sans uppercase mb-1 drop-shadow-lg" style={{ WebkitTextStroke: '1px white', color: 'transparent', opacity: 0.9 }}>
              HYDERABAD'S
            </h2>
            <h3 className="text-white text-5xl md:text-7xl font-['Great_Vibes']">
              Next Growth Corridor
            </h3>
          </div>
        </div>

        {/* Location Content */}
        <div className="bg-white py-16 md:py-24">
          <Container>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start max-w-[1200px] mx-auto">

              {/* Left Side: Text and Accordion */}
              <div>
                <h2 className="text-[32px] md:text-[40px] font-bold text-gray-800 leading-snug mb-4 font-serif">
                  WHY <span className="text-[#8ac440]">ALIENS HUB ?</span>
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8] mb-8 text-justify">
                  Aliens Hub is a beautiful, 700+ acre luxury plot development located near the Hyderabad Airport on the Srisailam Highway in the heart of the rapidly developing South Hyderabad neighbourhood.
                </p>

                {/* Accordion */}
                <div className="space-y-4">
                  {locationAccordionData.map((item, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === item.title ? null : item.title)}
                        className={`w-full flex items-center justify-between px-6 py-4 text-left font-bold text-[16px] transition-colors duration-200 ${openAccordion === item.title
                            ? 'text-gray-800 border-l-[4px] border-l-[#7eb2d9]'
                            : 'text-gray-700 border-l-[4px] border-l-[#8ac440]'
                          }`}
                      >
                        {item.title}
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-light transition-all duration-200 shadow-md ${openAccordion === item.title ? 'bg-[#7eb2d9] rotate-180' : 'bg-gradient-to-br from-[#8ac440] to-[#6da42d]'}`}>
                          {openAccordion === item.title ? '-' : '+'}
                        </div>
                      </button>

                      {/* Accordion Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === item.title ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <div className="px-6 pb-5 pt-2 bg-white">
                          <ul className="space-y-3 mt-1">
                            {item.content.map((point, pIdx) => (
                              <li key={pIdx} className="flex justify-between items-center text-[14px] border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                                <span className="text-gray-600 font-medium">{point.label}</span>
                                {point.value && <span className="font-bold text-gray-800 text-[13px] tracking-wide">{point.value}</span>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img src={areaMapImage} alt="Aliens Hub Area Map" className="w-full h-auto object-contain" />
              </div>

            </div>
          </Container>
        </div>
      </section>

      <div id="amenities">
        <AmenitiesSlider />
      </div>

      <div id="master-plan">
        <MasterPlan />
      </div>

      <LocationSection />

      {/* Our Customers / Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-white overflow-visible">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">

            {/* Left Side: Heading + Description + Arrows */}
            <div className="md:w-[280px] flex-shrink-0">
              <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-gray-900 uppercase tracking-wide leading-tight mb-5">
                Our Customers
              </h2>
              <p className="text-gray-500 text-[14.5px] leading-[1.8] mb-8 text-justify">
                Trusted by customers who value quality, reliability, and results. Their words reflect our commitment to excellence.
              </p>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={() => scrollReviews('left')}
                  className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#8ac440] hover:text-[#8ac440] transition-colors"
                  aria-label="Previous Review"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={() => scrollReviews('right')}
                  className="w-11 h-11 rounded-full bg-[#8ac440] flex items-center justify-center text-white hover:bg-[#79b038] transition-colors shadow-md"
                  aria-label="Next Review"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>

            {/* Right Side: Scrollable Review Cards */}
            <div ref={reviewsScrollRef} className="w-full flex-1 overflow-x-auto overflow-y-visible pt-10 pb-4 -mt-2 scrollbar-none">
              <div className="flex gap-4 sm:gap-6 min-w-max px-2">

                {[
                  { name: 'Shiva Nagender', role: 'NRI, Project Manager', text: 'Today I completed my registration of plot in Corinth layout of Alien Hub, and my overall experience has been' },
                  { name: 'Sreenath Reddy', role: 'Professor', text: 'Amazing experience and great hospitality. Really this place is a little paradise..We felt home here..People here are really' },
                  { name: 'Rajesh Kumar', role: 'Purchased, Hill Top Plot', text: "I'm a customer who has recently Purchased a plot in Aliens Hub Hill Top and I must say I'm completely satisfied with comfortable" },
                  { name: 'Anitha Sharma', role: 'Business Owner', text: 'The infrastructure and the natural beauty surrounding Aliens Hub is something truly remarkable. Best investment decision' },
                  { name: 'Venkat Rao', role: 'IT Professional, NRI', text: 'Being an NRI, I was looking for a trusted developer. Aliens Hub exceeded my expectations with transparency and world-class amenities' },
                ].map((review, idx) => (
                  <div key={idx} className="w-[260px] sm:w-[280px] bg-white rounded-xl border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] p-5 sm:p-6 flex flex-col items-center text-center relative mt-8">
                    {/* Profile Avatar — fully visible above card */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center shadow-md z-10">
                      <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div className="text-4xl text-gray-300 font-serif leading-none mb-2 mt-6">"</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{review.name}</h4>
                    <p className="text-[13px] text-gray-400 italic mb-4">{review.role}</p>
                    <p className="text-gray-600 text-[13.5px] leading-relaxed mb-4">{review.text}</p>
                    <button className="text-[#8ac440] font-semibold text-sm hover:underline mt-auto">Read More</button>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      <div id="gallery">
        <GallerySection />
      </div>

      {/* Footer is part of layout */}
    </>
  );
};

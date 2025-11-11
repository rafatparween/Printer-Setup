// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Printer-specific data
// const printerData = [
//   {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1598257006622-0c34179667e9?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80',
//     title: 'ProPrint 5000',
//     description: 'Professional-grade printing with ultra-high resolution',
//     features: ['1200 DPI', 'Auto Duplex', 'Wireless', '50 PPM'],
//     price: '$1,299',
//     badge: 'Best Seller'
//   },
//   {
//     id: 2,
//     image: 'https://images.unsplash.com/photo-1597872200969-2c65bb4c06aa?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80',
//     title: 'OfficeJet Pro',
//     description: 'All-in-one solution for modern offices',
//     features: ['Print/Scan/Copy', 'Cloud Ready', 'Eco-Friendly', '35 PPM'],
//     price: '$899',
//     badge: 'Office Choice'
//   },
//   {
//     id: 3,
//     image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80',
//     title: 'LaserMax Elite',
//     description: 'High-speed laser printing for enterprise',
//     features: ['Laser Precision', 'Network Ready', '5000 Sheet', '60 PPM'],
//     price: '$2,199',
//     badge: 'Enterprise'
//   },
//   {
//     id: 4,
//     image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80',
//     title: 'EcoPrint Home',
//     description: 'Compact and efficient for home office',
//     features: ['Compact Design', 'Ink Saving', 'Mobile Print', '20 PPM'],
//     price: '$349',
//     badge: 'Home Office'
//   },
//   {
//     id: 5,
//     image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80',
//     title: 'PhotoPrint Pro',
//     description: 'Professional photo printing studio quality',
//     features: ['Photo Grade', '8-Color Ink', 'Borderless', '2400 DPI'],
//     price: '$1,799',
//     badge: 'Photography'
//   }
// ];

// // Navbar items for printer website
// const navItems = [
//   { name: 'Home', href: '#home' },
//   { name: 'Printers', href: '#printers' },
//   { name: 'Ink & Toner', href: '#ink' },
//   { name: 'Support', href: '#support' },
//   { name: 'Business', href: '#business' },
//   { name: 'Deals', href: '#deals' }
// ];

// const SliderSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Auto-slide functionality
//   useEffect(() => {
//     if (!isAutoPlaying || isHovering) return;

//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [currentSlide, isAutoPlaying, isHovering]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % printerData.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + printerData.length) % printerData.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const handleUserInteraction = () => {
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   return (
//     <section 
//       className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-black"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Navigation Bar */}
//       <motion.nav 
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <motion.div 
//               className="flex items-center space-x-3"
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
//                 </svg>
//               </div>
//               <div className={`${scrolled ? 'text-gray-900' : 'text-white'}`}>
//                 <div className="text-xl font-bold">PrintPro</div>
//                 <div className="text-xs opacity-75">Professional Printing Solutions</div>
//               </div>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-8">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   className={`transition-colors duration-300 font-medium relative group ${
//                     scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/80 hover:text-white'
//                   }`}
//                   whileHover={{ y: -2 }}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   {item.name}
//                   <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
//                     scrolled ? 'bg-blue-600' : 'bg-white'
//                   }`}></span>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Desktop Actions */}
//             <div className="hidden lg:flex items-center space-x-4">
//               <motion.button 
//                 className={`flex items-center space-x-1 transition-colors duration-300 ${
//                   scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/80 hover:text-white'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </motion.button>
//               <motion.button 
//                 className={`flex items-center space-x-1 transition-colors duration-300 ${
//                   scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/80 hover:text-white'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </motion.button>
//               <motion.button 
//                 className={`bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 ${
//                   scrolled ? '' : 'bg-white/20 backdrop-blur-md hover:bg-white/30'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Contact Sales
//               </motion.button>
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button 
//               className={`lg:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               whileTap={{ scale: 0.95 }}
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMobileMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </motion.button>
//           </div>

//           {/* Mobile Menu */}
//           <AnimatePresence>
//             {isMobileMenuOpen && (
//               <motion.div
//                 className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl"
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="flex flex-col space-y-4">
//                   {navItems.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                   <div className="flex space-x-4 pt-4 border-t border-gray-200">
//                     <button className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex-1 text-center py-2">
//                       Search
//                     </button>
//                     <button className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex-1 text-center py-2">
//                       Cart
//                     </button>
//                     <button className="bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex-1 text-center py-2">
//                       Contact
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.nav>

//       {/* Background Slides */}
//       <div className="relative h-full w-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             className="absolute inset-0"
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 1 }}
//             transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
//           >
//             <img
//               src={printerData[currentSlide].image}
//               alt={printerData[currentSlide].title}
//               className="h-full w-full object-cover"
//             />
            
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            
//             {/* Content Overlay */}
//             <div className="absolute inset-0 flex items-center">
//               <div className="container mx-auto px-4 md:px-6">
//                 <div className="max-w-2xl">
//                   <motion.div
//                     initial={{ x: -50, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.5, duration: 0.8 }}
//                   >
//                     {/* Badge */}
//                     <motion.span 
//                       className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.7 }}
//                     >
//                       {printerData[currentSlide].badge}
//                     </motion.span>
                    
//                     {/* Title */}
//                     <motion.h1 
//                       className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
//                       initial={{ x: -30, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: 0.9, duration: 0.8 }}
//                     >
//                       {printerData[currentSlide].title}
//                     </motion.h1>
                    
//                     {/* Description */}
//                     <motion.p 
//                       className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
//                       initial={{ x: -30, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: 1.1, duration: 0.8 }}
//                     >
//                       {printerData[currentSlide].description}
//                     </motion.p>
                    
//                     {/* Features */}
//                     <motion.div
//                       className="flex flex-wrap gap-4 mb-8"
//                       initial={{ x: -30, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: 1.3, duration: 0.8 }}
//                     >
//                       {printerData[currentSlide].features.map((feature, index) => (
//                         <span key={index} className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-white/20">
//                           {feature}
//                         </span>
//                       ))}
//                     </motion.div>
                    
//                     {/* Price and CTA */}
//                     <motion.div
//                       className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
//                       initial={{ x: -30, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: 1.5, duration: 0.8 }}
//                     >
//                       <div className="text-3xl font-bold text-white">
//                         {printerData[currentSlide].price}
//                         <span className="text-lg text-gray-300 font-normal ml-2">Starting</span>
//                       </div>
//                       <div className="flex flex-col sm:flex-row gap-4">
//                         <motion.button
//                           className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-2xl flex items-center gap-2"
//                           whileHover={{ scale: 1.05, y: -2 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                           </svg>
//                           Buy Now
//                         </motion.button>
//                         <motion.button
//                           className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
//                           whileHover={{ scale: 1.05, y: -2 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                           </svg>
//                           Learn More
//                         </motion.button>
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Navigation Arrows */}
//       <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
//         <motion.button
//           onClick={() => {
//             prevSlide();
//             handleUserInteraction();
//           }}
//           className="bg-white/10 backdrop-blur-md rounded-full p-3 md:p-4 hover:bg-white/20 transition-all duration-300 border border-white/20"
//           whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </motion.button>

//         <motion.button
//           onClick={() => {
//             nextSlide();
//             handleUserInteraction();
//           }}
//           className="bg-white/10 backdrop-blur-md rounded-full p-3 md:p-4 hover:bg-white/20 transition-all duration-300 border border-white/20"
//           whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </motion.button>
//       </div>

//       {/* Thumbnails - Vertical on right side */}
//       <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 space-y-3 md:space-y-4 z-40">
//         {printerData.map((printer, index) => (
//           <motion.div
//             key={printer.id}
//             className={`relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-lg ${
//               index === currentSlide 
//                 ? 'border-blue-500 scale-110 shadow-2xl' 
//                 : 'border-white/30 hover:border-white/60'
//             }`}
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => {
//               goToSlide(index);
//               handleUserInteraction();
//             }}
//           >
//             <img
//               src={printer.image}
//               alt={printer.title}
//               className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
//             />
            
//             {/* Active indicator */}
//             {index === currentSlide && (
//               <motion.div
//                 className="absolute inset-0 bg-blue-500/20 border-2 border-blue-500"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//               />
//             )}
            
//             {/* Number overlay */}
//             <div className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
//               index === currentSlide ? 'bg-blue-500 text-white' : 'bg-black/60 text-white'
//             }`}>
//               {index + 1}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom Info Bar */}
//       <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md border-t border-white/10">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             {/* Slide Counter */}
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-white mb-4 md:mb-0"
//             >
//               <div className="flex items-center space-x-3">
//                 <div className="flex items-center space-x-2">
//                   <span className="text-2xl font-bold text-blue-400">0{currentSlide + 1}</span>
//                   <span className="text-white/60">/</span>
//                   <span className="text-white/40">0{printerData.length}</span>
//                 </div>
//                 <span className="text-white/60">|</span>
//                 <span className="text-sm text-white/80">{printerData[currentSlide].title}</span>
//                 <span className="text-white/60">|</span>
//                 <span className="text-blue-400 font-semibold">{printerData[currentSlide].price}</span>
//               </div>
//             </motion.div>

//             {/* Progress Dots */}
//             <div className="flex space-x-3">
//               {printerData.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     goToSlide(index);
//                     handleUserInteraction();
//                   }}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide 
//                       ? 'bg-blue-400 scale-125' 
//                       : 'bg-white/50 hover:bg-white/80'
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Tech Specs */}
//             <div className="hidden lg:flex items-center space-x-6 mt-4 md:mt-0">
//               <div className="flex items-center space-x-2 text-white/60 text-sm">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//                 <span>High Speed</span>
//               </div>
//               <div className="flex items-center space-x-2 text-white/60 text-sm">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//                 <span>1 Year Warranty</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="text-white/60 text-center">
//           <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
//           </div>
//           <span className="text-xs mt-2 block">View Products</span>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default SliderSection;




'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Video and image data with minimal content
const mediaData = [
  {
    id: 1,
    type: 'video',
    src: 'https://cdn.pixabay.com/video/2023/05/06/161899-824623452_tiny.mp4',
    title: 'Precision Printing',
    subtitle: 'Crystal Clear Quality',
    duration: '0:15'
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.pexels.com/photos/29647857/pexels-photo-29647857.jpeg?_gl=1*1csqc0s*_ga*NzE4MzM2NzMyLjE3NTU3OTE3MDg.*_ga_8JE65Q40S6*czE3NjI4NDE0MzAkbzckZzEkdDE3NjI4NDI0NjEkajQxJGwwJGgw',
    title: 'Office Excellence',
    subtitle: 'Seamless Workflow',
    duration: '0:12'
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.pexels.com/photos/12489125/pexels-photo-12489125.jpeg?_gl=1*1x3v3j*_ga*NzE4MzM2NzMyLjE3NTU3OTE3MDg.*_ga_8JE65Q40S6*czE3NjI4NDE0MzAkbzckZzEkdDE3NjI4NDIyMjgkajU5JGwwJGgw',
    title: 'Modern Technology',
    subtitle: 'Smart & Efficient',
    duration: '0:18'
  }
];

// Navigation items
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Support', href: '/support' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact'}
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const videoRefs = useRef([]);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, isHovering]);

  // Play video when slide changes
  useEffect(() => {
    if (mediaData[currentSlide].type === 'video' && videoRefs.current[currentSlide]) {
      videoRefs.current[currentSlide].play().catch(console.error);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaData.length) % mediaData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-emerald-900 via-gray-900 to-amber-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Awesome Navigation Bar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl py-4 shadow-2xl border-b border-emerald-100' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <div className={`${scrolled ? 'text-gray-900' : 'text-white'}`}>
                <div className="text-2xl font-bold tracking-tight font-outfit">PrintPro</div>
                <div className="text-xs text-emerald-600 tracking-widest">PREMIUM PRINTING</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`
                      flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative group font-outfit
                      ${pathname === item.href 
                        ? 'text-white bg-gradient-to-r from-emerald-600/20 to-amber-500/20 backdrop-blur-md border border-emerald-200/30' 
                        : scrolled 
                          ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                    
                    {/* Active indicator */}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <motion.button 
                className={`w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-xl ${
                  scrolled 
                    ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>

              {/* Cart */}
              {/* <motion.button 
                className={`w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-xl relative ${
                  scrolled 
                    ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center shadow-lg">
                  3
                </span>
              </motion.button> */}

              {/* Get Quote Button */}
              <motion.button
                className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              className={`lg:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'top-3 rotate-45' : 'top-2'} ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
                <span className={`absolute left-0 top-3 w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
                <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-4'} ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-emerald-100 shadow-2xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-outfit
                        ${pathname === item.href 
                          ? 'bg-gradient-to-r from-emerald-600/10 to-amber-500/10 border border-emerald-200 text-emerald-700' 
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                        }
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                  
                  {/* Mobile Actions */}
                  <div className="flex space-x-3 pt-4 border-t border-emerald-100">
                    <button className="flex-1 bg-emerald-50 text-emerald-700 px-4 py-3 rounded-xl text-sm font-medium hover:bg-emerald-100 transition-colors font-outfit">
                      Search
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-emerald-600 to-amber-500 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:shadow-lg transition-all font-outfit">
                      Get Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Media Background Slides */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {mediaData[currentSlide].type === 'video' ? (
              <video
                ref={el => videoRefs.current[currentSlide] = el}
                src={mediaData[currentSlide].src}
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={mediaData[currentSlide].src}
                alt={mediaData[currentSlide].title}
                className="h-full w-full object-cover"
              />
            )}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-emerald-900/40 to-transparent" />
            
            {/* Main Content - Left Side */}
            <div className="absolute inset-0">
              <div className="container mx-auto h-full px-6">
                <div className="h-full flex items-center">
                  <motion.div
                    className="max-w-2xl"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <motion.h1 
                      className="text-7xl md:text-8xl lg:text-9xl font-light text-white mb-6 leading-none font-outfit"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      {mediaData[currentSlide].title}
                    </motion.h1>
                    
                    <motion.p 
                      className="text-2xl md:text-3xl text-emerald-100 font-light mb-12"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      {mediaData[currentSlide].subtitle}
                    </motion.p>
                    
                    <motion.div
                      className="flex gap-6"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      <motion.button
                        className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">Explore Collection</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.button>
                      <motion.button
                        className="border-2 border-emerald-200 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-900 transition-all duration-300 group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center gap-2">
                          <span>🎥</span>
                          Watch Demo
                        </span>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Perfectly Placed */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8">
        <motion.button
          onClick={() => {
            prevSlide();
            handleUserInteraction();
          }}
          className="bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-emerald-500/30 transition-all duration-300 border border-emerald-200/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* Progress Dots */}
        <div className="flex gap-3">
          {mediaData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                handleUserInteraction();
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-emerald-400 to-amber-400 scale-125 shadow-lg' 
                  : 'bg-white/30 hover:bg-amber-300 hover:scale-110'
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={() => {
            nextSlide();
            handleUserInteraction();
          }}
          className="bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-amber-500/30 transition-all duration-300 border border-amber-200/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Awesome Media Thumbnails - Perfect Right Side Placement */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col gap-6">
          {mediaData.map((media, index) => (
            <motion.div
              key={media.id}
              className={`relative group cursor-pointer ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
              whileHover={{ 
                scale: 1.08,
                x: -8
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                goToSlide(index);
                handleUserInteraction();
              }}
            >
              {/* Thumbnail Container */}
              <div className={`
                relative overflow-hidden rounded-2xl border-2 transition-all duration-500
                ${index === currentSlide 
                  ? 'border-emerald-400 shadow-2xl shadow-emerald-500/30 bg-emerald-500/20' 
                  : 'border-white/30 shadow-lg hover:border-amber-300 hover:shadow-xl bg-black/30'
                }
              `}>
                <div className="w-40 h-24 flex items-center justify-center relative">
                  {media.type === 'video' ? (
                    // Video thumbnail with play icon
                    <div className={`
                      absolute inset-0 flex items-center justify-center transition-all duration-300
                      ${index === currentSlide ? 'bg-emerald-500/20' : 'bg-black/40 group-hover:bg-amber-500/10'}
                    `}>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <svg className={`
                          w-8 h-8 transition-all duration-300
                          ${index === currentSlide ? 'text-emerald-200 scale-110' : 'text-white/70 group-hover:text-amber-200 group-hover:scale-110'}
                        `} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                    </div>
                  ) : (
                    // Image thumbnail
                    <img
                      src={media.src}
                      alt={media.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Media Type Icon */}
                  <div className={`
                    absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2 font-outfit
                    ${index === currentSlide 
                      ? 'bg-gradient-to-r from-emerald-600 to-amber-500 text-white border-emerald-400 shadow-lg' 
                      : 'bg-black/60 text-white border-white/30 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-300'
                    }
                  `}>
                    {media.type === 'video' ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    )}
                  </div>

                  {/* Duration Badge */}
                  <div className={`
                    absolute bottom-3 right-3 px-2 py-1 rounded-md text-xs font-semibold transition-all duration-300 font-outfit
                    ${index === currentSlide 
                      ? 'bg-emerald-500/90 text-white' 
                      : 'bg-black/70 text-white/80 group-hover:bg-amber-500/90 group-hover:text-white'
                    }
                  `}>
                    {media.duration}
                  </div>

                  {/* Progress Bar for Active Video */}
                  {index === currentSlide && media.type === 'video' && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  )}
                </div>

                {/* Active Indicator Glow */}
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              {/* Media Title Tooltip */}
              <motion.div
                className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50"
                initial={{ x: 20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                <div className="bg-gradient-to-r from-emerald-900 to-amber-900 backdrop-blur-md text-white px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap shadow-2xl border border-emerald-200/30">
                  <div className="font-semibold text-white font-outfit">{media.title}</div>
                  <div className="text-emerald-200 text-xs mt-1">{media.subtitle}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`w-2 h-2 rounded-full ${media.type === 'video' ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                    <span className="text-amber-200 text-xs">{media.type === 'video' ? 'Video' : 'Image'}</span>
                  </div>
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-900 to-amber-900 transform rotate-45 absolute -right-1 top-1/2 -translate-y-1/2 border-r border-b border-emerald-200/30" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Thumbnails Label */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-emerald-200 text-sm font-light tracking-widest uppercase font-outfit">
            Preview
          </div>
          <div className="text-amber-200 text-xs mt-1">
            Click to view
          </div>
        </motion.div>
      </div>

      {/* Current Media Info - Bottom Right */}
      <motion.div
        className="absolute bottom-8 right-8 bg-gradient-to-r from-emerald-900/40 to-amber-900/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-emerald-200/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="text-white text-sm font-outfit">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ 
                  scale: isAutoPlaying && !isHovering ? [1, 1.2, 1] : 1 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: isAutoPlaying && !isHovering ? Infinity : 0 
                }}
                className="w-2 h-2 bg-emerald-400 rounded-full"
              />
              <span className="text-emerald-200">Now Showing</span>
            </div>
            <span className="text-white font-medium">{mediaData[currentSlide].title}</span>
            <span className="text-amber-200 text-xs">
              ({mediaData[currentSlide].type === 'video' ? 'Video' : 'Image'})
            </span>
          </div>
        </div>
      </motion.div>

      {/* Auto-play Status - Top Right */}
      <motion.div
        className="absolute top-8 right-8 bg-gradient-to-r from-emerald-900/40 to-amber-900/40 backdrop-blur-md rounded-full p-3 border border-emerald-200/20 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
      >
        <motion.div
          animate={{ opacity: isAutoPlaying ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-5 h-5 text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
            {isAutoPlaying ? (
              <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
            ) : (
              <path d="M8 5v14l11-7z"/>
            )}
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SliderSection;
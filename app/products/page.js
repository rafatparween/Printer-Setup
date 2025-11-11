'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const ProductPrinterPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 'all', name: 'All Printers', icon: '🖨️', color: 'from-purple-500 to-pink-500' },
    { id: 'home', name: 'Home Office', icon: '🏠', color: 'from-blue-500 to-cyan-500' },
    { id: 'office', name: 'Office', icon: '💼', color: 'from-emerald-500 to-teal-500' },
    { id: 'photo', name: 'Photo Printing', icon: '📸', color: 'from-orange-500 to-red-500' },
    { id: 'laser', name: 'Laser', icon: '⚡', color: 'from-yellow-500 to-amber-500' },
    { id: 'inkjet', name: 'Inkjet', icon: '🖋️', color: 'from-indigo-500 to-purple-500' }
  ];

  const printers = [
    {
      id: 1,
      name: 'ProPrint 5000',
      category: 'office',
      price: 1299,
      originalPrice: 1499,
      image: 'https://images.unsplash.com/photo-1598257006622-0c34179667e9?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80',
      features: ['1200 DPI', 'Auto Duplex', 'Wireless', '50 PPM', 'Cloud Ready'],
      description: 'Professional-grade printing with ultra-high resolution for demanding office environments.',
      specs: {
        type: 'Laser',
        speed: '50 pages per minute',
        resolution: '1200 x 1200 DPI',
        connectivity: 'Wi-Fi, Ethernet, USB',
        paperSize: 'A4, Legal, Letter'
      },
      badge: 'Best Seller',
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'OfficeJet Pro',
      category: 'office',
      price: 899,
      originalPrice: 1099,
      image: 'https://images.unsplash.com/photo-1597872200969-2c65bb4c06aa?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80',
      features: ['Print/Scan/Copy', 'Cloud Ready', 'Eco-Friendly', '35 PPM', 'Mobile Print'],
      description: 'All-in-one solution for modern offices with comprehensive features.',
      specs: {
        type: 'Inkjet',
        speed: '35 pages per minute',
        resolution: '4800 x 1200 DPI',
        connectivity: 'Wi-Fi, Ethernet, USB, Mobile',
        paperSize: 'A4, Legal, Letter, Photo'
      },
      badge: 'Office Choice',
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: 'LaserMax Elite',
      category: 'laser',
      price: 2199,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80',
      features: ['Laser Precision', 'Network Ready', '5000 Sheet', '60 PPM', 'Enterprise'],
      description: 'High-speed laser printing for enterprise-level performance and reliability.',
      specs: {
        type: 'Laser',
        speed: '60 pages per minute',
        resolution: '1200 x 1200 DPI',
        connectivity: 'Wi-Fi, Ethernet, USB',
        paperSize: 'A4, Legal, Letter, A3'
      },
      badge: 'Enterprise',
      rating: 4.9,
      reviews: 67
    },
    {
      id: 4,
      name: 'EcoPrint Home',
      category: 'home',
      price: 349,
      originalPrice: 449,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80',
      features: ['Compact Design', 'Ink Saving', 'Mobile Print', '20 PPM', 'Wireless'],
      description: 'Compact and efficient printer perfect for home office and student use.',
      specs: {
        type: 'Inkjet',
        speed: '20 pages per minute',
        resolution: '4800 x 1200 DPI',
        connectivity: 'Wi-Fi, USB, Mobile',
        paperSize: 'A4, Letter, Photo'
      },
      badge: 'Home Office',
      rating: 4.4,
      reviews: 156
    },
    {
      id: 5,
      name: 'PhotoPrint Pro',
      category: 'photo',
      price: 1799,
      originalPrice: 1999,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80',
      features: ['Photo Grade', '8-Color Ink', 'Borderless', '2400 DPI', 'Studio Quality'],
      description: 'Professional photo printing with studio-quality results and advanced color management.',
      specs: {
        type: 'Inkjet',
        speed: '15 pages per minute',
        resolution: '4800 x 2400 DPI',
        connectivity: 'Wi-Fi, Ethernet, USB',
        paperSize: 'A4, Letter, Photo, Borderless'
      },
      badge: 'Photography',
      rating: 4.7,
      reviews: 92
    },
    {
      id: 6,
      name: 'InkSave Mini',
      category: 'home',
      price: 199,
      originalPrice: 299,
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80',
      features: ['Eco-Friendly', 'Low Cost', 'Compact', '15 PPM', 'Wireless'],
      description: 'Budget-friendly printer with low ink consumption and compact design.',
      specs: {
        type: 'Inkjet',
        speed: '15 pages per minute',
        resolution: '4800 x 1200 DPI',
        connectivity: 'Wi-Fi, USB',
        paperSize: 'A4, Letter'
      },
      badge: 'Budget Pick',
      rating: 4.2,
      reviews: 203
    }
  ];

  const filteredPrinters = selectedCategory === 'all' 
    ? printers 
    : printers.filter(printer => printer.category === selectedCategory);

  const addToCart = (product) => {
    console.log(`Added ${quantity} ${product.name} to cart`);
    setSelectedProduct(null);
    setQuantity(1);
  };

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: 'Always Available', label: 'Support Available' },
    { number: '5Y', label: 'Warranty' }
  ];

  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'High-speed printing up to 60 pages per minute'
    },
    {
      icon: '💎',
      title: 'Crystal Clear',
      description: 'Professional quality with up to 4800 DPI resolution'
    },
    {
      icon: '🌱',
      title: 'Eco Friendly',
      description: 'Energy efficient and recyclable materials'
    }
  ];

  return (
    <>
      <Head>
        <title>Premium Printers - SetupHPPrinter</title>
        <meta name="description" content="Discover our premium collection of printers for every need" />
      </Head>

      {/* Enhanced Header */}
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className={`text-xl font-bold font-outfit ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                SetupHPPrinter
              </span>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Products', 'Support', 'About'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                isScrolled 
                  ? 'bg-gradient-to-r from-emerald-600 to-amber-500 text-white' 
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
              }`}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.header>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-amber-900">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center text-white"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-2xl mb-8"
              >
                <div className="flex space-x-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
                <span className="text-emerald-300 font-semibold">Premium Printer Collection 2024</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-outfit leading-tight"
              >
                Print Like
                <span className="block bg-gradient-to-r from-emerald-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
                  Never Before
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Experience the future of printing with our cutting-edge collection designed for professionals, creatives, and home users alike.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  Explore Collection
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Category Filter */}
        <section className="py-16 bg-white/5 backdrop-blur-md border-y border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-outfit">
                Find Your Perfect <span className="bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text text-transparent">Match</span>
              </h2>
              <p className="text-gray-400 text-lg">Browse by category to find the perfect printer for your needs</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-md border ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-2xl border-transparent`
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Rotating Features */}
        <section className="py-16 bg-gradient-to-b from-white/5 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-6">{features[activeFeature].icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-outfit">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-xl text-gray-400">{features[activeFeature].description}</p>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center space-x-2 mt-8">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeFeature === index ? 'bg-emerald-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
                Featured <span className="bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text text-transparent">Printers</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                Discover our handpicked selection of high-performance printers for every use case
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPrinters.map((printer, index) => (
                <motion.div
                  key={printer.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-sm opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  
                  <div className="relative bg-slate-800 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={printer.image}
                        alt={printer.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-2xl">
                          {printer.badge}
                        </span>
                      </div>
                      
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-xl text-lg font-bold">
                          ${printer.price}
                        </span>
                        {printer.originalPrice && (
                          <span className="bg-red-500/90 text-white px-2 py-1 rounded-lg text-sm line-through">
                            ${printer.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white font-outfit">{printer.name}</h3>
                        <div className="flex items-center space-x-1 bg-white/10 rounded-full px-2 py-1">
                          <span className="text-amber-400">★</span>
                          <span className="text-white text-sm">{printer.rating}</span>
                          <span className="text-gray-400 text-sm">({printer.reviews})</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4 line-clamp-2">{printer.description}</p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {printer.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-lg text-xs font-medium border border-emerald-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {printer.features.length > 3 && (
                          <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-lg text-xs font-medium border border-amber-500/30">
                            +{printer.features.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-emerald-400">${printer.price}</span>
                          {printer.originalPrice && (
                            <span className="text-gray-500 line-through text-lg">${printer.originalPrice}</span>
                          )}
                        </div>
                        <motion.button
                          onClick={() => setSelectedProduct(printer)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Additional Sections can be added here: Testimonials, Comparison Table, Support, etc. */}

        {/* Enhanced Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="bg-slate-800 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-4xl font-bold text-white font-outfit">{selectedProduct.name}</h2>
                    <motion.button
                      onClick={() => setSelectedProduct(null)}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-white text-3xl p-2"
                    >
                      ×
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="relative">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full rounded-2xl shadow-2xl"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-xl text-lg font-semibold shadow-2xl">
                          {selectedProduct.badge}
                        </span>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-8">
                      {/* Rating */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 bg-white/10 rounded-2xl px-4 py-2">
                          <span className="text-amber-400 text-lg">★</span>
                          <span className="text-white font-semibold">{selectedProduct.rating}</span>
                          <span className="text-gray-400">({selectedProduct.reviews} reviews)</span>
                        </div>
                      </div>

                      <p className="text-xl text-gray-300 leading-relaxed">{selectedProduct.description}</p>

                      {/* Specifications */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6 font-outfit">Specifications</h3>
                        <div className="space-y-4">
                          {Object.entries(selectedProduct.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center py-3 border-b border-white/10">
                              <span className="font-medium text-gray-400 capitalize">{key}:</span>
                              <span className="text-white font-semibold text-right">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6 font-outfit">Key Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProduct.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.02, x: 5 }}
                              className="flex items-center space-x-3 bg-white/5 rounded-xl p-3 border border-white/10"
                            >
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Price and Add to Cart */}
                      <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-6 border border-emerald-500/20">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <span className="text-4xl font-bold text-emerald-400">${selectedProduct.price}</span>
                            {selectedProduct.originalPrice && (
                              <span className="text-gray-400 line-through text-2xl ml-3">${selectedProduct.originalPrice}</span>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 bg-white/10 rounded-2xl p-2">
                            <motion.button
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white text-xl"
                            >
                              -
                            </motion.button>
                            <span className="px-4 py-2 text-white font-bold text-lg min-w-12 text-center">{quantity}</span>
                            <motion.button
                              onClick={() => setQuantity(quantity + 1)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white text-xl"
                            >
                              +
                            </motion.button>
                          </div>
                        </div>

                        <motion.button
                          onClick={() => addToCart(selectedProduct)}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                        >
                          Add to Cart - ${selectedProduct.price * quantity}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProductPrinterPage;
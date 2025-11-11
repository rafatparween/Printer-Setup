'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-gray-900 to-amber-900 text-white py-16 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-amber-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Company Branding */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 pb-8 border-b border-emerald-700/30"
        >
          <Link href="/" className="inline-block group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white font-outfit group-hover:scale-105 transition-transform duration-300">
                  Hewlett <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">Printer</span> Solutions
                </h2>
                <p className="text-emerald-300 text-sm mt-1 font-medium">Premium Technical Solutions</p>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center font-outfit">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white text-sm">⚡</span>
              </div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/', icon: '🏠' },
                { name: 'About Us', href: '/about', icon: '👥' },
                { name: 'Services', href: '/service', icon: '🛠️' },
                { name: 'Contact', href: '/contact', icon: '📞' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-emerald-200 hover:text-amber-300 transition-all duration-300 flex items-center group py-2"
                  >
                    <span className="mr-3 text-lg">{link.icon}</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 font-medium">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center font-outfit">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white text-sm">🔒</span>
              </div>
              Customer Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Disclaimer', href: '/disclaimer', icon: '📝' },
                { name: 'Privacy Policy', href: '/privacy', icon: '🛡️' },
                { name: 'Terms and Conditions', href: '/term', icon: '📄' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-emerald-200 hover:text-amber-300 transition-all duration-300 flex items-center group py-2"
                  >
                    <span className="mr-3 text-lg">{link.icon}</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 font-medium">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center font-outfit">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white text-sm">📞</span>
              </div>
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <span className="text-emerald-400 group-hover:text-amber-400">📞</span>
                </div>
                <span className="text-emerald-200 font-medium">+(1) 888-291-3869</span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <span className="text-emerald-400 group-hover:text-amber-400">📍</span>
                </div>
                <span className="text-emerald-200 font-medium">Los Angeles, California</span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <span className="text-emerald-400 group-hover:text-amber-400">✉️</span>
                </div>
                <a
                  href="mailto:support@hewlettprintersolution.com"
                  className="text-emerald-200 hover:text-amber-300 transition-colors duration-300 font-medium"
                >
                  support@hewlettprintersolution.com
                </a>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
              {[
                { name: 'Facebook', icon: 'ƒ', color: 'hover:bg-emerald-500' },
                { name: 'Twitter', icon: '𝕏', color: 'hover:bg-amber-500' },
                { name: 'LinkedIn', icon: 'in', color: 'hover:bg-emerald-500' },
                { name: 'Instagram', icon: 'ɪɢ', color: 'hover:bg-amber-500' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-emerald-600/30 to-amber-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm border border-emerald-500/20 hover:border-amber-400/40 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-emerald-300 group-hover:text-white text-sm font-semibold">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center font-outfit">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white text-sm">📰</span>
              </div>
              Newsletter
            </h3>
            <p className="text-emerald-200 mb-4 font-medium">Free Delivery on your first order!</p>
            <form className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-emerald-500/30 bg-white/10 backdrop-blur-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-emerald-200 text-white font-medium"
                required
              />
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-amber-500 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Subscribe Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </form>
            <p className="text-emerald-300 text-sm mt-3 font-medium">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
        
        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-emerald-700/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-emerald-300 font-medium">
              &copy; {new Date().getFullYear()} Hewlett Printer Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-emerald-300 font-medium">
              <Link href="/privacy" className="hover:text-amber-300 transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/term" className="hover:text-amber-300 transition-colors duration-300">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-amber-300 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-amber-500"></div>
    </footer>
  );
};

export default Footer;
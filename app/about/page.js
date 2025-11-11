"use client"

import React from "react";
import { FaTools, FaBookReader, FaShieldAlt, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  const features = [
    {
      icon: <FaTools />,
      title: "Practical Solutions",
      description: "Step-by-step guides for real-world printer problems"
    },
    {
      icon: <FaBookReader />,
      title: "Easy to Follow",
      description: "Clear instructions anyone can understand"
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Methods",
      description: "Tested solutions that won't harm your device"
    },
    {
      icon: <FaHandsHelping />,
      title: "Brand Coverage",
      description: "Help for all major printer manufacturers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-200 shadow-sm mb-8"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-700 font-medium">About SetupHPPrinter</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-outfit">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">
              SetupHPPrinter
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted guide for solving printer problems with clear, step-by-step solutions.
          </p>
        </motion.div>

        {/* Mission & Offer Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-lg">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-outfit">Our Mission</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                SetupHPPrinter is an independent platform dedicated to helping users resolve everyday printer issues through easy-to-understand troubleshooting guides and how-to articles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We provide clear, step-by-step information for all major printer brands, including HP, Canon, Epson, Brother, and more.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-amber-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-lg">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-outfit">What We Offer</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you're facing connectivity problems, ink cartridge errors, setup challenges, or offline issues, our articles aim to help you identify the cause and apply effective solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We focus on common printer problems and provide solutions that work for most users.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Important Note Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-amber-200"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-amber-600 text-lg">⚠️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-outfit">Important Note</h2>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-xl mb-6">
              <div className="flex items-start">
                <span className="text-amber-500 mr-3 text-lg">💡</span>
                <p className="text-amber-800 font-medium">
                  We do not offer live technical support, remote repair services, or hardware sales. All content is purely for educational and informational purposes to help users troubleshoot on their own.
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Our goal is to empower you with knowledge so you can solve printer issues confidently without needing to wait for professional support.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 hover:border-amber-300 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 flex justify-center">
                <div className="text-emerald-600 group-hover:text-amber-500 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-outfit">{feature.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-outfit">Need Help With Your Printer?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-emerald-100">
              Browse our collection of troubleshooting guides and how-to articles to find the solution you need.
            </p>
            <motion.button
              className="bg-white text-emerald-700 font-semibold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Explore Articles
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-200">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-emerald-700 font-medium">Trusted by thousands of users worldwide</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-white pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-200 shadow-sm mb-8"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-600 font-medium">The future of product development is here</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight font-outfit"
            >
              Build
              <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent"> Extraordinary </span>
              Products
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              The next-generation platform for teams to create, collaborate, and scale amazing digital experiences that users love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Building Free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-emerald-400 hover:text-emerald-600 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <span>🎥</span>
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-gray-500"
            >
              {[
                { number: '10K+', label: 'Active Teams' },
                { number: '99.9%', label: 'Uptime' },
                { number: '4.9/5', label: 'Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
          >
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100 relative overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-600 to-amber-500 opacity-5"></div>
                
                <div className="flex space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                </div>
                
                {/* Mockup Content */}
                <div className="space-y-6">
                  <div className="flex space-x-4">
                    <div className="w-1/4 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl h-32 flex items-center justify-center">
                      <div className="text-2xl">🚀</div>
                    </div>
                    <div className="w-3/4 space-y-4">
                      <div className="h-4 bg-gradient-to-r from-emerald-200 to-amber-200 rounded-full"></div>
                      <div className="h-4 bg-gradient-to-r from-emerald-200 to-amber-200 rounded-full w-2/3"></div>
                      <div className="h-4 bg-gradient-to-r from-emerald-200 to-amber-200 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl h-20 flex items-center justify-center border border-emerald-100"
                      >
                        <div className="text-2xl">
                          {item === 1 && '📊'}
                          {item === 2 && '👥'}
                          {item === 3 && '⚡'}
                          {item === 4 && '🎯'}
                          {item === 5 && '🔧'}
                          {item === 6 && '🚀'}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-emerald-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 text-lg">📈</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">+42%</div>
                    <div className="text-sm text-gray-500">Growth</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-amber-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 text-lg">⭐</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-500">Rating</div>
                  </div>
                </div>
              </motion.div>

              {/* Animated Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-16 h-16 border-2 border-emerald-200 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-amber-200 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'

export default function Showcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-200 mb-6"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="text-sm text-amber-700 font-medium">Trusted by Industry Leaders</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-outfit">
            Loved by Teams at
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of innovative teams who trust Nova to build their most important products.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20"
        >
          {['TechCorp', 'InnovateX', 'StartUpHub', 'GrowthLabs', 'NextGen', 'FutureSoft'].map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 flex items-center justify-center h-20 border border-emerald-100 hover:border-amber-300 transition-all duration-300 hover:shadow-lg"
            >
              <span className="text-gray-700 font-semibold text-lg">{company}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Showcase */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100 max-w-6xl mx-auto relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500 rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            <div className="flex space-x-2 mb-8 relative z-10">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {/* Left Column */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-6 h-32 border border-emerald-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <span className="text-emerald-600 text-xl">📈</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Analytics</div>
                      <div className="text-sm text-gray-600">Real-time insights</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-6 h-32 border border-amber-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-amber-600 text-xl">👥</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Team</div>
                      <div className="text-sm text-gray-600">Collaborate seamlessly</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Center Column */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-emerald-500 to-amber-500 rounded-2xl p-6 h-48 flex items-center justify-center border border-emerald-400 shadow-lg"
                >
                  <div className="text-center text-white">
                    <div className="text-4xl mb-4">🎯</div>
                    <div className="font-bold text-lg">Dashboard</div>
                    <div className="text-emerald-100 text-sm">Everything in one place</div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-100 to-emerald-100 rounded-2xl p-6 h-32 border border-amber-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center border border-amber-200">
                      <span className="text-amber-600 text-xl">⚡</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Performance</div>
                      <div className="text-sm text-gray-600">Lightning fast</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-emerald-100 to-amber-50 rounded-2xl p-6 h-32 border border-emerald-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-200">
                      <span className="text-emerald-600 text-xl">🔧</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Tools</div>
                      <div className="text-sm text-gray-600">Powerful features</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-50 to-emerald-100 rounded-2xl p-6 h-32 border border-amber-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center border border-amber-200">
                      <span className="text-amber-600 text-xl">🚀</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Launch</div>
                      <div className="text-sm text-gray-600">Deploy instantly</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
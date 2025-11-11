'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Build and deploy in minutes with our optimized workflow and instant previews.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and SOC 2 compliance.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: '👥',
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with live editing, comments, and version control.',
    color: 'from-emerald-500 to-amber-500',
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Get deep insights into your product performance with beautiful dashboards.',
    color: 'from-amber-500 to-emerald-500',
  },
  {
    icon: '🌐',
    title: 'Global Scale',
    description: 'Deploy instantly to our global edge network for lightning-fast performance.',
    color: 'from-emerald-600 to-amber-400',
  },
  {
    icon: '🤖',
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and focus on what matters most - building.',
    color: 'from-amber-600 to-emerald-400',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
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
            className="inline-flex items-center space-x-2 bg-emerald-50 rounded-full px-4 py-2 border border-emerald-200 mb-6"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-sm text-emerald-700 font-medium">Powerful Features</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-outfit">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help your team build better products, faster than ever before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-amber-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-2xl text-white">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-outfit">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore All Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
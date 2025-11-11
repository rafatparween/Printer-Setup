'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: '⏱️',
    title: 'Save Time',
    description: 'Cut development time by 60% with our streamlined workflows and automation.',
    metric: '60% Faster',
  },
  {
    icon: '💰',
    title: 'Reduce Costs',
    description: 'Eliminate expensive infrastructure and reduce operational costs significantly.',
    metric: '45% Savings',
  },
  {
    icon: '🚀',
    title: 'Scale Faster',
    description: 'Handle millions of users with our auto-scaling global infrastructure.',
    metric: '10x Scale',
  },
  {
    icon: '🎯',
    title: 'Better Results',
    description: 'Ship higher quality products with fewer bugs and better user experience.',
    metric: '94% Satisfaction',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200 mb-6"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span className="text-sm text-amber-700 font-medium">Why Choose Nova</span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-outfit">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">
                Workflow
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're not just another platform. We're your partner in building amazing products that users love and your team enjoys creating.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <span className="text-xl">{benefit.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 font-outfit">{benefit.title}</h3>
                      <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                        {benefit.metric}
                      </span>
                    </div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-8 border border-emerald-100 relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-full -translate-y-8 translate-x-8 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-200 rounded-full translate-y-8 -translate-x-8 opacity-20"></div>
              
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-amber-300 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">
                          {item === 1 && '🚀'}
                          {item === 2 && '💡'}
                          {item === 3 && '🔧'}
                          {item === 4 && '🌟'}
                        </span>
                      </div>
                      <div className="font-semibold text-gray-900 font-outfit">Feature {item}</div>
                      <div className="text-sm text-gray-600 mt-2">Amazing benefit</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-emerald-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600">📈</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">+87%</div>
                  <div className="text-xs text-gray-500">Efficiency</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-amber-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600">😊</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">94%</div>
                  <div className="text-xs text-gray-500">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Animated Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-12 h-12 border-2 border-emerald-200 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-amber-200 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
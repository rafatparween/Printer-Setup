'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'Start with a full-featured 14-day free trial. No credit card required. Get complete access to all features during the trial period. You can upgrade, downgrade, or cancel anytime during or after the trial.',
  },
  {
    question: 'Can I change or cancel my plan later?',
    answer: 'Absolutely! You can upgrade, downgrade, or cancel your plan at any time. All changes take effect immediately and are prorated. No long-term contracts or hidden fees.',
  },
  {
    question: 'Is my data secure and private?',
    answer: 'Security is our top priority. We use enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, regular security audits, and GDPR compliance. Your data is always safe with us.',
  },
  {
    question: 'Do you offer discounts for startups or nonprofits?',
    answer: 'Yes! We offer special discounts for early-stage startups, educational institutions, and non-profit organizations. Contact our sales team with your details to learn more about our discount programs.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'All plans include email support with 24-hour response times. Professional and Enterprise plans include priority support with faster response times, chat support, and dedicated account management for Enterprise customers.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
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
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-200 mb-6"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-sm text-emerald-700 font-medium">Need Help?</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-outfit">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the product, billing, and support.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-2xl p-6 text-left border border-emerald-100 hover:border-amber-300 transition-all duration-300 group hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 font-outfit">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 flex-shrink-0 ml-4"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 border border-emerald-100 max-w-2xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-amber-500 rounded-full translate-y-8 -translate-x-8"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-outfit">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <motion.button
                className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
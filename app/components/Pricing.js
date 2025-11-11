'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams and startups getting started',
    features: [
      'Up to 5 team members',
      '10GB storage',
      'Basic analytics & insights',
      'Email support',
      'Standard security features',
      'Community access',
    ],
    cta: 'Get Started',
    popular: false,
    color: 'from-gray-400 to-gray-600',
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Everything growing teams need to scale efficiently',
    features: [
      'Up to 20 team members',
      '100GB storage',
      'Advanced analytics & reports',
      'Priority email & chat support',
      'Enhanced security & compliance',
      'Custom domains & branding',
      'API access & webhooks',
      'Advanced automation',
    ],
    cta: 'Start Free Trial',
    popular: true,
    color: 'from-emerald-500 to-amber-500',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with complex needs and scale',
    features: [
      'Unlimited team members',
      'Unlimited storage & bandwidth',
      'Custom analytics & dashboards',
      ' Pone & dedicated support',
      'Enterprise-grade security',
      'SLA guarantee',
      'Custom integrations',
      'On-premise deployment options',
      'Dedicated account manager',
      'Training & onboarding',
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-amber-500 to-emerald-500',
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-20 bg-white">
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
            className="inline-flex items-center space-x-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200 mb-6"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="text-sm text-amber-700 font-medium">Transparent Pricing</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-outfit">
            Simple,{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">
              Fair Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start free. No credit card required. Upgrade, downgrade, or cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-2xl p-2">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !isAnnual
                  ? 'bg-white text-gray-900 shadow-lg border border-emerald-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isAnnual
                  ? 'bg-white text-gray-900 shadow-lg border border-amber-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="ml-2 text-sm text-emerald-600 font-normal">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 group ${
                plan.popular
                  ? 'border-emerald-300 bg-gradient-to-br from-emerald-50 to-amber-50 scale-105 shadow-2xl'
                  : 'border-gray-200 bg-white hover:border-emerald-200 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-outfit">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                    {isAnnual && plan.name !== 'Enterprise' 
                      ? `$${Math.floor(parseInt(plan.price.slice(1)) * 0.8)}`
                      : plan.price
                    }
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-600 to-amber-500 text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{plan.cta}</span>
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            All plans include 14-day free trial. No credit card required. Need help choosing?{' '}
            <a href="#contact" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
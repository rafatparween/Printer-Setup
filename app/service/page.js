"use client"
import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const services = [
    {
      id: 1,
      title: 'AI-Powered Automation',
      category: 'automation',
      description: 'Our intelligent automation solutions streamline your workflows and eliminate repetitive tasks.',
      fullDescription: 'SetupHPPrinter provides cutting-edge AI automation that learns from your patterns to optimize business processes. Our solution reduces manual work by up to 80% while maintaining 99.9% accuracy. Perfect for data entry, customer service, and operational workflows.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      features: ['Process automation', 'Machine learning', ' operation', 'API integrations'],
      price: 'From $499/mo'
    },
    {
      id: 2,
      title: 'Smart Data Analytics',
      category: 'analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
      fullDescription: 'Our analytics service provides real-time business intelligence with customizable dashboards and predictive modeling. Track KPIs, identify trends, and make data-driven decisions with confidence. Includes automated reporting and anomaly detection alerts.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      price: 'From $399/mo'
    },
    {
      id: 3,
      title: 'Intelligent Customer Support',
      category: 'support',
      description: ' AI-powered customer service that improves with every interaction.',
      fullDescription: 'Our virtual support agents handle customer inquiries with human-like understanding. The system continuously learns from interactions to provide more accurate responses over time. Includes sentiment analysis, multilingual support, and seamless handoff to human agents when needed.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      features: ['Chatbots & voice assistants', 'Ticket routing', 'Knowledge base integration', 'Sentiment analysis'],
      price: 'From $599/mo'
    },
    {
      id: 4,
      title: 'Cloud Integration Suite',
      category: 'integration',
      description: 'Seamlessly connect all your business applications in one unified platform.',
      fullDescription: 'Our integration service connects your CRM, ERP, marketing tools, and other business applications into a cohesive ecosystem. Automate data flows between systems with customizable workflows and transformation rules. Includes pre-built connectors for 100+ popular business applications.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      features: ['100+ pre-built connectors', 'Custom API development', 'Data transformation', 'Real-time sync'],
      price: 'From $699/mo'
    },
    {
      id: 5,
      title: 'Predictive Maintenance',
      category: 'iot',
      description: 'Anticipate equipment failures before they happen with our IoT solution.',
      fullDescription: 'Combine IoT sensor data with our AI algorithms to predict maintenance needs and prevent downtime. Our solution monitors equipment health in real-time, identifies patterns leading to failures, and schedules maintenance at optimal times. Reduces maintenance costs by up to 40% and downtime by 70%.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: ['IoT monitoring', 'Failure prediction', 'Maintenance scheduling', 'Equipment analytics'],
      price: 'Custom pricing'
    },
    {
      id: 6,
      title: 'Security Monitoring',
      category: 'security',
      description: 'Advanced threat detection and prevention for your digital assets.',
      fullDescription: 'Our AI-powered security service monitors your systems  for potential threats and vulnerabilities. Uses behavioral analysis to detect anomalies and prevent breaches before they happen. Includes automated incident response, compliance reporting, and security awareness training for staff.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance management'],
      price: 'From $799/mo'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'automation', name: 'Automation' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'support', name: 'Customer Support' },
    { id: 'integration', name: 'Integrations' },
    { id: 'security', name: 'Security' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <Head>
        <title>Our Services - SetupHPPrinter</title>
        <meta name="description" content="Discover our smart solutions for your business" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero Section */}
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
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-200 shadow-sm mb-8"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-700 font-medium">Our Premium Services</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-outfit">
            <span className="block">Smart Solutions by</span>
            <span className="block bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">
              SetupHPPrinter
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered services can transform your business operations and drive growth.
          </p>
        </motion.div>

        {/* Services Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center mb-12 gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === category.id 
                  ? 'bg-gradient-to-r from-emerald-600 to-amber-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 border border-emerald-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <div 
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border-2 ${
                    expandedService === service.id 
                      ? 'transform scale-105 shadow-2xl border-emerald-300' 
                      : 'border-emerald-100 hover:border-amber-200 hover:shadow-xl'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 bg-gradient-to-br from-emerald-100 to-amber-100 p-3 rounded-xl">
                        {service.icon}
                      </div>
                      <h3 className="ml-4 text-xl font-bold text-gray-900 font-outfit">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-4"
                        >
                          <p className="text-gray-700 leading-relaxed">{service.fullDescription}</p>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2 font-outfit">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-2">
                            <span className="inline-block bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full border border-emerald-200">
                              {service.price}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <motion.button
                      onClick={() => toggleService(service.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 text-emerald-600 hover:text-amber-600 font-medium flex items-center transition-colors duration-300 group"
                    >
                      {expandedService === service.id ? (
                        <>
                          Show less
                          <svg className="ml-2 w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          Learn more
                          <svg className="ml-2 w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-outfit">
              Ready to transform your business?
            </h2>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
              Our team at SetupHPPrinter is ready to help you implement the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                Request a Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ServicesPage;
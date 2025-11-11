'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'technical',
    priority: 'medium',
    message: '',
    printerModel: ''
  });

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate featured tips
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFAQ((prev) => (prev + 1) % featuredFAQs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const supportCategories = [
    { id: 'contact', name: 'Contact Support', icon: '💬', color: 'from-blue-500 to-cyan-500' },
    { id: 'faq', name: 'FAQ', icon: '❓', color: 'from-emerald-500 to-teal-500' },
    { id: 'guides', name: 'Guides', icon: '📚', color: 'from-purple-500 to-pink-500' },
    { id: 'downloads', name: 'Downloads', icon: '📥', color: 'from-orange-500 to-red-500' },
    { id: 'status', name: 'Service Status', icon: '📊', color: 'from-yellow-500 to-amber-500' }
  ];

  const printerModels = [
    'ProPrint 5000',
    'OfficeJet Pro',
    'LaserMax Elite',
    'EcoPrint Home',
    'PhotoPrint Pro',
    'InkSave Mini',
    'Other Model'
  ];

  const supportTopics = [
    {
      category: 'Setup & Installation',
      issues: [
        'Wireless setup problems',
        'Driver installation',
        'Hardware connection',
        'Mobile printing setup'
      ]
    },
    {
      category: 'Print Quality',
      issues: [
        'Blurry or faded prints',
        'Streaks and lines',
        'Color accuracy issues',
        'Paper jams'
      ]
    },
    {
      category: 'Connectivity',
      issues: [
        'Wi-Fi connection drops',
        'Network configuration',
        'USB connection issues',
        'Cloud printing setup'
      ]
    }
  ];

  const featuredFAQs = [
    {
      question: "How do I connect my printer to Wi-Fi?",
      answer: "To connect your printer to Wi-Fi: 1) Press the wireless button on your printer, 2) Navigate to network settings on the display, 3) Select your Wi-Fi network, 4) Enter your password, 5) Wait for connection confirmation. For detailed instructions, check our setup guide.",
      category: "Setup"
    },
    {
      question: "Why is my printer printing blank pages?",
      answer: "Blank pages usually indicate: 1) Empty or clogged ink cartridges, 2) Incorrect driver settings, 3) Clogged print heads. Try running the printer's cleaning utility and check ink levels. If problem persists, contact support.",
      category: "Print Quality"
    },
    {
      question: "How often should I replace ink cartridges?",
      answer: "Ink replacement depends on usage. For typical home use: 6-12 months. For office use: 3-6 months. Use genuine cartridges for best results and monitor ink levels through the printer software.",
      category: "Maintenance"
    }
  ];

  const quickGuides = [
    {
      title: "Wireless Setup Guide",
      duration: "5 min",
      steps: 4,
      difficulty: "Easy",
      icon: "📶",
      link: "#"
    },
    {
      title: "Print Quality Troubleshooting",
      duration: "10 min",
      steps: 6,
      difficulty: "Medium",
      icon: "🎨",
      link: "#"
    },
    {
      title: "Mobile Printing Setup",
      duration: "7 min",
      steps: 5,
      difficulty: "Easy",
      icon: "📱",
      link: "#"
    },
    {
      title: "Advanced Network Configuration",
      duration: "15 min",
      steps: 8,
      difficulty: "Advanced",
      icon: "🔧",
      link: "#"
    }
  ];

  const downloadItems = [
    {
      name: "ProPrint 5000 Drivers",
      version: "v2.4.1",
      size: "245 MB",
      type: "Windows/macOS",
      updated: "2024-01-10"
    },
    {
      name: "Print Management Software",
      version: "v1.2.3",
      size: "156 MB",
      type: "All Platforms",
      updated: "2024-01-08"
    },
    {
      name: "Mobile Printing App",
      version: "v3.1.0",
      size: "89 MB",
      type: "iOS/Android",
      updated: "2024-01-15"
    },
    {
      name: "User Manuals Pack",
      version: "2024.1",
      size: "45 MB",
      type: "PDF",
      updated: "2024-01-05"
    }
  ];

  const serviceStatus = [
    {
      service: "Printing Services",
      status: "operational",
      message: "All systems normal"
    },
    {
      service: "Cloud Printing",
      status: "operational",
      message: "No issues reported"
    },
    {
      service: "Driver Downloads",
      status: "maintenance",
      message: "Scheduled maintenance until 18:00 UTC"
    },
    {
      service: "Mobile App",
      status: "degraded",
      message: "Partial outage for iOS users"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: 'technical',
      priority: 'medium',
      message: '',
      printerModel: ''
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': return 'text-emerald-400 bg-emerald-400/20 border-emerald-400/30';
      case 'degraded': return 'text-amber-400 bg-amber-400/20 border-amber-400/30';
      case 'maintenance': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'outage': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <>
      <Head>
        <title> Printer Support - SetupHPPrinter</title>
        <meta name="description" content="Get expert help for your printer issues. Support, guides, and downloads." />
      </Head>

      {/* Enhanced Header */}
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-2xl' : 'bg-transparent'
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
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                SetupHPPrinter
              </span>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Products', 'Blog', 'Support', 'About'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-300 hover:text-emerald-400' : 'text-white/90 hover:text-white'
                  } ${item === 'Support' ? 'text-emerald-400' : ''}`}
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
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white' 
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
              }`}
            >
              Live Chat
            </motion.button>
          </div>
        </div>
      </motion.header>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-amber-900 pt-20">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl opacity-30 animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-2xl mb-8"
              >
                <div className="flex space-x-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
                <span className="text-emerald-300 font-semibold"> Expert Support Available</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-outfit leading-tight"
              >
                We're Here to
                <span className="block bg-gradient-to-r from-emerald-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
                  Help You
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Get instant help from our printer experts. Fast solutions, comprehensive guides, and dedicated support for all your printing needs.
              </motion.p>

              {/* Support Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12"
              >
                {[
                  { number: 'Always Available', label: 'Support Available' },
                  { number: '98%', label: 'Satisfaction Rate' },
                  { number: '15min', label: 'Avg Response Time' },
                  { number: '50K+', label: 'Issues Resolved' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Support Navigation Tabs */}
        <section className="py-8 bg-white/5 backdrop-blur-md border-y border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {supportCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-md border ${
                    activeTab === category.id
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

        {/* Main Support Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {/* Contact Support Tab */}
              {activeTab === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                  {/* Contact Form */}
                  <div className="lg:col-span-2">
                    <div className="bg-slate-800 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-white font-outfit">Contact Support</h2>
                        {submitSuccess && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-xl border border-emerald-500/30"
                          >
                            Message sent successfully!
                          </motion.div>
                        )}
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-300 mb-2 font-medium">Full Name *</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 font-medium">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-300 mb-2 font-medium">Printer Model</label>
                            <select
                              name="printerModel"
                              value={formData.printerModel}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                            >
                              <option value="">Select your printer model</option>
                              {printerModels.map(model => (
                                <option key={model} value={model}>{model}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 font-medium">Issue Category</label>
                            <select
                              name="category"
                              value={formData.category}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                            >
                              <option value="technical">Technical Support</option>
                              <option value="setup">Setup & Installation</option>
                              <option value="billing">Billing & Account</option>
                              <option value="warranty">Warranty Claim</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-300 mb-2 font-medium">Subject *</label>
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                              placeholder="Brief description of your issue"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 font-medium">Priority</label>
                            <select
                              name="priority"
                              value={formData.priority}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                            >
                              <option value="low">Low - General Inquiry</option>
                              <option value="medium">Medium - Minor Issue</option>
                              <option value="high">High - Urgent Issue</option>
                              <option value="critical">Critical - System Down</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 mb-2 font-medium">Detailed Description *</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                            placeholder="Please describe your issue in detail..."
                          />
                        </div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                            isSubmitting
                              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                              : 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-emerald-500/25'
                          }`}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              <span>Submitting...</span>
                            </div>
                          ) : (
                            'Submit Support Request'
                          )}
                        </motion.button>
                      </form>
                    </div>
                  </div>

                  {/* Quick Help Sidebar */}
                  <div className="space-y-6">
                    {/* Common Issues */}
                    <div className="bg-slate-800 rounded-3xl p-6 border border-white/10 backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-white mb-4 font-outfit">Common Issues</h3>
                      <div className="space-y-3">
                        {supportTopics.map((topic, index) => (
                          <div key={index} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                            <h4 className="text-emerald-400 font-semibold mb-2">{topic.category}</h4>
                            <div className="space-y-1">
                              {topic.issues.map((issue, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                                  <span className="text-sm">{issue}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Support Channels */}
                    <div className="bg-slate-800 rounded-3xl p-6 border border-white/10 backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-white mb-4 font-outfit">Support Channels</h3>
                      <div className="space-y-3">
                        {[
                          { icon: '💬', name: 'Live Chat', desc: 'Instant help', available: true },
                          { icon: '📞', name: 'Phone Support', desc: ' available', available: true },
                          { icon: '📧', name: 'Email', desc: 'Response within 2h', available: true },
                          { icon: '👥', name: 'Community Forum', desc: 'Peer support', available: true }
                        ].map((channel, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                          >
                            <span className="text-2xl">{channel.icon}</span>
                            <div className="flex-1">
                              <div className="text-white font-semibold">{channel.name}</div>
                              <div className="text-gray-400 text-sm">{channel.desc}</div>
                            </div>
                            <div className={`w-2 h-2 rounded-full ${channel.available ? 'bg-emerald-400' : 'bg-gray-400'}`}></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* FAQ Tab */}
              {activeTab === 'faq' && (
                <motion.div
                  key="faq"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                  {/* Featured FAQ */}
                  <div className="lg:col-span-2">
                    <div className="bg-slate-800 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                      <h2 className="text-3xl font-bold text-white mb-8 font-outfit">Frequently Asked Questions</h2>
                      
                      <div className="space-y-6">
                        {featuredFAQs.map((faq, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-3">
                                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-lg text-sm font-medium border border-emerald-500/30">
                                    {faq.category}
                                  </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                              </div>
                              <button className="ml-4 text-emerald-400 hover:text-emerald-300 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* FAQ Categories */}
                  <div className="space-y-6">
                    <div className="bg-slate-800 rounded-3xl p-6 border border-white/10 backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-white mb-4 font-outfit">FAQ Categories</h3>
                      <div className="space-y-3">
                        {[
                          { name: 'Setup & Installation', count: 12, icon: '⚙️' },
                          { name: 'Print Quality', count: 8, icon: '🎨' },
                          { name: 'Connectivity', count: 6, icon: '📶' },
                          { name: 'Maintenance', count: 5, icon: '🔧' },
                          { name: 'Software & Drivers', count: 7, icon: '💻' },
                          { name: 'Troubleshooting', count: 10, icon: '🔍' }
                        ].map((category, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                          >
                            <span className="text-2xl">{category.icon}</span>
                            <div className="flex-1">
                              <div className="text-white font-semibold">{category.name}</div>
                            </div>
                            <span className="bg-white/10 text-gray-300 px-2 py-1 rounded-lg text-sm">
                              {category.count}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Guides Tab */}
              {activeTab === 'guides' && (
                <motion.div
                  key="guides"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-outfit">
                      Step-by-Step <span className="bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text text-transparent">Guides</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Comprehensive tutorials for all your printing needs</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {quickGuides.map((guide, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition duration-300"></div>
                        
                        <div className="relative bg-slate-800 rounded-3xl p-6 border border-white/10 backdrop-blur-sm h-full flex flex-col">
                          <div className="text-4xl mb-4">{guide.icon}</div>
                          <h3 className="text-xl font-bold text-white mb-3 font-outfit group-hover:text-emerald-400 transition-colors duration-300">
                            {guide.title}
                          </h3>
                          
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="flex items-center space-x-1 text-gray-400 text-sm">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{guide.duration}</span>
                            </span>
                            <span className="flex items-center space-x-1 text-gray-400 text-sm">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              <span>{guide.steps} steps</span>
                            </span>
                          </div>

                          <div className="mt-auto">
                            <div className="flex items-center justify-between">
                              <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                                guide.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                                guide.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                                'bg-red-500/20 text-red-300 border border-red-500/30'
                              }`}>
                                {guide.difficulty}
                              </span>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                              >
                                View Guide
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Downloads Tab */}
              {activeTab === 'downloads' && (
                <motion.div
                  key="downloads"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-outfit">
                      Software <span className="bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text text-transparent">Downloads</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Latest drivers, software, and documentation</p>
                  </div>

                  <div className="bg-slate-800 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-4 px-6 text-gray-400 font-semibold">Software</th>
                            <th className="text-left py-4 px-6 text-gray-400 font-semibold">Version</th>
                            <th className="text-left py-4 px-6 text-gray-400 font-semibold">Size</th>
                            <th className="text-left py-4 px-6 text-gray-400 font-semibold">Platform</th>
                            <th className="text-left py-4 px-6 text-gray-400 font-semibold">Updated</th>
                            <th className="text-left py-4 px-6 text-gray-400 font-semibold">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {downloadItems.map((item, index) => (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
                            >
                              <td className="py-4 px-6">
                                <div className="text-white font-semibold">{item.name}</div>
                              </td>
                              <td className="py-4 px-6 text-gray-300">{item.version}</td>
                              <td className="py-4 px-6 text-gray-300">{item.size}</td>
                              <td className="py-4 px-6">
                                <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-lg text-sm">
                                  {item.type}
                                </span>
                              </td>
                              <td className="py-4 px-6 text-gray-300">{item.updated}</td>
                              <td className="py-4 px-6">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                                >
                                  Download
                                </motion.button>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Service Status Tab */}
              {activeTab === 'status' && (
                <motion.div
                  key="status"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-outfit">
                      Service <span className="bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text text-transparent">Status</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Real-time status of all our services and systems</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {serviceStatus.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-800 rounded-3xl p-6 border border-white/10 backdrop-blur-sm"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-white font-outfit">{service.service}</h3>
                          <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getStatusColor(service.status)}`}>
                            {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-gray-300">{service.message}</p>
                        <div className="mt-4 flex items-center space-x-2 text-sm text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Last updated: 2 minutes ago</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* System Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 bg-slate-800 rounded-3xl p-8 border border-white/10 backdrop-blur-sm max-w-4xl mx-auto"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6 font-outfit text-center">System Performance</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { label: 'Uptime', value: '99.98%', color: 'text-emerald-400' },
                        { label: 'Response Time', value: '45ms', color: 'text-emerald-400' },
                        { label: 'Active Users', value: '2.4K', color: 'text-blue-400' },
                        { label: 'Incidents', value: '0', color: 'text-emerald-400' }
                      ].map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className={`text-2xl md:text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                          <div className="text-gray-400 text-sm">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Quick Support Banner */}
        <section className="py-16 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-y border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-outfit">
                Need Immediate Help?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our expert support team is available  to assist you with any printer issues.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  Start Live Chat
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Call Support:+(1) 888-291-3869
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;
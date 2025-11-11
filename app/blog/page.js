'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredPost, setFeaturedPost] = useState(null);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set featured post
  useEffect(() => {
    setFeaturedPost(blogPosts[0]);
  }, []);

  const categories = [
    { id: 'all', name: 'All Articles', count: 12 },
    { id: 'printing', name: 'Printing Tips', count: 4 },
    { id: 'technology', name: 'Technology', count: 3 },
    { id: 'reviews', name: 'Product Reviews', count: 3 },
    { id: 'tutorials', name: 'Tutorials', count: 2 }
  ];

  const tags = [
    '3D Printing', 'Inkjet', 'Laser', 'Wireless', 'Office', 'Home', 'Photography', 'Eco-Friendly'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of 3D Printing: Revolutionizing Manufacturing',
      excerpt: 'Discover how 3D printing technology is transforming industries and what it means for the future of manufacturing and prototyping.',
      content: `3D printing, also known as additive manufacturing, has evolved from a niche technology to a mainstream manufacturing solution. In this comprehensive guide, we explore the latest advancements in 3D printing technology and how businesses are leveraging it to reduce costs, accelerate production, and create previously impossible designs.

## The Evolution of 3D Printing

From its humble beginnings in the 1980s to the sophisticated systems available today, 3D printing has undergone remarkable transformations. Modern printers can now work with a wide range of materials including metals, ceramics, and advanced polymers.

### Key Benefits:
- **Rapid Prototyping**: Reduce development time from weeks to days
- **Customization**: Create personalized products at scale
- **Complex Geometries**: Produce designs impossible with traditional methods
- **Sustainability**: Reduce material waste significantly

## Industry Applications

### Healthcare
3D printing is revolutionizing healthcare with custom prosthetics, dental implants, and even bioprinting of tissues and organs.

### Aerospace
Major aerospace companies use 3D printing to create lightweight, complex components that reduce fuel consumption and improve performance.

### Automotive
From prototyping to production parts, automotive manufacturers are embracing 3D printing for its flexibility and cost-effectiveness.

## Future Trends

The future of 3D printing includes multi-material printing, faster printing speeds, and integration with AI for optimized designs. As technology continues to advance, we can expect 3D printing to become even more accessible and versatile.`,
      category: 'technology',
      author: {
        name: 'Sarah Chen',
        role: 'Tech Innovation Lead',
        avatar: 'https://tse1.mm.bing.net/th/id/OIP.M0Uak0pyXetvVhkUU-RMOAHaEJ?pid=Api&rs=1&c=1&qlt=95&w=200&h=111',
      },
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80',
      readTime: '8 min read',
      publishedDate: '2024-01-15',
      tags: ['3D Printing', 'Technology', 'Manufacturing'],
      featured: true,
      views: 2847,
      likes: 156
    },
    {
      id: 2,
      title: 'Top 5 Office Printers for 2024: Expert Reviews',
      excerpt: 'Our comprehensive review of the best office printers this year, tested in real-world business environments.',
      content: `Choosing the right office printer can significantly impact productivity and operational costs. After testing dozens of models, we've compiled our top picks for 2024.

## Testing Methodology

We evaluated each printer based on:
- Print speed and quality
- Reliability and durability
- Total cost of ownership
- Connectivity and features
- User experience

## Top Picks

### 1. ProPrint 5000 - Best Overall
**Rating: 4.8/5**
The ProPrint 5000 combines speed, quality, and reliability in one package. With 50 pages per minute and exceptional build quality, it's perfect for busy offices.

### 2. OfficeJet Pro - Best All-in-One
**Rating: 4.6/5**
Excellent for small to medium offices needing printing, scanning, and copying capabilities in a single device.

### 3. LaserMax Elite - Best for Large Offices
**Rating: 4.9/5**
Unmatched speed and paper capacity make this ideal for enterprise environments with high-volume printing needs.

## Key Considerations

When choosing an office printer, consider your monthly print volume, required features, and long-term operating costs. Don't forget to factor in maintenance and support availability.`,
      category: 'reviews',
      author: {
        name: 'Mike Rodriguez',
        role: 'Senior Product Analyst',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.1&auto=format&fit=crop&w=150&q=80'
      },
      image: 'https://images.pexels.com/photos/19124461/pexels-photo-19124461.jpeg?_gl=1*1f1cqje*_ga*NzE4MzM2NzMyLjE3NTU3OTE3MDg.*_ga_8JE65Q40S6*czE3NjI4Nzk2NjkkbzgkZzEkdDE3NjI4ODAxMDMkajYwJGwwJGgw',
      readTime: '6 min read',
      publishedDate: '2024-01-12',
      tags: ['Office', 'Reviews', 'Laser'],
      featured: true,
      views: 1923,
      likes: 89
    },
    {
      id: 3,
      title: 'Wireless Printing Setup: Complete Guide for 2024',
      excerpt: 'Step-by-step guide to setting up wireless printing across all your devices with troubleshooting tips.',
      content: `Wireless printing has become essential in modern offices and homes. This guide covers everything you need to know about setting up and optimizing your wireless printing experience.

## Getting Started

### Network Requirements
- Stable Wi-Fi connection (2.4GHz or 5GHz)
- Router compatibility
- Proper network security

### Step-by-Step Setup

1. **Printer Placement**: Position your printer within good Wi-Fi range
2. **Network Connection**: Connect printer to your Wi-Fi network
3. **Driver Installation**: Install latest drivers on all devices
4. **Mobile Setup**: Configure mobile printing apps
5. **Testing**: Print test pages from different devices

## Advanced Features

### Cloud Printing
Learn how to set up Google Cloud Print and other cloud printing services for remote access.

### Mobile Printing
Configure AirPrint (iOS), Google Cloud Print (Android), and manufacturer-specific mobile apps.

## Troubleshooting Common Issues

We cover solutions for common wireless printing problems including connection drops, slow printing, and compatibility issues.`,
      category: 'tutorials',
      author: {
        name: 'Emily Watson',
        role: 'Technical Support Specialist',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.1&auto=format&fit=crop&w=150&q=80'
      },
      image: 'https://images.pexels.com/photos/193057/pexels-photo-193057.jpeg?_gl=1*asmu9m*_ga*NzE4MzM2NzMyLjE3NTU3OTE3MDg.*_ga_8JE65Q40S6*czE3NjI4Nzk2NjkkbzgkZzEkdDE3NjI4ODA2ODYkajI1JGwwJGgw',
      readTime: '10 min read',
      publishedDate: '2024-01-10',
      tags: ['Wireless', 'Tutorials', 'Setup'],
      views: 3156,
      likes: 134
    },
    {
      id: 4,
      title: 'Eco-Friendly Printing: Reduce Your Environmental Impact',
      excerpt: 'Sustainable printing practices that save money while protecting the environment.',
      content: `Environmental responsibility is increasingly important in printing. Discover how to reduce your ecological footprint while maintaining quality and efficiency.

## Sustainable Materials

### Recycled Paper
Learn about different types of recycled paper and their appropriate uses.

### Eco-Friendly Inks
Explore vegetable-based and soy-based inks as alternatives to traditional petroleum-based options.

## Energy Efficiency

### Energy Star Certified Printers
How Energy Star certification can reduce your energy consumption by up to 50%.

### Power Management
Configure sleep modes and automatic shutdown to minimize energy waste.

## Waste Reduction Strategies

- Duplex printing implementation
- Print preview practices
- Digital document workflows
- Toner cartridge recycling programs

## Case Studies

Real-world examples of companies that have successfully implemented green printing initiatives and the results they've achieved.`,
      category: 'printing',
      author: {
        name: 'David Kim',
        role: 'Sustainability Expert',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.1&auto=format&fit=crop&w=150&q=80'
      },
      image: 'https://images.pexels.com/photos/8217357/pexels-photo-8217357.jpeg?_gl=1*1a8136o*_ga*NzE4MzM2NzMyLjE3NTU3OTE3MDg.*_ga_8JE65Q40S6*czE3NjI4Nzk2NjkkbzgkZzEkdDE3NjI4ODA3MjQkajU5JGwwJGgw',
      readTime: '7 min read',
      publishedDate: '2024-01-08',
      tags: ['Eco-Friendly', 'Sustainability', 'Printing'],
      views: 1876,
      likes: 97
    },
    {
      id: 5,
      title: 'Photo Printing Masterclass: Professional Results at Home',
      excerpt: 'Transform your digital photos into stunning physical prints with our expert techniques.',
      content: `Creating professional-quality photo prints at home is easier than ever with the right knowledge and equipment. This masterclass covers everything from color management to paper selection.

## Color Management

### ICC Profiles
Understanding and using ICC profiles for accurate color reproduction.

### Monitor Calibration
Step-by-step guide to calibrating your monitor for print accuracy.

## Paper Selection

### Glossy vs Matte
When to use different paper finishes for optimal results.

### Professional Papers
Overview of premium paper options from leading manufacturers.

## Printer Settings Optimization

### Resolution Settings
Balancing print quality with speed and ink consumption.

### Color Mode Selection
Choosing between RGB and CMYK color modes for different applications.

## Advanced Techniques

Learn about borderless printing, color correction, and creating gallery-quality prints that rival professional labs.`,
      category: 'printing',
      author: {
        name: 'Lisa Thompson',
        role: 'Professional Photographer',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.1&auto=format&fit=crop&w=150&q=80'
      },
      image: 'https://images.pexels.com/photos/7014413/pexels-photo-7014413.jpeg?_gl=1*1ll3rsr*_ga*NzE4MzM2NzMyLjE3NTU3OTE3MDg.*_ga_8JE65Q40S6*czE3NjI4Nzk2NjkkbzgkZzEkdDE3NjI4ODA3NzQkajkkbDAkaDA.',
      readTime: '12 min read',
      publishedDate: '2024-01-05',
      tags: ['Photography', 'Photo Printing', 'Tutorials'],
      views: 2987,
      likes: 167
    },
    {
      id: 6,
      title: 'Laser vs Inkjet: Choosing the Right Technology',
      excerpt: 'Comprehensive comparison to help you decide between laser and inkjet printing technologies.',
      content: `The choice between laser and inkjet printers depends on your specific needs and use cases. This guide breaks down the pros and cons of each technology.

## Laser Printing

### Advantages
- Faster printing speeds
- Lower cost per page for text
- Water-resistant prints
- Better for high-volume printing

### Disadvantages
- Higher initial cost
- Larger physical size
- Limited photo quality
- More expensive color printing

## Inkjet Printing

### Advantages
- Superior photo quality
- Lower initial cost
- Smaller footprint
- Wider media compatibility

### Disadvantages
- Higher cost per page
- Slower printing speeds
- Ink can smudge when wet
- Regular maintenance required

## Decision Matrix

We provide a detailed decision matrix based on:
- Print volume
- Content type (text vs photos)
- Budget constraints
- Space limitations
- Environmental considerations

## Future Developments

Latest advancements in both technologies and what to expect in the coming years.`,
      category: 'technology',
      author: {
        name: 'Robert Johnson',
        role: 'Print Technology Analyst',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.1&auto=format&fit=crop&w=150&q=80'
      },
      image: 'https://images.pexels.com/photos/7014416/pexels-photo-7014416.jpeg?_gl=1*b2yvhh*_ga*NzE4MzM2NzMyLjE3NTU3OTE3MDg.*_ga_8JE65Q40S6*czE3NjI4Nzk2NjkkbzgkZzEkdDE3NjI4ODA4MjckajU1JGwwJGgw',
      readTime: '9 min read',
      publishedDate: '2024-01-03',
      tags: ['Laser', 'Inkjet', 'Comparison'],
      views: 3421,
      likes: 201
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>Printing Blog & Insights - SetupHPPrinter</title>
        <meta name="description" content="Expert insights, reviews, and tutorials about printing technology" />
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
            <Link href="/" className="flex items-center space-x-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
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
            </Link>

            {/* <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Products', 'Blog', 'Support', 'About'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-300 hover:text-emerald-400' : 'text-white/90 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav> */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                isScrolled 
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white' 
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
              }`}
            >
              Subscribe
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
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
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
                <span className="text-emerald-300 font-semibold">Latest Printing Insights</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-outfit leading-tight"
              >
                Printing
                <span className="block bg-gradient-to-r from-emerald-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
                  Knowledge Hub
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Expert articles, reviews, and tutorials to help you master printing technology and make informed decisions.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-outfit">
                  Featured <span className="bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text text-transparent">Article</span>
                </h2>
                <p className="text-gray-400 text-lg">Don't miss our latest in-depth analysis</p>
              </motion.div>

              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-sm opacity-50 group-hover:opacity-75 transition duration-300"></div>
                
                <div className="relative bg-slate-800 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Featured Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-xl font-semibold shadow-2xl">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-lg text-sm font-medium border border-emerald-500/30">
                          {featuredPost.category}
                        </span>
                        <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-outfit group-hover:text-emerald-400 transition-colors duration-300">
                        {featuredPost.title}
                      </h3>

                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <img
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            className="w-10 h-10 rounded-full border-2 border-emerald-500/50"
                          />
                          <div>
                            <p className="text-white font-semibold">{featuredPost.author.name}</p>
                            <p className="text-gray-400 text-sm">{featuredPost.author.role}</p>
                          </div>
                        </div>
                        <span className="text-gray-400 text-sm">{formatDate(featuredPost.publishedDate)}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-gray-400">
                          <div className="flex items-center space-x-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>{featuredPost.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>{featuredPost.likes}</span>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                        >
                          Read Article
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </section>
        )}

        {/* Blog Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 rounded-2xl p-6 border border-white/10 backdrop-blur-sm mb-8"
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-outfit">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                          activeCategory === category.id
                            ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`px-2 py-1 rounded-lg text-xs ${
                          activeCategory === category.id
                            ? 'bg-emerald-500 text-white'
                            : 'bg-white/10 text-gray-400'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Popular Tags */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-outfit">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/5 text-gray-300 px-3 py-2 rounded-lg text-sm border border-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Blog Posts */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative"
                    >
                      {/* Gradient Border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition duration-300"></div>
                      
                      <div className="relative bg-slate-800 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm h-full flex flex-col">
                        {/* Post Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-lg text-sm font-medium border border-emerald-500/30">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Post Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="text-gray-400 text-sm">{post.readTime}</span>
                            <span className="text-gray-400 text-sm">•</span>
                            <span className="text-gray-400 text-sm">{formatDate(post.publishedDate)}</span>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 font-outfit group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-400 mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>

                          {/* Author and Stats */}
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                            <div className="flex items-center space-x-3">
                              <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-8 h-8 rounded-full border border-emerald-500/50"
                              />
                              <span className="text-gray-300 text-sm">{post.author.name}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-400 text-sm">
                              <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>{post.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span>{post.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>

                {/* Load More Button */}
                {filteredPosts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                    >
                      Load More Articles
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-y border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-outfit">
                Stay Updated with Printing Insights
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Get the latest articles, reviews, and tutorials delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
'use client';

import { motion } from 'framer-motion';

const Disclaimer = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-200 shadow-sm mb-6"
                    >
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-emerald-700 font-medium">Legal Disclaimer</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit">
                        <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">Disclaimer</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* New Disclaimer Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-emerald-50 to-amber-50 border-l-4 border-emerald-500 text-emerald-900 p-8 mb-12 rounded-2xl shadow-lg"
                >
                    <div className="flex items-start mb-4">
                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-emerald-600 text-lg">⚠️</span>
                        </div>
                        <div>
                            <p className="mb-4 text-lg leading-relaxed">
                                <strong className="text-emerald-800">SetupHPPrinter</strong> is an independent informational website and is not affiliated with or endorsed by any printer manufacturers, including but not limited to HP (Hewlett-Packard), Epson, Canon, Brother, or Lexmark.
                            </p>
                            <p className="mb-4 text-lg leading-relaxed">
                                All brand names, trademarks, logos, and product images are the property of their respective owners and are used strictly for informational and reference purposes only.
                            </p>
                            <p className="text-lg leading-relaxed">
                                The troubleshooting guides and content provided on this site are based on general user experiences and known issues. While we strive for accuracy, we do not guarantee that the solutions will resolve your specific problem. For brand-authorized assistance, we recommend contacting the official support channels of your printer manufacturer.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Existing Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-8"
                >
                    {[
                        {
                            content: `The information provided by <strong>SetupHPPrinter</strong> ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.`
                        },
                        {
                            content: `Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.`
                        },
                        {
                            content: `The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.`
                        },
                        {
                            content: `We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.`
                        }
                    ].map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                    <span className="text-emerald-600 font-semibold text-sm">{index + 1}</span>
                                </div>
                                <p 
                                    className="text-gray-700 text-lg leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12 pt-8 border-t border-emerald-200"
                >
                    <p className="text-emerald-700 font-semibold">
                        © 2025 SetupHPPrinter. All Rights Reserved.
                    </p>
                    <p className="text-gray-600 mt-2">
                        For any questions regarding this disclaimer, please contact us.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Disclaimer;
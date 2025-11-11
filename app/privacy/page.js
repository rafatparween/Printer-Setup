'use client';

import { motion } from 'framer-motion';

export const PrivacyPolicy = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    {/* Header Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-200 shadow-sm mb-6"
                        >
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            <span className="text-emerald-700 font-medium">Privacy & Security</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit">
                            Privacy & <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">Policy</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
                    </motion.div>

                    {/* 🔒 Privacy Policy Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl flex items-center justify-center mr-4">
                                <span className="text-emerald-600 text-xl">🔒</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 font-outfit">Privacy Policy</h2>
                        </div>
                        <div className="space-y-6 text-gray-700">
                            <p className="text-lg leading-relaxed">
                                At <strong className="text-emerald-700">SetupHPPrinter</strong>, we take your privacy seriously. Our website is designed to offer helpful content without collecting unnecessary personal data.
                            </p>
                            
                            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                                <p className="text-lg font-semibold text-emerald-800 mb-3">What We Collect:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span>Anonymous analytics data (e.g., browser type, device type, general location) via tools like Google Analytics.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span>Optional information via contact forms or comments, if available.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                                <p className="text-lg font-semibold text-amber-800 mb-3">What We Don't Collect:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span>We do not request or store payment details, sensitive personal information, or login credentials.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span>We do not share or sell user data to third parties.</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-lg leading-relaxed">
                                Any data collected is used solely to enhance website performance and user experience. We follow standard security practices to protect any information submitted voluntarily by users.
                            </p>
                            <p className="text-lg leading-relaxed">
                                If you have privacy concerns or questions, feel free to contact us at:{" "}
                                <a href="mailto:support@setuphpprinter.com" className="text-emerald-600 hover:text-amber-600 font-semibold transition-colors duration-300">
                                    support@setuphpprinter.com
                                </a>
                            </p>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                                <p className="text-yellow-800 font-medium">
                                    <strong>Please note:</strong> This website may include external links for reference. We are not responsible for the content or privacy practices of third-party sites.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Original Privacy Sections */}
                    {[
                        {
                            title: "Who We Are",
                            content: `We at <strong>SetupHPPrinter</strong>, located at the World Wide Web as <a href="http://setuphpprinter.com" class="text-emerald-600 hover:text-amber-600 font-semibold transition-colors duration-300">www.setuphpprinter.com</a>, value your right to privacy. As a visitor to our website, we understand the importance of your privacy and strive to ensure that your information is protected.
                            We may ask for personal information such as your name, email address, or preferences when you access specific areas of our website or subscribe to our newsletter.
                            Rest assured, your data is securely managed to deliver content and services tailored to your choices.`,
                            content2: `If you provide us with personal details like your name, email, address, or phone number and do not opt-out, we may use this information to contact you for better understanding your requirements.
                            You can opt out of this communication at any time and opt back in whenever you prefer.`
                        },
                        {
                            title: "What Personal Data We Collect & Why",
                            content: `We generally do not collect personal information while you browse our website. Your browser, however, automatically informs us of your device type and operating system.
                            We use cookies and log files to gather non-personally identifiable information such as:`,
                            list: [
                                "Internet Protocol (IP) addresses",
                                "Browser type",
                                "Internet Service Provider (ISP)",
                                "Date and time stamps",
                                "Referring/exit pages",
                                "Number of clicks"
                            ],
                            content2: `This information is used to analyze trends, administer the website, track user movements, and compile demographic data. It is not linked to any personally identifiable information.`
                        },
                        {
                            title: "How We Protect Your Personal Information",
                            content: `At <strong>SetupHPPrinter</strong>, we prioritize your privacy and security. Sensitive information entered on our website, such as credit card details, is encrypted using Secure Socket Layer (SSL) technology.
                            We adhere to industry standards to safeguard your personal information during transmission and storage.`,
                            content2: `However, no method of transmission over the internet or electronic storage is entirely secure. While we take all commercially reasonable steps to protect your data, we cannot guarantee absolute security.`
                        },
                        {
                            title: "We Value Your Personal Information",
                            content: `If we request general demographic information, it is strictly for reporting purposes, and users remain anonymous. Your phone numbers, email addresses, and postal addresses are never shared for demographic reporting with external entities.`,
                            content2: `We may disclose personal information when required by law or if we believe such action is necessary to comply with legal proceedings, court orders, or legal processes served on our website.`
                        },
                        {
                            title: "Notification of Changes",
                            content: `If <strong>SetupHPPrinter</strong> decides to make changes to this Privacy Policy, we will post the updates on this page and other relevant areas of our website.
                            This ensures that our users are always aware of what information we collect, how we use it, and under what circumstances it may be disclosed.`
                        }
                    ].map((section, index) => (
                        <motion.section
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-emerald-600 font-semibold">{index + 1}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 font-outfit">{section.title}</h2>
                            </div>
                            <div className="space-y-6 text-gray-700">
                                <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
                                
                                {section.list && (
                                    <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                                        <ul className="space-y-3">
                                            {section.list.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start">
                                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {section.content2 && (
                                    <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content2 }} />
                                )}
                            </div>
                        </motion.section>
                    ))}

                    {/* Footer */}
                    {/* <motion.footer
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center pt-8 border-t border-emerald-200"
                    >
                        <p className="text-emerald-700 font-semibold mb-4">
                            © 2025 SetupHPPrinter. All Rights Reserved.
                        </p>
                        <p className="text-gray-600">
                            For any questions or concerns regarding our privacy policy, please contact us at{" "}
                            <a href="mailto:support@setuphpprinter.com" className="text-emerald-600 hover:text-amber-600 font-semibold transition-colors duration-300">
                                support@setuphpprinter.com
                            </a>
                            .
                        </p>
                    </motion.footer> */}
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
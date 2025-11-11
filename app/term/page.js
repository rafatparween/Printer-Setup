'use client';

import { motion } from 'framer-motion';

const TermPage = () => {
    const sections = [
        {
            title: "Terms of Use",
            content: `
                <ul class="space-y-3">
                    <li>All content provided is for informational purposes only.</li>
                    <li>Users may not reproduce, distribute, or exploit any content from this site without prior written permission.</li>
                    <li><strong>SetupHPPrinter</strong> reserves the right to update or modify these terms at any time without notice.</li>
                    <li>Use of this website is at your own risk. We are not liable for any damages or losses resulting from the use of the information provided.</li>
                </ul>
                <p class="mt-4">Your continued use of the website following the posting of any changes to these Terms of Use constitutes acceptance of those changes.</p>
            `
        },
        {
            title: "Cookie Notice",
            content: `
                <p>Our website uses cookies to enhance your browsing experience and analyze website traffic. Cookies are small data files stored on your device when you visit a website.</p>
                <ul class="space-y-2 mt-3">
                    <li>Understand how users interact with our content</li>
                    <li>Improve website performance and functionality</li>
                </ul>
                <p class="mt-3">By continuing to browse our site, you consent to our use of cookies. You can disable cookies in your browser settings at any time. However, please note that disabling cookies may affect your ability to access certain features of our website.</p>
            `
        },
        {
            title: "Third-Party Links Disclaimer",
            content: `
                <p>This website may contain links to external websites that are not provided, maintained, or affiliated with <strong>SetupHPPrinter</strong>.
                We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external sites.
                <strong> SetupHPPrinter</strong> is not responsible for the content, privacy practices, or policies of any third-party websites linked from our platform.
                Users are encouraged to review the privacy policies and terms of use of any third-party websites they visit through links on our site.</p>
            `
        },
        {
            title: "The Contract",
            content: `
                <ul class="space-y-3">
                    <li>The clients and <strong>SetupHPPrinter</strong> will have an independent contractor relationship, with neither party intending or implying a partnership or joint venture.</li>
                    <li>Both parties will agree on a start date for the services, and costs will be applied in accordance with that date.</li>
                    <li>Clients will receive regular reports on the performance of services.</li>
                    <li>Either party must provide at least 10 business days' notice before canceling or transferring service duties to another service vendor.</li>
                    <li>A person who is not a party to the contract shall have no rights under or in connection with it.</li>
                    <li><strong>SetupHPPrinter</strong> reserves the right to subcontract some service tasks to a third-party service provider.</li>
                </ul>
            `
        },
        {
            title: "Payment",
            content: `
                <ul class="space-y-3">
                    <li>Clients must pay the full cost upfront when signing up for a monthly service plan with <strong>SetupHPPrinter</strong>.</li>
                    <li>For fixed quotes, clients must pay 50% of the agreed amount in advance, with the remaining 50% due within seven days of the service start date.</li>
                    <li><strong>SetupHPPrinter</strong> will bill clients monthly in advance.</li>
                    <li>If a client fails to pay an invoice on time, <strong>SetupHPPrinter</strong> reserves the right to immediately discontinue services without prior notice.</li>
                </ul>
            `
        },
        {
            title: "Liability",
            content: `
                <ul class="space-y-3">
                    <li><strong>SetupHPPrinter</strong> will not be liable for any consequential or indirect losses due to delays in service deliverables caused by natural or uncontrollable events.</li>
                    <li>Clients agree to indemnify and hold <strong>SetupHPPrinter</strong> harmless from any claims, losses, liabilities, and expenses arising from services provided, including third-party claims related to false advertising, intellectual property violations, or content submissions for publication.</li>
                    <li>Due to the nature of digital media, any content provided by clients for publication will be publicly accessible upon publication. <strong>SetupHPPrinter</strong> is not responsible for screening such material or any resultant losses.</li>
                </ul>
            `
        },
        {
            title: "Waiver",
            content: `
                <ul class="space-y-3">
                    <li>Failure to enforce strict performance of any provision of the contract does not constitute a waiver of any obligations or rights.</li>
                    <li>Waivers are only valid if communicated in writing.</li>
                </ul>
            `
        },
        {
            title: "Privacy Rights",
            content: `
                <ul class="space-y-3">
                    <li>Information such as name, email, and contact details shared through our forms will remain private and will not be disclosed to third parties without prior consent, except for internal use.</li>
                    <li><strong>SetupHPPrinter</strong> uses SSL encryption to protect sensitive data during online transactions. However, no method of online transmission is 100% secure, and absolute security cannot be guaranteed.</li>
                    <li>Cookies may be used to track browsing preferences and gather statistical data to improve user experience. These cookies do not access personal information.</li>
                    <li>Third-party advertisers linked on our site may use cookies to gather statistical information, but they do not have access to personal data.</li>
                </ul>
            `
        },
        {
            title: "Modification of Terms",
            content: `
                <p><strong>SetupHPPrinter</strong> reserves the right to modify these terms and conditions at any time, including during an ongoing contract. Clients will be notified of any changes via email or updates on our website.</p>
            `
        }
    ];

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
                        <span className="text-emerald-700 font-medium">Legal Terms</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit">
                        Terms and <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">Conditions</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Terms Sections */}
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <motion.section
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl flex items-center justify-center mr-4">
                                    <span className="text-emerald-600 font-semibold">{index + 1}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 font-outfit">{section.title}</h2>
                            </div>
                            <div 
                                className="text-gray-700 text-lg leading-relaxed space-y-4"
                                dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                        </motion.section>
                    ))}
                </div>

                {/* Footer */}
                {/* <motion.footer
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12 pt-8 border-t border-emerald-200"
                >
                    <p className="text-emerald-700 font-semibold mb-4">
                        © 2025 SetupHPPrinter. All Rights Reserved.
                    </p>
                    <p className="text-gray-600">
                        For any questions or concerns regarding these terms, please contact us at
                        <a 
                            href="mailto:support@setuphpprinter.com" 
                            className="text-emerald-600 hover:text-amber-600 font-semibold transition-colors duration-300 ml-1"
                        >
                            support@setuphpprinter.com
                        </a>.
                    </p>
                </motion.footer> */}
            </div>
        </div>
    );
};

export default TermPage;
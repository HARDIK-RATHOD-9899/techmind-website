import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: {
      title: 'Product',
      links: ['Landing Page', 'Popup Builders', 'Web Design', 'Content', 'Integrations'],
    },
    useCases: {
      title: 'Use Cases',
      links: ['Web-Designers', 'Marketers', 'Small Business', 'Website Builders'],
    },
    recourses: {
      title: 'Recourses',
      links: ['Academy', 'Blog', 'Themes', 'Hosting', 'Developers', 'Supports'],
    },
    company: {
      title: 'Company',
      links: ['About Us', 'Careers', 'FAQs', 'Teams', 'Contact Us'],
    },
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center">LOGO</h1>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Links Sections */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>Office 529, The City Center, Raiya Rd, Nehru Nagar, Rajkot, Gujarat 360007</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@techmindacademy.com" className="hover:text-gray-300 transition-colors">
                  info@techmindacademy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} All Rights Reserved By Akshaya Technolabs
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms Of Use
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Legal
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
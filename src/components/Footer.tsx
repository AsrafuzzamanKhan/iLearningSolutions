import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Courses', page: 'courses' },
    { label: 'Consulting', page: 'consulting' },
    { label: 'Resources', page: 'resources' },
    { label: 'Contact', page: 'contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">iLearning Solutions</span>
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering professionals and organisations with future-ready skills through 
              high-quality training and globally recognised certifications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => setCurrentPage(link.page)}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
              <li>
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={() => setCurrentPage('auth')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Login
                </motion.button>
              </li>
            </ul>
          </div>

          {/* Course Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Course Categories</h3>
            <ul className="space-y-2">
              <li>
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={() => setCurrentPage('courses')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Project Management
                </motion.button>
              </li>
              <li>
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={() => setCurrentPage('courses')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Continuous Improvement
                </motion.button>
              </li>
              <li>
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={() => setCurrentPage('courses')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Strategy & Leadership
                </motion.button>
              </li>
              <li>
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={() => setCurrentPage('courses')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  AI & Innovation
                </motion.button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">support@ilearningsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">+61 123 456 789</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Learning Street<br />
                  Sydney, NSW 2000<br />
                  Australia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} iLearning Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <motion.button
                onClick={() => setCurrentPage('privacy-policy')}
                whileHover={{ y: -1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.button>
              <motion.button
                onClick={() => setCurrentPage('terms')}
                whileHover={{ y: -1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </motion.button>
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
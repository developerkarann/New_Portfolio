import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '' },
    { name: 'Backend Development', href: '' },
    { name: 'API Integration', href: '' },
    { name: 'Database Design', href: '' },
    { name: 'Code Review', href: '' },
    { name: 'Consulting', href: '' }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/developerkarann', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/karan-pal-developer/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaTwitter, href: 'https://x.com/developerkarann', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: FaEnvelope, href: 'mailto:karanpal03040@gmail.com', label: 'Email', color: 'hover:text-red-400' }
  ];

  return (
    <div className=" bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex flex-col">
      
      
      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Karan Pal
                </h3>
                <p className="text-purple-100 text-sm">Software Developer</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Passionate MERN stack developer with expertise in creating modern, scalable web applications. 
                I bring ideas to life with clean code and intuitive user experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}
                  
                  >
                    <p
                    
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {service.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaEnvelope className="text-pink-400 flex-shrink-0" size={16} />
                  <span className="text-sm">karanpal03040@gmail.com</span>
                </div>
                {/* <div className="flex items-center space-x-3 text-gray-300">
                  <FaPhone className="text-pink-400 flex-shrink-0" size={16} />
                  <span className="text-sm">+91 98765 43210</span>
                </div> */}
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaMapMarkerAlt className="text-pink-400 flex-shrink-0" size={16} />
                  <span className="text-sm">Uttar Pradesh, India</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                {/* <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
                > */}
                <a
                  href="#contact"
                  className="inline-flex items-center w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-xl text-white  transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-1 text-gray-100 text-sm">
                <span>© 2025 Karanpal.in Made with</span>
                <FaHeart className="text-red-400 animate-pulse" size={14} />
              </div>
              
              {/* <div className="flex space-x-6 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#sitemap" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  Sitemap
                </a>
              </div> */}
            </div>
          </div>
        </div>

        
      </footer>
    </div>
  );
}
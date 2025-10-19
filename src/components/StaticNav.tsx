import React from 'react';
import { motion } from 'framer-motion';

interface StaticNavProps {
  activeSection: string;
  targetSection: string;
  isTransitioning: boolean;
  scrollToSection: (sectionId: string) => void;
}

export const StaticNav: React.FC<StaticNavProps> = ({
  activeSection,
  targetSection,
  isTransitioning,
  scrollToSection
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          SANTOSH KUMAAR
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6 bg-gray-900/50 rounded-full px-6 py-2 border border-gray-700">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors relative text-sm font-medium ${
                  activeSection === item ? 'text-white' : 
                  targetSection === item && isTransitioning ? 'text-blue-400' :
                  'text-gray-400 hover:text-gray-200'
                }`}
                style={{
                  opacity: isTransitioning ? 0.7 : 1,
                }}
              >
                {item}
                {activeSection === item && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Links Dropdown */}
          <div className="relative group">
            <button className="text-gray-400 hover:text-gray-200 text-sm font-medium px-3 py-2 transition-colors">
              Links ▼
            </button>
            <div className="absolute top-full right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                {[
                  { name: "LeetCode", url: "https://leetcode.com/u/SANDY_7131/" },
                  { name: "HackerRank", url: "https://hackerrank.com/profile/sk5160" },
                  { name: "GitHub", url: "https://github.com/Santosh7131" },
                  { name: "DSA Repository", url: "https://github.com/Santosh7131/DAA-C" },
                  { name: "Hot Questions", url: "https://drive.google.com/file/d/134s5zYK6i3PA1_vyWvUUhLqMqQu-KoPa" }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
          style={{
            opacity: isTransitioning ? 0.7 : 1,
          }}
        >
          Get In Touch
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
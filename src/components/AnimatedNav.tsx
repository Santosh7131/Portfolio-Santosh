import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedNavProps {
  activeSection: string;
  targetSection: string;
  isTransitioning: boolean;
  scrollToSection: (sectionId: string) => void;
}

export const AnimatedNav: React.FC<AnimatedNavProps> = ({
  activeSection,
  targetSection,
  isTransitioning,
  scrollToSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 100); // Transform after 100px scroll
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    top: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      backdropFilter: 'blur(0px)',
      borderColor: 'rgba(255, 255, 255, 0)',
      padding: '24px',
    },
    scrolled: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(20px)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      padding: '16px',
    }
  };

  const logoVariants = {
    expanded: {
      scale: 1,
      opacity: 1,
    },
    collapsed: {
      scale: 0.9,
      opacity: 1,
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
      variants={navVariants}
      animate={isScrolled ? 'scrolled' : 'top'}
      initial="top"
      style={{
        opacity: isTransitioning ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Animated Logo - Full name to SK */}
        <motion.div
          className="relative overflow-hidden"
          variants={logoVariants}
          animate={isScrolled ? 'collapsed' : 'expanded'}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.div
                key="full-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                SANTOSH KUMAAR
              </motion.div>
            ) : (
              <motion.div
                key="sk-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">SK</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="hidden md:flex items-center space-x-6 bg-black/20 backdrop-blur-md rounded-full px-6 py-2 border border-white/10"
          animate={{
            scale: isScrolled ? 0.95 : 1,
            padding: isScrolled ? '8px 20px' : '12px 24px'
          }}
          transition={{ duration: 0.3 }}
        >
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-colors relative text-sm font-medium ${
                activeSection === item ? 'text-white' : 
                targetSection === item && isTransitioning ? 'text-blue-400' :
                'text-gray-400 hover:text-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={targetSection === item && isTransitioning ? {
                textShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 10px rgba(59,130,246,0.8)", "0 0 0px rgba(59,130,246,0)"]
              } : {}}
              transition={{ duration: 0.6, repeat: isTransitioning ? Infinity : 0 }}
            >
              {item}
              {activeSection === item && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" 
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: isScrolled ? 0.9 : 1,
            padding: isScrolled ? '8px 16px' : '12px 20px'
          }}
          transition={{ duration: 0.3 }}
        >
          Get In Touch
        </motion.button>
      </div>

      {/* Mobile Menu Toggle (for future implementation) */}
      <motion.button
        className="md:hidden text-white p-2"
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: isScrolled ? 0.9 : 1,
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>
    </motion.nav>
  );
};
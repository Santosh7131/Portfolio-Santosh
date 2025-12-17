import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { RippleButton, RippleButtonRipples } from '@/components/animate-ui/components/buttons/ripple';
import SpotlightCard from '@/components/SpotlightCard';

type PageChangeHandler = (page: 'home' | 'about' | 'skills' | 'projects') => void;

// Make the external page change handler available
let globalPageChangeHandler: PageChangeHandler | null = null;

export const setPageChangeHandler = (handler: PageChangeHandler) => {
  globalPageChangeHandler = handler;
};

const stats = [
  { number: "5+", label: "Projects Built", icon: "🚀" },
  { number: "3+", label: "Years Experience", icon: "⭐" },
  { number: "Arch", label: "I use Arch btw", icon: "🐧" }
];

export const HomePage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Coffee ? Terminal(Code) : Sleep()';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  // Delay before starting typewriter (wait for page to settle after loading)
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartTyping(true);
    }, 2500); // Start typing 2.5s after page loads (after 2s loading animation + 0.5s buffer)
    return () => clearTimeout(delayTimer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (startTyping && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // 100ms per character
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, startTyping]);

  // Function to navigate to projects page
  const navigateToProjects = () => {
    if (globalPageChangeHandler) {
      globalPageChangeHandler('projects');
    }
  };
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center pt-24 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Name */}
          <motion.div 
            className="mb-4 relative flex justify-center items-center min-h-[80px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center leading-tight tracking-wide">
              <span 
                className="inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                SANTOSH KUMAAR
              </span>
            </h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="relative">
            <h2 className="text-xl md:text-3xl text-gray-300 font-light mb-6 relative z-10 font-mono inline-block">
              {displayedText}
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          I focus on writing clean, intentional code and paying attention to the details that matter. Most of my work revolves around the web, with a strong preference for working from the terminal.
        </motion.p>
        
        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8"
        >
          {stats.map((stat, index) => (
            <SpotlightCard 
              key={index}
              spotlightColor="rgba(96, 165, 250, 0.2)"
            >
              <motion.div
                className="cursor-target bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)"
                }}
              >
              {/* Animated background glow */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Icon with animation */}
              <motion.div 
                className="text-3xl mb-2 relative z-10"
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              
              {/* Number with animation */}
              <motion.div 
                className="text-2xl font-bold text-white mb-1 relative z-10"
                initial={{ backgroundPosition: "0% 50%" }}
                whileHover={{ 
                  backgroundPosition: "100% 50%",
                  backgroundSize: "200% 200%",
                  transition: { duration: 1 }
                }}
                style={{
                  background: "linear-gradient(90deg, #fff 0%, #60a5fa 50%, #fff 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                {stat.number}
              </motion.div>
              
              {/* Label */}
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300 relative z-10">
                {stat.label}
              </div>
              
              {/* Border animation */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-blue-400/30 rounded-xl transition-colors duration-300" />
            </motion.div>
            </SpotlightCard>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <RippleButton 
            onClick={navigateToProjects} 
            size="lg" 
            className="cursor-target bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-semibold rounded-xl px-8"
            style={{
              '--ripple-button-ripple-color': 'rgba(255, 255, 255, 0.6)',
            } as React.CSSProperties}
          >
            🌟 View My Work
            <RippleButtonRipples />
          </RippleButton>
          
          <div className="flex gap-2 items-center">
            <RippleButton 
              onClick={(e) => {
                // Let ripple animation start before opening link
                setTimeout(() => {
                  window.open('https://drive.google.com/file/d/1-6QubvXApf7TcTM3S2n_W2VNmUWSk_vk/view?usp=sharing', '_blank');
                }, 100);
              }} 
              size="lg" 
              className="cursor-target bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-semibold rounded-xl px-8"
              style={{
                '--ripple-button-ripple-color': 'rgba(255, 255, 255, 0.6)',
              } as React.CSSProperties}
            >
              📄 Resume
              <RippleButtonRipples />
            </RippleButton>
            
            <RippleButton 
              onClick={(e) => {
                setTimeout(() => {
                  // Trigger download
                  const link = document.createElement('a');
                  link.href = 'https://drive.google.com/uc?export=download&id=1-6QubvXApf7TcTM3S2n_W2VNmUWSk_vk';
                  link.download = 'Santosh_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }, 100);
              }} 
              size="lg" 
              className="cursor-target bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-semibold rounded-xl px-4"
              style={{
                '--ripple-button-ripple-color': 'rgba(255, 255, 255, 0.6)',
              } as React.CSSProperties}
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
              <RippleButtonRipples />
            </RippleButton>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
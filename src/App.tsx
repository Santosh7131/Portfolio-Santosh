import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { StarsBackground } from './components/animate-ui/components/backgrounds/stars';
import { PageTransition } from './components/PageTransition';
import { StaticNav } from './components/StaticNav';

// TextToParticles component now imported from separate file

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetSection, setTargetSection] = useState('');
  
  // For horizontal scroll calculation
  const constraintsRef = useRef(null);

  // Animation variants for smooth section transitions
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1] as any
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 1.05,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };



  // Intersection Observer for better scroll detection
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section enters top 20% of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Enhanced scroll to section with transition
  const scrollToSection = (sectionId: string) => {
    if (isTransitioning || sectionId === activeSection) return;
    
    setIsTransitioning(true);
    setTargetSection(sectionId);
    
    // Start transition animation
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300); // Delay scroll to show transition
    
    // End transition after scroll completes
    setTimeout(() => {
      setIsTransitioning(false);
      setTargetSection('');
    }, 1200);
  };

  // Magnetic text component
  const MagneticText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 200) {
          const strength = (200 - distance) / 200;
          setPosition({
            x: deltaX * strength * 0.1,
            y: deltaY * strength * 0.1,
          });
        } else {
          setPosition({ x: 0, y: 0 });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
      <motion.div
        ref={ref}
        className={className}
        animate={position}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="relative bg-black text-white overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
      {/* Fixed background */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Static Navigation */}
      <StaticNav 
        activeSection={activeSection}
        targetSection={targetSection}
        isTransitioning={isTransitioning}
        scrollToSection={scrollToSection}
      />

      {/* Smooth Page Transition - Framer University Style */}
      <PageTransition 
        isTransitioning={isTransitioning} 
        targetSection={targetSection} 
      />
              {/* Animated stars during transition */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5],
                    y: [0, -50, -100],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: Math.random() * 0.8,
                    ease: "easeOut",
                  }}
                />
              ))}
              
              {/* Geometric transition lines */}
      {/* Hero Section */}
      <motion.section 
        id="home"
        className="relative min-h-screen flex items-center justify-center z-10"
      >
        <div className="text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Static Name - Clean and Simple */}
            <motion.div 
              className="mb-4 relative flex justify-center items-center min-h-[120px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white text-center leading-tight tracking-wide">
                <span 
                  className="inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)',
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
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >

            
            <div className="relative">
              <motion.h2 
                className="text-2xl md:text-4xl text-gray-300 font-light mb-6 relative z-10 font-mono inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
              >
                Web Developer
              </motion.h2>
              
              {/* Blinking cursor */}
              <motion.span
                className="inline-block w-0.5 h-8 bg-gray-400 ml-1 relative -top-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 3 }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Turning data into meaningful insights and impactful web experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 text-white rounded-full font-semibold text-lg overflow-hidden border border-gray-600 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Starry background effect */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-gray-700/80"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10">⭐ View My Work</span>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 border border-gray-400 text-gray-300 rounded-full font-semibold text-lg backdrop-blur-sm overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                🌟 Get In Touch
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section with enhanced animations */}
      <motion.section 
        id="about" 
        className="relative min-h-screen py-20 px-4 z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I'm a passionate developer with a keen eye for creating beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bring a unique perspective to every project.
              </motion.p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🚀", title: "Innovation", desc: "Cutting-edge solutions" },
                  { icon: "💡", title: "Creativity", desc: "Unique approaches" },
                  { icon: "🎯", title: "Precision", desc: "Attention to detail" },
                  { icon: "🤝", title: "Collaboration", desc: "Team player" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative w-80 h-80 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full bg-black/80 rounded-full flex items-center justify-center border border-gray-500">
                  <motion.span 
                    className="text-8xl"
                    animate={{ 
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    👨‍💻
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section - Simplified for now */}
      <motion.section 
        id="skills" 
        className="relative min-h-screen py-20 px-4 z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "JavaScript", "HTML", "CSS", "Python",
              "React", "Node.js", "TypeScript", "MongoDB"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-600 group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255, 255, 255, 0.4)"
                }}
              >

                
                <h3 className="text-lg font-semibold text-white relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                  {skill}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section - Horizontal Scroll */}
      <motion.section 
        id="projects" 
        className="relative py-20 z-10 overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Drag left and right to explore my favorite projects →
          </motion.p>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -1200, right: 0 }}
                dragElastic={0.1}
                dragMomentum={true}
                whileTap={{ cursor: "grabbing" }}
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                style={{
                  width: 'max-content',
                }}
              >
              {/* Project 1: SRM Lift Optimization */}
              <motion.div
                className="flex-none w-[350px] md:w-[400px] bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 group hover:border-blue-400/50 transition-all duration-300"
                style={{ scrollSnapAlign: 'start' }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-blue-400 font-mono text-sm bg-blue-400/10 px-3 py-1 rounded-full">01</span>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🏗️</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  SRM Lift Optimization
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  Zone-based greedy algorithm optimizing lift allocation for three lifts based on destination floors and capacities. Ensures efficient queue management and constant travel time.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Node.js", "MongoDB"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('#', '_blank')}
                >
                  View Details →
                </motion.button>
              </motion.div>

              {/* Project 2: Sentiment Analysis */}
              <motion.div
                className="flex-none w-[350px] md:w-[400px] bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 group hover:border-green-400/50 transition-all duration-300"
                style={{ scrollSnapAlign: 'start' }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-green-400 font-mono text-sm bg-green-400/10 px-3 py-1 rounded-full">02</span>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📊</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  Sentiment Analysis
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  DAA concepts implementation using hash tables for fast word counting, quicksort for ranking, and weighted scoring algorithms for sentiment calculation.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["TypeScript", "React", "Algorithms"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('#', '_blank')}
                >
                  View Details →
                </motion.button>
              </motion.div>

              {/* Project 3: Random DSA Problems */}
              <motion.div
                className="flex-none w-[350px] md:w-[400px] bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 group hover:border-purple-400/50 transition-all duration-300"
                style={{ scrollSnapAlign: 'start' }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-purple-400 font-mono text-sm bg-purple-400/10 px-3 py-1 rounded-full">03</span>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🧮</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  Random DSA Problems
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  Collection of Design and Analysis of Algorithms (DAA) solutions and approaches for classic and challenging questions to strengthen algorithmic skills.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["C", "Algorithms", "DAA"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-500 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://github.com/Santosh7131/DAA-C', '_blank')}
                >
                  View Repository →
                </motion.button>
              </motion.div>
              </motion.div>

              {/* Drag Indicator */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>👈 Drag to explore projects 👉</span>
                  <motion.div
                    className="flex space-x-1"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="relative min-h-screen py-20 px-4 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? Let's chat about your next project!
          </motion.p>

          {/* Contact Information */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
              <h3 className="text-white font-semibold mb-2">📧 Email</h3>
              <p className="text-gray-300">sk5160@srmist.edu.in</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
              <h3 className="text-white font-semibold mb-2">📱 Phone</h3>
              <p className="text-gray-300">+91 9790948050</p>
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:sk5160@srmist.edu.in"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              📧 Email Me
            </motion.a>
            
            <motion.a
              href="https://github.com/Santosh7131"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-full font-semibold text-lg hover:bg-orange-400 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔗 GitHub
            </motion.a>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">My Coding Profiles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: "LeetCode", url: "https://leetcode.com/u/SANDY_7131/", icon: "💻" },
                { name: "HackerRank", url: "https://hackerrank.com/profile/sk5160", icon: "⚡" },
                { name: "GitHub", url: "https://github.com/Santosh7131", icon: "🐙" },
                { name: "DSA Repository", url: "https://github.com/Santosh7131/DAA-C", icon: "🧮" },
                { name: "Hot Questions", url: "https://drive.google.com/file/d/134s5zYK6i3PA1_vyWvUUhLqMqQu-KoPa", icon: "🔥" }
              ].map((profile, index) => (
                <motion.a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-gray-600 hover:border-blue-400 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{profile.icon}</div>
                    <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      {profile.name}
                    </h4>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;
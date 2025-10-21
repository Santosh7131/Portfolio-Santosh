import { motion } from 'framer-motion';

type PageChangeHandler = (page: 'home' | 'about' | 'skills' | 'projects') => void;

// Make the external page change handler available
let globalPageChangeHandler: PageChangeHandler | null = null;

export const setPageChangeHandler = (handler: PageChangeHandler) => {
  globalPageChangeHandler = handler;
};

const stats = [
  { number: "50+", label: "Projects Completed", icon: "🚀" },
  { number: "3+", label: "Years Experience", icon: "⭐" },
  { number: "100%", label: "Client Satisfaction", icon: "🎯" }
];

export const HomePage = () => {
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
            <motion.h2 
              className="text-xl md:text-3xl text-gray-300 font-light mb-6 relative z-10 font-mono inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
            >
              Web Developer & Problem Solver
            </motion.h2>
            
            {/* Blinking cursor */}
            <motion.span
              className="inline-block w-0.5 h-6 bg-gray-400 ml-1 relative -top-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 2.7 }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          Turning complex problems into elegant solutions. 
          <br />
          Creating meaningful digital experiences that make a difference.
        </motion.p>
        
        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 relative overflow-hidden group"
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
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="group relative px-8 py-3 text-white rounded-xl font-semibold text-md overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={navigateToProjects}
          >
            <span className="relative z-10">🌟 View My Work</span>
          </motion.button>
          
          <motion.button
            className="group relative px-8 py-3 text-white rounded-xl font-semibold text-md overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Resume</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
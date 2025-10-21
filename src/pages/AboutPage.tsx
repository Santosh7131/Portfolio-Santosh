import { motion } from 'framer-motion';

const floatingElements = [
  { icon: "⚛️", delay: 0, position: "top-4 right-4" },
  { icon: "🚀", delay: 1, position: "bottom-4 left-4" },
  { icon: "💡", delay: 2, position: "top-1/2 -left-4" },
  { icon: "🎯", delay: 3, position: "top-1/2 -right-4" }
];

const values = [
  { icon: "🚀", title: "Innovation", desc: "Always exploring cutting-edge technologies and creative solutions" },
  { icon: "💡", title: "Problem Solving", desc: "Breaking down complex challenges into manageable, elegant solutions" },
  { icon: "🎯", title: "Precision", desc: "Attention to detail in every line of code and design decision" },
  { icon: "🤝", title: "Collaboration", desc: "Working effectively with teams to achieve shared goals" }
];

export const AboutPage = () => {
  return (
    <motion.div 
      className="min-h-screen pt-28 pb-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h1>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-white mb-3">Who I Am</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for creating beautiful, 
                functional, and user-centered digital experiences. With expertise in modern 
                web technologies and a strong foundation in algorithms and data structures, 
                I bring both technical depth and creative vision to every project.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl font-bold text-white mb-3">My Journey</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my studies at SRM Institute of Science and Technology, 
                I've been honing my skills in web development, algorithms, and system design. 
                From optimizing lift algorithms to building sentiment analysis tools, 
                I love solving complex problems with elegant code.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-3">What Drives Me</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in the power of technology to solve real-world problems. 
                Whether it's creating efficient algorithms or building intuitive user interfaces, 
                I'm driven by the impact that well-crafted code can have on people's lives.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Visual Element */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative w-80 h-80 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
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
              
              {/* Floating Elements */}
              {floatingElements.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20`}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
            >
              <div className="text-3xl mb-3">{value.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/SpotlightCard';

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        
        <p className="text-gray-400 text-center mb-12">
          A bit about who I am and what I do
        </p>
        
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SpotlightCard spotlightColor="rgba(96, 165, 250, 0.2)">
            <div className="cursor-target bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-3">Who I Am</h2>
              <p className="text-gray-300 leading-relaxed">
                A developer who believes the best code is written with intention, not magic. 
                I build for the web with a strong preference for working from the terminal. 
                When I'm not coding, you'll find me customizing my Arch setup or hunting 
                down that one semicolon that broke production.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(96, 165, 250, 0.2)">
            <div className="cursor-target bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-3">My Journey</h2>
              <p className="text-gray-300 leading-relaxed">
                Currently at SRM Institute of Science and Technology, sharpening my skills 
                in web development and system design. From optimizing lift algorithms to 
                building sentiment analysis tools, I enjoy turning complex problems into 
                clean, maintainable solutions. Also, yes, I do use Arch btw.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(96, 165, 250, 0.2)">
            <div className="cursor-target bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-3">What Drives Me</h2>
              <p className="text-gray-300 leading-relaxed">
                Good code should be readable, maintainable, and elegant. I care about the 
                details that most people skip—proper error handling, clean architecture, 
                and documentation that doesn't make you want to cry. Technology should solve 
                problems, not create new ones.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(96, 165, 250, 0.2)">
            <div className="cursor-target bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-3">Beyond Code</h2>
              <p className="text-gray-300 leading-relaxed">
                When I'm not writing code, I'm probably tinkering with Linux configurations, 
                exploring new technologies, or contributing to open source projects. 
                I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};
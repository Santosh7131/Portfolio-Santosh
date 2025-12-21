import { motion } from 'framer-motion';
import SpotlightCard from '@/components/SpotlightCard';

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SpotlightCard spotlightColor="rgba(96, 165, 250, 0.2)">
            <div className="cursor-target bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-3">👨‍💻 Who I Am</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a full-stack developer passionate about building intuitive, performant web applications 
                that users love. With expertise in modern frameworks like React and Next.js, I transform 
                complex requirements into elegant, scalable solutions. My approach? Write code that's 
                self-documenting, maintainable, and production-ready from day one—no magic, just 
                intentional engineering.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(96, 165, 250, 0.2)">
            <div className="cursor-target bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-3">🎓 My Journey</h2>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing Computer Science at SRM Institute of Science and Technology, 
                I've built my foundation through hands-on projects spanning machine learning, system optimization, 
                and full-stack development. From creating a lift scheduling algorithm that reduced wait 
                times by 30% to developing a real-time sentiment analysis tool, I thrive on challenges 
                that push the boundaries of what's possible. Each project is an opportunity to learn, 
                iterate, and deliver impact.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(96, 165, 250, 0.2)">
            <div className="cursor-target bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-3">💡 What Drives Me</h2>
              <p className="text-gray-300 leading-relaxed">
                Quality isn't negotiable. I obsess over the details others overlook—robust error handling, 
                clear architecture, comprehensive testing, and documentation that actually helps. I believe 
                in building systems that scale gracefully and codebases that welcome future contributors. 
                Technology should empower users and developers alike, reducing friction rather than adding 
                complexity. My goal: create software that works beautifully and stands the test of time.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(96, 165, 250, 0.2)">
            <div className="cursor-target bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-3">🚀 Beyond Code</h2>
              <p className="text-gray-300 leading-relaxed">
                When I'm not crafting applications, you'll find me deep in my Arch Linux setup (yes, I use 
                Arch btw), exploring emerging technologies, or contributing to open source projects. 
                I'm an active learner who stays current with industry trends while mastering fundamentals. 
                Terminal enthusiast. Code quality advocate. Believer in continuous improvement. 
                Let's build something remarkable together.
              </p>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};
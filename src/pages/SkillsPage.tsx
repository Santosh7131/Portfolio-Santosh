import { motion } from 'framer-motion';
import SpotlightCard from '@/components/SpotlightCard';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL", "Firebase"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Linux"]
  }
];

export const SkillsPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>
        
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SpotlightCard 
                    key={skill}
                    spotlightColor="rgba(96, 165, 250, 0.15)"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="cursor-target bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      {skill}
                    </motion.div>
                  </SpotlightCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
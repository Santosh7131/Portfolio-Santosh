import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    gradient: "from-blue-400 to-cyan-400",
    skills: [
      { name: "React", color: "#61DAFB", icon: "⚛️", level: 90 },
      { name: "TypeScript", color: "#3178C6", icon: "TS", level: 85 },
      { name: "JavaScript", color: "#F7DF1E", icon: "JS", level: 95 },
      { name: "HTML5", color: "#E34F26", icon: "🌐", level: 90 },
      { name: "CSS3", color: "#1572B6", icon: "🎨", level: 85 },
      { name: "Tailwind CSS", color: "#06B6D4", icon: "💨", level: 80 },
      { name: "Next.js", color: "#ffffff", icon: "▲", level: 75 },
      { name: "Vue.js", color: "#4FC08D", icon: "V", level: 70 }
    ]
  },
  {
    title: "Backend Development",
    gradient: "from-green-400 to-emerald-400",
    skills: [
      { name: "Node.js", color: "#339933", icon: "📗", level: 85 },
      { name: "Python", color: "#3776AB", icon: "🐍", level: 80 },
      { name: "Express.js", color: "#68D391", icon: "⚡", level: 85 },
      { name: "MongoDB", color: "#47A248", icon: "🍃", level: 75 },
      { name: "PostgreSQL", color: "#336791", icon: "🐘", level: 70 },
      { name: "MySQL", color: "#4479A1", icon: "🗄️", level: 75 },
      { name: "Firebase", color: "#FFCA28", icon: "🔥", level: 70 },
      { name: "GraphQL", color: "#E10098", icon: "◇", level: 65 }
    ]
  },
  {
    title: "Tools & DevOps",
    gradient: "from-purple-400 to-pink-400",
    skills: [
      { name: "Git", color: "#F05032", icon: "🔗", level: 90 },
      { name: "Docker", color: "#2496ED", icon: "🐳", level: 70 },
      { name: "AWS", color: "#FF9900", icon: "☁️", level: 65 },
      { name: "Vercel", color: "#ffffff", icon: "△", level: 80 },
      { name: "Jenkins", color: "#D24939", icon: "🔧", level: 60 },
      { name: "Webpack", color: "#8DD6F9", icon: "📦", level: 70 },
      { name: "Jest", color: "#C21325", icon: "🧪", level: 75 },
      { name: "Figma", color: "#F24E1E", icon: "🎨", level: 85 }
    ]
  }
];

const summaryStats = [
  { number: "24+", label: "Technologies Mastered", icon: "🛠️" },
  { number: "3+", label: "Years Learning", icon: "📚" },
  { number: "∞", label: "Passion for Growth", icon: "🚀" }
];

export const SkillsPage = () => {

  return (
    <motion.div 
      className="min-h-screen pt-28 pb-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
        </motion.p>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative bg-black/40 backdrop-blur-sm border border-gray-600 rounded-xl p-4 hover:border-opacity-50 transition-all duration-300"
                    style={{ 
                      '--hover-color': skill.color,
                      borderColor: `${skill.color}20`
                    } as React.CSSProperties}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      borderColor: `${skill.color}50`
                    }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-semibold text-sm">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs font-mono">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <motion.div
                          className="h-1.5 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ backgroundColor: skill.color }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {summaryStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
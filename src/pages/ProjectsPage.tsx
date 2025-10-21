import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "SRM Lift Optimization",
    description: "Zone-based greedy algorithm optimizing lift allocation for three lifts based on destination floors and capacities. Ensures efficient queue management and constant travel time through intelligent floor grouping and load balancing.",
    technologies: ["React", "Node.js", "MongoDB", "Algorithm Design"],
    category: "Algorithm & System Design",
    image: "🏗️",
    color: "#3B82F6",
    features: [
      "Zone-based floor allocation",
      "Real-time queue management",
      "Energy-efficient routing",
      "Load balancing algorithms"
    ],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Sentiment Analysis Tool",
    description: "Advanced sentiment analysis implementation using DAA concepts including hash tables for fast word counting, quicksort for ranking, and weighted scoring algorithms for accurate sentiment calculation.",
    technologies: ["TypeScript", "React", "Algorithms", "Data Structures"],
    category: "Data Analysis & AI",
    image: "📊",
    color: "#10B981",
    features: [
      "Hash table optimization",
      "Quicksort ranking system",
      "Weighted sentiment scoring",
      "Real-time text processing"
    ],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Random DSA Problems",
    description: "Comprehensive collection of Design and Analysis of Algorithms (DAA) solutions featuring classic and challenging algorithmic problems to strengthen problem-solving skills and algorithmic thinking.",
    technologies: ["C", "Algorithms", "DAA", "Problem Solving"],
    category: "Algorithm Practice",
    image: "🧮",
    color: "#8B5CF6",
    features: [
      "Classic algorithm implementations",
      "Complexity analysis",
      "Optimization techniques",
      "Problem-solving patterns"
    ],
    github: "https://github.com/Santosh7131/DAA-C",
    demo: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, glassmorphism design, and optimized performance for showcasing projects and skills.",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    category: "Web Development",
    image: "🌐",
    color: "#F59E0B",
    features: [
      "Responsive design",
      "Smooth animations",
      "Glassmorphism UI",
      "Performance optimized"
    ],
    github: "#",
    demo: "#"
  }
];

export const ProjectsPage = () => {

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
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A showcase of my technical projects, from algorithm optimization to full-stack applications. 
          Each project represents a unique challenge and learning experience.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 hover:border-opacity-50 transition-all duration-500"
              style={{ 
                borderColor: `${project.color}20`
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                borderColor: `${project.color}40`
              }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <span>{project.image}</span>
                  </div>
                  <div>
                    <span 
                      className="text-xs font-mono px-2 py-1 rounded-full"
                      style={{ 
                        backgroundColor: `${project.color}20`,
                        color: project.color
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <span 
                  className="text-xs font-mono px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${project.color}10`,
                    color: project.color
                  }}
                >
                  0{project.id}
                </span>
              </div>

              {/* Project Title */}
              <h3 
                className="text-xl md:text-2xl font-bold mb-3 group-hover:transition-colors duration-300"
                style={{ color: 'white' }}
              >
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-gray-400 text-xs">
                      <div 
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: project.color }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 text-xs rounded-full border"
                    style={{ 
                      backgroundColor: `${project.color}10`,
                      color: project.color,
                      borderColor: `${project.color}30`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 rounded-lg font-semibold text-center border-2 transition-all duration-300 text-sm"
                  style={{ 
                    borderColor: project.color,
                    color: project.color
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: `${project.color}10`
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 rounded-lg font-semibold text-center text-white transition-all duration-300 text-sm"
                  style={{ backgroundColor: project.color }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 8px 25px ${project.color}40`
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              </div>

              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: project.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to see more?
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
            These are just a few highlights. Check out my GitHub for more projects 
            and experiments in web development, algorithms, and problem solving.
          </p>
          <motion.a
            href="https://github.com/Santosh7131"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-md hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(147, 51, 234, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Explore GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};
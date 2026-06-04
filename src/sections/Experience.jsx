import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Multispark Technologies',
    duration: 'Aug 2025 - Apr 2026',
    achievements: [
      'Developed scalable MERN modules',
      'Optimized API integration',
      'Built reusable React components',
      'Managed state using Redux Toolkit',
      'Improved backend query performance',
    ]
  },
  {
    role: 'Web Developer Intern',
    company: 'Noitavvone India',
    duration: 'Jun 2024 - Aug 2024',
    achievements: [
      'Built responsive websites',
      'API integrations',
      'Dynamic UI features',
      'Cross-browser compatibility',
      'Performance optimization',
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/20 md:border-none ml-4 md:ml-0 md:pl-0 space-y-16">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[50%] w-0.5 bg-gradient-to-b from-primary/50 via-secondary/20 to-transparent -translate-x-[50%]" />
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                  className="absolute left-[-5px] md:left-[50%] top-0 md:top-1/2 -translate-x-[5px] md:-translate-x-[50%] md:-translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(139,92,246,0.8)] z-10 flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </motion.div>

                {/* Duration */}
                <div className={`md:w-[45%] text-secondary font-semibold mb-4 md:mb-0 text-sm md:text-base ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10"
                  >
                    {exp.duration}
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(139, 92, 246, 0.15)" }}
                  className="md:w-[45%] glass-card p-6 md:p-8 w-full border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <h4 className="text-lg text-gray-400 font-medium mb-6 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-secondary hidden md:block" /> 
                    {exp.company}
                  </h4>
                  
                  <motion.ul 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {exp.achievements.map((item, i) => (
                      <motion.li 
                        variants={itemVariants}
                        key={i} 
                        className="text-gray-300 text-sm flex items-start leading-relaxed"
                      >
                        <span className="text-primary mr-3 mt-1.5 text-xs">◆</span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

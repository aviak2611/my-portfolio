import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Chatbox AI Application',
    description: 'A sophisticated AI chat system with retry mechanisms, robust error handling, and loading states for a seamless user experience.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'OpenRouter'],
    features: ['AI Chat System', 'OpenRouter Integration', 'Retry Mechanism', 'Error Handling'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    live: '#',
    github: '#'
  },
  {
    title: 'CRM System',
    description: 'A comprehensive Customer Relationship Management platform featuring role-based access and protected routes with a clean dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT Auth'],
    features: ['Role Based Access', 'Protected Routes', 'Dashboard', 'MVC Architecture'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    live: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card group overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            >
              {/* Project Image */}
              <div className="h-64 w-full relative overflow-hidden bg-black">
                 {/* Color overlay that fades on hover */}
                 <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />
                 
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                 />
                 
                 {/* Bottom gradient to blend with the card content */}
                 <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark to-transparent z-20" />
              </div>

              <div className="p-8 pt-4 flex flex-col flex-grow relative z-30">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.live}
                    className="flex-1 py-2.5 rounded-lg bg-primary hover:bg-primary/80 text-white font-medium flex items-center justify-center gap-2 transition-colors text-sm"
                  >
                    <HiExternalLink size={18} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 py-2.5 rounded-lg glass hover:bg-white/10 text-white font-medium flex items-center justify-center gap-2 transition-colors text-sm"
                  >
                    <FaGithub size={18} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

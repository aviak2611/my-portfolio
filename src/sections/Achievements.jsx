import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const achievements = [
  'Secure Full Stack Applications',
  'JWT Authentication Implementation',
  'API Optimization',
  'Error Handling Expertise',
  'Git Version Control',
  'Clean Code Practices'
];

const stats = [
  { value: '100%', label: 'Responsive Applications' },
  { value: '10+', label: 'Core Technologies Mastered' }
];

const Achievements = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key <span className="text-gradient">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-10" />
            
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 glass-card group hover:-translate-y-1"
                >
                  <HiCheckCircle className="text-primary text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-10 text-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500" />
                 <h3 className="text-5xl md:text-7xl font-bold text-white mb-2 relative z-10">{stat.value}</h3>
                 <p className="text-secondary font-medium tracking-wide uppercase relative z-10">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;

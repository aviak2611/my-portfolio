import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Months Experience', value: '8+' },
    { label: 'Major Projects', value: '2+' },
    { label: 'Technologies', value: '10+' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px]" />
            <h3 className="text-2xl font-semibold mb-4">Who I am</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a passionate <span className="text-white font-medium">MERN Stack Developer</span> with internship experience building scalable web applications. I specialize in transforming complex problems into elegant, user-friendly solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey involves working with modern technologies to build responsive, performant, and secure applications. I am constantly learning and adapting to the ever-evolving tech landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`glass-card p-6 text-center flex flex-col justify-center ${index === 2 ? 'col-span-2' : ''}`}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

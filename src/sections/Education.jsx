import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'MCA',
    institution: "KIT's IMER",
    duration: '2023 - 2025',
    marks: '62%'
  },
  {
    degree: 'BCA',
    institution: 'The New College Kolhapur',
    duration: '2020 - 2023',
    marks: '75%'
  }
];

const Education = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="inline-block text-5xl text-primary mb-4"
          >
            <FaGraduationCap />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-10 relative overflow-hidden group flex flex-col justify-center items-center"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" />
              
              <h3 className="text-3xl font-bold text-white mb-2">{item.degree}</h3>
              <h4 className="text-xl text-gray-300 font-medium mb-6">{item.institution}</h4>
              
              <div className="flex flex-wrap justify-center gap-3">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold">
                  {item.duration}
                </div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-white text-sm font-semibold">
                  Score: {item.marks}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

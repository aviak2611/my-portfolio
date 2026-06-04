import { motion } from 'framer-motion';
import { HiCode, HiServer, HiDeviceMobile } from 'react-icons/hi';
import { BiCodeBlock, BiData } from 'react-icons/bi';
import { MdWeb } from 'react-icons/md';

const services = [
  { title: 'MERN Stack Development', icon: HiCode },
  { title: 'Frontend Development', icon: MdWeb },
  { title: 'Backend Development', icon: HiServer },
  { title: 'REST API Development', icon: BiData },
  { title: 'Responsive Web Design', icon: HiDeviceMobile },
  { title: 'Full Stack Web Apps', icon: BiCodeBlock },
];

const Services = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group hover:-translate-y-2 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors" />
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/50">
                  <Icon className="text-3xl text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  Delivering high-quality, scalable solutions tailored to meet your business needs using the latest technologies.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit logic
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 h-full relative overflow-hidden">
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
               <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
               
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-primary">
                     <HiPhone size={24} />
                   </div>
                   <div>
                     <p className="text-gray-400 text-sm">Phone</p>
                     <p className="text-white font-medium">+91 6361484489</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-secondary">
                     <HiMail size={24} />
                   </div>
                   <div>
                     <p className="text-gray-400 text-sm">Email</p>
                     <a href="mailto:avi.ak.2611@gmail.com" className="text-white font-medium hover:text-secondary transition-colors">
                       avi.ak.2611@gmail.com
                     </a>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-primary">
                     <HiLocationMarker size={24} />
                   </div>
                   <div>
                     <p className="text-gray-400 text-sm">Location</p>
                     <p className="text-white font-medium">Maharashtra, India</p>
                   </div>
                 </div>
               </div>

               <div className="mt-12">
                 <h4 className="text-lg font-semibold mb-4">Social Profiles</h4>
                 <div className="flex gap-4">
                   <a 
                     href="https://www.linkedin.com/in/avishkar-kesarkar-a077a0335/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                   >
                     <FaLinkedin size={20} />
                   </a>
                   <a 
                     href="https://github.com/aviak2611" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white"
                   >
                     <FaGithub size={20} />
                   </a>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card p-8 relative"
          >
            {isSubmitted ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="absolute inset-0 flex flex-col items-center justify-center bg-dark/95 backdrop-blur-sm rounded-2xl z-20"
               >
                 <HiCheckCircle className="text-7xl text-primary mb-4" />
                 <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                 <p className="text-gray-400 text-center px-6">Thank you for reaching out. I will get back to you as soon as possible.</p>
               </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                    required
                    className={`w-full bg-black/50 border ${focusedInput === 'name' ? 'border-primary shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'border-white/10'} rounded-lg px-4 py-3 text-white outline-none transition-all`}
                    placeholder="Your Name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                    required
                    className={`w-full bg-black/50 border ${focusedInput === 'email' ? 'border-secondary shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/10'} rounded-lg px-4 py-3 text-white outline-none transition-all`}
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('subject')}
                  onBlur={() => setFocusedInput(null)}
                  required
                  className={`w-full bg-black/50 border ${focusedInput === 'subject' ? 'border-primary shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'border-white/10'} rounded-lg px-4 py-3 text-white outline-none transition-all`}
                  placeholder="Subject"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                  required
                  rows="5"
                  className={`w-full bg-black/50 border ${focusedInput === 'message' ? 'border-secondary shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/10'} rounded-lg px-4 py-3 text-white outline-none transition-all resize-none`}
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold text-lg shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

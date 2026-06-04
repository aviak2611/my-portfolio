import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Basic GSAP particles effect
    const ctx = gsap.context(() => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle) => {
        gsap.to(particle, {
          y: 'random(-100, 100)',
          x: 'random(-100, 100)',
          rotation: 'random(0, 360)',
          duration: 'random(3, 8)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" ref={containerRef}>
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-gray-400 mb-2 tracking-wide font-light">
              Hi, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-sans text-white leading-tight">
              Avishkar <br />
              <span className="text-gradient animate-gradient-x">Kesarkar</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 h-10 font-medium"
          >
            <span className="text-secondary font-semibold">&gt;</span> MERN Stack Developer
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 max-w-lg leading-relaxed"
          >
            I build scalable web applications with a focus on modern design, robust backend systems, and smooth user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a href="#contact" className="px-8 py-3 rounded-full bg-primary hover:bg-primary/80 text-white font-medium transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
              Contact Me <HiArrowRight />
            </a>
            <a href="#projects" className="px-8 py-3 rounded-full glass hover:bg-white/10 text-white font-medium transition-all">
              View Projects
            </a>
            <a href="/AVISHKAR_KESARKAR_CV.pdf" download className="px-8 py-3 rounded-full border border-gray-600 hover:border-gray-400 text-white font-medium transition-all flex items-center gap-2">
              <HiDownload /> Resume
            </a>
          </motion.div>
        </div>

        {/* Floating Avatar / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center order-first lg:order-last mb-10 lg:mb-0"
        >
          {/* Outer animated glow */}
          <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[60px] lg:blur-[80px] -z-10 animate-pulse" />

          {/* Avatar Container */}
          <div className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full border-2 border-white/10 p-2 animate-float relative flex items-center justify-center overflow-hidden bg-black/50 backdrop-blur-md shadow-[0_0_50px_rgba(139,92,246,0.3)] hover:shadow-[0_0_80px_rgba(139,92,246,0.5)] transition-shadow duration-500 group">

            {/* The Image */}
            <img
              src="/Gemini_Generated_Image_w1e533w1e533w1e5.png"
              alt="Avishkar Kesarkar"
              className="w-full h-full object-cover rounded-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Cool Overlay Gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 via-transparent to-secondary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

            {/* Inner Ring Glow */}
            <div className="absolute inset-0 rounded-full border border-white/20 z-10 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

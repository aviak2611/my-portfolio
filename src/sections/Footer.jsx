import { HiArrowUp } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/50 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-[50%] -translate-x-[50%] w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-2 transition-all mb-8 shadow-lg"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="text-xl" />
        </button>

        <h2 className="text-3xl font-bold text-white mb-2">Avishkar Kesarkar</h2>
        <p className="text-gray-400 mb-8 font-medium">MERN Stack Developer</p>

        <div className="flex gap-6 mb-12">
          <a href="https://www.linkedin.com/in/avishkar-kesarkar-a077a0335/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/aviak2611" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110">
            <FaGithub size={24} />
          </a>
        </div>

        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Avishkar Kesarkar. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with React, Tailwind & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

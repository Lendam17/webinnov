import '../css/Projects.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <main className="min-h-screen pt-20 px-4 md:px-16 bg-[#0a0a0a]">
      <div className="max-w-[800px] mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-[#111111] to-[#0a0a0a] p-8 md:p-12 rounded-2xl border border-gray-800 text-center w-full"
        >
          {/* Animation de construction */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 mx-auto mb-8"
          >
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7000ff" />
                  <stop offset="1" stopColor="#ff3b3b" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🚧 Page en construction 🚧
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Nos projets seront bientôt disponibles !<br />
            En attendant, explorez les autres sections de notre site.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#7000ff] to-[#ff3b3b] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Retour à l'accueil
            </Link>
            <Link 
              to="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-[#111111] text-white font-semibold border border-gray-700 hover:border-[#7000ff] transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;
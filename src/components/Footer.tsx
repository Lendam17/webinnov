import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiHome, HiDocumentText, HiMail, HiQuestionMarkCircle, HiShieldCheck, HiScale, HiPhone } from 'react-icons/hi';

const Footer: React.FC = () => {
  const borderGradientClass = "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-[#3b82f6] before:via-[#7000ff] before:to-[#ff3b3b] before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100";

  return (
    <footer className="relative pt-20 pb-8 px-4 bg-[#111111]">
      {/* Fond dégradé subtil */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#1e1e2f] via-[#2a2a3c] to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto">
        {/* Section CTA */}
        <div className="relative mb-20 p-12 bg-[#1e1e2f] rounded-2xl border border-violet-900/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a3c]/50 to-transparent rounded-2xl pointer-events-none" />
          <div className="relative flex flex-col items-center justify-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Prêt à donner vie à votre projet web ?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl text-center">
              Contactez-nous dès maintenant pour une consultation gratuite !
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] text-white rounded-lg font-semibold 
                       shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30
                       transition-all duration-300 transform hover:-translate-y-0.5
                       focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#1e1e2f]"
            >
              <HiMail className="w-5 h-5 mr-2" />
              Me Contacter
            </Link>
          </div>
        </div>

        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Liens rapides */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">
              Liens rapides
            </h3>
            <div className="space-y-3">
              {[
                { to: "/", icon: HiHome, text: "Accueil" },
                { to: "/projects", icon: HiDocumentText, text: "Projets" },
                { to: "/contact", icon: HiMail, text: "Contact" },
                { to: "/faq", icon: HiQuestionMarkCircle, text: "FAQ" },
                { to: "/privacy", icon: HiShieldCheck, text: "Politique de confidentialité" },
                { to: "/legal", icon: HiScale, text: "Mentions légales" }
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="flex items-center text-gray-300 hover:text-primary transition-all duration-300 group"
                >
                  <link.icon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-primary transition-colors duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.text}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-bold mb-6 text-xl text-white">
              Suivez-nous
            </h3>
            <p className="text-gray-300 mb-6 text-sm max-w-xs">
              Restez connecté avec nous pour découvrir nos dernières actualités et projets
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { href: "#", icon: FaFacebookF, label: "Facebook" },
                { href: "#", icon: FaInstagram, label: "Instagram" },
                { href: "#", icon: FaLinkedinIn, label: "LinkedIn" }
              ].map((social) => (
                <a key={social.label} href={social.href} className="group relative" aria-label={social.label}>
                  <div className={`relative w-12 h-12 rounded-xl bg-[#1e1e2f] overflow-hidden ${borderGradientClass}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <social.icon className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-gray-200" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact rapide */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-6 text-xl text-white">
              Contact rapide
            </h3>
            <div className="space-y-4">
              <a href="mailto:contact@webinnov.com" className="flex items-center text-gray-300 hover:text-primary transition-all duration-300 group">
                <HiMail className="w-5 h-5 mr-3 text-gray-500 group-hover:text-primary transition-colors duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">contact@webinnov.com</span>
              </a>
              <a href="tel:+33676890501" className="flex items-center text-gray-300 hover:text-primary transition-all duration-300 group">
                <HiPhone className="w-5 h-5 mr-3 text-gray-500 group-hover:text-primary transition-colors duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">+33 6 76 89 05 01</span>
              </a>
              <div className="p-4 bg-[#1e1e2f] rounded-lg border border-gray-800">
                <p className="text-sm text-gray-400">
                  Notre équipe est disponible pour répondre à vos questions du lundi au vendredi, de 9h à 18h.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800/50">
          <p className="text-gray-400 text-sm">
            Site réalisé avec passion par{' '}
            <Link to="/" className="transition-all duration-300 bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] bg-clip-text text-transparent hover:opacity-80">
              WebInnov
            </Link>{' '}
            | Tous droits réservés &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
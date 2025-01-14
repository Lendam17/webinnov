import '../css/Home.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const testimonials = [
    {
      name: "Marie L.",
      role: "Fondatrice d'une Start-up",
      comment: "Grâce à WebInnov, notre site a été conçu rapidement et avec une efficacité remarquable. Cela nous a permis de nous concentrer sur notre activité sans nous soucier des aspects techniques. Un véritable gain de temps pour notre entreprise !"
    },
    {
      name: "Thomas B.",
      role: "Responsable Marketing",
      comment: "Le design créé par WebInnov est non seulement élégant mais aussi parfaitement adapté à notre image. Nos clients ont immédiatement remarqué cette évolution, et cela a renforcé notre crédibilité."
    },
    {
      name: "Sophie M.",
      role: "Gérante d'une Boutique en Ligne",
      comment: "Depuis la refonte de notre boutique en ligne par WebInnov, nos ventes ont augmenté de 40 % en seulement trois mois. Leur expertise en e-commerce est un véritable atout."
    },
    {
      name: "Jean D.",
      role: "PDG, Solutions Tech",
      comment: "L'approche de WebInnov est centrée sur l'utilisateur. Depuis la mise en ligne de notre application, nos clients n'ont que des retours positifs sur la fluidité et la facilité d'utilisation."
    },
    {
      name: "Claire F.",
      role: "Directrice Artistique",
      comment: "Ce que j'apprécie le plus chez WebInnov, c'est leur disponibilité. Même après la livraison, ils restent à l'écoute et apportent rapidement des solutions à nos besoins. Un service irréprochable."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      {/* Section Héros */}
      <section className="min-h-screen flex items-center justify-center px-4 py-28 sm:py-32 md:py-36">
        <div className="text-center max-w-[1400px] mx-auto">
          <div className="space-y-16 md:space-y-20 mb-24">
            <div className="text-center pt-8 sm:pt-4 md:pt-0">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] bg-clip-text text-transparent">
                  WebInnov
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold max-w-4xl mx-auto leading-relaxed tracking-normal">
                Solutions digitales
                <br />
                Complètes et Sur Mesure
              </p>
            </div>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-6 p-6 rounded-xl hover:bg-[#111111] transition-colors duration-300">
              <div className="flex justify-center">
                <div className="w-16 h-16 text-[#3b82f6]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#3b82f6] transition-colors">Création de Sites et Applications Web</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                Nous concevons des sites vitrines modernes, des sites e-commerce performants et des applications web intuitives, adaptés à vos besoins, pour maximiser votre impact en ligne et vos performances commerciales.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6 p-6 rounded-xl hover:bg-[#111111] transition-colors duration-300">
              <div className="flex justify-center">
                <div className="w-16 h-16 text-[#7000ff]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#7000ff] transition-colors">SEO et Optimisation des Performances</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                Optimisez votre visibilité sur les moteurs de recherche et offrez une navigation rapide et fluide pour fidéliser vos visiteurs.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6 p-6 rounded-xl hover:bg-[#111111] transition-colors duration-300">
              <div className="flex justify-center">
                <div className="w-16 h-16 text-[#ff3b3b]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#ff3b3b] transition-colors">Refonte et Maintenance de Sites</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                Nous modernisons vos sites avec un design à jour et assurons leur bon fonctionnement grâce à une maintenance proactive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative flex items-center justify-center">
                {/* Glow effect */}
                <div className="absolute w-64 h-64 bg-[#ff3b3b]/10 rounded-full blur-2xl"></div>
                <div className="absolute w-64 h-64 bg-[#7000ff]/10 rounded-full blur-2xl -rotate-45"></div>
                
                {/* Circle container */}
                <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#0A0A0A] to-[#151515] flex items-center justify-center border border-gray-800/50">
                  {/* Inner glow */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#ff3b3b]/10 to-[#3b82f6]/10 blur-sm"></div>
                  
                  {/* Icon */}
                  <div className="relative">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-[#ff3b3b]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Une approche unique et personnalisée
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Un service sur mesure, conçu pour répondre à vos besoins spécifiques.
              </p>
              <p className="text-gray-400 leading-relaxed">
              Chez WebInnov, nous proposons des solutions web personnalisées qui allient créativité, expertise technique et écoute attentive. Chaque projet est conçu pour offrir une expérience utilisateur fluide et engageante, tout en atteignant vos objectifs avec efficacité. Transformez vos idées en solutions digitales performantes et uniques avec notre approche sur mesure.
              </p>
              <div>
                <a 
                  onClick={() => scrollToSection('services')} 
                  className="bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] bg-clip-text text-transparent text-lg cursor-pointer hover:opacity-80 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
              Services proposés.
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] bg-clip-text text-transparent">
                Des solutions sur mesure, adaptées à vos besoins et réalisées avec une approche moderne, performante et professionnelle.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#111111] p-8 rounded-lg hover:bg-[#151515] transition-colors group">
              <div className="text-[#3b82f6] mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />

                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#3b82f6] transition-colors">Sites Vitrine</h3>
              <p className="text-gray-400 leading-relaxed">Faites forte impression avec un site vitrine moderne et professionnel, conçu pour refléter votre image et mettre en avant vos services. Offrez à vos visiteurs une expérience engageante et optimisée sur tous les écrans.</p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg hover:bg-[#151515] transition-colors group">
              <div className="text-[#3b82f6] mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#3b82f6] transition-colors">E-commerce</h3>
              <p className="text-gray-400 leading-relaxed">Boostez vos ventes avec une boutique en ligne performante et sécurisée. Nous créons des solutions e-commerce personnalisées pour maximiser vos conversions et fidéliser vos clients.</p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg hover:bg-[#151515] transition-colors group">
              <div className="text-[#3b82f6] mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />

                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#3b82f6] transition-colors">Applications Web</h3>
              <p className="text-gray-400 leading-relaxed">Des applications web sur mesure pour répondre à vos besoins spécifiques. Que ce soit pour optimiser vos processus internes ou proposer un service innovant à vos utilisateurs, nous réalisons des solutions adaptées et performantes.</p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg hover:bg-[#151515] transition-colors group">
              <div className="text-[#7000ff] mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#7000ff] transition-colors">SEO</h3>
              <p className="text-gray-400 leading-relaxed">Augmentez votre visibilité en ligne avec des stratégies de référencement optimisées. Attirez plus de visiteurs sur votre site grâce à un positionnement efficace sur les moteurs de recherche.</p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg hover:bg-[#151515] transition-colors group">
              <div className="text-[#ff3b3b] mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#ff3b3b] transition-colors">Performance</h3>
              <p className="text-gray-400 leading-relaxed">Faites la différence avec un site ultra-rapide et fluide. Nos services d'optimisation garantissent une navigation sans accroc, même pour les visiteurs les plus exigeants.</p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg hover:bg-[#151515] transition-colors group">
              <div className="text-[#ff3b3b] mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#ff3b3b] transition-colors">Maintenance</h3>
              <p className="text-gray-400 leading-relaxed">Assurez la pérennité de votre site avec une maintenance proactive. Nous veillons à sa sécurité, à ses mises à jour régulières et à son bon fonctionnement, pour que vous puissiez vous concentrer sur votre activité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Nos Réalisations
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] bg-clip-text text-transparent">
                Des solutions web sur mesure, adaptées à vos besoins spécifiques
              </span>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/projects" className="relative group overflow-hidden rounded-xl cursor-pointer">
              <img
                src="/images/Vitrine.png"
                alt="Site Vitrine"
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40">
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 mb-2">Développement</p>
                  <h3 className="text-2xl font-bold text-white">Site Vitrine</h3>
                </div>
              </div>
            </Link>

            <Link to="/projects" className="relative group overflow-hidden rounded-xl cursor-pointer">
              <img
                src="/images/Dashboard.png"
                alt="Application Web"
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40">
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 mb-2">Développement</p>
                  <h3 className="text-2xl font-bold text-white">Application Web</h3>
                </div>
              </div>
            </Link>

            <Link to="/projects" className="relative group overflow-hidden rounded-xl cursor-pointer">
              <img
                src="/images/E-commerce.png"
                alt="Site E-commerce"
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40">
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 mb-2">Développement</p>
                  <h3 className="text-2xl font-bold text-white">Site E-commerce</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-20 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
              Nos Contributions
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] bg-clip-text text-transparent">15+</div>
              <p className="text-gray-400 text-lg leading-relaxed">projets livrés avec succès, alliant design moderne et performance.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] bg-clip-text text-transparent">2</div>
              <p className="text-gray-400 text-lg leading-relaxed">ans d'expertise dans le développement web</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] bg-clip-text text-transparent">100%</div>
              <p className="text-gray-400 text-lg leading-relaxed">de clients satisfaits grâce à un service sur mesure et un support dédié.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] bg-clip-text text-transparent">7j/7</div>
              <p className="text-gray-400 text-lg leading-relaxed">Réactif et disponible 7j/7 pour répondre à vos besoins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#111111] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-white px-4">
            Ce que nos clients disent
          </h2>
          <motion.div 
            className="flex gap-4 sm:gap-6 md:gap-8 px-4"
            animate={{
              x: [-100, -(100 * testimonials.length)],
            }}
            transition={{
              duration: testimonials.length * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] bg-gradient-to-b from-[#151515] to-[#111111] p-5 sm:p-6 md:p-8 rounded-xl border border-gray-800 hover:border-[#3b82f6]/20 transition-all duration-300 hover:bg-[#1a1a1a] relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/5 to-[#3b82f6]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="relative">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6 min-h-[60px] sm:min-h-[70px] md:min-h-[80px] leading-relaxed">{testimonial.comment}</p>
                  <div className="border-t border-gray-800/50 pt-4">
                    <div className="font-medium text-white text-base sm:text-lg md:text-xl">{testimonial.name}</div>
                    <div className="bg-gradient-to-r from-[#3b82f6] to-[#7000ff] bg-clip-text text-transparent text-xs sm:text-sm md:text-base mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
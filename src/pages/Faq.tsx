import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Services proposés",
    question: "Quels types de sites développez-vous ?",
    answer: "Nous développons une large gamme de sites web : sites vitrines professionnels, sites e-commerce, applications web personnalisées, et plateformes interactives. Chaque projet est conçu sur mesure pour répondre à vos besoins spécifiques, avec une attention particulière portée au design, à la performance et à l'expérience utilisateur."
  },
  {
    category: "Services proposés",
    question: "Offrez-vous une maintenance après la livraison ?",
    answer: "Oui, nous proposons des services de maintenance complets pour garantir le bon fonctionnement de votre site. Cela inclut les mises à jour de sécurité, les optimisations de performance, les sauvegardes régulières et le support technique en cas de besoin."
  },
  {
    category: "Tarification",
    question: "Comment sont calculés vos prix ?",
    answer: "Nos tarifs sont établis sur mesure en fonction de la complexité du projet, des fonctionnalités requises et du temps de développement estimé. Nous fournissons un devis détaillé après une analyse approfondie de vos besoins pour garantir une transparence totale."
  },
  {
    category: "Tarification",
    question: "Y a-t-il des frais cachés ?",
    answer: "Non, nous pratiquons une politique de transparence totale. Tous les coûts sont clairement détaillés dans notre devis initial. Les éventuels ajouts ou modifications en cours de projet font l'objet d'une discussion et d'un accord préalable."
  },
  {
    category: "Processus",
    question: "Comment fonctionne la collaboration ?",
    answer: "Notre processus de collaboration se déroule en plusieurs étapes : analyse des besoins, proposition de solutions, validation du design, développement, tests, et déploiement. Nous maintenons une communication régulière tout au long du projet pour garantir votre satisfaction."
  },
  {
    category: "Processus",
    question: "Quels sont les délais moyens pour un projet ?",
    answer: "Les délais varient selon la complexité du projet. Un site vitrine simple peut être réalisé en 4 à 7 jours, un site e-commerce en 2 à 3 semaines, et un projet plus complexe peut prendre 2 à 3 mois. Nous établissons un planning détaillé au début du projet pour respecter vos échéances."
  },
  {
    category: "Support",
    question: "Que faire si j'ai un problème après la livraison ?",
    answer: "Notre équipe de support est disponible 7j/7 pour résoudre rapidement tout problème technique. Nous proposons également des formations pour vous permettre de gérer votre site en autonomie."
  },
  {
    category: "Support",
    question: "Proposez-vous une assistance après la livraison ?",
    answer: "Oui, nous offrons un support continu après la livraison. Cela inclut une période de garantie, des mises à jour régulières, et une assistance technique pour toute question ou problème éventuel."
  }
];

const FAQAccordion = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 bg-[#111111] hover:bg-[#151515] rounded-lg transition-colors duration-300 flex justify-between items-center group"
      >
        <span className="font-semibold text-lg text-white group-hover:text-[#3b82f6]">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#3b82f6]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-[#151515] rounded-b-lg text-gray-300 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(openItems.includes(index) 
      ? openItems.filter(item => item !== index)
      : [index]);
  };

  const categories = Array.from(new Set(faqData.map(item => item.category)));

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Questions Fréquemment Posées
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Retrouvez ici les réponses aux questions que nos clients posent souvent
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] bg-clip-text text-transparent">
                {category}
              </h2>
              {faqData
                .filter(item => item.category === category)
                .map((item, index) => (
                  <FAQAccordion
                    key={index}
                    item={item}
                    isOpen={openItems.includes(categoryIndex * 10 + index)}
                    onToggle={() => toggleItem(categoryIndex * 10 + index)}
                  />
                ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-xl text-gray-400 mb-8">
            Vous n'avez pas trouvé votre réponse ?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
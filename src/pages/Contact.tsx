import { useState } from 'react';
import { HiMail, HiPhone } from 'react-icons/hi';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simuler un envoi de formulaire
    setTimeout(() => {
      setFormStatus('success');
      // Reset après 3 secondes
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nous sommes à votre écoute pour répondre à vos questions ou discuter de vos projets.
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 max-w-5xl mx-auto mb-16">
          {/* Contact info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Informations de contact
            </h2>
            <div className="space-y-6">
              <a href="mailto:contact@webinnov.com" className="flex items-center group">
                <div className="w-12 h-12 rounded-xl bg-[#1e1e2f] flex items-center justify-center mr-4">
                  <HiMail className="w-6 h-6 text-gray-400 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:via-[#7000ff] group-hover:to-[#ff3b3b] group-hover:bg-clip-text group-hover:text-transparent" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-white group-hover:text-primary transition-colors">contact@webinnov.com</p>
                </div>
              </a>
              <a href="tel:+33612345678" className="flex items-center group">
                <div className="w-12 h-12 rounded-xl bg-[#1e1e2f] flex items-center justify-center mr-4">
                  <HiPhone className="w-6 h-6 text-gray-400 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:via-[#7000ff] group-hover:to-[#ff3b3b] group-hover:bg-clip-text group-hover:text-transparent" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Téléphone</p>
                  <p className="text-white group-hover:text-primary transition-colors">+33 6 76 89 05 01</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-[#1e1e2f]/50 p-8 rounded-2xl border border-gray-800/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#111111] text-white rounded-lg border border-gray-800 
                             focus:ring-2 focus:ring-primary focus:border-transparent outline-none
                             transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-[#111111] text-white rounded-lg border border-gray-800 
                             focus:ring-2 focus:ring-primary focus:border-transparent outline-none
                             transition-all duration-300"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#111111] text-white rounded-lg border border-gray-800 
                           focus:ring-2 focus:ring-primary focus:border-transparent outline-none
                           transition-all duration-300"
                  placeholder="john@exemple.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                  Objet
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-[#111111] text-white rounded-lg border border-gray-800 
                           focus:ring-2 focus:ring-primary focus:border-transparent outline-none
                           transition-all duration-300"
                >
                  <option value="">Sélectionnez un objet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="info">Demande d'information</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#111111] text-white rounded-lg border border-gray-800 
                           focus:ring-2 focus:ring-primary focus:border-transparent outline-none
                           resize-none transition-all duration-300"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white
                         bg-gradient-to-r from-[#3b82f6] via-[#7000ff] to-[#ff3b3b]
                         hover:shadow-lg hover:shadow-primary/20
                         transition-all duration-300 transform hover:-translate-y-0.5
                         disabled:opacity-50 disabled:cursor-not-allowed
                         ${formStatus === 'sending' ? 'animate-pulse' : ''}`}
              >
                {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>

            {/* Notification de statut */}
            {formStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 text-center">
                  Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-center">
                  Une erreur est survenue lors de l'envoi. Veuillez réessayer.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
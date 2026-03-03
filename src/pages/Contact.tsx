import { MapPin, MessageCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Comment passer une commande ?",
      a: "C'est très simple ! Allez sur la page Produit, cliquez sur 'Commander maintenant', remplissez le formulaire avec vos coordonnées et validez. Nous vous contacterons pour confirmer la livraison."
    },
    {
      q: "Quel est le délai de livraison ?",
      a: "Nous livrons généralement sous 24 à 48 heures ouvrables selon votre localisation. La livraison est rapide et fiable."
    },
    {
      q: "Comment fonctionne le paiement à la livraison ?",
      a: "Vous ne payez rien en ligne. Vous réglez le montant total en espèces directement au livreur une fois que vous avez reçu et vérifié votre colis."
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary mb-4">Besoin d'aide ?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions. N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-secondary mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button className="w-full bg-secondary text-white font-semibold py-3 rounded-xl hover:bg-secondary/90 transition-colors">
                Envoyer le message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-primary/10 p-6 rounded-2xl">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                  <MessageCircle size={20} />
                </div>
                <h3 className="font-bold text-secondary mb-1">WhatsApp</h3>
                <p className="text-primary font-medium">+229 01 43 75 79 82</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                  <MapPin size={20} />
                </div>
                <h3 className="font-bold text-secondary mb-1">Adresse</h3>
                <p className="text-secondary font-medium">Cotonou, Fidjrossè</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl sm:col-span-2 flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Disponibilité</h3>
                  <p className="text-gray-600 text-sm">Lundi - Samedi : 8h00 - 18h00</p>
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-secondary mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-secondary">{faq.q}</span>
                      {openFaq === idx ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

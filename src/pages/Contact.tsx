import { MapPin, MessageCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('_subject', `Nouveau message de contact - ${formData.name}`);

    try {
      const response = await fetch('https://formspree.io/f/mjgenbba', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000); // Cache le message après 5 secondes
      } else {
        setError(data.error?.message || data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setError('Erreur de connexion. Vérifiez votre réseau.');
    } finally {
      setIsLoading(false);
    }
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
    },
    {
      q: "Est-ce que vous livrez partout au Bénin ?",
      a: "Oui, nous livrons dans tout le Bénin. Les frais de livraison varient selon votre localisation. La livraison est gratuite à Cotonou et Abomey-Calavi."
    }
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Besoin d'aide ?</h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions. N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100"
          >
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-5">Envoyez-nous un message</h2>
            
            {isSuccess && (
              <div className="mb-5 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-600 text-sm text-center">
                  ✅ Message envoyé ! Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="Votre nom" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="votre@email.com" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-5 py-4 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-secondary text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & FAQ */}
          <div className="space-y-6">
            {/* Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-primary/10 p-5 rounded-xl">
                <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center mb-3">
                  <MessageCircle size={18} />
                </div>
                <h3 className="font-bold text-secondary text-sm mb-1">WhatsApp</h3>
                <p className="text-primary font-medium text-sm">+229 01 43 75 79 82</p>
              </div>
              <div className="bg-blue-50 p-5 rounded-xl">
                <div className="w-9 h-9 bg-secondary text-white rounded-full flex items-center justify-center mb-3">
                  <MapPin size={18} />
                </div>
                <h3 className="font-bold text-secondary text-sm mb-1">Adresse</h3>
                <p className="text-secondary font-medium text-sm">Cotonou, Fidjrossè</p>
              </div>
              <div className="bg-gray-100 p-5 rounded-xl sm:col-span-2 flex items-center gap-4">
                <div className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-sm">Disponibilité</h3>
                  <p className="text-gray-600 text-xs">Lundi - Samedi : 8h00 - 18h00</p>
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">Questions fréquentes</h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-secondary text-sm">{faq.q}</span>
                      {openFaq === idx ? 
                        <ChevronUp size={18} className="text-primary flex-shrink-0" /> : 
                        <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                      }
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 text-gray-600 text-xs leading-relaxed border-t border-gray-100 bg-gray-50/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Response Guarantee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-green-50 p-4 rounded-xl border border-green-100"
            >
              <p className="text-green-700 text-xs text-center">
                ⚡ Temps de réponse moyen : <span className="font-bold">moins de 2 heures</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    location: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Créer un nouveau FormData
    const formDataToSend = new FormData();
    
    // Ajouter les champs avec les noms que Formspree attend
    formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('order', 'ALIVER Sweat Pads (28 pièces) - 6 000 FCFA');
    formDataToSend.append('_subject', `Nouvelle commande ALIVER - ${formData.firstName} ${formData.lastName}`);
    
    // Optionnel : ton email pour recevoir une copie (si configuré dans Formspree)
    // formDataToSend.append('_replyto', 'tonemail@example.com');
    
    try {
      const response = await fetch('https://formspree.io/f/mlgwyqdd', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ firstName: '', lastName: '', phone: '', location: '' });
      } else {
        // Afficher l'erreur spécifique de Formspree
        setError(data.error?.message || data.error || 'Une erreur est survenue lors de l\'envoi');
        console.error('Formspree error:', data);
      }
    } catch (error) {
      setError('Erreur de connexion. Vérifiez votre réseau.');
      console.error('Network error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        >
          {/* Header */}
          <div className="bg-secondary p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold text-lg">
              {isSuccess ? 'Commande confirmée' : 'Finaliser votre commande'}
            </h3>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-2">Merci {formData.firstName} !</h4>
                <p className="text-gray-600 mb-6">
                  Votre commande a bien été reçue. Nous vous contacterons très bientôt au <strong>{formData.phone}</strong> pour confirmer la livraison.
                </p>
                <button
                  onClick={onClose}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                {/* Anti-spam (caché) */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="+229 01 23 45 67"
                  />
                  <p className="text-xs text-gray-500 mt-1">Format: +229 01 23 45 67</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lieu de résidence</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Cotonou, Fidjrossè"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <div className="pt-2">
                  <div className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-gray-600 font-medium">Total à payer</span>
                    <span className="text-xl font-bold text-primary">6 000 FCFA</span>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-transform active:scale-[0.98] shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Envoi en cours...' : 'Confirmer ma commande'}
                  </button>
                  
                  <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                    <CheckCircle size={12} className="text-green-500" />
                    Paiement à la livraison — Aucune carte requise
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
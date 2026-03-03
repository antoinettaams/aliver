import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ShoppingCart } from 'lucide-react';
import OrderModal from '../components/OrderModal';

export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Gallery Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-gray-100 flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-lg aspect-square bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center"
              >
                <img 
                  src="https://placehold.co/800x800/3ABFBF/FFFFFF?text=ALIVER+Box+Set" 
                  alt="ALIVER Product Box" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Best Seller
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                ALIVER Anti-Stain Underarm Sweat Pads
              </h1>
              
              <div className="flex items-end gap-4 mb-8">
                <span className="text-4xl font-bold text-primary">6 000 FCFA</span>
                <span className="text-gray-400 line-through text-lg mb-1">7 500 FCFA</span>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Protégez vos vêtements et restez au sec avec nos coussinets anti-transpirants invisibles. 
                  Conçus pour un confort maximal et une protection optimale.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "28 pièces par boîte",
                    "Taille : 120x95mm",
                    "Ultra-absorbant",
                    "Masque les odeurs",
                    "Adhésif fort",
                    "Discret et invisible"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <h3 className="font-semibold text-secondary mb-4">Comment utiliser ?</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <p className="text-sm text-gray-600">Retirez le film adhésif du coussinet.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <p className="text-sm text-gray-600">Collez le coussinet à l'intérieur de votre vêtement au niveau de l'aisselle.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <p className="text-sm text-gray-600">Pressez fermement et profitez de votre journée !</p>
                  </div>
                </div>
              </div>

              {/* CTA - Desktop */}
              <div className="mt-auto hidden md:block">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={24} />
                  Commander maintenant
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  ✅ Paiement à la livraison — Livraison gratuite à Cotonou, Abommey-Calavi 
                  ✅ Expédition à partir de 1000f
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section 1: Image Left, Text Right */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img 
                  src="https://placehold.co/800x600/e0f2f1/1A3A5C?text=Confiance+Totale" 
                  alt="Confiance au quotidien" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">Restez confiant en toute circonstance</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Que ce soit pour une présentation importante, un rendez-vous galant ou une journée intense, ne laissez plus la transpiration gâcher vos moments.
              </p>
              <ul className="space-y-4">
                {[
                  "Fini le stress des auréoles",
                  "Liberté de mouvement totale",
                  "Sensation de fraîcheur continue"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Feature Section 2: Text Left, Image Right */}
        <div className="mt-20">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">Un confort invisible au quotidien</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Conçus pour se faire oublier, nos coussinets sont fabriqués avec des matériaux doux et respirants qui respectent votre peau tout en assurant une protection maximale.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ils s'adaptent à tous types de vêtements, des chemises aux t-shirts, sans créer de gêne ni de bruit de frottement.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-primary font-bold text-lg hover:text-primary/80 transition-colors flex items-center gap-2 group"
              >
                Je veux essayer
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img 
                  src="https://placehold.co/800x600/f3f4f6/3ABFBF?text=Confort+Invisible" 
                  alt="Confort et discrétion" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Benefits Detail Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Pourquoi ALIVER est différent ?</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technologie Ultra-Fine",
                desc: "Avec moins de 1mm d'épaisseur, nos coussinets sont totalement invisibles sous vos vêtements, même les plus ajustés.",
                image: "https://placehold.co/400x300/e0f2f1/3ABFBF?text=Invisible"
              },
              {
                title: "Absorption 24h",
                desc: "Une structure multicouche unique qui capture l'humidité instantanément et la verrouille à l'intérieur pour une sensation de sec durable.",
                image: "https://placehold.co/400x300/e0f2f1/3ABFBF?text=Absorption"
              },
              {
                title: "Protection Tissu",
                desc: "Fini les taches jaunes et les auréoles. ALIVER protège vos chemises et hauts préférés contre la décoloration due à la transpiration.",
                image: "https://placehold.co/400x300/e0f2f1/3ABFBF?text=Protection"
              }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-20 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Avis Clients</h2>
            <p className="text-gray-600">Ce que nos utilisateurs disent de nous</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
      name: "Marcel A.",
      rating: 5,
      date: "Il y a 2 jours",
      location: "Cotonou",
      text: "Franchement je suis satisfait. Avec la chaleur ici à Cotonou, je transpirais beaucoup. Ces coussinets m'ont sauvé mes chemises. Je recommande à tous mes collègues."
    },
    {
      name: "Thérèse K.",
      rating: 5,
      date: "Il y a 1 semaine",
      location: "Porto-Novo",
      text: "Ma fille m'en a parlé et j'ai commandé. Au début j'avais peur que ça se voit mais pas du tout. Je les porte pour aller au marché, ça tient bien même avec la chaleur."
    },
    {
      name: "Rosine D.",
      rating: 5,
      date: "Il y a 3 semaines",
      location: "Parakou",
      text: "J'en avais marre de laisser des traces sur mes tissus. Depuis que j'utilise ALIVER, je peux même porter du wax clair sans stress. Merci pour ce produit!"
    },
    {
      name: "Fiacre T.",
      rating: 5,
      date: "Il y a 1 mois",
      location: "Bohicon",
      text: "Je suis commerçant et je passe mes journées sous la chaleur. Mes chemises blanches restent propres grâce à ALIVER. Le paquet de 28 dure vraiment longtemps."
    },
    {
      name: "Judith M.",
      rating: 5,
      date: "Il y a 1 mois",
      location: "Ouidah",
      text: "Ma copine m'a conseillé ce produit et j'ai commandé tout de suite. Les coussinets sont discrets et efficaces. Je les porte même quand je vais à la salle de gym. Je valide!"
    }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xs">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-sm text-secondary">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-primary text-white font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Commander maintenant
        </button>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

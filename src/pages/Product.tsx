import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ShoppingCart, MapPin } from 'lucide-react';
import OrderModal from '../components/OrderModal';

export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Padding bottom ajouté sur mobile pour éviter que le contenu ne soit caché par le CTA fixe */}
      <div className="pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              
              {/* Gallery Section */}
              <div className="w-full lg:w-1/2 p-6 lg:p-8 bg-gray-100 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-md aspect-square bg-white rounded-xl shadow-lg p-6 flex items-center justify-center"
                >
                  <img 
                    src="https://i.postimg.cc/T1GgS8m6/Protection-discrete-et-confortable-pour-la-peau.png" 
                    alt="ALIVER Product Box" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Product Details */}
              <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                    Best Seller
                  </span>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                  ALIVER Anti-Stain Underarm Sweat Pads
                </h1>
                
                <div className="flex items-end gap-3 mb-6 flex-wrap">
                  <span className="text-3xl font-bold text-primary">6 000 FCFA</span>
                  <span className="text-gray-400 line-through text-base mb-1">7 500 FCFA</span>
                </div>

                <div className="space-y-5 mb-6">
                  <p className="text-gray-600 text-base leading-relaxed">
                    Protégez vos vêtements et restez au sec avec nos coussinets anti-transpirants invisibles. 
                    Conçus pour un confort maximal et une protection optimale.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "28 pièces par boîte",
                      "Taille : 120x95mm",
                      "Ultra-absorbant",
                      "Masque les odeurs",
                      "Adhésif fort",
                      "Discret et invisible"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="text-xs font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Usage Instructions */}
                <div className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-100">
                  <h3 className="font-semibold text-secondary text-base mb-3">Comment utiliser ?</h3>
                  <div className="space-y-2.5">
                    {["Retirez le film adhésif du coussinet.", "Collez le coussinet à l'intérieur de votre vêtement au niveau de l'aisselle.", "Pressez fermement et profitez de votre journée !"].map((step, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="w-5 h-5 bg-secondary text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">{idx + 1}</span>
                        <p className="text-xs text-gray-600">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Responsive CTA - Desktop + Mobile */}
                <div className="mt-auto">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full md:w-auto bg-primary text-white font-semibold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Commander maintenant
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3">
                    ✅ Paiement à la livraison — Livraison gratuite à Cotonou, Abomey-Calavi 
                    ✅ Expédition à partir de 1000f
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Section 1 */}
          <div className="mt-16">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img
                    src="https://i.pinimg.com/1200x/c1/59/f4/c159f47aea63fd7f76436684fd9c62d8.jpg"
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
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Restez confiant en toute circonstance</h2>
                <p className="text-base text-gray-600 mb-5 leading-relaxed">
                  Que ce soit pour une présentation importante, un rendez-vous galant ou une journée intense, ne laissez plus la transpiration gâcher vos moments.
                </p>
                <ul className="space-y-3">
                  {["Fini le stress des auréoles", "Liberté de mouvement totale", "Sensation de fraîcheur continue"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Feature Section 2 */}
          <div className="mt-16">
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Un confort invisible au quotidien</h2>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  Conçus pour se faire oublier, nos coussinets sont fabriqués avec des matériaux doux et respirants qui respectent votre peau tout en assurant une protection maximale.
                </p>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Ils s'adaptent à tous types de vêtements, des chemises aux t-shirts, sans créer de gêne ni de bruit de frottement.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-primary font-semibold text-base hover:text-primary/80 transition-colors flex items-center gap-2 group"
                >
                  Je veux essayer
                  <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img
                    src="https://i.postimg.cc/pdsdvg3w/image-dc3e65db.png"
                    alt="Confort et discrétion"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Pourquoi ALIVER est différent ?</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  title: "Technologie Ultra-Fine",
                  desc: "Avec moins de 1mm d'épaisseur, nos coussinets sont totalement invisibles sous vos vêtements, même les plus ajustés.",
                  image: "https://i.postimg.cc/BZXC48VC/0023b6ac-bf43-438a-b495-cd81ad2481fa.jpg"
                },
                {
                  title: "Absorption 24h",
                  desc: "Une structure multicouche unique qui capture l'humidité instantanément et la verrouille à l'intérieur pour une sensation de sec durable.",
                  image: "https://i.postimg.cc/Dz6cy1hs/image-ff5e608.png"
                },
                {
                  title: "Protection Tissu",
                  desc: "Fini les taches jaunes et les auréoles. ALIVER protège vos chemises et hauts préférés contre la décoloration due à la transpiration.",
                  image: "https://i.postimg.cc/Z52Ssv2j/image-de06445d.png"
                }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-secondary mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16 mb-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Avis Clients</h2>
              <p className="text-gray-600 text-base">Ce que nos utilisateurs disent de nous</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">{i < review.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded-full">{review.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-[10px]">
                        {review.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-xs text-secondary">{review.name}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1">
                      <MapPin size={10} />
                      {review.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden z-40">
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-primary text-white font-semibold text-base py-3.5 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Commander maintenant
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-500 mt-2">
          ✅ Paiement à la livraison — Livraison gratuite à Cotonou, Abomey-Calavi
        </p>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
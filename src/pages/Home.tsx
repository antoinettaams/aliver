import { motion } from 'motion/react';
import { Droplets, Wind, ShieldCheck, Star, ArrowRight, Briefcase, PartyPopper, Shirt, CheckCircle, Clock, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-4">
                Dites adieu aux <span className="text-primary">taches de transpiration</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
                Restez frais et confiant toute la journée avec les coussinets ALIVER. La solution invisible pour protéger vos vêtements et votre assurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link 
                  to="/product" 
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1"
                >
                  Commander maintenant
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href="#how-it-works" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-secondary border border-gray-200 font-semibold px-6 py-3 rounded-full text-base hover:bg-gray-50 transition-all"
                >
                  Comment ça marche ?
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square bg-white rounded-2xl shadow-2xl p-4 sm:p-6 flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/1345yWcG/44513395-13db-43e0-9639-78cc66dfab12.jpg" 
                  alt="ALIVER Sweat Pads" 
                  className="w-full h-full object-contain drop-shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-3 -right-3 bg-secondary text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12">
                  <span className="text-xl font-bold">28</span>
                  <span className="text-[10px] uppercase font-medium">Pièces</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">La transpiration ne devrait pas dicter votre journée</h2>
          <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
            Nous connaissons tous ce moment gênant : une réunion importante, un premier rendez-vous, ou simplement une journée chaude, et soudain... l'auréole apparaît. Vous n'osez plus lever les bras, vous gardez votre veste malgré la chaleur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-5 bg-red-50 rounded-xl border border-red-100">
              <div className="text-red-500 font-semibold text-base mb-2">Gêne Sociale</div>
              <p className="text-gray-600 text-sm">Peur du regard des autres et perte de confiance en soi.</p>
            </div>
            <div className="p-5 bg-red-50 rounded-xl border border-red-100">
              <div className="text-red-500 font-semibold text-base mb-2">Vêtements Abîmés</div>
              <p className="text-gray-600 text-sm">Taches jaunes tenaces et décoloration des tissus.</p>
            </div>
            <div className="p-5 bg-red-50 rounded-xl border border-red-100 sm:col-span-2 md:col-span-1">
              <div className="text-red-500 font-semibold text-base mb-2">Inconfort</div>
              <p className="text-gray-600 text-sm">Sensation d'humidité désagréable toute la journée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Introduction Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <img 
                src="https://i.postimg.cc/L8kj4QT9/Chat-GPT-Image-3-mars-2026-14-56-20.png" 
                alt="ALIVER Solution" 
                className="relative z-10 rounded-xl shadow-2xl border border-white/10 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-primary/20 text-primary font-semibold px-3 py-1 rounded-full text-sm mb-4 border border-primary/20">
                La Solution Ultime
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                Retrouvez votre liberté de mouvement
              </h2>
              <p className="text-gray-300 text-base mb-5 leading-relaxed">
                Ne laissez plus la peur des auréoles limiter vos choix vestimentaires ou vos interactions sociales. Les coussinets ALIVER agissent comme un bouclier invisible entre votre peau et vos vêtements.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Protection garantie toute la journée",
                  "Invisible sous tous les types de vêtements",
                  "Préserve la qualité de vos tissus préférés"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <span className="text-gray-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/product" 
                className="inline-flex items-center gap-2 bg-white text-secondary font-semibold px-6 py-3 rounded-full text-base hover:bg-gray-100 transition-colors"
              >
                J'opte pour la tranquillité
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience / Use Cases */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Conçu pour votre style de vie</h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Que vous soyez au bureau, en soirée ou en déplacement, ALIVER s'adapte à toutes les situations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: <Briefcase size={28} />,
                title: "Pour les Professionnels",
                desc: "Restez impeccable lors de vos présentations et réunions. Ne laissez plus le stress se voir sur votre chemise.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <PartyPopper size={28} />,
                title: "Pour les Événements",
                desc: "Mariages, soirées, rendez-vous... Profitez de chaque instant sans vous soucier de votre apparence.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: <Shirt size={28} />,
                title: "Pour vos Vêtements",
                desc: "Protégez vos tissus délicats et chemises coûteuses contre les sels de transpiration et les déodorants.",
                color: "bg-orange-100 text-orange-600"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-5">Une protection invisible et efficace</h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Ultra-fin et Discret",
                    desc: "Moins de 1mm d'épaisseur. Personne ne saura que vous le portez, même sous des vêtements ajustés."
                  },
                  {
                    title: "Absorption Maximale",
                    desc: "Technologie multicouche qui capture et verrouille l'humidité instantanément."
                  },
                  {
                    title: "Hypoallergénique",
                    desc: "Doux pour la peau, sans parfum et testé dermatologiquement. Convient aux peaux sensibles."
                  },
                  {
                    title: "Adhésif Sécurisé",
                    desc: "Fixation forte qui tient toute la journée mais se retire facilement sans laisser de trace."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-base">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl p-6 aspect-square flex items-center justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
               
               <img 
                  src="https://i.postimg.cc/5txLX574/Chat-GPT-Image-3-mars-2026-14-56-26.png" 
                  alt="Technologie ALIVER" 
                  className="relative z-10 w-full h-auto rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-12 md:py-16 lg:py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Simple comme bonjour</h2>
            <p className="text-white/70 text-base">3 étapes simples pour une journée au sec</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
            {[
              {
                step: "01",
                title: "Décollez",
                desc: "Retirez le film protecteur de l'adhésif au dos du coussinet."
              },
              {
                step: "02",
                title: "Placez",
                desc: "Collez le coussinet à l'intérieur de votre vêtement, au niveau de l'aisselle."
              },
              {
                step: "03",
                title: "Profitez",
                desc: "Oubliez la transpiration et profitez de votre journée en toute confiance."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-7xl font-bold text-white/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Benefits Grid (Refined) */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Pourquoi choisir ALIVER ?</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: <Droplets size={32} />,
                title: "Super Absorbant",
                desc: "Technologie ultra-absorbante qui capture l'humidité instantanément pour garder vos vêtements secs."
              },
              {
                icon: <Wind size={32} />,
                title: "Respirant & Anti-Odeur",
                desc: "Matériaux respirants infusés pour neutraliser les mauvaises odeurs tout au long de la journée."
              },
              {
                icon: <Heart size={32} />,
                title: "Doux pour la peau",
                desc: "Fabriqué avec des matériaux non-tissés doux, sans allergènes et confortables à porter."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-white text-primary rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ils nous font confiance</h2>
            <p className="text-white/70 text-base">Découvrez ce que nos clients pensent de ALIVER</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                name: "Sarah K.",
                role: "Cadre Commerciale",
                text: "Incroyable ! Je ne m'inquiète plus jamais pour mes chemises au bureau. C'est devenu un indispensable pour mes réunions clients.",
                location: "Cotonou"
              },
              {
                name: "Jean D.",
                role: "Coach Sportif",
                text: "Très discret et tient toute la journée même quand je bouge beaucoup. Livraison rapide en plus !",
                location: "Porto-Novo"
              },
              {
                name: "Joanita T.",
                role: "Étudiante",
                text: "J'étais sceptique au début mais l'absorption est vraiment top. Plus aucune auréole gênante en cours.",
                location: "Parakou"
              }
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
              >
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-white text-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-semibold text-sm block">{review.name}</span>
                      <span className="text-xs text-gray-400">{review.role}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin size={10} />
                    {review.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">Prêt à rester au sec ?</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Rejoignez des milliers de personnes satisfaites et retrouvez votre confiance dès aujourd'hui.
          </p>
          <Link 
            to="/product" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1"
          >
            Commander maintenant
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
import { motion } from 'motion/react';
import { Droplets, Wind, ShieldCheck, Star, ArrowRight, Briefcase, PartyPopper, Shirt, CheckCircle, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
                Dites adieu aux <span className="text-primary">taches de transpiration</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                Restez frais et confiant toute la journée avec les coussinets ALIVER. La solution invisible pour protéger vos vêtements et votre assurance.
              </p> 
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square bg-white rounded-3xl shadow-2xl p-6 flex items-center justify-center">
                {/* Placeholder for Product Image */}
                <img 
                  src="https://placehold.co/600x600/3ABFBF/FFFFFF?text=ALIVER+Sweat+Pads" 
                  alt="ALIVER Sweat Pads" 
                  className="w-full h-full object-contain drop-shadow-lg"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-secondary text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12">
                  <span className="text-2xl font-bold">28</span>
                  <span className="text-xs uppercase font-medium">Pièces</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-8">La transpiration ne devrait pas dicter votre journée</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Nous connaissons tous ce moment gênant : une réunion importante, un premier rendez-vous, ou simplement une journée chaude, et soudain... l'auréole apparaît. Vous n'osez plus lever les bras, vous gardez votre veste malgré la chaleur.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-red-50 rounded-xl border border-red-100">
              <div className="text-red-500 font-bold text-lg mb-2">Gêne Sociale</div>
              <p className="text-gray-600 text-sm">Peur du regard des autres et perte de confiance en soi.</p>
            </div>
            <div className="p-6 bg-red-50 rounded-xl border border-red-100">
              <div className="text-red-500 font-bold text-lg mb-2">Vêtements Abîmés</div>
              <p className="text-gray-600 text-sm">Taches jaunes tenaces et décoloration des tissus.</p>
            </div>
            <div className="p-6 bg-red-50 rounded-xl border border-red-100">
              <div className="text-red-500 font-bold text-lg mb-2">Inconfort</div>
              <p className="text-gray-600 text-sm">Sensation d'humidité désagréable toute la journée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Introduction Section */}
      <section className="py-20 bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <img 
                src="https://i.postimg.cc/L8kj4QT9/Chat-GPT-Image-3-mars-2026-14-56-20.png" 
                alt="ALIVER Solution" 
                className="relative z-10 rounded-2xl shadow-2xl border border-white/10 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-primary/20 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-6 border border-primary/20">
                La Solution Ultime
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Retrouvez votre liberté de mouvement
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Ne laissez plus la peur des auréoles limiter vos choix vestimentaires ou vos interactions sociales. Les coussinets ALIVER agissent comme un bouclier invisible entre votre peau et vos vêtements.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Protection garantie toute la journée",
                  "Invisible sous tous les types de vêtements",
                  "Préserve la qualité de vos tissus préférés"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/product" 
                className="inline-flex items-center gap-2 bg-white text-secondary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
              >
                J'opte pour la tranquillité
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience / Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">Conçu pour votre style de vie</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Que vous soyez au bureau, en soirée ou en déplacement, ALIVER s'adapte à toutes les situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase size={32} />,
                title: "Pour les Professionnels",
                desc: "Restez impeccable lors de vos présentations et réunions. Ne laissez plus le stress se voir sur votre chemise.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <PartyPopper size={32} />,
                title: "Pour les Événements",
                desc: "Mariages, soirées, rendez-vous... Profitez de chaque instant sans vous soucier de votre apparence.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: <Shirt size={32} />,
                title: "Pour vos Vêtements",
                desc: "Protégez vos tissus délicats et chemises coûteuses contre les sels de transpiration et les déodorants.",
                color: "bg-orange-100 text-orange-600"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-secondary mb-6">Une protection invisible et efficace</h2>
              <div className="space-y-6">
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
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
               {/* Decorative elements */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
               
               <img 
                  src="https://i.postimg.cc/5txLX574/Chat-GPT-Image-3-mars-2026-14-56-26.png" 
                  alt="Technologie ALIVER" 
                  className="relative z-10 w-full h-auto rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple comme bonjour</h2>
            <p className="text-white/70">3 étapes simples pour une journée au sec</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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
                <div className="text-8xl font-bold text-white/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Benefits Grid (Refined) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">Pourquoi choisir ALIVER ?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets size={40} />,
                title: "Super Absorbant",
                desc: "Technologie ultra-absorbante qui capture l'humidité instantanément pour garder vos vêtements secs."
              },
              {
                icon: <Wind size={40} />,
                title: "Respirant & Anti-Odeur",
                desc: "Matériaux respirants infusés pour neutraliser les mauvaises odeurs tout au long de la journée."
              },
              {
                icon: <Heart size={40} />,
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
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-white text-primary rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ils nous font confiance</h2>
            <p className="text-white/70">Découvrez ce que nos clients pensent de ALIVER</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah K.",
                role: "Cadre Commerciale",
                text: "Incroyable ! Je ne m'inquiète plus jamais pour mes chemises au bureau. C'est devenu un indispensable pour mes réunions clients."
              },
              {
                name: "Jean D.",
                role: "Coach Sportif",
                text: "Très discret et tient toute la journée même quand je bouge beaucoup. Livraison rapide en plus !",
              },
              {
                name: "Joanita T.",
                role: "Étudiante",
                text: "J'étais sceptique au début mais l'absorption est vraiment top. Plus aucune auréole gênante en cours."
              }
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-semibold block">{review.name}</span>
                    <span className="text-xs text-gray-400">{review.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Prêt à rester au sec ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez des milliers de personnes satisfaites et retrouvez votre confiance dès aujourd'hui.
          </p>
          <Link 
            to="/product" 
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-10 py-5 rounded-full text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1"
          >
            Commander mon pack
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}

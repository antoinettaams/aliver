import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 colonnes alignées à gauche sur mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-left">
          
          {/* Colonne 1 : Logo et description */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-primary">ALIVER</h3>
            <p className="text-gray-300 text-sm max-w-xs">
              La solution efficace contre la transpiration excessive. Restez au sec, restez confiant.
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Produit
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact & Réseaux sociaux */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <span>+229 01 43 75 79 82</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  <span>Cotonou, Fodjrossè</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-left md:text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ALIVER. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
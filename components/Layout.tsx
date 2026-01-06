import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, IceCream, Phone, Mail, Instagram, Facebook, Settings } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { content } = useContent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-pink-500 font-semibold' : 'text-slate-600 hover:text-pink-500';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <IceCream className="h-8 w-8 text-pink-500" />
                <span className="font-handwriting text-2xl text-slate-800">SweetTreats</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/services" className={isActive('/services')}>Services</Link>
              <Link to="/packages" className={isActive('/packages')}>Packages</Link>
              <Link to="/about" className={isActive('/about')}>About Us</Link>
              <Link to="/contact" className={isActive('/contact')}>Contact</Link>
              {(() => {
                // Check authentication from localStorage
                const isAuth = localStorage.getItem('sweettreats_admin_auth') === 'authenticated';
                return isAuth ? (
                  <Link to="/admin" className="flex items-center gap-1 text-slate-600 hover:text-pink-500">
                    <Settings className="h-4 w-4" />
                    Admin
                  </Link>
                ) : null;
              })()}
              <Link 
                to="/contact" 
                className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-pink-200"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-pink-500 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-pink-500 hover:bg-pink-50 rounded-md">Home</Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-pink-500 hover:bg-pink-50 rounded-md">Services</Link>
              <Link to="/packages" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-pink-500 hover:bg-pink-50 rounded-md">Packages</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-pink-500 hover:bg-pink-50 rounded-md">About</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-pink-500 font-medium hover:bg-pink-50 rounded-md">Book Now</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <IceCream className="h-6 w-6 text-pink-400" />
                <span className="font-handwriting text-xl text-white">SweetTreats</span>
              </div>
              <p className="text-slate-400 text-sm">
                {content.footer.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Services</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><Link to="/services" className="hover:text-white">Gelato Catering</Link></li>
                <li><Link to="/services" className="hover:text-white">Event Planning</Link></li>
                <li><Link to="/services" className="hover:text-white">Photo Booths</Link></li>
                <li><Link to="/services" className="hover:text-white">Custom Cakes</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Company</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
                <li><Link to="/contact" className="hover:text-white">Get a Quote</Link></li>
                <li><Link to="/packages" className="hover:text-white">Packages</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Connect</h3>
              <div className="space-y-2 text-slate-300 text-sm">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {content.footer.phone}</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {content.footer.email}</p>
                <div className="flex gap-4 mt-4">
                  <a href={content.footer.socialLinks.instagram} className="hover:text-pink-400"><Instagram className="h-5 w-5" /></a>
                  <a href={content.footer.socialLinks.facebook} className="hover:text-pink-400"><Facebook className="h-5 w-5" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} SweetTreats & Events Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

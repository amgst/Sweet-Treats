import React from 'react';
import { PACKAGES } from '../constants';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Packages: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Event Packages</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose from our pre-designed bundles to save money and simplify your planning. 
            Perfect for birthdays, weddings, and office parties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PACKAGES.map((pkg) => (
            <div 
                key={pkg.id} 
                className={`relative bg-white rounded-3xl p-8 shadow-sm border ${pkg.recommended ? 'border-pink-500 shadow-xl shadow-pink-100 ring-4 ring-pink-50' : 'border-slate-200'}`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" /> Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-800 mb-2">{pkg.title}</h3>
              <p className="text-slate-500 text-sm font-medium mb-6 uppercase tracking-wide">{pkg.guestCount}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-slate-900">${pkg.price}</span>
                <span className="text-slate-400 ml-2">/ event</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${
                    pkg.recommended 
                    ? 'bg-pink-500 hover:bg-pink-600 text-white' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                Choose {pkg.title}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Need something custom?</h3>
            <p className="text-slate-600 mb-4">We can build a tailored package just for you.</p>
            <Link to="/contact" className="text-pink-500 font-medium hover:underline">Contact us for a custom quote</Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;

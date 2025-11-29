import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Heart, Calendar, DollarSign } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  // Get first 3 services for "Featured" section
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop&q=80" 
                alt="Dessert Table" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Delicious Gelato, Desserts & <br />
            <span className="text-pink-400 font-handwriting">Event Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Book everything from premium gelato carts to full party planning in one place. 
            We make your celebration sweet and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-pink-500/30"
            >
              Browse Services
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-semibold text-lg transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Popular Services</h2>
          <p className="text-slate-600">Our most requested additions to make your party pop.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-pink-500 uppercase tracking-wider">{service.category}</span>
                <h3 className="text-xl font-bold text-slate-800 mt-2 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.shortDescription}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                    <span className="text-slate-900 font-bold">From ${service.priceStart}</span>
                    <Link to={`/services/${service.id}`} className="text-pink-500 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-pink-500 font-medium transition-colors border-b-2 border-transparent hover:border-pink-500 pb-1">
                View All Categories <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Party with SweetTreats?</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm text-pink-500">
                                <Heart className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">Quality Ingredients</h3>
                                <p className="text-slate-600 text-sm">We use locally sourced dairy and real fruit for our gelatos, and premium ingredients for all catering.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm text-pink-500">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">Dietary Friendly</h3>
                                <p className="text-slate-600 text-sm">Vegan, gluten-free, halal, and nut-free options available for almost every service.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm text-pink-500">
                                <DollarSign className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">Flexible Packages</h3>
                                <p className="text-slate-600 text-sm">From intimate gatherings to corporate galas, we have pricing tiers to fit your budget.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm text-pink-500">
                                <Calendar className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">Easy Booking</h3>
                                <p className="text-slate-600 text-sm">Browse, compare, and book online. Or use our AI assistant to plan your event instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop&q=80" alt="Happy Clients" className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                        <p className="font-handwriting text-2xl text-pink-500 mb-2">"Sweet Perfection!"</p>
                        <p className="text-xs text-slate-500">Making memories one scoop at a time.</p>
                    </div>
                </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Sweet Words from Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                    <div className="flex justify-center mb-4 text-yellow-400">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
                    </div>
                    <p className="text-slate-600 italic mb-6">"{t.content}"</p>
                    <div className="font-semibold text-slate-800">{t.name}</div>
                    <div className="text-xs text-pink-500 uppercase tracking-wide">{t.role}</div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

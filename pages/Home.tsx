import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Heart, Calendar, DollarSign, LucideIcon } from 'lucide-react';
import { contentStore } from '../services/contentStore';
import * as Icons from 'lucide-react';

const Home: React.FC = () => {
  const services = contentStore.getServices();
  const testimonials = contentStore.getTestimonials();
  const homeContent = contentStore.getHomeContent();
  
  // Get first 3 services for "Featured" section
  const featuredServices = services.slice(0, 3);
  
  // Icon mapping helper
  const getIcon = (iconName: string): LucideIcon => {
    const IconComponent = (Icons as any)[iconName] as LucideIcon;
    return IconComponent || Heart;
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src={homeContent.hero.backgroundImage} 
                alt="Dessert Table" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {homeContent.hero.title} <br />
            <span className="text-pink-400 font-handwriting">{homeContent.hero.subtitle}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            {homeContent.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-pink-500/30"
            >
              {homeContent.hero.primaryButtonText}
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-semibold text-lg transition-all"
            >
              {homeContent.hero.secondaryButtonText}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{homeContent.featuredServicesTitle}</h2>
          <p className="text-slate-600">{homeContent.featuredServicesDescription}</p>
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
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">{homeContent.whyChooseUs.title}</h2>
                    <div className="space-y-6">
                        {homeContent.whyChooseUs.features.map((feature, idx) => {
                          const Icon = getIcon(feature.icon);
                          return (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-pink-500">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
                                    <p className="text-slate-600 text-sm">{feature.description}</p>
                                </div>
                            </div>
                          );
                        })}
                    </div>
                </div>
                <div className="relative">
                    <img src={homeContent.whyChooseUs.image} alt="Happy Clients" className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                        <p className="font-handwriting text-2xl text-pink-500 mb-2">"{homeContent.whyChooseUs.quote}"</p>
                        <p className="text-xs text-slate-500">{homeContent.whyChooseUs.quoteAuthor}</p>
                    </div>
                </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">{homeContent.testimonialsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
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

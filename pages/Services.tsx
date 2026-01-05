import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { contentStore } from '../services/contentStore';
import { ServiceCategory } from '../types';
import { Search, SlidersHorizontal, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const services = contentStore.getServices();

  const categories = ['All', ...Object.values(ServiceCategory)];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Service Marketplace</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
                Explore our wide range of dessert catering options, event planning services, and party rentals. 
                Everything you need for a perfect event, all in one place.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            {/* Category Pills */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                            selectedCategory === cat 
                            ? 'bg-pink-500 text-white shadow-md' 
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <input 
                    type="text" 
                    placeholder="Search services..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
            </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
                <Link to={`/services/${service.id}`} key={service.id} className="group block h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-800 shadow-sm">
                            From ${service.priceStart}
                        </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                             {service.icon && <service.icon className="h-4 w-4 text-pink-500" />}
                             <span className="text-xs font-semibold text-slate-500 uppercase">{service.category}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-pink-600 transition-colors">{service.title}</h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{service.shortDescription}</p>
                        
                        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center text-pink-500 font-medium text-sm">
                            View Details <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <div className="bg-white p-8 rounded-full inline-block mb-4 shadow-sm">
                    <SlidersHorizontal className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">No services found</h3>
                <p className="text-slate-500">Try adjusting your category or search terms.</p>
                <button 
                    onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
                    className="mt-4 text-pink-500 font-medium hover:underline"
                >
                    Clear Filters
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Services;

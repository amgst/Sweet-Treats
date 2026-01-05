import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { contentStore } from '../services/contentStore';
import { Check, ArrowLeft, Calendar, Info } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const services = contentStore.getServices();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Service Not Found</h2>
        <Link to="/services" className="text-pink-500 hover:underline flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="relative h-80 md:h-[400px]">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/50 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                <Link to="/services" className="text-white/80 hover:text-white mb-4 inline-flex items-center gap-2 text-sm">
                    <ArrowLeft className="h-4 w-4" /> Back to Marketplace
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{service.title}</h1>
                <span className="inline-block px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded uppercase tracking-wider">
                    {service.category}
                </span>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {service.fullDescription}
                </p>

                <h3 className="text-xl font-bold text-slate-800 mb-4">What's Included</h3>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <div className="bg-white p-1 rounded-full shadow-sm text-green-500">
                                    <Check className="h-4 w-4" />
                                </div>
                                <span className="text-slate-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-slate-200 rounded-xl overflow-hidden">
                            <summary className="flex justify-between items-center p-4 cursor-pointer bg-white group-open:bg-slate-50 font-medium text-slate-800">
                                Is a deposit required?
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <div className="p-4 bg-white text-slate-600 text-sm">
                                Yes, we require a 20% non-refundable deposit to secure your date. The remaining balance is due 7 days prior to the event.
                            </div>
                        </details>
                         <details className="group border border-slate-200 rounded-xl overflow-hidden">
                            <summary className="flex justify-between items-center p-4 cursor-pointer bg-white group-open:bg-slate-50 font-medium text-slate-800">
                                Do you accommodate dietary restrictions?
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <div className="p-4 bg-white text-slate-600 text-sm">
                                Absolutely. Please let us know during booking if you need Gluten-Free, Vegan, or Halal options. We take cross-contamination very seriously.
                            </div>
                        </details>
                    </div>
                </div>
            </div>

            {/* Sidebar Booking Card */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sticky top-24">
                    <div className="flex justify-between items-baseline mb-6">
                        <span className="text-slate-500 font-medium">Starting at</span>
                        <span className="text-3xl font-bold text-slate-900">${service.priceStart}</span>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3 text-slate-600 text-sm">
                            <Calendar className="h-5 w-5 text-slate-400" />
                            <span>Available for booking 7 days a week</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 text-sm">
                            <Info className="h-5 w-5 text-slate-400" />
                            <span>Instant quote available</span>
                        </div>
                    </div>

                    <Link 
                        to="/contact"
                        className="block w-full text-center bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-lg shadow-pink-200 mb-3"
                    >
                        Request Quote
                    </Link>
                    <button className="block w-full text-center border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-colors">
                        Contact via WhatsApp
                    </button>

                    <p className="text-xs text-center text-slate-400 mt-4">
                        No payment required yet. We'll confirm availability first.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

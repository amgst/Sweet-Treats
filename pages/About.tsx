import React from 'react';
import { Heart, Smile, Sun } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       {/* Hero */}
       <div className="bg-pink-50 py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-handwriting">Our Story</h1>
                <p className="text-xl text-slate-600">Bringing the sweetest moments to life since 2018.</p>
            </div>
       </div>

       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="prose prose-lg text-slate-600">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">More than just Gelato</h2>
                    <p className="mb-4">
                        SweetTreats began as a single vintage gelato cart named "Bella" rolling through local farmers markets. 
                        Our founder, Maria, noticed that while people loved the ice cream, they were really looking for an 
                        experience—a moment of joy to share with loved ones.
                    </p>
                    <p>
                        Today, we have grown into a full-service event hub. We realized that our clients wanted the same 
                        quality and care we put into our desserts applied to their entire event. That's why we launched 
                        our Marketplace, connecting you with trusted décor, photography, and planning services.
                    </p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=800&fit=crop&q=80" alt="Founder" className="rounded-2xl shadow-xl" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-slate-50 rounded-xl">
                    <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                    <p className="text-slate-600 text-sm">To remove the stress from event planning so you can focus on making memories.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl">
                    <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smile className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Our Values</h3>
                    <p className="text-slate-600 text-sm">Authenticity, inclusivity (dietary & cultural), and delivering pure joy.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl">
                    <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sun className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Our Promise</h3>
                    <p className="text-slate-600 text-sm">We show up early, we serve with a smile, and we clean up before we leave.</p>
                </div>
            </div>
       </div>
    </div>
  );
};

export default About;

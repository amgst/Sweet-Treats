import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import AIAssistant from '../components/AIAssistant';
import { contentStore } from '../services/contentStore';

const Contact: React.FC = () => {
  const contactContent = contentStore.getContactContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guestCount: '',
    serviceType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">{contactContent.title}</h1>
            <p className="text-slate-600">{contactContent.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info & AI Assistant */}
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Contact Info</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-600">
                            <Phone className="h-5 w-5 text-pink-500" />
                            <span>{contactContent.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <Mail className="h-5 w-5 text-pink-500" />
                            <span>{contactContent.contactInfo.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <MapPin className="h-5 w-5 text-pink-500" />
                            <span>{contactContent.contactInfo.address}</span>
                        </div>
                    </div>
                </div>

                {/* Gemini Integration */}
                <AIAssistant />
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">✓</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                            <p className="text-slate-600">We'll get back to you within 24 hours with a quote.</p>
                            <button onClick={() => setSubmitted(false)} className="mt-6 text-pink-500 hover:underline">Send another message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-lg border-slate-200 focus:ring-pink-500 focus:border-pink-500" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-lg border-slate-200 focus:ring-pink-500 focus:border-pink-500" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Event Date</label>
                                    <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full rounded-lg border-slate-200 focus:ring-pink-500 focus:border-pink-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Guest Count (Approx)</label>
                                    <select name="guestCount" value={formData.guestCount} onChange={handleChange} className="w-full rounded-lg border-slate-200 focus:ring-pink-500 focus:border-pink-500">
                                        <option value="">Select...</option>
                                        <option value="1-20">1-20</option>
                                        <option value="20-50">20-50</option>
                                        <option value="50-100">50-100</option>
                                        <option value="100+">100+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
                                <select required name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full rounded-lg border-slate-200 focus:ring-pink-500 focus:border-pink-500">
                                    <option value="">I'm interested in...</option>
                                    <option value="Gelato Catering">Gelato Catering</option>
                                    <option value="Event Planning">Event Planning</option>
                                    <option value="Photo Booth">Photo Booth</option>
                                    <option value="Custom Cake">Custom Cake</option>
                                    <option value="Full Package">Full Package</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message / Special Requests</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full rounded-lg border-slate-200 focus:ring-pink-500 focus:border-pink-500" placeholder="Tell us more about your event theme, dietary needs, etc." />
                            </div>

                            <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-pink-200">
                                Send Inquiry
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

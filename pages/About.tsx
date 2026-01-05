import React from 'react';
import { Heart, Smile, Sun, LucideIcon } from 'lucide-react';
import { contentStore } from '../services/contentStore';
import * as Icons from 'lucide-react';

const About: React.FC = () => {
  const aboutContent = contentStore.getAboutContent();
  
  // Icon mapping helper
  const getIcon = (iconName: string): LucideIcon => {
    const IconComponent = (Icons as any)[iconName] as LucideIcon;
    return IconComponent || Heart;
  };
  
  return (
    <div className="bg-white min-h-screen">
       {/* Hero */}
       <div className="bg-pink-50 py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-handwriting">{aboutContent.hero.title}</h1>
                <p className="text-xl text-slate-600">{aboutContent.hero.subtitle}</p>
            </div>
       </div>

       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="prose prose-lg text-slate-600">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">{aboutContent.story.title}</h2>
                    {aboutContent.story.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
                        {paragraph}
                      </p>
                    ))}
                </div>
                <div>
                    <img src={aboutContent.story.image} alt="Founder" className="rounded-2xl shadow-xl" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {aboutContent.values.map((value, idx) => {
                  const Icon = getIcon(value.icon);
                  return (
                    <div key={idx} className="p-6 bg-slate-50 rounded-xl">
                        <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                        <p className="text-slate-600 text-sm">{value.description}</p>
                    </div>
                  );
                })}
            </div>
       </div>
    </div>
  );
};

export default About;

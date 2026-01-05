import React, { useState, useEffect } from 'react';
import { contentStore } from '../../services/contentStore';
import { HomeContent } from '../../services/contentStore';
import { Save } from 'lucide-react';

const AdminHome: React.FC = () => {
  const [content, setContent] = useState<HomeContent>(contentStore.getHomeContent());

  const handleSave = () => {
    contentStore.setHomeContent(content);
    alert('Home page content saved!');
  };

  const updateHero = (field: keyof HomeContent['hero'], value: string) => {
    setContent({
      ...content,
      hero: { ...content.hero, [field]: value }
    });
  };

  const updateWhyChooseUs = (field: keyof HomeContent['whyChooseUs'], value: any) => {
    setContent({
      ...content,
      whyChooseUs: { ...content.whyChooseUs, [field]: value }
    });
  };

  const updateFeature = (index: number, field: string, value: string) => {
    const features = [...content.whyChooseUs.features];
    features[index] = { ...features[index], [field]: value };
    updateWhyChooseUs('features', features);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Edit Home Page</h2>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>

        <div className="space-y-8">
          {/* Hero Section */}
          <section className="border-b border-slate-200 pb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Hero Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title Line 1</label>
                <input
                  type="text"
                  value={content.hero.title}
                  onChange={(e) => updateHero('title', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title Line 2 (Subtitle)</label>
                <input
                  type="text"
                  value={content.hero.subtitle}
                  onChange={(e) => updateHero('subtitle', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea
                  value={content.hero.description}
                  onChange={(e) => updateHero('description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Primary Button Text</label>
                  <input
                    type="text"
                    value={content.hero.primaryButtonText}
                    onChange={(e) => updateHero('primaryButtonText', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Secondary Button Text</label>
                  <input
                    type="text"
                    value={content.hero.secondaryButtonText}
                    onChange={(e) => updateHero('secondaryButtonText', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Background Image URL</label>
                <input
                  type="text"
                  value={content.hero.backgroundImage}
                  onChange={(e) => updateHero('backgroundImage', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Featured Services */}
          <section className="border-b border-slate-200 pb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Featured Services Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  value={content.featuredServicesTitle}
                  onChange={(e) => setContent({ ...content, featuredServicesTitle: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <input
                  type="text"
                  value={content.featuredServicesDescription}
                  onChange={(e) => setContent({ ...content, featuredServicesDescription: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="border-b border-slate-200 pb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Why Choose Us Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  value={content.whyChooseUs.title}
                  onChange={(e) => updateWhyChooseUs('title', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={content.whyChooseUs.image}
                  onChange={(e) => updateWhyChooseUs('image', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Quote</label>
                <input
                  type="text"
                  value={content.whyChooseUs.quote}
                  onChange={(e) => updateWhyChooseUs('quote', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Quote Author</label>
                <input
                  type="text"
                  value={content.whyChooseUs.quoteAuthor}
                  onChange={(e) => updateWhyChooseUs('quoteAuthor', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-4">Features</label>
                {content.whyChooseUs.features.map((feature, index) => (
                  <div key={index} className="mb-4 p-4 border border-slate-200 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1">Icon Name</label>
                        <input
                          type="text"
                          value={feature.icon}
                          onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="Heart, CheckCircle, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1">Title</label>
                        <input
                          type="text"
                          value={feature.title}
                          onChange={(e) => updateFeature(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1">Description</label>
                        <input
                          type="text"
                          value={feature.description}
                          onChange={(e) => updateFeature(index, 'description', e.target.value)}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Testimonials Section</h3>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input
                type="text"
                value={content.testimonialsTitle}
                onChange={(e) => setContent({ ...content, testimonialsTitle: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

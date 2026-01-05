import React, { useState } from 'react';
import { contentStore } from '../../services/contentStore';
import { AboutContent } from '../../services/contentStore';
import { Save } from 'lucide-react';

const AdminAbout: React.FC = () => {
  const [content, setContent] = useState<AboutContent>(contentStore.getAboutContent());

  const handleSave = () => {
    contentStore.setAboutContent(content);
    alert('About page content saved!');
  };

  const updateStory = (field: keyof AboutContent['story'], value: string | string[]) => {
    setContent({
      ...content,
      story: { ...content.story, [field]: value }
    });
  };

  const updateValue = (index: number, field: string, value: string) => {
    const values = [...content.values];
    values[index] = { ...values[index], [field]: value };
    setContent({ ...content, values });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Edit About Page</h2>
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  value={content.hero.title}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, title: e.target.value } })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle</label>
                <input
                  type="text"
                  value={content.hero.subtitle}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, subtitle: e.target.value } })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="border-b border-slate-200 pb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Story Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  value={content.story.title}
                  onChange={(e) => updateStory('title', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={content.story.image}
                  onChange={(e) => updateStory('image', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Paragraphs (one per line)</label>
                <textarea
                  value={content.story.paragraphs.join('\n')}
                  onChange={(e) => updateStory('paragraphs', e.target.value.split('\n').filter(p => p.trim()))}
                  rows={6}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Values Section</h3>
            <div className="space-y-4">
              {content.values.map((value, index) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Icon Name</label>
                      <input
                        type="text"
                        value={value.icon}
                        onChange={(e) => updateValue(index, 'icon', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Heart, Smile, Sun, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Title</label>
                      <input
                        type="text"
                        value={value.title}
                        onChange={(e) => updateValue(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Description</label>
                      <input
                        type="text"
                        value={value.description}
                        onChange={(e) => updateValue(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminAbout;

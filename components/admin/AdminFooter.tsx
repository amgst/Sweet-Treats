import React, { useState } from 'react';
import { contentStore } from '../../services/contentStore';
import { FooterContent } from '../../services/contentStore';
import { Save } from 'lucide-react';

const AdminFooter: React.FC = () => {
  const [content, setContent] = useState<FooterContent>(contentStore.getFooterContent());

  const handleSave = () => {
    contentStore.setFooterContent(content);
    window.location.reload();
  };

  const updateSocialLinks = (field: keyof FooterContent['socialLinks'], value: string) => {
    setContent({
      ...content,
      socialLinks: { ...content.socialLinks, [field]: value }
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Edit Footer</h2>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea
              value={content.description}
              onChange={(e) => setContent({ ...content, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input
              type="text"
              value={content.phone}
              onChange={(e) => setContent({ ...content, phone: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              value={content.email}
              onChange={(e) => setContent({ ...content, email: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Social Links</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Instagram URL</label>
                <input
                  type="text"
                  value={content.socialLinks.instagram}
                  onChange={(e) => updateSocialLinks('instagram', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Facebook URL</label>
                <input
                  type="text"
                  value={content.socialLinks.facebook}
                  onChange={(e) => updateSocialLinks('facebook', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFooter;

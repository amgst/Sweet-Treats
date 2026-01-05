import React, { useState } from 'react';
import { contentStore } from '../../services/contentStore';
import { ContactContent } from '../../services/contentStore';
import { Save } from 'lucide-react';

const AdminContact: React.FC = () => {
  const [content, setContent] = useState<ContactContent>(contentStore.getContactContent());

  const handleSave = () => {
    contentStore.setContactContent(content);
    window.location.reload();
  };

  const updateContactInfo = (field: keyof ContactContent['contactInfo'], value: string) => {
    setContent({
      ...content,
      contactInfo: { ...content.contactInfo, [field]: value }
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Edit Contact Page</h2>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>

        <div className="space-y-8">
          {/* Header */}
          <section className="border-b border-slate-200 pb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Page Header</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  value={content.title}
                  onChange={(e) => setContent({ ...content, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <input
                  type="text"
                  value={content.description}
                  onChange={(e) => setContent({ ...content, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input
                  type="text"
                  value={content.contactInfo.phone}
                  onChange={(e) => updateContactInfo('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={content.contactInfo.email}
                  onChange={(e) => updateContactInfo('email', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <input
                  type="text"
                  value={content.contactInfo.address}
                  onChange={(e) => updateContactInfo('address', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminContact;

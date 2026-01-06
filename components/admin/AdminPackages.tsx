import React, { useState, useEffect } from 'react';
import { contentStore } from '../../services/contentStore';
import { Package } from '../../types';
import { Plus, Trash2, Save, X } from 'lucide-react';
import { useContent } from '../../contexts/ContentContext';

const AdminPackages: React.FC = () => {
  const { content, updatePackages } = useContent();
  const [packages, setPackages] = useState<Package[]>(content.packages);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingPackage, setEditingPackage] = useState<Partial<Package>>({});

  useEffect(() => {
    setPackages(content.packages);
  }, [content.packages]);

  const handleEdit = (pkg: Package) => {
    setEditingId(pkg.id);
    setEditingPackage({ ...pkg });
  };

  const handleSave = () => {
    if (!editingId || !editingPackage.title) return;

    const updated = packages.map(p => 
      p.id === editingId ? { ...p, ...editingPackage } as Package : p
    );
    setPackages(updated);
    contentStore.setPackages(updated);
    updatePackages();
    setEditingId(null);
    setEditingPackage({});
    
    // Show success notification
    const notification = document.createElement('div');
    notification.textContent = '✓ Saved! Changes are live.';
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this package?')) {
      const updated = packages.filter(p => p.id !== id);
      setPackages(updated);
      contentStore.setPackages(updated);
      updatePackages();
    }
  };

  const handleAdd = () => {
    const newPackage: Package = {
      id: `package-${Date.now()}`,
      title: 'New Package',
      guestCount: 'Up to 50 Guests',
      price: 0,
      features: []
    };
    const updated = [...packages, newPackage];
    setPackages(updated);
    contentStore.setPackages(updated);
    updatePackages();
    setEditingId(newPackage.id);
    setEditingPackage(newPackage);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingPackage({});
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Manage Packages</h2>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Package
          </button>
        </div>

        <div className="space-y-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              {editingId === pkg.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={editingPackage.title || ''}
                        onChange={(e) => setEditingPackage({ ...editingPackage, title: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Guest Count</label>
                      <input
                        type="text"
                        value={editingPackage.guestCount || ''}
                        onChange={(e) => setEditingPackage({ ...editingPackage, guestCount: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Price ($)</label>
                    <input
                      type="number"
                      value={editingPackage.price || 0}
                      onChange={(e) => setEditingPackage({ ...editingPackage, price: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      <input
                        type="checkbox"
                        checked={editingPackage.recommended || false}
                        onChange={(e) => setEditingPackage({ ...editingPackage, recommended: e.target.checked })}
                        className="mr-2"
                      />
                      Mark as Recommended
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Features (one per line)</label>
                    <textarea
                      value={(editingPackage.features || []).join('\n')}
                      onChange={(e) => setEditingPackage({ ...editingPackage, features: e.target.value.split('\n').filter(f => f.trim()) })}
                      rows={5}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                    >
                      <Save className="h-4 w-4" />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-colors"
                    >
                      <X className="h-4 w-4" />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-800">{pkg.title}</h3>
                      {pkg.recommended && (
                        <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs font-bold rounded">Recommended</span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{pkg.guestCount}</p>
                    <p className="text-lg font-bold text-slate-800 mb-2">${pkg.price}</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(pkg)}
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pkg.id)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPackages;

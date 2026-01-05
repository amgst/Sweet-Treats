import React, { useState, useEffect } from 'react';
import { contentStore } from '../../services/contentStore';
import { Service, ServiceCategory } from '../../types';
import { Plus, Trash2, Save, X } from 'lucide-react';

const AdminServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingService, setEditingService] = useState<Partial<Service>>({});

  useEffect(() => {
    setServices(contentStore.getServices());
  }, []);

  const handleEdit = (service: Service) => {
    setEditingId(service.id);
    setEditingService({ ...service });
  };

  const handleSave = () => {
    if (!editingId || !editingService.title) return;

    const updated = services.map(s => 
      s.id === editingId ? { ...s, ...editingService } as Service : s
    );
    setServices(updated);
    contentStore.setServices(updated);
    setEditingId(null);
    setEditingService({});
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      const updated = services.filter(s => s.id !== id);
      setServices(updated);
      contentStore.setServices(updated);
    }
  };

  const handleAdd = () => {
    const newService: Service = {
      id: `service-${Date.now()}`,
      title: 'New Service',
      category: ServiceCategory.CATERING,
      shortDescription: '',
      fullDescription: '',
      priceStart: 0,
      image: '',
      features: []
    };
    const updated = [...services, newService];
    setServices(updated);
    contentStore.setServices(updated);
    setEditingId(newService.id);
    setEditingService(newService);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingService({});
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Manage Services</h2>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Service
          </button>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              {editingId === service.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={editingService.title || ''}
                        onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                      <select
                        value={editingService.category || ''}
                        onChange={(e) => setEditingService({ ...editingService, category: e.target.value as ServiceCategory })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        {Object.values(ServiceCategory).map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Short Description</label>
                    <input
                      type="text"
                      value={editingService.shortDescription || ''}
                      onChange={(e) => setEditingService({ ...editingService, shortDescription: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Description</label>
                    <textarea
                      value={editingService.fullDescription || ''}
                      onChange={(e) => setEditingService({ ...editingService, fullDescription: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Price Start ($)</label>
                      <input
                        type="number"
                        value={editingService.priceStart || 0}
                        onChange={(e) => setEditingService({ ...editingService, priceStart: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
                      <input
                        type="text"
                        value={editingService.image || ''}
                        onChange={(e) => setEditingService({ ...editingService, image: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Features (one per line)</label>
                    <textarea
                      value={(editingService.features || []).join('\n')}
                      onChange={(e) => setEditingService({ ...editingService, features: e.target.value.split('\n').filter(f => f.trim()) })}
                      rows={3}
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
                    <h3 className="font-bold text-slate-800 mb-1">{service.title}</h3>
                    <p className="text-sm text-slate-600 mb-2">{service.shortDescription}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>{service.category}</span>
                      <span>From ${service.priceStart}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(service)}
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
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

export default AdminServices;

import React, { useState, useEffect } from 'react';
import { contentStore } from '../../services/contentStore';
import { Testimonial } from '../../types';
import { Plus, Trash2, Save, X, Star } from 'lucide-react';

const AdminTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Partial<Testimonial>>({});

  useEffect(() => {
    setTestimonials(contentStore.getTestimonials());
  }, []);

  const handleEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial.id);
    setEditingTestimonial({ ...testimonial });
  };

  const handleSave = () => {
    if (!editingId || !editingTestimonial.name) return;

    const updated = testimonials.map(t => 
      t.id === editingId ? { ...t, ...editingTestimonial } as Testimonial : t
    );
    setTestimonials(updated);
    contentStore.setTestimonials(updated);
    setEditingId(null);
    setEditingTestimonial({});
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      const updated = testimonials.filter(t => t.id !== id);
      setTestimonials(updated);
      contentStore.setTestimonials(updated);
    }
  };

  const handleAdd = () => {
    const newTestimonial: Testimonial = {
      id: Date.now(),
      name: 'New Customer',
      role: 'Customer',
      content: '',
      rating: 5
    };
    const updated = [...testimonials, newTestimonial];
    setTestimonials(updated);
    contentStore.setTestimonials(updated);
    setEditingId(newTestimonial.id);
    setEditingTestimonial(newTestimonial);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingTestimonial({});
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Manage Testimonials</h2>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Testimonial
          </button>
        </div>

        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              {editingId === testimonial.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={editingTestimonial.name || ''}
                        onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                      <input
                        type="text"
                        value={editingTestimonial.role || ''}
                        onChange={(e) => setEditingTestimonial({ ...editingTestimonial, role: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
                    <textarea
                      value={editingTestimonial.content || ''}
                      onChange={(e) => setEditingTestimonial({ ...editingTestimonial, content: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Rating (1-5)</label>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={editingTestimonial.rating || 5}
                      onChange={(e) => setEditingTestimonial({ ...editingTestimonial, rating: parseInt(e.target.value) || 5 })}
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
                    <div className="flex items-center gap-1 mb-2 text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} fill="currentColor" className="h-4 w-4" />
                      ))}
                    </div>
                    <p className="text-slate-600 italic mb-2">"{testimonial.content}"</p>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-xs text-pink-500 uppercase tracking-wide">{testimonial.role}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
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

export default AdminTestimonials;

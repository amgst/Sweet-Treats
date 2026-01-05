import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contentStore } from '../services/contentStore';
import { Lock, IceCream } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (contentStore.login(password)) {
      navigate('/admin');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-pink-100 p-4 rounded-full">
              <IceCream className="h-8 w-8 text-pink-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Admin Login</h1>
          <p className="text-slate-600">Enter your password to access the admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-pink-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          <p>Default password: <code className="bg-slate-100 px-2 py-1 rounded">admin</code></p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

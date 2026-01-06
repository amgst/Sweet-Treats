import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contentStore } from '../services/contentStore';
import { useContent } from '../contexts/ContentContext';
import { 
  Settings, 
  IceCream, 
  Package, 
  MessageSquare, 
  Home, 
  Info, 
  Phone, 
  FileText,
  LogOut,
  Save,
  RotateCcw
} from 'lucide-react';
import AdminServices from '../components/admin/AdminServices';
import AdminPackages from '../components/admin/AdminPackages';
import AdminTestimonials from '../components/admin/AdminTestimonials';
import AdminHome from '../components/admin/AdminHome';
import AdminAbout from '../components/admin/AdminAbout';
import AdminContact from '../components/admin/AdminContact';
import AdminFooter from '../components/admin/AdminFooter';

type AdminSection = 'dashboard' | 'services' | 'packages' | 'testimonials' | 'home' | 'about' | 'contact' | 'footer';

const Admin: React.FC = () => {
  const { content } = useContent();
  const [activeSection, setActiveSection] = useState<AdminSection>('dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    contentStore.logout();
    navigate('/admin/login');
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all content to defaults? This cannot be undone.')) {
      contentStore.resetToDefaults();
      alert('Content reset to defaults. Please refresh the page.');
    }
  };

  const menuItems = [
    { id: 'dashboard' as AdminSection, label: 'Dashboard', icon: Settings },
    { id: 'services' as AdminSection, label: 'Services', icon: IceCream },
    { id: 'packages' as AdminSection, label: 'Packages', icon: Package },
    { id: 'testimonials' as AdminSection, label: 'Testimonials', icon: MessageSquare },
    { id: 'home' as AdminSection, label: 'Home Page', icon: Home },
    { id: 'about' as AdminSection, label: 'About Page', icon: Info },
    { id: 'contact' as AdminSection, label: 'Contact Page', icon: Phone },
    { id: 'footer' as AdminSection, label: 'Footer', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Welcome to Admin Panel</h2>
              <p className="text-slate-600 mb-6">
                Manage all your website content from here. Select a section from the sidebar to start editing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-100">
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    {content.services.length}
                  </div>
                  <div className="text-slate-600">Services</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {content.packages.length}
                  </div>
                  <div className="text-slate-600">Packages</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {content.testimonials.length}
                  </div>
                  <div className="text-slate-600">Testimonials</div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important</h3>
                <p className="text-sm text-yellow-700">
                  All changes are saved automatically to your browser's local storage. 
                  To persist changes across devices, you'll need to export/import the content data.
                </p>
              </div>
            </div>
          </div>
        );
      case 'services':
        return <AdminServices />;
      case 'packages':
        return <AdminPackages />;
      case 'testimonials':
        return <AdminTestimonials />;
      case 'home':
        return <AdminHome />;
      case 'about':
        return <AdminAbout />;
      case 'contact':
        return <AdminContact />;
      case 'footer':
        return <AdminFooter />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IceCream className="h-8 w-8 text-pink-500" />
              <h1 className="text-2xl font-bold text-slate-800">Admin Panel</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-800 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Reset to Defaults
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2">
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-pink-500 text-white'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;


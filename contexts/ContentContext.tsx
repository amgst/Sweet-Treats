import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { contentStore, SiteContent } from '../services/contentStore';

interface ContentContextType {
  content: SiteContent;
  refreshContent: () => void;
  updateServices: () => void;
  updatePackages: () => void;
  updateTestimonials: () => void;
  updateHome: () => void;
  updateAbout: () => void;
  updateContact: () => void;
  updateFooter: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(contentStore.getContent());

  const refreshContent = () => {
    setContent({ ...contentStore.getContent() });
  };

  const updateServices = () => {
    setContent(prev => ({ ...prev, services: contentStore.getServices() }));
  };

  const updatePackages = () => {
    setContent(prev => ({ ...prev, packages: contentStore.getPackages() }));
  };

  const updateTestimonials = () => {
    setContent(prev => ({ ...prev, testimonials: contentStore.getTestimonials() }));
  };

  const updateHome = () => {
    setContent(prev => ({ ...prev, home: contentStore.getHomeContent() }));
  };

  const updateAbout = () => {
    setContent(prev => ({ ...prev, about: contentStore.getAboutContent() }));
  };

  const updateContact = () => {
    setContent(prev => ({ ...prev, contact: contentStore.getContactContent() }));
  };

  const updateFooter = () => {
    setContent(prev => ({ ...prev, footer: contentStore.getFooterContent() }));
  };

  // Listen for storage changes (for cross-tab updates)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'sweettreats_content') {
        refreshContent();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <ContentContext.Provider
      value={{
        content,
        refreshContent,
        updateServices,
        updatePackages,
        updateTestimonials,
        updateHome,
        updateAbout,
        updateContact,
        updateFooter,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};


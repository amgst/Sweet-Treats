import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';

// ScrollToTop component to handle scrolling on route change
const ScrollToTop = () => {
    // In React Router v6.4+ we might use ScrollRestoration but for simple HashRouter usage:
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [window.location.hash]); // Listen to hash changes
    return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

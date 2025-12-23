import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Barcelona from './pages/Barcelona';
import Lille from './pages/Lille';
import Metz from './pages/Metz';
import Nantes from './pages/Nantes';
import Lyon from './pages/Lyon';
import Montpellier from './pages/Montpellier';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import { I18nProvider, useI18n } from './i18n';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t.metadata.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', t.metadata.description);
    }
  }, [t]);

  return (
    <HashRouter>
      <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
          <Header />
          <main className="flex-grow pt-28 md:pt-32">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/barcelona" element={<Barcelona />} />
            <Route path="/lille" element={<Lille />} />
            <Route path="/metz" element={<Metz />} />
            <Route path="/nantes" element={<Nantes />} />
            <Route path="/lyon" element={<Lyon />} />
            <Route path="/montpellier" element={<Montpellier />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

const App: React.FC = () => {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
};

export default App;

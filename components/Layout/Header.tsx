import React, { useEffect, useState } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, ShieldCheck, X, Mail, Search } from 'lucide-react';
import { useI18n } from '../../i18n';
import { Locale } from '../../types';
import { COMPANY_NAME, MAIN_BRANCH, NAV_LINKS, SERVICES } from '../../translations';
import logo from '../../src/logo.png';
import menuBg from '../../src/vitrine et facades.png';
import menuBgAccent from '../../src/rideaux metalliques icon.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setSearchTerm('');
  }, [location]);

  const searchItems = React.useMemo(() => {
    const navItems = NAV_LINKS[locale].map((link) => ({
      label: link.label,
      description: t.footer.navigationTitle,
      path: link.path,
    }));
    const services = SERVICES[locale].map((service) => ({
      label: service.title,
      description: t.footer.servicesTitle,
      path: '/services',
    }));
    const extras = [
      { label: t.footer.legal, description: 'Informations légales', path: '/legal' },
      { label: t.footer.privacy, description: 'Politique et données', path: '/privacy' },
      { label: t.header.quote, description: 'Contact', path: '/contact' },
    ];
    return [...navItems, ...services, ...extras];
  }, [locale, t]);

  const filteredResults = React.useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const base = term
      ? searchItems.filter(
          (item) =>
            item.label.toLowerCase().includes(term) ||
            (item.description && item.description.toLowerCase().includes(term)),
        )
      : searchItems;
    return base.slice(0, 8);
  }, [searchItems, searchTerm]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      {/* Combined bar */}
      <div className="bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary-500 p-2.5 rounded-lg group-hover:bg-primary-600 transition-colors">
              <img src={logo} alt={`${COMPANY_NAME} logo`} className="h-10 w-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold leading-none tracking-tight">{COMPANY_NAME}</span>
              <span className="text-[11px] md:text-xs text-white/80 font-medium tracking-wider">
                {t.header.subtitle.toUpperCase()}
              </span>
            </div>
          </Link>

          {/* Inline search */}
          <div className="relative flex-1 hidden lg:block">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={locale === 'es' ? 'Buscar un servicio o página' : 'Rechercher un service ou une page'}
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-white/30 bg-white/15 text-white placeholder-white/60 focus:ring-2 focus:ring-white/60 focus:outline-none transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
            {searchTerm && (
              <div className="absolute mt-2 w-full bg-white text-gray-900 rounded-xl shadow-2xl border border-gray-100 max-h-72 overflow-y-auto z-10">
                {filteredResults.length ? (
                  filteredResults.map((item) => (
                    <Link
                      key={`${item.path}-${item.label}`}
                      to={item.path}
                      onClick={() => setSearchTerm('')}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500">Aucun résultat</div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center flex-wrap gap-3 justify-end">
            <div className="hidden md:flex items-center gap-2">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <ShieldCheck className="h-4 w-4" />
                {t.header.parisLabel}
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <ShieldCheck className="h-4 w-4" />
                {t.header.barcelonaLabel}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 border border-white/20 rounded-full p-1 bg-white/10">
              {(['fr', 'es'] as Locale[]).map((lng) => (
                <button
                  key={lng}
                  onClick={() => setLocale(lng)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                    locale === lng ? 'bg-white text-secondary-900' : 'text-white hover:bg-white/20'
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/30 bg-white/10 text-white font-semibold hover:bg-white/20 transition-all"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Full overlay menu */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ease-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-secondary-900/70 backdrop-blur-sm" />
      </div>
      <div
        className={`fixed inset-y-0 right-0 z-50 flex items-stretch justify-end transition-[transform,opacity] duration-500 ease-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="relative w-[92%] max-w-6xl h-full bg-secondary-900 text-white rounded-l-3xl shadow-2xl border-l-4 border-primary-500 overflow-hidden overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-primary-500/60">
            <div className="flex items-center gap-3">
              <div className="bg-primary-500 p-2.5 rounded-lg">
                <img src={logo} alt={`${COMPANY_NAME} logo`} className="h-10 w-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none tracking-tight">{COMPANY_NAME}</span>
                <span className="text-xs text-primary-100 font-medium tracking-wider">
                  {t.header.subtitle.toUpperCase()}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-primary-100 hover:bg-white/10 transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-6 pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-300" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={locale === 'es' ? 'Buscar un servicio o p?gina' : 'Rechercher un service ou une page'}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary-500/40 shadow-inner bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-primary-300 tracking-wide uppercase border-b border-primary-500/60 pb-1">
                Navigation
              </h3>
              <div className="space-y-2">
                {filteredResults.map((item) => (
                  <Link
                    key={`${item.path}-${item.label}`}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setSearchTerm('');
                    }}
                    className="group relative block px-4 py-3 rounded-xl text-base font-semibold transition-all text-white hover:bg-white/10 hover:shadow-md"
                  >
                    <span className="inline-flex items-center gap-2 transition-transform duration-200 group-hover:scale-105">
                      {item.label}
                    </span>
                    <span className="block text-xs text-primary-100">{item.description}</span>
                    <span className="pointer-events-none absolute left-4 right-4 bottom-2 h-0.5 origin-center scale-x-0 bg-primary-400 transition-transform duration-200 group-hover:scale-x-100" />
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="group inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-black px-4 py-3 rounded-xl font-bold shadow-md transition-all w-full"
              >
                <span className="transition-transform duration-200 group-hover:scale-105">{t.header.quote}</span>
                <span className="pointer-events-none block h-0.5 w-16 origin-center scale-x-0 bg-secondary-900/60 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-primary-300 tracking-wide uppercase border-b border-primary-500/60 pb-1">
                {t.footer.servicesTitle}
              </h3>
              <ul className="space-y-2">
                {SERVICES[locale].slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <Link
                      to="/services"
                      onClick={() => setIsOpen(false)}
                      className="group block px-4 py-3 rounded-xl text-base font-semibold text-white hover:bg-white/10 hover:shadow-md transition-all"
                    >
                      <span className="transition-transform duration-200 group-hover:scale-105">{service.title}</span>
                      <span className="pointer-events-none block h-0.5 w-14 origin-left scale-x-0 bg-primary-400 transition-transform duration-200 group-hover:scale-x-100 mt-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-primary-300 tracking-wide uppercase border-b border-primary-500/60 pb-1">
                {t.footer.navigationTitle}
              </h3>
              <div className="space-y-2">
                <Link
                  to="/legal"
                  onClick={() => setIsOpen(false)}
                  className="group block px-4 py-3 rounded-xl text-base font-semibold text-white hover:bg-white/10 hover:shadow-md transition-all"
                >
                  <span className="transition-transform duration-200 group-hover:scale-105">{t.footer.legal}</span>
                  <span className="pointer-events-none block h-0.5 w-12 origin-left scale-x-0 bg-primary-400 transition-transform duration-200 group-hover:scale-x-100 mt-1" />
                </Link>
                <Link
                  to="/privacy"
                  onClick={() => setIsOpen(false)}
                  className="group block px-4 py-3 rounded-xl text-base font-semibold text-white hover:bg-white/10 hover:shadow-md transition-all"
                >
                  <span className="transition-transform duration-200 group-hover:scale-105">{t.footer.privacy}</span>
                  <span className="pointer-events-none block h-0.5 w-12 origin-left scale-x-0 bg-primary-400 transition-transform duration-200 group-hover:scale-x-100 mt-1" />
                </Link>
              </div>
              <div className="px-4 py-4 rounded-xl bg-white/5 border border-primary-500/40 space-y-2 shadow-inner">
                <p className="text-sm text-primary-100 leading-relaxed">{t.footer.description}</p>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Mail className="h-4 w-4 text-primary-300" />
                  <a href={`mailto:${MAIN_BRANCH.email}`} className="hover:text-primary-300 transition-colors">
                    {MAIN_BRANCH.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-primary-500/40 pt-3">
                {(['fr', 'es'] as Locale[]).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => setLocale(lng)}
                    className={`flex-1 px-3 py-2 text-sm font-semibold rounded-lg border transition-all ${
                      locale === lng
                        ? 'border-amber-500 text-primary-300 bg-white/10 shadow-inner'
                        : 'border-white/20 text-white hover:bg-white/5 hover:shadow-sm'
                    }`}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
</header>
  );
};

export default Header;

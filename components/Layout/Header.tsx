import React, { useEffect, useState } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, ShieldCheck, X } from 'lucide-react';
import { useI18n } from '../../i18n';
import { Locale } from '../../types';
import { COMPANY_NAME, MAIN_BRANCH, NAV_LINKS } from '../../translations';
import logo from '../../src/logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* Utility bar */}
      <div className="bg-secondary-900 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <ShieldCheck className="h-4 w-4" />
              {t.header.parisLabel}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <ShieldCheck className="h-4 w-4" />
              {t.header.barcelonaLabel}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${MAIN_BRANCH.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 font-semibold hover:text-primary-200 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {t.header.callUs}: {MAIN_BRANCH.phone}
            </a>
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
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary-500 p-2.5 rounded-lg group-hover:bg-primary-600 transition-colors">
              <img src={logo} alt={`${COMPANY_NAME} logo`} className="h-10 w-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-secondary-900 leading-none tracking-tight">{COMPANY_NAME}</span>
              <span className="text-xs text-gray-500 font-medium tracking-wider">{t.header.subtitle.toUpperCase()}</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS[locale].map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary-500 ${
                    isActive ? 'text-primary-600 font-semibold' : 'text-gray-700'
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${MAIN_BRANCH.phone.replace(/\s/g, '')}`}
              className="hidden lg:flex items-center gap-2 text-secondary-900 font-semibold hover:text-primary-500 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{MAIN_BRANCH.phone}</span>
            </a>

            <Link
              to="/contact"
              className="hidden md:inline-flex bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary-500/30 text-sm"
            >
              {t.header.quote}
            </Link>

            <div className="hidden md:flex items-center gap-2 border border-gray-200 rounded-full p-1 bg-white">
              {(['fr', 'es'] as Locale[]).map((lng) => (
                <button
                  key={lng}
                  onClick={() => setLocale(lng)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                    locale === lng ? 'bg-primary-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-secondary-900 hover:bg-gray-100 focus:outline-none"
              aria-label={locale === 'es' ? 'Menú principal' : 'Menu principal'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS[locale].map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
              <a
                href={`tel:${MAIN_BRANCH.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 px-3 py-3 text-secondary-900 font-semibold"
              >
                <div className="bg-gray-100 p-2 rounded-full">
                  <Phone className="h-4 w-4" />
                </div>
                {MAIN_BRANCH.phone}
              </a>
              <Link
                to="/contact"
                className="block w-full text-center bg-primary-500 text-white px-4 py-3 rounded-lg font-bold shadow-md"
              >
                {t.header.mobileQuote}
              </Link>
              <div className="flex items-center gap-2">
                {(['fr', 'es'] as Locale[]).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => setLocale(lng)}
                    className={`flex-1 px-3 py-2 text-sm font-semibold rounded-lg border ${
                      locale === lng
                        ? 'border-primary-500 text-primary-600 bg-primary-50'
                        : 'border-gray-200 text-gray-700'
                    }`}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

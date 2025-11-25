import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_NAME, MAIN_BRANCH, NAV_LINKS, SERVICES } from '../../translations';
import { useI18n } from '../../i18n';

const Footer: React.FC = () => {
  const { locale, t } = useI18n();
  const navLinks = NAV_LINKS[locale].filter((link) => link.path !== '/');
  const services = SERVICES[locale].slice(0, 5);

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">{t.footer.description}</p>
            <div className="flex gap-4">
              <a href="#" className="bg-secondary-800 p-2 rounded-full hover:bg-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary-800 p-2 rounded-full hover:bg-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary-800 p-2 rounded-full hover:bg-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary-500 inline-block pb-1">
              {t.footer.navigationTitle}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary-500 inline-block pb-1">{t.footer.servicesTitle}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="text-gray-300 hover:text-white text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary-500 inline-block pb-1">{t.footer.contactTitle}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
                <span className="text-gray-300">{MAIN_BRANCH.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                <a href={`tel:${MAIN_BRANCH.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white">
                  {MAIN_BRANCH.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                <a href={`mailto:${MAIN_BRANCH.email}`} className="text-gray-300 hover:text-white">
                  {MAIN_BRANCH.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">
              {t.footer.legal}
            </Link>
            <Link to="/privacy" className="hover:text-white">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

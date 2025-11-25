import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { SERVICES } from '../translations';
import { useI18n } from '../i18n';

const Services: React.FC = () => {
  const { locale, t } = useI18n();
  const services = SERVICES[locale];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">{t.servicesPage.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.servicesPage.intro}</p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-secondary-900">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.fullDescription}</p>

                <h3 className="font-semibold text-secondary-900 mb-4 uppercase tracking-wider text-sm">
                  {t.servicesPage.keyBenefits}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="bg-primary-50 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-block bg-secondary-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-800 transition-colors"
                >
                  {t.servicesPage.cta}
                </Link>
              </div>

              <div className="w-full lg:w-1/2 h-80 rounded-xl overflow-hidden shadow-lg bg-gray-200 relative group">
                <img
                  src={service.imageSrc || `https://picsum.photos/seed/${service.id}/800/600`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-primary-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">{t.home.ctaTitle}</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">{t.home.ctaDescription}</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            {t.home.ctaContact}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

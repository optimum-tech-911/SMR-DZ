import React from 'react';
import { Building2, Globe2, PhoneCall, ShieldCheck, Truck } from 'lucide-react';
import { useI18n } from '../i18n';
import { SPAIN_BRANCH } from '../translations';

const Spain: React.FC = () => {
  const { t, locale } = useI18n();

  return (
    <div className="pt-24 pb-16 bg-white">
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary-900 to-secondary-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,#fff_0,transparent_40%)] translate-x-[-10%] translate-y-[-10%]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <ShieldCheck className="h-4 w-4" />
              <span>SMR metallique DZ · Spain</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              {t.branch.heroTitle}
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl">{t.branch.heroDescription}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SPAIN_BRANCH.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-primary-500/30"
              >
                <PhoneCall className="h-5 w-5" />
                {SPAIN_BRANCH.phone}
              </a>
              <a
                href={`mailto:${SPAIN_BRANCH.email}`}
                className="inline-flex items-center gap-2 bg-white text-secondary-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                {SPAIN_BRANCH.email}
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[420px] bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md shadow-xl">
            <div className="flex items-start gap-4 text-white">
              <div className="bg-white/15 p-3 rounded-xl">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{t.branch.contactTitle}</h3>
                <p className="text-blue-100 mb-4">{t.branch.contactDescription}</p>
                <ul className="space-y-2 text-sm">
                  <li><strong>{locale === 'es' ? 'Spain' : 'Espagne'} :</strong> {SPAIN_BRANCH.address}</li>
                  <li><strong>{locale === 'es' ? 'Tel :' : 'Tél :'}</strong> {SPAIN_BRANCH.phone}</li>
                  <li><strong>Email :</strong> {SPAIN_BRANCH.email}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.branch.cards.map((card, idx) => {
            const Icon = [Globe2, ShieldCheck, Truck][idx] || ShieldCheck;
            return (
              <div
                key={card.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-primary-600 text-white rounded-3xl p-10 lg:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t.branch.contactTitle}</h2>
              <p className="text-primary-100 mb-6">{t.branch.contactDescription}</p>
              <ul className="space-y-3 text-primary-50">
                {t.branch.logistics.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white text-secondary-900 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <PhoneCall className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">
                    {locale === 'es' ? 'Spain' : 'Espagne'}
                  </p>
                  <p className="text-2xl font-bold">{SPAIN_BRANCH.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Globe2 className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">Email</p>
                  <p className="text-lg font-semibold">{SPAIN_BRANCH.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">
                    {locale === 'es' ? 'Dirección' : 'Adresse'}
                  </p>
                  <p className="text-lg font-semibold">{SPAIN_BRANCH.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spain;

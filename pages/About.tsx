import React from 'react';
import { Shield, Users, Award, MapPin } from 'lucide-react';
import { useI18n } from '../i18n';
import { MAIN_BRANCH, SPAIN_BRANCH } from '../translations';
import aboutHero from '../src/service 3.jfif';

const About: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">{t.about.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-orange-50 rounded-3xl blur-3xl -z-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/80 backdrop-blur">
              <img
                src={aboutHero}
                alt="Techniciens au travail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-8 rounded-xl shadow-lg hidden md:block">
              <span className="block text-4xl font-bold mb-1">10+</span>
              <span className="text-sm font-medium opacity-90">{t.about.experienceLabel}</span>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary-900">{t.about.historyTitle}</h2>
            {t.about.paragraphs.map((paragraph) => (
              <div
                key={paragraph}
                className="p-5 rounded-2xl bg-white shadow-md border border-gray-100 leading-relaxed text-gray-700"
              >
                {paragraph}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 rounded-3xl p-8 md:p-12 mb-20 text-white shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-12">{t.about.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.values.map((value, idx) => {
              const Icon = [Shield, Users, Award][idx] || Shield;
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center text-center bg-white/10 rounded-2xl p-6 border border-white/10 shadow-lg"
                >
                  <div className="bg-white p-4 rounded-full shadow-md mb-4 text-secondary-900">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{value.title}</h3>
                  <p className="text-primary-50 text-sm">{value.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">{t.about.zoneTitle}</h2>
          <div className="inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-medium shadow-sm">
            <MapPin className="h-5 w-5" />
            <span>{t.about.zoneBadge}</span>
          </div>
          <p className="mt-4 text-gray-500">{t.about.zoneNote}</p>
          <div className="mt-6 text-sm text-gray-600 flex flex-col sm:flex-row gap-3 justify-center">
            <span className="px-3 py-2 rounded-full bg-white shadow border border-gray-100">Paris : {MAIN_BRANCH.address}</span>
            <span className="px-3 py-2 rounded-full bg-white shadow border border-gray-100">Barcelone : {SPAIN_BRANCH.address}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Agence de Paris</p>
                <h3 className="text-2xl font-bold text-secondary-900">Île-de-France</h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold">
                Paris
              </div>
            </div>
            <div className="aspect-[4/3] bg-gray-200">
              <iframe
                title="Agence de Paris"
                src="https://www.google.com/maps?q=Paris,France&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Agence de Barcelone</p>
                <h3 className="text-2xl font-bold text-secondary-900">Catalogne</h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold">
                Barcelone
              </div>
            </div>
            <div className="aspect-[4/3] bg-gray-200">
              <iframe
                title="Agence de Barcelone"
                src="https://www.google.com/maps?q=Barcelona,Spain&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

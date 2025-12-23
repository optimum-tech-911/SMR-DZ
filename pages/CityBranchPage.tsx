import React from 'react';
import {
  Building2,
  Clock4,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from 'lucide-react';
import { useI18n } from '../i18n';
import { Locale } from '../types';
import { SERVICES } from '../translations';

type Copy = Record<Locale, string>;

type CityService = {
  title: Copy;
  description: Copy;
  icon: React.ComponentType<{ className?: string }>;
};

export type CityBranchConfig = {
  city: string;
  region: string;
  phone: string;
  email: string;
  address: string;
  tagline: Copy;
  intro: Copy;
  bureauNote: Copy;
  coverage: Copy;
  response: Copy;
  services: CityService[];
  quickFacts: Copy[];
};

const formatTelHref = (phone: string) => phone.replace(/[\s.]/g, '');

const CityBranchPage: React.FC<{ config: CityBranchConfig }> = ({ config }) => {
  const { locale } = useI18n();
  const t = (copy: Copy) => copy[locale];
  const servicePreview = SERVICES[locale].slice(0, 3);

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary-900 to-secondary-700 text-white">
        <div className="absolute inset-0 opacity-15">
          <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,#fff_0,transparent_40%)] translate-x-[-10%] translate-y-[-10%]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full text-sm font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span>{config.city} - France</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{config.city}</h1>
            <p className="text-lg text-blue-100">{t(config.tagline)}</p>
            <p className="text-blue-100/90 max-w-2xl">{t(config.intro)}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${formatTelHref(config.phone)}`}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-primary-500/30"
              >
                <PhoneCall className="h-5 w-5" />
                {config.phone}
              </a>
              <a
                href={`mailto:${config.email}`}
                className="inline-flex items-center gap-2 bg-white text-secondary-900 hover:bg-gray-100 px-5 py-3 rounded-lg font-semibold transition-all"
              >
                <Mail className="h-5 w-5" />
                {config.email}
              </a>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md shadow-xl space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-white/15 p-3 rounded-xl">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase text-blue-100 font-semibold">{t(config.coverage)}</p>
                <h3 className="text-xl font-bold mb-1">{config.address}</h3>
                <p className="text-blue-100 text-sm">{t(config.bureauNote)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-blue-50">
              <Clock4 className="h-5 w-5" />
              <span className="text-sm font-semibold">{t(config.response)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-3">
            <PhoneCall className="h-5 w-5 text-primary-600" />
            <div>
              <p className="text-sm text-gray-500 uppercase font-semibold">Hotline</p>
              <p className="text-lg font-bold text-secondary-900">{config.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary-600" />
            <div>
              <p className="text-sm text-gray-500 uppercase font-semibold">Email</p>
              <p className="text-lg font-semibold text-secondary-900">{config.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary-600" />
            <div>
              <p className="text-sm text-gray-500 uppercase font-semibold">Adresse bureau</p>
              <p className="text-base font-semibold text-secondary-900">{config.address}</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary-900 text-white rounded-2xl shadow-lg p-6 space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff0f_0,transparent_45%)] pointer-events-none" />
          <div className="relative space-y-2">
            <p className="text-sm text-primary-100 uppercase font-semibold">Operations</p>
            <h3 className="text-2xl font-bold leading-tight">{config.city} - {config.region}</h3>
            <p className="text-primary-50 text-sm">{t(config.coverage)}</p>
          </div>
          <div className="relative flex items-center gap-3 text-primary-50">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm font-semibold">{t(config.response)}</span>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-3">
          <h4 className="text-lg font-bold text-secondary-900">Infos cle</h4>
          <ul className="space-y-2">
            {config.quickFacts.map((fact) => (
              <li key={fact.fr} className="flex items-start gap-2 text-gray-700">
                <Sparkles className="h-4 w-4 text-primary-600 mt-0.5" />
                <span className="text-sm">{t(fact)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-sm font-semibold text-primary-600 uppercase">Services locaux</p>
            <h2 className="text-3xl font-bold text-secondary-900">Interventions prioritaires</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
            <Truck className="h-4 w-4" />
            <span>Equipe mobile basee a {config.city}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title.fr}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="h-12 w-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{t(service.title)}</h3>
                <p className="text-gray-600 text-sm">{t(service.description)}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-semibold text-primary-600 uppercase">Services France</p>
              <h3 className="text-2xl font-bold text-secondary-900">Nos domaines recurrents</h3>
              <p className="text-gray-600 text-sm">
                Securisation, vitrerie, maintenance et motorisation sur tout le reseau SRM metal DZ.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ShieldCheck className="h-4 w-4 text-primary-600" />
              <span>Materiels conformes et garanties</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {servicePreview.map((service) => (
              <div key={service.id} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-inner">
                <p className="text-xs font-semibold text-primary-600 uppercase mb-2">{service.title}</p>
                <p className="text-sm text-gray-700">{service.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-600 text-white rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase font-semibold text-primary-100">Coordination</p>
            <h3 className="text-3xl font-bold">Planifier une intervention a {config.city}</h3>
            <p className="text-primary-50">
              Hotline, devis express et presence terrain pour vos rideaux metalliques, serrures, vitrines et portails.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${formatTelHref(config.phone)}`}
              className="inline-flex items-center gap-2 bg-white text-secondary-900 hover:bg-gray-100 px-5 py-3 rounded-lg font-semibold shadow-lg"
            >
              <PhoneCall className="h-5 w-5" />
              {config.phone}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary-900 text-white hover:bg-secondary-800 px-5 py-3 rounded-lg font-semibold border border-white/20"
            >
              <Mail className="h-5 w-5" />
              Formulaire de contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityBranchPage;

import React from 'react';
import { Building2, Globe2, PhoneCall, ShieldCheck, Truck, PaintBucket, Wrench } from 'lucide-react';
import { useI18n } from '../i18n';
import { SPAIN_BRANCH, SERVICES } from '../translations';
import peintureImg from '../src/chantier-peinture.jpg';
import plomberieImg from '../src/chantier-plomberie.jpg';
import electriciteImg from '../src/chantier-electricite.jpg';
import soudureImg from '../src/chantier-soudure.jpg';
import maconnerieImg from '../src/chantier-maconnerie.jpg';
import carrelageImg from '../src/chantier-carrelage.jpg';

const Spain: React.FC = () => {
  const { t, locale } = useI18n();
  const chantierServices = [
    {
      titleFr: 'Peinture & Finitions',
      titleEs: 'Pintura y acabados',
      descFr: 'Mise en peinture, enduits décoratifs et finitions soignées pour commerces et logements.',
      descEs: 'Pintura, acabados y revestimientos decorativos para locales y viviendas.',
      image: peintureImg,
      icon: PaintBucket,
    },
    {
      titleFr: 'Plomberie & Sanitaire',
      titleEs: 'Fontanería y sanitarios',
      descFr: 'Interventions rapides, installations neuves et rénovations complètes.',
      descEs: 'Instalaciones nuevas, reparaciones y reformas de fontanería.',
      image: plomberieImg,
      icon: Wrench,
    },
    {
      titleFr: 'Électricité & Éclairage',
      titleEs: 'Electricidad y iluminación',
      descFr: 'Mises aux normes, éclairage LED et dépannage en urgence.',
      descEs: 'Puestas al día, iluminación LED y urgencias eléctricas.',
      image: electriciteImg,
      icon: Globe2,
    },
    {
      titleFr: 'Soudure & Métallerie',
      titleEs: 'Soldadura y metalistería',
      descFr: 'Renforts métalliques, structures légères et réparations sur mesure.',
      descEs: 'Refuerzos metálicos, estructuras ligeras y reparaciones a medida.',
      image: soudureImg,
      icon: ShieldCheck,
    },
    {
      titleFr: 'Maçonnerie & Cloisons',
      titleEs: 'Albañilería y tabiquería',
      descFr: 'Ouvertures, cloisons, chapes et travaux structurels légers.',
      descEs: 'Aberturas, tabiques, soleras y trabajos estructurales ligeros.',
      image: maconnerieImg,
      icon: Building2,
    },
    {
      titleFr: 'Carrelage & Sols',
      titleEs: 'Azulejos y suelos',
      descFr: 'Pose de carrelage, faïence et revêtements de sol résistants.',
      descEs: 'Colocación de azulejos, gres y pavimentos resistentes.',
      image: carrelageImg,
      icon: Truck,
    },
  ];

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
              <span>SRM metal DZ · Spain</span>
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-secondary-50 border border-secondary-100 rounded-3xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-2">
                {locale === 'es'
                  ? 'Con SRM metal DZ España hacemos todos los servicios de Francia y más'
                  : "Avec SRM metal DZ Espagne, tous les services de France et plus encore"}
              </h2>
              <p className="text-gray-600">
                {locale === 'es'
                  ? 'Toda la gama de cierres, seguridad y mantenimiento disponible en la agencia española, avec des renforts locales.'
                  : 'Toute la gamme de fermetures, sécurité et maintenance disponible depuis l’agence Espagne, avec des renforts locaux.'}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES[locale].slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:-translate-y-1 transition-transform"
              >
                {service.imageSrc && (
                  <img src={service.imageSrc} alt={service.title} className="h-36 w-full object-cover" />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{service.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-3">
            {locale === 'es' ? 'Servicios de obra y construcción' : 'Services de chantier et bâtiment'}
          </h2>
          <p className="text-gray-600 mb-6">
            {locale === 'es'
              ? 'Un equipo multidisciplinario para todos los trabajos de obra, renovación y acabados.'
              : 'Une équipe pluridisciplinaire pour tous vos travaux de chantier, rénovation et finitions.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chantierServices.map((item) => {
              const Icon = item.icon;
              const title = locale === 'es' ? item.titleEs : item.titleFr;
              const desc = locale === 'es' ? item.descEs : item.descFr;
              return (
                <div
                  key={title}
                  className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:-translate-y-1 transition-transform"
                >
                  <img src={item.image} alt={title} className="h-40 w-full object-cover" />
                  <div className="p-5 space-y-2">
                    <div className="h-12 w-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900">{title}</h3>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
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

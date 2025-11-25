import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PhoneCall, Clock, ShieldCheck } from 'lucide-react';
import ServiceCard from '../components/UI/ServiceCard';
import { SERVICES, TESTIMONIALS, MAIN_BRANCH } from '../translations';
import { useI18n } from '../i18n';

const Home: React.FC = () => {
  const { locale, t } = useI18n();
  const services = SERVICES[locale];
  const testimonials = TESTIMONIALS[locale];

  return (
    <div className="flex flex-col">
      <section className="relative h-[85vh] flex items-center bg-secondary-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={services[0]?.imageSrc || 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2070'}
            alt="Rideau métallique moderne magasin"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-500/20 text-primary-400 font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-primary-500/30">
              {t.home.heroTag}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {t.home.heroTitle} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-300">
                {t.home.heroHighlight}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">{t.home.heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary-500/40"
              >
                {t.home.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                {t.home.secondaryCta}
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-gray-300">
              {t.home.badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary-500 h-5 w-5" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">{t.home.whyTitle}</h2>
            <p className="text-gray-600 text-lg">{t.home.whyDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.home.whyCards.map((card, index) => {
              const Icon = [Clock, ShieldCheck, PhoneCall][index] || ShieldCheck;
              return (
                <div
                  key={card.title}
                  className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-secondary-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-2">{t.home.servicesTitle}</h2>
              <p className="text-gray-600">{t.home.servicesSubtitle}</p>
            </div>
            <Link
              to="/services"
              className="hidden md:flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
            >
              {t.home.servicesCta} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/services"
              className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
            >
              {t.home.servicesCta} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16">{t.home.testimonialsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-secondary-800 p-8 rounded-xl border border-secondary-700">
                <div className="flex text-primary-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <span className="text-sm text-gray-400">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.home.ctaTitle}</h2>
          <p className="text-primary-100 text-lg mb-10">{t.home.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${MAIN_BRANCH.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              {MAIN_BRANCH.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-secondary-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-800 transition-colors shadow-lg"
            >
              {t.home.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

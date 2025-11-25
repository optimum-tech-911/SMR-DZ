import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { MAIN_BRANCH, SPAIN_BRANCH } from '../translations';
import { useI18n } from '../i18n';

const Contact: React.FC = () => {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: t.contact.serviceOptions[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setTimeout(() => setSubmitted(true), 600);
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.contact.intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-secondary-900 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">{t.contact.infoTitle}</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary-800 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200">{t.contact.phoneLabel}</h3>
                    <p className="mt-1 text-lg font-bold">{MAIN_BRANCH.phone}</p>
                    <p className="text-sm text-gray-400 mt-1">{t.contact.phoneNote}</p>
                    <p className="text-xs text-primary-400 font-bold uppercase mt-2">{t.contact.scheduleNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary-800 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200">{t.contact.emailLabel}</h3>
                    <p className="mt-1 text-lg">{MAIN_BRANCH.email}</p>
                    <p className="text-sm text-gray-400 mt-1">{t.contact.emailNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary-800 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200">{t.contact.addressLabel}</h3>
                    <p className="mt-1 text-lg">{MAIN_BRANCH.address}</p>
                    <p className="text-sm text-gray-400 mt-1">{SPAIN_BRANCH.city} · {SPAIN_BRANCH.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-secondary-800 rounded-xl p-6 border border-secondary-700">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-primary-500" />
                  <h3 className="font-bold">{t.contact.hoursTitle}</h3>
                </div>
                <ul className="text-gray-300 space-y-1 text-sm">
                  {t.contact.hours.map((hour) => (
                    <li key={hour.label} className="flex justify-between">
                      <span>{hour.label}</span> <span>{hour.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.contact.successTitle}</h2>
                <p className="text-gray-600 mb-8">{t.contact.successDescription}</p>
                <button onClick={() => setSubmitted(false)} className="text-primary-600 font-bold hover:underline">
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">{t.contact.formTitle}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.nameLabel}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.phoneLabel}</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.phonePlaceholder}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.serviceLabel}</label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    {t.contact.serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.messageLabel}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white font-bold py-4 rounded-lg hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/30"
                >
                  {t.contact.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 bg-gray-200 rounded-3xl h-96 w-full flex items-center justify-center relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000"
            alt="Carte Paris Barcelone"
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg text-center">
            <MapPin className="h-10 w-10 text-primary-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900">{t.contact.mapTitle}</h3>
            <p className="text-gray-600">{t.contact.mapSubtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

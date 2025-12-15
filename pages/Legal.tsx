import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useI18n } from '../i18n';

const Legal: React.FC = () => {
  const { t } = useI18n();
  const legal = t.legalPage;

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold">
            <ShieldCheck className="h-4 w-4" />
            {legal.title}
          </div>
          <h1 className="text-4xl font-bold text-secondary-900">{legal.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{legal.intro}</p>
        </header>

        <div className="grid gap-6">
          {legal.sections.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">{section.title}</h2>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                {section.body.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legal;

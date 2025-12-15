import React from 'react';
import { Lock } from 'lucide-react';
import { useI18n } from '../i18n';

const Privacy: React.FC = () => {
  const { t } = useI18n();
  const policy = t.privacyPage;

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-800 rounded-full text-sm font-semibold">
            <Lock className="h-4 w-4" />
            {policy.title}
          </div>
          <h1 className="text-4xl font-bold text-secondary-900">{policy.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{policy.intro}</p>
        </header>

        <div className="grid gap-6">
          {policy.sections.map((section) => (
            <div key={section.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">{section.title}</h2>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                {section.body.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary-500 flex-shrink-0" />
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

export default Privacy;

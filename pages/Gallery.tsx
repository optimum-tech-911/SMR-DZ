import React from 'react';
import { PROJECT_IMAGES } from '../translations';
import { useI18n } from '../i18n';

const Gallery: React.FC = () => {
  const { locale, t } = useI18n();
  const projects = PROJECT_IMAGES[locale];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">{t.gallery.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.gallery.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-[4/3]">
              <img
                src={project.url}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary-400 text-sm font-bold uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

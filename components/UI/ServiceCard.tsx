import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Blinds, Shield, Warehouse, Lock, Wrench, Hammer } from 'lucide-react';
import { ServiceItem } from '../../types';
import { useI18n } from '../../i18n';

interface ServiceCardProps {
  service: ServiceItem;
}

// Icon mapper
const IconMap: Record<string, React.ElementType> = {
  Shutter: Warehouse,
  Blinds: Blinds,
  Glass: Hammer, // Using generic tool for vitrerie/construction if Glass not available in lucide basic set
  Lock: Lock,
  Garage: Warehouse,
  Maintenance: Wrench,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = IconMap[service.iconKey] || Shield;
  const { t } = useI18n();

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group h-full flex flex-col">
      <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300 overflow-hidden">
        {service.iconSrc ? (
          <img src={service.iconSrc} alt={service.title} className="h-10 w-10 object-contain" />
        ) : (
          <Icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
        )}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {service.shortDescription}
      </p>

      <div className="mt-auto">
        <Link 
          to="/services" 
          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:translate-x-1 duration-300"
        >
          {t.common.learnMore}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

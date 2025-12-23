import React from 'react';
import { Clock4, ShieldCheck, Sparkles } from 'lucide-react';
import CityBranchPage, { CityBranchConfig } from './CityBranchPage';

const metzConfig: CityBranchConfig = {
  city: 'Metz',
  region: 'Grand Est',
  phone: '+33 3 87 19 52 40',
  email: 'metz@srm-france.com',
  address: '18 Rue du Pont des Morts, 57000 Metz',
  tagline: {
    fr: 'Support Grand Est pour securiser vos sites sensibles',
    es: 'Soporte Grand Est para asegurar sus sitios sensibles',
  },
  intro: {
    fr: 'Astreinte pour rideaux metalliques, volets roulants et portails industriels sur Metz, Thionville et Luxembourg frontalier.',
    es: 'Guardia para persianas metalicas, enrollables y portones industriales en Metz, Thionville y frontera Luxemburgo.',
  },
  bureauNote: {
    fr: 'Salle technique pour tests de motorisation et pre-assemblage avant pose.',
    es: 'Sala tecnica para pruebas de motorizacion y pre-montaje antes de la instalacion.',
  },
  coverage: {
    fr: 'Metz, Nancy, Thionville, Luxembourg et Moselle sud.',
    es: 'Metz, Nancy, Thionville, Luxemburgo y sur de Mosela.',
  },
  response: {
    fr: 'Astuce depannage apres 18h pour sites critiques, hotline interne.',
    es: 'Guardia de asistencia despues de las 18h para sitios criticos, hotline interna.',
  },
  quickFacts: [
    {
      fr: 'Techniciens habilites travail en hauteur et portail motorise.',
      es: 'Tecnicos habilitados para altura y porton motorizado.',
    },
    {
      fr: 'Partenariat fournisseurs acier et vitrage anti-effraction regionaux.',
      es: 'Socios regionales en acero y vidrio anti intrusiones.',
    },
    {
      fr: 'Reporting clair pour industriels et sites logistiques.',
      es: 'Reportes claros para industriales y centros logisticos.',
    },
  ],
  services: [
    {
      title: { fr: 'Portails et grilles', es: 'Portones y rejas' },
      description: {
        fr: 'Pose et remise en service des portails sectionnels, grilles acier et accessoires de securite.',
        es: 'Instalacion y puesta a punto de portones seccionales, rejas de acero y accesorios de seguridad.',
      },
      icon: ShieldCheck,
    },
    {
      title: { fr: 'Volets roulants', es: 'Enrollables' },
      description: {
        fr: 'Motorisation, changement de tablier et equipement anti-arrachement pour logements et bureaux.',
        es: 'Motorizacion, cambio de lamas y anti levantamiento para viviendas y oficinas.',
      },
      icon: Clock4,
    },
    {
      title: { fr: 'Vitrerie securite', es: 'Vidrio seguridad' },
      description: {
        fr: 'Double vitrage, films securite et calfeutrage apres sinistre.',
        es: 'Doble acristalamiento, films de seguridad y sellado tras siniestro.',
      },
      icon: Sparkles,
    },
  ],
};

const Metz: React.FC = () => {
  return <CityBranchPage config={metzConfig} />;
};

export default Metz;

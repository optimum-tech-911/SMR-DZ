import React from 'react';
import { ShieldCheck, Waves, Wrench } from 'lucide-react';
import CityBranchPage, { CityBranchConfig } from './CityBranchPage';

const montpellierConfig: CityBranchConfig = {
  city: 'Montpellier',
  region: 'Occitanie',
  phone: '+33 4 67 56 24 80',
  email: 'montpellier@srm-france.com',
  address: '14 Boulevard du Jeu de Paume, 34000 Montpellier',
  tagline: {
    fr: 'Bureau mediterraneen pour vos rideaux et stores',
    es: 'Oficina mediterranea para sus persianas y toldos',
  },
  intro: {
    fr: 'Interventions rapides sur Montpellier, Nimes et Sete pour commerces, hotels et residences en bord de mer.',
    es: 'Intervenciones rapidas en Montpellier, Nimes y Sete para comercios, hoteles y residencias costeras.',
  },
  bureauNote: {
    fr: 'Equipe bilingue FR/ES pour vos chantiers saisonniers et maintenance pre-ete.',
    es: 'Equipo bilingue FR/ES para obras de temporada y mantenimiento pre verano.',
  },
  coverage: {
    fr: 'Montpellier, Castelnau, Palavas, Nimes et Sete.',
    es: 'Montpellier, Castelnau, Palavas, Nimes y Sete.',
  },
  response: {
    fr: 'Service depannage 7j/7 en periode estivale, coordination chantiers de nuit.',
    es: 'Servicio de asistencia 7/7 en temporada alta, coordinacion de obra nocturna.',
  },
  quickFacts: [
    {
      fr: 'Solutions anti-corrosion pour facades exposees au sel marin.',
      es: 'Soluciones anticorrosion para fachadas expuestas a salitre.',
    },
    {
      fr: 'Stores bannes, volets roulants solaires et automatisation terrasse.',
      es: 'Toldos, enrollables solares y automatizacion de terrazas.',
    },
    {
      fr: 'Disponibilite renforcee en periode estivale pour hotels et restaurants.',
      es: 'Disponibilidad reforzada en temporada de verano para hoteles y restaurantes.',
    },
  ],
  services: [
    {
      title: { fr: 'Stores et bannes', es: 'Toldos y lonas' },
      description: {
        fr: 'Pose, remplacement de toile et motorisation pour terrasses et facades exposees.',
        es: 'Instalacion, cambio de lona y motorizacion para terrazas y fachadas expuestas.',
      },
      icon: Waves,
    },
    {
      title: { fr: 'Rideaux metalliques', es: 'Persianas metalicas' },
      description: {
        fr: 'Depannage, mise en conformite et upgrades moteurs pour locaux commerciaux.',
        es: 'Asistencia, puesta en normativa y mejoras de motor para locales comerciales.',
      },
      icon: ShieldCheck,
    },
    {
      title: { fr: 'Volets roulants', es: 'Enrollables' },
      description: {
        fr: 'Solutions filaires ou solaires, changement de tablier et fin de course.',
        es: 'Soluciones cableadas o solares, cambio de lamas y ajuste de finales de carrera.',
      },
      icon: Wrench,
    },
  ],
};

const Montpellier: React.FC = () => {
  return <CityBranchPage config={montpellierConfig} />;
};

export default Montpellier;

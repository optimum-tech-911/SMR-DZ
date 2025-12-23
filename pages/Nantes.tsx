import React from 'react';
import { Anchor, ShieldCheck, Wrench } from 'lucide-react';
import CityBranchPage, { CityBranchConfig } from './CityBranchPage';

const nantesConfig: CityBranchConfig = {
  city: 'Nantes',
  region: 'Pays de la Loire',
  phone: '+33 2 40 45 33 20',
  email: 'nantes@srm-france.com',
  address: '21 Quai de la Fosse, 44100 Nantes',
  tagline: {
    fr: 'Agence atlantique, specialiste vitrine et stores portuaires',
    es: 'Agencia atlantica, especialista en vitrinas y toldos portuarios',
  },
  intro: {
    fr: 'Nous couvrons Nantes, Saint-Nazaire et la cote atlantique pour les commerces, chantiers navals et retail en centre-ville.',
    es: 'Cubrimos Nantes, Saint-Nazaire y la costa atlantica para comercios, astilleros y retail en centro ciudad.',
  },
  bureauNote: {
    fr: 'Planning maritime adapte aux horaires portuaires et acces securises.',
    es: 'Planificacion maritima adaptada a horarios portuarios y accesos seguros.',
  },
  coverage: {
    fr: 'Nantes, Saint-Herblain, Saint-Nazaire, Vannes et La Baule.',
    es: 'Nantes, Saint-Herblain, Saint-Nazaire, Vannes y La Baule.',
  },
  response: {
    fr: 'Equipe mobile avec nacelle pour interventions facade et portails industriels.',
    es: 'Equipo movil con plataforma para fachada y portones industriales.',
  },
  quickFacts: [
    {
      fr: 'Experience sur sites portuaires, normes d acces et badges.',
      es: 'Experiencia en sitios portuarios, normas de acceso y acreditaciones.',
    },
    {
      fr: 'Pose de stores, rideaux et protections saline-proof.',
      es: 'Instalacion de toldos, persianas y protecciones resistentes a salitre.',
    },
    {
      fr: 'Gestion des chantiers en horaires decales pour limiter l impact client.',
      es: 'Gestion de obras en horarios escalonados para limitar impacto al cliente.',
    },
  ],
  services: [
    {
      title: { fr: 'Vitrerie atlantique', es: 'Vidrieria atlantica' },
      description: {
        fr: 'Remplacement de vitrines et chassis alu soumis au climat marin, etancheite renforcee.',
        es: 'Reposicion de vitrinas y marcos de aluminio expuestos al mar, estanqueidad reforzada.',
      },
      icon: Anchor,
    },
    {
      title: { fr: 'Stores et bannes', es: 'Toldos y lonas' },
      description: {
        fr: 'Depannage, toile et motorisation pour terrasses, hotels et restaurants.',
        es: 'Asistencia, lona y motorizacion para terrazas, hoteles y restaurantes.',
      },
      icon: Wrench,
    },
    {
      title: { fr: 'Rideaux metalliques', es: 'Persianas metalicas' },
      description: {
        fr: 'Installation et mise aux normes de rideaux pour galeries, depots et centre-ville.',
        es: 'Instalacion y normativas de persianas para galerias, almacenes y centro.',
      },
      icon: ShieldCheck,
    },
  ],
};

const Nantes: React.FC = () => {
  return <CityBranchPage config={nantesConfig} />;
};

export default Nantes;

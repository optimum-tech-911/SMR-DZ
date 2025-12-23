import React from 'react';
import { Building2, Flame, ShieldCheck } from 'lucide-react';
import CityBranchPage, { CityBranchConfig } from './CityBranchPage';

const lyonConfig: CityBranchConfig = {
  city: 'Lyon',
  region: 'Auvergne-Rhone-Alpes',
  phone: '+33 4 72 32 11 90',
  email: 'lyon@srm-france.com',
  address: '95 Cours Lafayette, 69003 Lyon',
  tagline: {
    fr: 'Hub technique pour la vallee du Rhone',
    es: 'Centro tecnico para el valle del Rodano',
  },
  intro: {
    fr: 'Support grands comptes, immeubles tertiaires et centres commerciaux autour de Lyon, Villeurbanne et Part-Dieu.',
    es: 'Soporte a grandes cuentas, oficinas y centros comerciales en Lyon, Villeurbanne y Part-Dieu.',
  },
  bureauNote: {
    fr: 'Atelier pour pre-assemblage de rideaux motorises et controle qualite.',
    es: 'Taller para premontaje de persianas motorizadas y control de calidad.',
  },
  coverage: {
    fr: 'Lyon, Villeurbanne, Bron, Vienne et agglomeration Rhone.',
    es: 'Lyon, Villeurbanne, Bron, Vienne y aglomeracion del Rodano.',
  },
  response: {
    fr: 'Equipe double en heures de pointe pour interventions en galerie ou parkings souterrains.',
    es: 'Equipo duplicado en horas pico para intervenciones en galerias o parkings subterraneos.',
  },
  quickFacts: [
    {
      fr: 'Habitudes de chantiers en coproprietes et sites tertiaires.',
      es: 'Habito de obra en comunidades y sitios terciarios.',
    },
    {
      fr: 'Coordination SSI et controle acces pour bureaux sensibles.',
      es: 'Coordinacion con sistemas contra incendios y control de accesos para oficinas sensibles.',
    },
    {
      fr: 'Solutions coupe-feu et issue de secours conforme aux normes locales.',
      es: 'Soluciones corta fuego y salidas de emergencia segun normas locales.',
    },
  ],
  services: [
    {
      title: { fr: 'Rideaux motorises', es: 'Persianas motorizadas' },
      description: {
        fr: 'Installation, variation de vitesse et telecommande pour commerces et parkings.',
        es: 'Instalacion, variacion de velocidad y mando a distancia para comercios y parkings.',
      },
      icon: ShieldCheck,
    },
    {
      title: { fr: 'Voies coupe-feu', es: 'Cierres cortafuego' },
      description: {
        fr: 'Rideaux et portes coupe-feu, maintenance et tests semestriels.',
        es: 'Persianas y puertas corta fuego, mantenimiento y pruebas semestrales.',
      },
      icon: Flame,
    },
    {
      title: { fr: 'Facades tertiaires', es: 'Fachadas terciarias' },
      description: {
        fr: 'Vitrage, chassis alu et stores exterieurs pour bureaux et immeubles premium.',
        es: 'Acristalamiento, marcos de aluminio y toldos exteriores para oficinas e inmuebles premium.',
      },
      icon: Building2,
    },
  ],
};

const Lyon: React.FC = () => {
  return <CityBranchPage config={lyonConfig} />;
};

export default Lyon;

import React from 'react';
import { ShieldCheck, Truck, Wrench } from 'lucide-react';
import CityBranchPage, { CityBranchConfig } from './CityBranchPage';

const lilleConfig: CityBranchConfig = {
  city: 'Lille',
  region: 'Hauts-de-France',
  phone: '+33 3 20 12 45 70',
  email: 'lille@srm-france.com',
  address: '112 Rue Nationale, 59800 Lille',
  tagline: {
    fr: 'Bureau nord, disponibilite 7j/7 pour vos fermetures',
    es: 'Oficina norte, disponible 7/7 para sus cierres',
  },
  intro: {
    fr: 'Equipe terrain dediee aux commerces et sites logistiques du nord. Depannage rideaux metalliques, vitrerie et maintenance preventive.',
    es: 'Equipo local para comercios y sitios logisticos del norte. Asistencia en persianas metalicas, vidrieria y mantenimiento preventivo.',
  },
  bureauNote: {
    fr: 'Accueil sur rendez-vous et coordination des tournees depuis le centre de Lille.',
    es: 'Recepcion con cita previa y coordinacion de rutas desde el centro de Lille.',
  },
  coverage: {
    fr: 'Intervention sur Lille, Roubaix, Tourcoing, Douai et la cote nord.',
    es: 'Cobertura Lille, Roubaix, Tourcoing, Douai y costa norte.',
  },
  response: {
    fr: 'Depannage rideaux metalliques 7j/7 avec relais d urgence sous 2h en centre-ville.',
    es: 'Asistencia en persianas metalicas 7/7 con apoyo de urgencia en menos de 2h en centro ciudad.',
  },
  quickFacts: [
    {
      fr: 'Camion atelier equipe pour interventions sur axes A1 et A25.',
      es: 'Camion taller equipado para intervenciones en ejes A1 y A25.',
    },
    {
      fr: 'Stocks vitrerie et serrures 24/7 pour remise en securite immediate.',
      es: 'Stock de vidrio y cerraduras 24/7 para asegurar al instante.',
    },
    {
      fr: 'Coordination multi-sites pour reseaux de boutiques et retail.',
      es: 'Coordinacion multi-sitio para redes de tiendas y retail.',
    },
  ],
  services: [
    {
      title: { fr: 'Depannage rideaux', es: 'Asistencia persianas' },
      description: {
        fr: 'Ouverture, deverrouillage et remise en service apres effraction ou panne moteur.',
        es: 'Apertura, desbloqueo y puesta en servicio tras robo o fallo de motor.',
      },
      icon: ShieldCheck,
    },
    {
      title: { fr: 'Vitrerie commerce', es: 'Vidrieria comercio' },
      description: {
        fr: 'Remplacement securise des vitrines et facades aluminium, pose provisoire possible.',
        es: 'Reposicion segura de vitrinas y fachadas de aluminio, con cierre provisional.',
      },
      icon: Wrench,
    },
    {
      title: { fr: 'Maintenance reseau', es: 'Mantenimiento red' },
      description: {
        fr: 'Contrats de maintenance pour franchises, planification trimestrielle et reporting.',
        es: 'Contratos de mantenimiento para franquicias con planificacion y reportes.',
      },
      icon: Truck,
    },
  ],
};

const Lille: React.FC = () => {
  return <CityBranchPage config={lilleConfig} />;
};

export default Lille;

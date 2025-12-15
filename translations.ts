import { BranchInfo, Locale, NavLink, ProjectImage, ServiceItem, Testimonial } from './types';

export const COMPANY_NAME = 'SMR metallique DZ';

export const MAIN_BRANCH: BranchInfo = {
  city: 'France',
  country: 'France',
  phone: '+33 0 00 00 00 00',
  email: 'contact@srm-france.com',
  address: 'France',
};

export const SPAIN_BRANCH: BranchInfo = {
  city: 'Espagne',
  country: 'Espagne',
  phone: '+34 000 000 000',
  email: 'barcelona@srm-france.com',
  address: 'Espagne',
};

export const NAV_LINKS: Record<Locale, NavLink[]> = {
  fr: [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Réalisations', path: '/gallery' },
    { label: 'Agence Espagne', path: '/barcelona' },
    { label: 'Contact', path: '/contact' },
  ],
  es: [
    { label: 'Inicio', path: '/' },
    { label: 'Quiénes somos', path: '/about' },
    { label: 'Servicios', path: '/services' },
    { label: 'Proyectos', path: '/gallery' },
    { label: 'Sucursal Spain', path: '/barcelona' },
    { label: 'Contacto', path: '/contact' },
  ],
};

export const SERVICES: Record<Locale, ServiceItem[]> = {
  fr: [
    {
      id: 'rideaux-metalliques',
      title: 'Rideaux Métalliques',
      iconKey: 'Shutter',
      iconSrc: rideauxIcon,
      imageSrc: rideauxImg,
      shortDescription:
        'Installation, dépannage et modernisation de rideaux métalliques pour commerces en France.',
      fullDescription:
        'Spécialistes des fermetures pour boutiques et entrepôts, nous motorisons, réparons et sécurisons vos rideaux métalliques après effraction ou vieillissement.',
      benefits: ['Sécurité accrue', 'Confort d’ouverture', 'Conformité assurance', 'Esthétique de façade'],
    },
    {
      id: 'volets-roulants',
      title: 'Volets Roulants',
      iconKey: 'Blinds',
      iconSrc: voletsImg,
      imageSrc: voletsImg,
      shortDescription: 'Volets manuels, filaires ou solaires pour logements et bureaux.',
      fullDescription:
        'Solutions complètes pour la rénovation ou le neuf : volets roulants performants offrant isolation thermique et acoustique, pilotables à distance.',
      benefits: ['Isolation renforcée', 'Confort acoustique', 'Modernisation', 'Occultation totale'],
    },
    {
      id: 'vitrerie-facades',
      title: 'Vitrerie & Façades',
      iconKey: 'Glass',
      iconSrc: vitrerieAltImg,
      imageSrc: vitrineImg,
      shortDescription: 'Remplacement de vitrages, façades aluminium et vitrines anti-effraction.',
      fullDescription:
        'De la vitrine de boutique à la façade aluminium, nous posons des vitrages simples, doubles ou sécurisés pour valoriser votre image et protéger vos accès.',
      benefits: ['Image professionnelle', 'Sécurité renforcée', 'Isolation performante', 'Design moderne'],
    },
    {
      id: 'serrurerie',
      title: 'Serrurerie & Sécurité',
      iconKey: 'Lock',
      iconSrc: serrurerieIcon,
      imageSrc: serrurerieImg,
      shortDescription: 'Remplacement de serrures, blindage de portes et sécurisation après intrusion.',
      fullDescription:
        'Nos serruriers posent des serrures multipoints, barres anti-panique et solutions de blindage pour protéger vos locaux commerciaux et résidentiels.',
      benefits: ['Renforcement sécurité', 'Conformité ERP', 'Tranquillité d’esprit', 'Intervention rapide'],
    },
    {
      id: 'stores-garage',
      title: 'Stores & Portes de Garage',
      iconKey: 'Garage',
      iconSrc: storesIcon,
      imageSrc: storesImg,
      shortDescription: 'Stores bannes, portails et portes de garage motorisés.',
      fullDescription:
        'Améliorez votre confort et l’accès à vos espaces avec des stores résistants et des portes de garage sectionnelles ou basculantes, entièrement motorisables.',
      benefits: ['Confort d’usage', 'Valorisation immobilière', 'Protection solaire', 'Design extérieur'],
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Contrats',
      iconKey: 'Maintenance',
      iconSrc: maintenanceImg,
      imageSrc: maintenanceImg,
      shortDescription: 'Contrats d’entretien et dépannage rapide 24h/24.',
      fullDescription:
        'Suivi régulier, graissage, réglages et contrôle des organes de sécurité pour prolonger la durée de vie de vos installations à France et Espagne.',
      benefits: ['Longévité du matériel', 'Prévention des pannes', 'Gestion simplifiée', 'Priorité d’intervention'],
    },
  ],
  es: [
    {
      id: 'rideaux-metalliques',
      title: 'Persianas Metálicas',
      iconKey: 'Shutter',
      iconSrc: rideauxIcon,
      imageSrc: rideauxImg,
      shortDescription:
        'Instalación y reparación de persianas metálicas para comercios de France y Spain.',
      fullDescription:
        'Motorizamos, reparamos y aseguramos persianas metálicas para tiendas y almacenes, incluyendo asistencia urgente tras intentos de intrusión.',
      benefits: ['Mayor seguridad', 'Apertura cómoda', 'Cumplimiento con seguros', 'Fachada cuidada'],
    },
    {
      id: 'volets-roulants',
      title: 'Persianas Enrollables',
      iconKey: 'Blinds',
      iconSrc: voletsImg,
      imageSrc: voletsImg,
      shortDescription: 'Persianas manuales, con cable, radio o solares para vivienda y oficina.',
      fullDescription:
        'Soluciones completas de reforma o nueva obra: persianas que aportan aislamiento térmico y acústico, con control a distancia si se desea.',
      benefits: ['Aislamiento reforzado', 'Confort acústico', 'Modernización', 'Oscurecimiento total'],
    },
    {
      id: 'vitrerie-facades',
      title: 'Cristalería y Fachadas',
      iconKey: 'Glass',
      iconSrc: vitrerieAltImg,
      imageSrc: vitrineImg,
      shortDescription: 'Sustitución de vidrios y fachadas de aluminio con protección anti-robo.',
      fullDescription:
        'Desde el escaparate hasta la fachada de aluminio, instalamos vidrios simples, dobles o de seguridad para mejorar tu imagen y proteger accesos.',
      benefits: ['Imagen profesional', 'Seguridad reforzada', 'Aislamiento eficiente', 'Diseño moderno'],
    },
    {
      id: 'serrurerie',
      title: 'Cerrajería y Seguridad',
      iconKey: 'Lock',
      iconSrc: serrurerieIcon,
      imageSrc: serrurerieImg,
      shortDescription: 'Cambio de cerraduras, puertas blindadas y aseguramiento tras intrusión.',
      fullDescription:
        'Nuestros cerrajeros instalan cerraduras multipunto, barras antipánico y soluciones de blindaje para locales comerciales y viviendas.',
      benefits: ['Refuerzo de seguridad', 'Cumplimiento normativo', 'Tranquilidad', 'Intervención rápida'],
    },
    {
      id: 'stores-garage',
      title: 'Toldos y Puertas de Garaje',
      iconKey: 'Garage',
      iconSrc: storesIcon,
      imageSrc: storesImg,
      shortDescription: 'Toldos, portones y puertas de garaje motorizadas.',
      fullDescription:
        'Mejora el acceso y el confort con toldos resistentes y puertas de garaje seccionales o basculantes, completamente motorizables.',
      benefits: ['Comodidad de uso', 'Valor patrimonial', 'Protección solar', 'Diseño exterior'],
    },
    {
      id: 'maintenance',
      title: 'Mantenimiento y Contratos',
      iconKey: 'Maintenance',
      iconSrc: maintenanceImg,
      imageSrc: maintenanceImg,
      shortDescription: 'Contratos de mantenimiento y asistencia 24/7.',
      fullDescription:
        'Seguimiento periódico, engrase, ajustes y control de seguridad para alargar la vida de tus instalaciones en France y Spain.',
      benefits: ['Mayor vida útil', 'Prevención de averías', 'Gestión sencilla', 'Prioridad de intervención'],
    },
  ],
};

export const TESTIMONIALS: Record<Locale, Testimonial[]> = {
  fr: [
    {
      id: 1,
      name: 'Claire M.',
      role: 'Responsable de boutique, France 10e',
      content:
        'Dépannage express un dimanche matin pour une persienne bloquée. Technicien ponctuel, travail propre, je recommande.',
    },
    {
      id: 2,
      name: 'Logis France',
      role: 'Gestionnaire de parc immobilier',
      content:
        'Contrat de maintenance sur nos résidences : les volets et portes de parking sont suivis, plus aucune panne longue.',
    },
    {
      id: 3,
      name: 'Carlos R.',
      role: 'Restaurateur, Espagne',
      content:
        'Remplacement de la vitrine avec vitrage sécurité et nouveau rideau métallique motorisé. Chantier livré dans les délais.',
    },
  ],
  es: [
    {
      id: 1,
      name: 'Claire M.',
      role: 'Gerente de tienda, France',
      content:
        'Servicio urgente en domingo para una persiana bloqueada. Técnico puntual y limpio, totalmente recomendable.',
    },
    {
      id: 2,
      name: 'Logis France',
      role: 'Gestor inmobiliario',
      content:
        'Contrato de mantenimiento en nuestras residencias: persianas y puertas de garaje controladas, sin averías largas.',
    },
    {
      id: 3,
      name: 'Carlos R.',
      role: 'Restaurador, Spain',
      content:
        'Sustitución del escaparate con vidrio de seguridad y nueva persiana motorizada. Obra entregada en plazo.',
    },
  ],
};

export const PROJECT_IMAGES: Record<Locale, ProjectImage[]> = {
  fr: [
    { id: 1, url: rideauxImg, title: 'Rideau métallique motorisé', category: 'Rideaux' },
    { id: 2, url: voletsImg, title: 'Volets roulants rénovés', category: 'Volets' },
    { id: 3, url: vitrineImg, title: 'Façade vitrée commerce', category: 'Vitrerie' },
    { id: 4, url: storesImg, title: 'Stores et portails motorisés', category: 'Stores' },
    { id: 5, url: serrurerieImg, title: 'Renforcement de serrurerie', category: 'Serrurerie' },
    { id: 6, url: maintenanceImg, title: 'Maintenance programmée', category: 'Maintenance' },
    { id: 7, url: service1Img, title: 'Projet retail', category: 'Chantier' },
    { id: 8, url: service2Img, title: 'Pose vitrine', category: 'Vitrerie' },
    { id: 9, url: service3Img, title: 'Rideau de sécurité', category: 'Rideaux' },
    { id: 10, url: service4Img, title: 'Atelier serrurerie', category: 'Serrurerie' },
  ],
  es: [
    { id: 1, url: rideauxImg, title: 'Persiana metálica motorizada', category: 'Persianas' },
    { id: 2, url: voletsImg, title: 'Persianas enrollables renovadas', category: 'Persianas' },
    { id: 3, url: vitrineImg, title: 'Fachada acristalada', category: 'Cristalería' },
    { id: 4, url: storesImg, title: 'Toldos y portones motorizados', category: 'Toldos' },
    { id: 5, url: serrurerieImg, title: 'Refuerzo de entrada', category: 'Cerrajería' },
    { id: 6, url: maintenanceImg, title: 'Mantenimiento programado', category: 'Mantenimiento' },
    { id: 7, url: service1Img, title: 'Proyecto retail', category: 'Obra' },
    { id: 8, url: service2Img, title: 'Montaje de vitrina', category: 'Cristalería' },
    { id: 9, url: service3Img, title: 'Persiana de seguridad', category: 'Persianas' },
    { id: 10, url: service4Img, title: 'Taller cerrajería', category: 'Cerrajería' },
  ],
};

export const COPY: Record<
  Locale,
  {
    metadata: { title: string; description: string };
    header: {
      subtitle: string;
      quote: string;
      mobileQuote: string;
      parisLabel: string;
      barcelonaLabel: string;
      callUs: string;
    };
    home: {
      heroTag: string;
      heroTitle: string;
      heroHighlight: string;
      heroDescription: string;
      primaryCta: string;
      secondaryCta: string;
      badges: string[];
      whyTitle: string;
      whyDescription: string;
      whyCards: { title: string; body: string }[];
      servicesTitle: string;
      servicesSubtitle: string;
      servicesCta: string;
      testimonialsTitle: string;
      ctaTitle: string;
      ctaDescription: string;
      ctaCall: string;
      ctaContact: string;
    };
    servicesPage: { title: string; intro: string; keyBenefits: string; cta: string };
    about: {
      title: string;
      intro: string;
      historyTitle: string;
      paragraphs: string[];
      experienceLabel: string;
      valuesTitle: string;
      values: { title: string; body: string }[];
      zoneTitle: string;
      zoneBadge: string;
      zoneNote: string;
    };
    gallery: { title: string; intro: string };
    contact: {
      title: string;
      intro: string;
      infoTitle: string;
      phoneLabel: string;
      phoneNote: string;
      emailLabel: string;
      emailNote: string;
      addressLabel: string;
      hoursTitle: string;
      hours: { label: string; value: string }[];
      formTitle: string;
      formSubmit: string;
      nameLabel: string;
      serviceLabel: string;
      messageLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
      serviceOptions: string[];
      successTitle: string;
      successDescription: string;
      sendAnother: string;
      scheduleNote: string;
      mapTitle: string;
      mapSubtitle: string;
    };
    legalPage: { title: string; intro: string; sections: { title: string; body: string[] }[] };
    privacyPage: { title: string; intro: string; sections: { title: string; body: string[] }[] };
    footer: { description: string; servicesTitle: string; contactTitle: string; legal: string; privacy: string; rights: string; navigationTitle: string };
    branch: {
      heroTitle: string;
      heroDescription: string;
      cards: { title: string; body: string }[];
      contactTitle: string;
      contactDescription: string;
      logistics: string[];
    };
    common: { learnMore: string; requestQuote: string };
  }
> = {
  fr: {
    metadata: {
      title: 'SMR metallique DZ - Rideaux métalliques et sécurisation à France & Espagne',
      description:
        'Installation, dépannage et maintenance de rideaux métalliques, volets roulants, vitrines et serrurerie à France et à Espagne.',
    },
    header: {
      subtitle: 'Fermetures & Sécurisation',
      quote: 'Demander un Devis',
      mobileQuote: 'Obtenir un devis gratuit',
      parisLabel: 'Agence France',
      barcelonaLabel: 'Agence Espagne',
      callUs: 'Appelez-nous',
    },
    home: {
      heroTag: 'Expert fermetures France & Espagne',
      heroTitle: 'Sécurisez vos accès',
      heroHighlight: 'avec SMR metallique DZ',
      heroDescription:
        'Installation, réparation et maintenance de rideaux métalliques, volets roulants, vitrines et serrurerie. Intervention rapide en France et en Espagne.',
      primaryCta: 'Demander un devis',
      secondaryCta: 'Découvrir nos services',
      badges: ['Intervention 7j/7', 'Devis gratuit', 'Garantie décennale'],
      whyTitle: 'Pourquoi choisir SMR metallique DZ ?',
      whyDescription: 'Expertise technique, matériel certifié et service client réactif pour sécuriser vos locaux.',
      whyCards: [
        { title: 'Réactivité immédiate', body: 'Dépannage express pour vos accès bloqués, sécurité restaurée sans délai.' },
        { title: 'Matériel certifié', body: 'Solutions conformes aux normes européennes, adaptées aux exigences assurances.' },
        { title: 'Service global', body: "Conseil, installation, maintenance : un interlocuteur unique pour tous vos sites." },
      ],
      servicesTitle: "Nos domaines d'expertise",
      servicesSubtitle: 'Des solutions sur mesure pour professionnels et particuliers.',
      servicesCta: 'Voir tous nos services',
      testimonialsTitle: 'Ils nous font confiance',
      ctaTitle: "Besoin d'une intervention urgente ou d'un devis ?",
      ctaDescription: 'Nos équipes vous répondent sous 24h pour sécuriser vos sites.',
      ctaCall: 'Appeler le standard',
      ctaContact: 'Contactez-nous',
    },
    servicesPage: {
      title: 'Nos Services',
      intro: 'Découvrez nos solutions complètes pour protéger et moderniser vos bâtiments.',
      keyBenefits: 'Avantages clés',
      cta: 'Demander un devis pour ce service',
    },
    about: {
      title: 'À propos de SMR metallique DZ',
      intro: "Plus de 10 ans d'expertise en fermeture industrielle et résidentielle entre France et Espagne.",
      historyTitle: 'Notre histoire',
      paragraphs: [
        "SMR metallique DZ est née avec la conviction que la sécurité ne doit jamais être un compromis. Depuis France, nous accompagnons commerçants et gestionnaires d'immeubles avec des solutions robustes et esthétiques.",
        'Notre équipe s’est forgée sur le terrain, du dépannage urgent à la conception de façades, avant de développer une présence dédiée à Espagne pour nos clients espagnols.',
        'Aujourd’hui nous intervenons pour des enseignes nationales, des PME et des particuliers qui recherchent un partenaire fiable pour leurs accès.',
      ],
      experienceLabel: "Années d'expérience",
      valuesTitle: 'Nos valeurs',
      values: [
        { title: 'Fiabilité', body: 'Installations durables, choix de marques reconnues et contrôles systématiques.' },
        { title: 'Proximité', body: 'Équipes locales à France et Espagne pour intervenir rapidement et conseiller au plus près du terrain.' },
        { title: 'Excellence', body: 'Techniciens formés, chantiers propres et suivi après-vente attentif.' },
      ],
      zoneTitle: "Zones d'intervention",
      zoneBadge: 'France & Espagne',
      zoneNote: 'Déplacements calculés au plus juste selon votre secteur.',
    },
    gallery: {
      title: 'Nos Réalisations',
      intro: 'Un aperçu de nos derniers chantiers en France et en Espagne.',
    },
    contact: {
      title: 'Contactez-nous',
      intro: 'Demandez un devis ou planifiez une intervention sur France ou Espagne.',
      infoTitle: 'Informations',
      phoneLabel: 'Téléphone',
      phoneNote: 'Du lundi au vendredi, 8h - 19h',
      emailLabel: 'Email',
      emailNote: 'Réponse sous 24h ouvrées',
      addressLabel: 'Adresse',
      hoursTitle: "Horaires d'ouverture",
      hours: [
        { label: 'Lun - Ven :', value: '08:00 - 19:00' },
        { label: 'Samedi :', value: 'Sur rendez-vous' },
        { label: 'Dimanche :', value: 'Urgences uniquement' },
      ],
      formTitle: 'Envoyez-nous un message',
      formSubmit: 'Envoyer ma demande',
      nameLabel: 'Nom complet',
      serviceLabel: 'Service concerné',
      messageLabel: 'Message',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre@email.com',
      phonePlaceholder: '+33 ...',
      messagePlaceholder: 'Décrivez votre besoin...',
      serviceOptions: [
        'Rideaux Métalliques',
        'Volets / Persiennes',
        'Vitrerie & Façades',
        'Serrurerie',
        'Portes de Garage / Portails',
        'Maintenance / Autre',
      ],
      successTitle: 'Message envoyé !',
      successDescription: 'Merci pour votre message. Nous revenons vers vous rapidement.',
      sendAnother: 'Envoyer un autre message',
      scheduleNote: 'Urgences 24/7 sur sites critiques',
      mapTitle: 'SMR metallique DZ',
      mapSubtitle: 'Intervention France & Espagne',
    },
    legalPage: {
      title: 'Mentions Légales',
      intro: "Informations obligatoires relatives à l'éditeur du site et aux responsabilités.",
      sections: [
        {
          title: 'Editeur du site',
          body: [
            'SMR metallique DZ, société de fermeture et sécurisation.',
            'Email : contact@srm-france.com',
            'Responsable de publication : Direction SMR metallique DZ.',
          ],
        },
        {
          title: 'Hébergeur',
          body: [
            'Site hébergé sur une infrastructure cloud conforme aux normes européennes de sécurité.',
            'Disponibilité 24/7 sous réserve de maintenance programmée.',
          ],
        },
        {
          title: 'Propriété intellectuelle',
          body: [
            'Les contenus (textes, photos, visuels) sont la propriété de SMR metallique DZ ou utilisés avec autorisation.',
            'Toute reproduction ou diffusion non autorisée est interdite.',
          ],
        },
        {
          title: 'Responsabilité',
          body: [
            "Les informations du site sont fournies à titre indicatif. SMR metallique DZ ne saurait être tenue responsable d'une erreur ou omission.",
            "Les liens externes n'engagent pas la responsabilité de SMR metallique DZ.",
          ],
        },
      ],
    },
    privacyPage: {
      title: 'Politique de Confidentialité',
      intro: 'Détails sur la collecte, l’utilisation et la protection de vos données personnelles.',
      sections: [
        {
          title: 'Données collectées',
          body: [
            'Formulaire de contact : nom, email, téléphone, message.',
            'Journalisation technique minimale pour la sécurité du site.',
          ],
        },
        {
          title: 'Finalités',
          body: [
            'Répondre à vos demandes de devis ou d’informations.',
            'Améliorer la qualité de service et la sécurité de nos outils.',
          ],
        },
        {
          title: 'Durée de conservation',
          body: [
            'Les données issues du formulaire sont conservées le temps de traiter la demande puis archivées selon les obligations légales.',
          ],
        },
        {
          title: 'Vos droits',
          body: [
            'Accès, rectification, suppression et opposition. Pour exercer vos droits : contact@srm-france.com.',
          ],
        },
      ],
    },
    footer: {
      description:
        'Expert en fermeture et sécurisation commerciale et résidentielle. Intervention rapide, travail soigné et garantie décennale.',
      servicesTitle: 'Nos Services',
      contactTitle: 'Nous Contacter',
      legal: 'Mentions Légales',
      privacy: 'Politique de Confidentialité',
      rights: 'Tous droits réservés.',
      navigationTitle: 'Navigation',
    },
    branch: {
      heroTitle: 'Agence Espagne',
      heroDescription:
        'Une equipe locale dediee a vos chantiers en Espagne : depannage urgent, installations neuves et maintenance planifiee.',
      cards: [
        { title: 'Techs bilingues', body: 'Intervention en français ou en espagnol pour faciliter vos échanges.' },
        { title: 'Standards EU', body: 'Matériel certifié CE, respect des normes locales et exigences assurances.' },
        { title: 'Coordination France/Espagne', body: 'Un référent unique pour vos sites en France et en Espagne.' },
      ],
      contactTitle: 'Coordonnées Espagne',
      contactDescription: 'Votre interlocuteur local pour planifier visites, devis et maintenance.',
      logistics: ['Stocks dédiés à Espagne', 'Partenaires vitriers et serruriers locaux', 'Dépannage 24/7 sur sites sensibles'],
    },
    common: { learnMore: 'En savoir plus', requestQuote: 'Demander un devis' },
  },
  es: {
    metadata: {
      title: 'SMR metallique DZ - Persianas metálicas y seguridad en France y Spain',
      description:
        'Instalación, reparación y mantenimiento de persianas metálicas, persianas enrollables, escaparates y cerrajería en France y Spain.',
    },
    header: {
      subtitle: 'Cierres y Seguridad',
      quote: 'Pedir presupuesto',
      mobileQuote: 'Solicitar presupuesto',
      parisLabel: 'Agencia France',
      barcelonaLabel: 'Agencia Spain',
      callUs: 'Llámanos',
    },
    home: {
      heroTag: 'Expertos en cierres France & Spain',
      heroTitle: 'Asegura tus accesos',
      heroHighlight: 'con SMR metallique DZ',
      heroDescription:
        'Instalación, reparación y mantenimiento de persianas metálicas, enrollables, escaparates y cerrajería. Intervención rápida en Francia y Spain.',
      primaryCta: 'Pedir presupuesto',
      secondaryCta: 'Ver nuestros servicios',
      badges: ['Intervención 7/7', 'Presupuesto gratuito', 'Garantía decenal'],
      whyTitle: '¿Por qué elegir SMR metallique DZ?',
      whyDescription: 'Experiencia técnica, material certificado y servicio ágil para asegurar tus locales.',
      whyCards: [
        { title: 'Reactividad inmediata', body: 'Asistencia exprés ante accesos bloqueados, seguridad restablecida al instante.' },
        { title: 'Material certificado', body: 'Soluciones conformes con normas europeas, adaptadas a requerimientos de seguros.' },
        { title: 'Servicio integral', body: 'Asesoría, instalación y mantenimiento con un único interlocutor para todos tus sitios.' },
      ],
      servicesTitle: 'Áreas de especialidad',
      servicesSubtitle: 'Soluciones a medida para empresas y particulares.',
      servicesCta: 'Ver todos los servicios',
      testimonialsTitle: 'Clientes satisfechos',
      ctaTitle: '¿Necesitas una intervención urgente o un presupuesto?',
      ctaDescription: 'Respondemos en 24h para asegurar tus instalaciones.',
      ctaCall: 'Llamar a la central',
      ctaContact: 'Contáctanos',
    },
    servicesPage: {
      title: 'Nuestros Servicios',
      intro: 'Descubre nuestras soluciones completas para proteger y modernizar tus edificios.',
      keyBenefits: 'Ventajas clave',
      cta: 'Solicitar presupuesto para este servicio',
    },
    about: {
      title: 'Sobre SMR metallique DZ',
      intro: 'Más de 10 años de experiencia en cierres industriales y residenciales entre France y Spain.',
      historyTitle: 'Nuestra historia',
      paragraphs: [
        'SMR metallique DZ nació con la convicción de que la seguridad no debe ser un compromiso. Desde France acompañamos a comerciantes y gestores inmobiliarios con soluciones robustas y estéticas.',
        'Nuestro equipo se formó en intervenciones urgentes y diseño de fachadas, antes de abrir una presencia dedicada en Spain para nuestros clientes en España.',
        'Hoy trabajamos con grandes cadenas, pymes y particulares que buscan un socio fiable para sus accesos.',
      ],
      experienceLabel: 'Años de experiencia',
      valuesTitle: 'Nuestros valores',
      values: [
        { title: 'Fiabilidad', body: 'Instalaciones duraderas, marcas reconocidas y controles sistemáticos.' },
        { title: 'Proximidad', body: 'Equipos locales en France y Spain para intervenir rápido y aconsejar sobre el terreno.' },
        { title: 'Excelencia', body: 'Técnicos formados, obras limpias y seguimiento postventa atento.' },
      ],
      zoneTitle: 'Zonas de intervención',
      zoneBadge: 'Francia y Spain',
      zoneNote: 'Desplazamientos calculados según tu zona.',
    },
    gallery: {
      title: 'Nuestros Proyectos',
      intro: 'Una muestra de nuestras últimas obras en Francia y España.',
    },
    contact: {
      title: 'Contáctanos',
      intro: 'Solicita presupuesto o programa una intervención en France o Spain.',
      infoTitle: 'Información',
      phoneLabel: 'Teléfono',
      phoneNote: 'De lunes a viernes, 8h - 19h',
      emailLabel: 'Email',
      emailNote: 'Respuesta en 24h laborables',
      addressLabel: 'Dirección',
      hoursTitle: 'Horarios',
      hours: [
        { label: 'Lun - Vie :', value: '08:00 - 19:00' },
        { label: 'Sábado :', value: 'Con cita previa' },
        { label: 'Domingo :', value: 'Solo urgencias' },
      ],
      formTitle: 'Envíanos un mensaje',
      formSubmit: 'Enviar solicitud',
      nameLabel: 'Nombre completo',
      serviceLabel: 'Servicio',
      messageLabel: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      phonePlaceholder: '+34 ...',
      messagePlaceholder: 'Describe tu necesidad...',
      serviceOptions: [
        'Persianas Metálicas',
        'Persianas Enrollables',
        'Cristalería y Fachadas',
        'Cerrajería',
        'Puertas de Garaje / Portones',
        'Mantenimiento / Otro',
      ],
      successTitle: '¡Mensaje enviado!',
      successDescription: 'Gracias por tu mensaje. Te responderemos muy pronto.',
      sendAnother: 'Enviar otro mensaje',
      scheduleNote: 'Urgencias 24/7 en sitios críticos',
      mapTitle: 'SMR metallique DZ',
      mapSubtitle: 'Intervención Francia y Spain',
    },
    legalPage: {
      title: 'Aviso Legal',
      intro: 'Información obligatoria sobre el editor del sitio y las responsabilidades aplicables.',
      sections: [
        {
          title: 'Editor del sitio',
          body: [
            'SMR metallique DZ, empresa de cierre y seguridad.',
            'Email: contact@srm-france.com',
            'Responsable de publicación: Dirección SMR metallique DZ.',
          ],
        },
        {
          title: 'Alojamiento',
          body: [
            'Sitio alojado en infraestructura cloud conforme a normas europeas de seguridad.',
            'Disponibilidad 24/7 salvo mantenimientos programados.',
          ],
        },
        {
          title: 'Propiedad intelectual',
          body: [
            'Los contenidos (textos, fotos, visuales) son propiedad de SMR metallique DZ o se usan con autorización.',
            'Cualquier reproducción o difusión no autorizada está prohibida.',
          ],
        },
        {
          title: 'Responsabilidad',
          body: [
            'La información del sitio se ofrece a título orientativo. SMR metallique DZ no será responsable de errores u omisiones.',
            'Los enlaces externos no comprometen la responsabilidad de SMR metallique DZ.',
          ],
        },
      ],
    },
    privacyPage: {
      title: 'Política de Privacidad',
      intro: 'Detalles sobre la recogida, uso y protección de tus datos personales.',
      sections: [
        {
          title: 'Datos recogidos',
          body: [
            'Formulario de contacto: nombre, email, teléfono, mensaje.',
            'Registro técnico mínimo para la seguridad del sitio.',
          ],
        },
        {
          title: 'Finalidades',
          body: [
            'Responder a solicitudes de presupuesto o información.',
            'Mejorar la calidad del servicio y la seguridad de nuestras herramientas.',
          ],
        },
        {
          title: 'Plazo de conservación',
          body: [
            'Los datos del formulario se conservan el tiempo necesario para tramitar la solicitud y luego se archivan según la ley.',
          ],
        },
        {
          title: 'Tus derechos',
          body: [
            'Acceso, rectificación, supresión y oposición. Para ejercerlos: contact@srm-france.com.',
          ],
        },
      ],
    },
    footer: {
      description:
        'Expertos en cierres y seguridad para comercios y viviendas. Intervención rápida, trabajo cuidado y garantía decenal.',
      servicesTitle: 'Nuestros Servicios',
      contactTitle: 'Contactar',
      legal: 'Aviso Legal',
      privacy: 'Política de Privacidad',
      rights: 'Todos los derechos reservados.',
      navigationTitle: 'Navegación',
    },
    branch: {
      heroTitle: 'Sucursal Spain',
      heroDescription:
        'Equipo local dedicado a tus obras en Espana: asistencia urgente, instalaciones nuevas y mantenimiento planificado.',
      cards: [
        { title: 'Técnicos bilingües', body: 'Intervenimos en francés o español para facilitar la coordinación.' },
        { title: 'Estándares UE', body: 'Material certificado CE, cumplimiento de normas locales y seguros.' },
        { title: 'Coordinación France/Espagne', body: 'Un único referente para tus sitios en Francia y España.' },
      ],
      contactTitle: 'Datos de contacto Spain',
      contactDescription: 'Tu interlocutor local para visitas, presupuestos y mantenimiento.',
      logistics: ['Stock dedicado en Spain', 'Colaboración con cristaleros y cerrajeros locales', 'Asistencia 24/7 en sitios sensibles'],
    },
    common: { learnMore: 'Saber más', requestQuote: 'Pedir presupuesto' },
  },
};
import rideauxIcon from './src/rideaux metalliques icon.png';
import rideauxImg from './src/Rideaux metalliques.png';
import voletsImg from './src/volets roulans.png';
import vitrineImg from './src/vitrine et facades.png';
import vitrerieAltImg from './src/vitterie et facades.png';
import storesIcon from './src/stores bannes et portails.png';
import storesImg from './src/stores et portails.png';
import serrurerieIcon from './src/serrurerie.png';
import serrurerieImg from './src/serrurerie et securisation.png';
import maintenanceImg from './src/maintenance et services global.png';
import service1Img from './src/service 1.png';
import service2Img from './src/service 2.png';
import service3Img from './src/service 3.jfif';
import service4Img from './src/service 4.jfif';

export const site = {
  name: 'Pauline Renard',
  role: 'Éducatrice & comportementaliste canin',
  city: 'Lyon 7',
  area: 'Lyon et alentours',
  phone: '06 45 81 64 19',
  phoneHref: 'tel:+33645816419',
  email: 'pauline-rnd@hotmail.fr',
  description:
    "Pauline Renard, éducatrice et comportementaliste canin à Lyon 7 : éducation de base, chiots, anxiété de séparation, réactivité. Méthodes bienveillantes, déplacements dans Lyon et alentours.",
};

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/offres/', label: 'Offres' },
  { href: '/accompagnements/', label: 'Accompagnements' },
  { href: '/conseils/', label: 'Conseils' },
  { href: '/a-propos/', label: 'À propos' },
];

export const prices = [
  {
    name: 'Séance bilan',
    price: 35,
    unit: 'la séance',
    pitch: 'Le point de départ de tout accompagnement.',
    features: [
      'Observation de votre chien dans son environnement',
      'Échange sur votre quotidien et vos objectifs',
      'Premières pistes concrètes à appliquer',
      'Proposition d’un plan de travail adapté',
    ],
    featured: false,
  },
  {
    name: 'Séance individuelle',
    price: 45,
    unit: 'la séance',
    pitch: 'Une séance ciblée sur un objectif précis.',
    features: [
      'Travail à domicile ou en extérieur',
      'Exercices adaptés à votre chien',
      'Récapitulatif des exercices après la séance',
      'Idéal pour un point d’étape',
    ],
    featured: false,
  },
  {
    name: 'Forfait 3 séances',
    price: 120,
    unit: 'soit 40 € la séance',
    pitch: 'Pour poser des bases solides.',
    features: [
      'Progression construite séance après séance',
      'Idéal pour l’éducation de base ou un chiot',
      'Suivi de vos avancées entre les séances',
      'Tarif avantageux',
    ],
    featured: true,
  },
  {
    name: 'Forfait 5 séances',
    price: 200,
    unit: 'soit 40 € la séance',
    pitch: 'Pour les problématiques de comportement.',
    features: [
      'Accompagnement dans la durée',
      'Réactivité, anxiété, protection de ressources…',
      'Généralisation dans différents lieux',
      'Tarif avantageux',
    ],
    featured: false,
  },
];

export const formats = [
  {
    icon: 'home',
    title: 'À domicile',
    text: 'Je viens chez vous pour travailler là où les difficultés se présentent : arrivées, départs, visites, routines du quotidien.',
  },
  {
    icon: 'tree',
    title: 'En extérieur',
    text: 'Parcs, quais, rues animées : on travaille la marche en laisse, le rappel et la gestion des croisements en situation réelle.',
  },
  {
    icon: 'paw',
    title: 'Avec Oslo',
    text: 'Pour les chiens qui ont besoin d’apprendre les bons codes, Oslo, mon chien régulateur, peut participer à certaines séances.',
  },
  {
    icon: 'chat',
    title: 'Suivi entre les séances',
    text: 'Une question, un doute, une petite victoire ? Vous pouvez me donner des nouvelles entre deux rendez-vous.',
  },
];

export const programs = [
  {
    slug: 'education',
    emoji: '🎾',
    title: 'Éducation de base',
    lead: 'Des bases claires pour un quotidien fluide et un chien qui comprend ce qu’on attend de lui.',
    items: [
      'Rappel',
      'Assis, couché, pas bouger',
      'Marche en laisse',
      'Bonnes habitudes au quotidien',
      'Port de la muselière',
      'Apprentissage des autocontrôles',
    ],
    suggested: 'Forfait 3 séances',
  },
  {
    slug: 'chiot',
    emoji: '🐶',
    title: 'Chiot & nouvel arrivant',
    lead: 'Les premiers mois sont décisifs. On construit ensemble de bonnes habitudes dès l’arrivée à la maison.',
    items: [
      'Propreté et rythme de la journée',
      'Socialisation en douceur',
      'Apprendre la solitude progressivement',
      'Mordillements et jeux',
      'Manipulations et soins',
      'Chien adopté adulte ou en refuge',
    ],
    suggested: 'Forfait 3 séances',
  },
  {
    slug: 'comportement',
    emoji: '💛',
    title: 'Comportements problématiques',
    lead: 'Comprendre l’origine du comportement pour agir durablement, sans brusquer votre chien.',
    items: [
      'Anxiété de séparation',
      'Réactivité envers les humains',
      'Réactivité envers les congénères',
      'Gestion de la protection de ressources',
      'Fugues',
      'Aboiements, destructions',
    ],
    suggested: 'Forfait 5 séances',
  },
  {
    slug: 'changements',
    emoji: '🏡',
    title: 'Changements de vie',
    lead: 'Déménagement, arrivée d’un bébé, d’un autre animal : on prépare votre chien en amont.',
    items: [
      'Préparation à l’arrivée d’un bébé',
      'Cohabitation avec un autre animal',
      'Déménagement et nouvel environnement',
      'Évolution du rythme de vie',
    ],
    suggested: 'Séance bilan + séances individuelles',
  },
];

export const steps = [
  { n: '01', title: 'On fait connaissance', text: 'Lors de la séance bilan, j’observe votre chien et j’écoute votre quotidien, vos difficultés et vos envies.' },
  { n: '02', title: 'On comprend', text: 'Ensemble, on identifie les causes des comportements gênants : émotion, besoin, environnement, apprentissage.' },
  { n: '03', title: 'On avance pas à pas', text: 'Je vous transmets des outils simples et concrets, adaptés à votre chien et à votre rythme.' },
  { n: '04', title: 'On ancre durablement', text: 'On généralise les acquis dans différents lieux pour un changement qui tient dans le temps.' },
];

export const faq = [
  {
    q: 'Comment se déroule la première séance ?',
    a: 'La séance bilan (35 €) me permet d’observer votre chien et d’échanger avec vous sur votre quotidien. À la fin, je vous propose un plan de travail adapté et des premières pistes à appliquer tout de suite.',
  },
  {
    q: 'Où ont lieu les séances ?',
    a: 'Je suis basée à Lyon 7 et je me déplace dans Lyon et aux alentours. Selon l’objectif, on travaille à votre domicile ou en extérieur (parc, quais, rue).',
  },
  {
    q: 'Quelles méthodes utilisez-vous ?',
    a: 'Des méthodes bienveillantes et respectueuses du chien : on s’appuie sur la compréhension de ses émotions et de ses besoins, et sur le renforcement de ce qu’il fait bien. Aucune méthode coercitive.',
  },
  {
    q: 'Mon chien est adulte, est-ce trop tard ?',
    a: 'Non ! Un chien apprend à tout âge. Les habitudes installées demandent parfois un peu plus de patience, mais les progrès sont tout à fait possibles.',
  },
  {
    q: 'Combien de séances faut-il prévoir ?',
    a: 'Cela dépend de votre chien et de votre objectif. Pour l’éducation de base, 3 séances suffisent souvent à poser des bases solides. Pour un trouble du comportement, un accompagnement de 5 séances est généralement plus adapté.',
  },
  {
    q: 'Comment régler les séances ?',
    a: 'Le paiement se fait par virement ou en espèces.',
  },
];

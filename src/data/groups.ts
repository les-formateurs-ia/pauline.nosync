export interface Group {
  slug: string;
  name: string;
  emoji: string;
  hue: string; // accent colour for the group page
  short: string;
  examples: string[];
  origin: string;
  traits: string[];
  decode: { obs: string; why: string }[];
  education: { title: string; text: string }[];
  activities: string[];
  vigilance: string[];
  oslo: string;
}

export const groups: Group[] = [
  {
    slug: 'bergers-bouviers',
    name: 'Bergers & bouviers',
    emoji: '🐑',
    hue: '#3f6b4a',
    short: 'Sélectionnés pour travailler en équipe avec l’humain : rassembler, conduire et surveiller les troupeaux.',
    examples: ['Border collie', 'Berger australien', 'Berger allemand', 'Malinois', 'Bouvier de l’Entlebuch', 'Shetland'],
    origin:
      'Pendant des siècles, ces chiens ont passé leurs journées à travailler aux côtés des bergers et des éleveurs : regrouper les moutons, déplacer le bétail, surveiller la ferme. Ils ont été sélectionnés pour leur endurance, leur réactivité au mouvement et surtout leur capacité à coopérer avec l’humain et à lire ses intentions.',
    traits: ['Très coopératifs', 'Sensibles au mouvement', 'Endurants', 'Vifs d’esprit', 'Attachés à leur famille'],
    decode: [
      { obs: 'Il fixe, poursuit ou mordille les vélos, les joggeurs ou les enfants qui courent.', why: 'C’est l’instinct de rassemblement : le mouvement déclenche chez lui la séquence de conduite du troupeau. Il ne s’agit pas d’agressivité, mais d’un comportement de travail mal dirigé.' },
      { obs: 'Il vous suit partout et a du mal à se poser.', why: 'Ces chiens sont sélectionnés pour rester attentifs à l’humain. Sans cadre, ils restent « en service » en permanence et peinent à décrocher.' },
      { obs: 'Il aboie ou s’agite au moindre bruit.', why: 'Il a été sélectionné pour surveiller et alerter. Une grande sensibilité aux stimuli fait partie de son équipement de travail.' },
      { obs: 'Il détruit ou invente ses propres « jeux » quand il s’ennuie.', why: 'Son cerveau a besoin de missions. Faute d’en recevoir, il s’en crée seul.' },
    ],
    education: [
      { title: 'Apprendre le calme autant que l’action', text: 'Un berger sait souvent s’activer, rarement se poser. Travaillez le tapis, la relaxation et les temps de repos : c’est souvent la compétence la plus importante.' },
      { title: 'Rediriger l’instinct, pas le punir', text: 'Proposez des jeux de rassemblement contrôlés (treibball, balle géante), des jeux de règles « stop / go » et travaillez le détournement d’attention face au mouvement.' },
      { title: 'Stimuler la tête avant les pattes', text: 'Trop de lancers de balle créent un chien « accro » et surexcité. Privilégiez la recherche olfactive, les apprentissages de tours et les jeux de réflexion.' },
      { title: 'Miser sur la coopération', text: 'Ces chiens adorent apprendre avec vous : le renforcement positif fonctionne remarquablement bien, tandis que la dureté les rend vite anxieux.' },
    ],
    activities: ['Treibball', 'Agility ou hoopers', 'Pistage et recherche', 'Obéissance ludique', 'Apprentissage de tours'],
    vigilance: ['La surstimulation (lancers de balle à répétition)', 'La poursuite de véhicules ou de joggeurs', 'Les sensibilités aux bruits', 'Le manque de temps de repos'],
    oslo: 'Je suis moi-même un bouvier ! Mon secret ? Pauline m’a appris que se poser, c’est aussi un travail. Et franchement, une bonne sieste après une séance de flair, rien de tel.',
  },
  {
    slug: 'molosses-gardiens',
    name: 'Molosses & gardiens',
    emoji: '🛡️',
    hue: '#7a5236',
    short: 'Puissants, calmes et protecteurs, sélectionnés pour garder la maison, les troupeaux ou travailler aux côtés de l’humain.',
    examples: ['Rottweiler', 'Cane corso', 'Dogue allemand', 'Boxer', 'Bouvier bernois', 'Montagne des Pyrénées'],
    origin:
      'Ce grand ensemble réunit des chiens de garde de propriété, des gardiens de troupeaux qui protégeaient les moutons des prédateurs, et des chiens de montagne utilisés pour le trait ou le sauvetage. Leur point commun : un physique puissant, une grande stabilité et une tendance naturelle à protéger leur territoire et leurs proches.',
    traits: ['Protecteurs', 'Calmes', 'Indépendants dans leurs décisions', 'Très attachés', 'Puissants'],
    decode: [
      { obs: 'Il aboie ou se poste face aux visiteurs ou aux passants près de la maison.', why: 'Il a été sélectionné pour surveiller un territoire. Il évalue la situation et prévient : c’est son métier d’origine.' },
      { obs: 'Il ne réagit pas tout de suite quand vous lui demandez quelque chose.', why: 'Les chiens de garde ont été sélectionnés pour réfléchir et décider seuls. Ce n’est pas de l’entêtement, c’est un temps d’analyse.' },
      { obs: 'Il est très doux en famille, mais méfiant avec les inconnus.', why: 'C’est typique des gardiens : ils distinguent nettement « les leurs » des étrangers.' },
      { obs: 'Il tire fort en laisse quand quelque chose l’intéresse.', why: 'Avec sa puissance, le moindre élan devient difficile à tenir : la marche en laisse est une priorité dès le plus jeune âge.' },
    ],
    education: [
      { title: 'Socialiser tôt et beaucoup', text: 'Des rencontres positives et variées dès le plus jeune âge l’aident à rester serein face aux inconnus et aux situations nouvelles.' },
      { title: 'Poser les bases avant la puissance', text: 'La marche en laisse, le rappel et les autocontrôles doivent être solides avant qu’il n’atteigne sa taille adulte.' },
      { title: 'Gérer la garde plutôt que l’encourager', text: 'On apprend au chien à alerter puis à se reposer sur vous. Évitez de valoriser les réactions de protection.' },
      { title: 'Rester calme et cohérent', text: 'Ces chiens sensibles réagissent mal à la confrontation. Une relation de confiance, claire et constante, est la clé.' },
    ],
    activities: ['Pistage', 'Cani-randonnée (selon le gabarit)', 'Recherche d’objets', 'Traction douce (chiens de montagne)', 'Balades calmes et variées'],
    vigilance: ['La protection de ressources ou du territoire', 'Les articulations pendant la croissance', 'La chaleur (races brachycéphales)', 'Les rencontres non préparées avec les inconnus'],
    oslo: 'Les grands gabarits ont souvent un cœur tendre. Un conseil d’ami : apprenez-lui à saluer calmement dès le plus jeune âge. À 50 kilos, un câlin d’accueil, ça décoiffe !',
  },
  {
    slug: 'terriers',
    name: 'Terriers & teckels',
    emoji: '🦊',
    hue: '#b5552b',
    short: 'Petits ou grands, des chiens courageux et tenaces, sélectionnés pour chasser les nuisibles et les animaux de terrier.',
    examples: ['Jack Russell', 'Fox terrier', 'Yorkshire', 'West Highland', 'Staffordshire bull terrier', 'Teckel'],
    origin:
      'Le mot « terrier » vient du latin terra : ces chiens étaient chargés de déloger renards, blaireaux et rongeurs de leurs terriers. Il leur fallait un courage à toute épreuve, une grande ténacité et la capacité de prendre des décisions seuls sous terre. Les teckels partagent cette histoire de chasseurs de terriers.',
    traits: ['Courageux', 'Tenaces', 'Énergiques', 'Indépendants', 'Pleins de caractère'],
    decode: [
      { obs: 'Il creuse le jardin et se passionne pour les trous.', why: 'Creuser était littéralement son métier. C’est un besoin profond, qu’il vaut mieux canaliser qu’interdire.' },
      { obs: 'Il poursuit chats, oiseaux et rongeurs.', why: 'L’instinct de prédation est très présent chez les terriers, qui ont été sélectionnés pour réagir vite aux petites proies.' },
      { obs: 'Il ne lâche rien : jouet, objet volé ou idée en tête.', why: 'La ténacité était indispensable pour affronter un renard sous terre. Aujourd’hui, elle s’exprime… dans le jeu de tir à la corde.' },
      { obs: 'Il réagit vivement aux autres chiens, quelle que soit leur taille.', why: 'Leur courage les pousse parfois à s’affirmer, et leur taille les rend plus vulnérables : un mélange qui peut créer de la réactivité.' },
    ],
    education: [
      { title: 'Des séances courtes et ludiques', text: 'Le terrier apprend vite mais se lasse vite aussi. Plusieurs mini-séances de 5 minutes valent mieux qu’une longue.' },
      { title: 'Offrir une zone de fouille', text: 'Un bac à sable ou un coin du jardin dédié, où il a le droit de creuser et de trouver des trésors cachés.' },
      { title: 'Travailler le rappel face aux proies', text: 'Avec un tel instinct de poursuite, la longe et un rappel travaillé progressivement sont indispensables.' },
      { title: 'Le prendre au sérieux malgré sa taille', text: 'Un petit chien a besoin d’autant d’éducation qu’un grand. Respectez aussi ses signaux de gêne quand on le manipule.' },
    ],
    activities: ['Recherche et flair', 'Jeux de tir contrôlés', 'Bac à fouille', 'Agility', 'Earthdog / parcours de tunnels'],
    vigilance: ['L’instinct de prédation', 'La protection de ressources (jouets, nourriture)', 'La réactivité envers les congénères', 'Les fugues (passer sous le grillage)'],
    oslo: 'Les terriers, je les adore : petits par la taille, immenses par le caractère ! Un jour, un Jack Russell m’a montré son trou dans le jardin… Il était plus profond que moi.',
  },
  {
    slug: 'primitifs-nordiques',
    name: 'Primitifs & nordiques',
    emoji: '🐺',
    hue: '#5a6b7a',
    short: 'Proches de leurs ancêtres, des chiens indépendants et fiers, au tempérament souvent proche du « chat ».',
    examples: ['Husky', 'Malamute', 'Shiba inu', 'Akita', 'Basenji', 'Chien-loup tchécoslovaque'],
    origin:
      'Ces races ont été peu modifiées par la sélection humaine. Chiens de traîneau, chiens de chasse primitifs, spitz asiatiques : ils ont souvent vécu en semi-liberté, en prenant beaucoup de décisions par eux-mêmes. Ils ont gardé un fort instinct, une grande indépendance et un rapport à l’humain moins fusionnel.',
    traits: ['Indépendants', 'Très endurants', 'Propres et discrets', 'Fort instinct de chasse', 'Réservés'],
    decode: [
      { obs: 'Il ne revient pas au rappel dès qu’il est libre.', why: 'Il n’a pas été sélectionné pour travailler au contact de l’humain. Explorer et chasser lui semble souvent bien plus logique que revenir.' },
      { obs: 'Il fugue, saute les clôtures ou creuse pour sortir.', why: 'Le besoin d’explorer de grands espaces est très ancré. Un husky peut parcourir des dizaines de kilomètres par jour !' },
      { obs: 'Il n’aime pas trop les câlins ou les manipulations.', why: 'Beaucoup de primitifs apprécient le contact à leurs conditions. Ce n’est pas un manque d’amour, mais un besoin d’autonomie.' },
      { obs: 'Il « parle », hurle ou chante plutôt qu’il n’aboie.', why: 'Les vocalises font partie du répertoire de communication de ces chiens, en particulier des nordiques.' },
    ],
    education: [
      { title: 'Rendre la coopération intéressante', text: 'Ces chiens se demandent « qu’est-ce que j’y gagne ? ». Des récompenses de grande valeur et des séances variées sont indispensables.' },
      { title: 'Sécuriser avant de libérer', text: 'Longe, jardin bien clôturé et rappel travaillé progressivement : la liberté totale se construit (et n’est pas toujours possible).' },
      { title: 'Respecter son besoin d’espace', text: 'Laissez-le venir au contact. Le consentement aux manipulations se travaille en douceur, notamment pour les soins.' },
      { title: 'Dépenser physiquement ET mentalement', text: 'Leur endurance est immense : combinez de vraies sorties sportives et des activités de flair pour les apaiser.' },
    ],
    activities: ['Canicross, cani-VTT, cani-rando', 'Pistage', 'Jeux de flair', 'Traîneau ou kick-scooter (nordiques)', 'Longues balades en longe'],
    vigilance: ['Les fugues et le rappel', 'L’instinct de prédation (chats, petits animaux)', 'La chaleur pour les races nordiques', 'La solitude et l’ennui (destructions, hurlements)'],
    oslo: 'Avec les primitifs, il faut de la patience et du respect. Un shiba m’a ignoré pendant trois balades… À la quatrième, il s’est couché à côté de moi. C’est ça, la confiance.',
  },
  {
    slug: 'chiens-d-arret',
    name: 'Chiens d’arrêt',
    emoji: '🪶',
    hue: '#8a6d2c',
    short: 'Sportifs et sensibles, sélectionnés pour repérer le gibier au flair et s’immobiliser pour le signaler.',
    examples: ['Épagneul breton', 'Braque allemand', 'Braque de Weimar', 'Setter anglais', 'Pointer', 'Braque hongrois'],
    origin:
      'Le chien d’arrêt quête le terrain à grande vitesse, nez au vent, pour détecter les oiseaux. Lorsqu’il les repère, il se fige (« l’arrêt ») pour indiquer leur position au chasseur. Ce travail demande une énergie énorme, un flair puissant et une grande collaboration avec l’humain.',
    traits: ['Très énergiques', 'Flair exceptionnel', 'Sensibles', 'Affectueux', 'Coopératifs'],
    decode: [
      { obs: 'Il se fige, une patte levée, face à un oiseau ou un chat.', why: 'C’est l’arrêt, la signature de son groupe. Ce comportement est profondément inscrit dans sa génétique.' },
      { obs: 'Il part au loin, nez en l’air, dès qu’il est libre.', why: 'La quête, c’est son métier : couvrir le terrain le plus vite possible pour capter les odeurs.' },
      { obs: 'Il est infatigable et tourne en rond à la maison.', why: 'Un chien d’arrêt peut courir des heures. Sans dépense suffisante, il accumule une énergie difficile à gérer.' },
      { obs: 'Il se vexe ou se ferme quand on le gronde.', why: 'Ce sont des chiens très sensibles, qui ont besoin de douceur pour bien apprendre.' },
    ],
    education: [
      { title: 'Canaliser le flair', text: 'Les jeux de recherche, le pistage et la quête d’objets cachés offrent une sortie légitime à son instinct.' },
      { title: 'Construire un rappel béton', text: 'Longe, récompenses de grande valeur et progression très graduelle : le rappel face aux odeurs est le grand chantier.' },
      { title: 'Apprendre à se poser', text: 'Comme tous les sportifs, il doit apprendre à récupérer : tapis, mastication et routines calmes.' },
      { title: 'Rester doux', text: 'Le renforcement positif et une voix calme lui conviennent bien mieux que la fermeté, qui le bloque.' },
    ],
    activities: ['Pistage et recherche', 'Canicross', 'Cani-VTT', 'Jeux de flair', 'Field trial / quête (sans gibier)'],
    vigilance: ['Le rappel face aux odeurs et au gibier', 'Le manque de dépense', 'La poursuite des oiseaux et des chats', 'La sensibilité aux méthodes dures'],
    oslo: 'Les chiens d’arrêt, quels athlètes ! Moi je suis plutôt endurance tranquille. Petit secret : 15 minutes de recherche d’objets fatiguent autant qu’une heure de course.',
  },
  {
    slug: 'chiens-courants',
    name: 'Chiens courants & de sang',
    emoji: '👃',
    hue: '#9a5a3a',
    short: 'Des nez sur pattes, sélectionnés pour suivre une piste pendant des heures, souvent en meute.',
    examples: ['Beagle', 'Basset hound', 'Saint-Hubert', 'Griffon vendéen', 'Dalmatien', 'Rhodesian ridgeback'],
    origin:
      'Les chiens courants chassaient en meute, en suivant la piste du gibier pendant des heures, en donnant de la voix pour signaler leur progression. Les chiens de sang, eux, retrouvaient le gibier blessé grâce à leur flair. Ils sont sociables, endurants, et pilotés par leur nez.',
    traits: ['Nez exceptionnel', 'Sociables', 'Endurants', 'Gourmands', 'Têtus quand ils sont sur une piste'],
    decode: [
      { obs: 'Il a la truffe au sol et semble « sourd » en balade.', why: 'Quand il est sur une odeur, tout son cerveau est mobilisé. Il ne vous ignore pas : il est absorbé par sa piste.' },
      { obs: 'Il hurle ou aboie de façon très sonore.', why: 'Donner de la voix permettait au chasseur de suivre la meute à distance. C’est un comportement sélectionné.' },
      { obs: 'Il vole de la nourriture dès que vous avez le dos tourné.', why: 'Gourmands et dotés d’un flair hors norme, ils trouvent la nourriture partout.' },
      { obs: 'Il supporte mal la solitude.', why: 'Habitués à vivre en meute, ces chiens ont un grand besoin de compagnie.' },
    ],
    education: [
      { title: 'Utiliser son nez comme récompense', text: 'Autoriser le reniflage (« va sentir ») après un exercice réussi est une récompense extrêmement puissante pour lui.' },
      { title: 'La longe comme meilleure amie', text: 'Le rappel face à une piste est un vrai défi. La longe permet de lui offrir de la liberté en toute sécurité.' },
      { title: 'Prévenir plutôt que guérir', text: 'Ne laissez rien de comestible à portée et travaillez l’autocontrôle face à la nourriture.' },
      { title: 'Préparer la solitude', text: 'Un apprentissage très progressif de la solitude, avec des jouets d’occupation olfactifs.' },
    ],
    activities: ['Pistage', 'Mantrailing (recherche de personne)', 'Tapis de fouille', 'Balades « reniflage » en longe', 'Recherche de friandises'],
    vigilance: ['Le rappel en présence d’odeurs', 'Les vols de nourriture et le surpoids', 'Les vocalises', 'La solitude'],
    oslo: 'Un beagle m’a appris qu’une balade de 20 minutes peut durer une heure… si chaque brin d’herbe raconte une histoire. Laissez-le renifler : pour lui, c’est lire le journal !',
  },
  {
    slug: 'rapporteurs-chiens-d-eau',
    name: 'Rapporteurs, leveurs & chiens d’eau',
    emoji: '🦆',
    hue: '#2f6f86',
    short: 'Joviaux et gourmands, sélectionnés pour lever ou rapporter le gibier, souvent dans l’eau.',
    examples: ['Labrador', 'Golden retriever', 'Cocker anglais', 'Springer anglais', 'Lagotto', 'Barbet'],
    origin:
      'Les retrievers rapportaient délicatement le gibier tombé, souvent dans l’eau. Les leveurs (cockers, springers) faisaient sortir le gibier des broussailles. Les chiens d’eau aidaient les pêcheurs et chasseurs en milieu aquatique. Tous ont été sélectionnés pour leur coopération et leur « gueule douce ».',
    traits: ['Joviaux', 'Très sociables', 'Gourmands', 'Adorent l’eau', 'Besoin de porter en gueule'],
    decode: [
      { obs: 'Il prend tout dans sa gueule : chaussures, chaussettes, jouets.', why: 'Porter et rapporter, c’est inscrit dans ses gènes. Avoir quelque chose en gueule l’apaise et le rend fier.' },
      { obs: 'Il saute sur tout le monde pour dire bonjour.', why: 'Très sociables et enthousiastes, ces chiens adorent les humains. Il faut leur apprendre une façon calme de saluer.' },
      { obs: 'Il plonge dans chaque flaque ou rivière.', why: 'L’attrait pour l’eau a été sélectionné pendant des générations.' },
      { obs: 'Il ferait tout pour une friandise.', why: 'Leur gourmandise est légendaire (et réelle chez certains labradors, pour des raisons génétiques).' },
    ],
    education: [
      { title: 'Valoriser le rapport', text: 'Apprenez-lui à rapporter et à donner sur demande : il peut ainsi porter « ses » objets au lieu des vôtres.' },
      { title: 'Travailler l’accueil calme', text: 'Le salut assis ou les quatre pattes au sol se renforcent dès le plus jeune âge, avec toute la famille.' },
      { title: 'Profiter de sa gourmandise… avec modération', text: 'La nourriture est un formidable outil d’apprentissage : prélevez les récompenses sur sa ration pour éviter le surpoids.' },
      { title: 'Le laisser mûrir', text: 'Ces chiens restent « ados » longtemps. Patience et constance : ils deviennent des compagnons formidables.' },
    ],
    activities: ['Rapport d’objets (dummies)', 'Natation', 'Recherche olfactive', 'Obéissance ludique', 'Canicross'],
    vigilance: ['Le surpoids', 'Les sauts d’accueil', 'Le vol et l’ingestion d’objets', 'Les oreilles après la baignade'],
    oslo: 'J’ai un copain labrador qui ne sort jamais sans un cadeau dans la gueule. Un conseil : offrez-lui un jouet à porter quand on sonne à la porte, il sautera beaucoup moins !',
  },
  {
    slug: 'levriers',
    name: 'Lévriers',
    emoji: '💨',
    hue: '#7a5a8a',
    short: 'Sprinteurs élégants, chassant à vue, étonnamment calmes à la maison.',
    examples: ['Whippet', 'Greyhound', 'Galgo', 'Lévrier afghan', 'Saluki', 'Petit lévrier italien'],
    origin:
      'Les lévriers chassaient à vue : repérer une proie au loin et la rattraper à une vitesse vertigineuse. Le greyhound peut dépasser les 60 km/h. Cette spécialisation en fait des sprinteurs, pas des marathoniens : de courtes accélérations, puis de longues siestes.',
    traits: ['Calmes à la maison', 'Sprinteurs', 'Chasse à vue', 'Sensibles', 'Frileux'],
    decode: [
      { obs: 'Il démarre comme une fusée à la vue d’un lapin ou d’un chat.', why: 'La chasse à vue est son métier : le mouvement au loin déclenche une poursuite quasi instantanée.' },
      { obs: 'Il dort presque toute la journée.', why: 'C’est normal ! Les lévriers sont des sprinteurs qui récupèrent longuement après l’effort.' },
      { obs: 'Il sursaute ou se fige face aux nouveautés.', why: 'Très sensibles, et souvent issus de refuges (galgos, greyhounds), ils ont parfois besoin de temps pour s’adapter.' },
      { obs: 'Il n’aime pas s’asseoir.', why: 'Sa morphologie rend la position assise inconfortable : préférez le « couché » ou le « debout ».' },
    ],
    education: [
      { title: 'Sécuriser les zones de liberté', text: 'Le rappel face à une proie en mouvement est très difficile : privilégiez des espaces clos pour le laisser sprinter.' },
      { title: 'Douceur et patience', text: 'Ce sont des chiens sensibles qui s’épanouissent dans un environnement calme et prévisible.' },
      { title: 'Adapter le matériel', text: 'Collier lévrier large ou harnais adapté, car leur tête fine peut glisser d’un collier classique. Manteau par temps froid.' },
      { title: 'Respecter le repos', text: 'Offrez-lui un couchage moelleux et un coin tranquille : il en a vraiment besoin.' },
    ],
    activities: ['Sprints en terrain clos', 'Coursing / lure coursing', 'Balades tranquilles', 'Jeux de flair calmes', 'Massages et détente'],
    vigilance: ['La poursuite des petits animaux', 'Le froid', 'Les chocs émotionnels chez les chiens adoptés', 'Les couchages trop durs'],
    oslo: 'Les lévriers ? Les champions du canapé ! Un whippet m’a battu à la course en trois secondes… puis il a dormi le reste de la journée. Respect.',
  },
  {
    slug: 'compagnie',
    name: 'Chiens de compagnie',
    emoji: '🧸',
    hue: '#b5576f',
    short: 'Sélectionnés avant tout pour vivre auprès de l’humain : de vrais chiens, dans un petit format.',
    examples: ['Bouledogue français', 'Cavalier King Charles', 'Chihuahua', 'Bichon', 'Caniche', 'Shih tzu'],
    origin:
      'Ces races ont été sélectionnées pour tenir compagnie à l’humain. Elles sont souvent très attachées à leur famille. Mais attention : un petit chien reste un chien, avec les mêmes besoins d’exploration, de flair, de dépense et de relations avec ses congénères.',
    traits: ['Très attachés', 'Adaptables', 'Expressifs', 'Sensibles', 'Souvent joueurs'],
    decode: [
      { obs: 'Il aboie beaucoup, notamment sur les grands chiens.', why: 'Un petit chien se sent plus vulnérable. Les aboiements sont souvent une façon de mettre de la distance face à ce qui l’inquiète.' },
      { obs: 'Il vous suit partout et pleure quand vous partez.', why: 'Sélectionnés pour être au contact de l’humain, ils sont plus exposés à l’hyper-attachement.' },
      { obs: 'Il grogne quand on le prend dans les bras.', why: 'On porte souvent les petits chiens sans leur demander leur avis. Le grognement est une communication à respecter.' },
      { obs: 'La propreté est longue à acquérir.', why: 'Leur petite vessie et la tendance à moins les sortir ralentissent l’apprentissage.' },
    ],
    education: [
      { title: 'L’éduquer comme un grand', text: 'Rappel, marche en laisse, autocontrôles : il a besoin des mêmes bases qu’un grand chien.' },
      { title: 'Le laisser marcher et explorer', text: 'Moins de bras, plus de balades à son rythme : il a besoin de renifler et de rencontrer le monde avec ses pattes.' },
      { title: 'Prévenir l’hyper-attachement', text: 'Travailler l’autonomie et la solitude progressivement, dès son arrivée.' },
      { title: 'Respecter son consentement', text: 'Apprenez-lui un signal avant de le porter, et laissez-le choisir les interactions, en particulier avec les enfants.' },
    ],
    activities: ['Jeux de flair', 'Apprentissage de tours', 'Balades variées', 'Hoopers ou mini-agility', 'Rencontres avec des chiens calmes'],
    vigilance: ['L’hyper-attachement', 'La respiration et la chaleur (races brachycéphales)', 'Les rencontres déséquilibrées avec les grands chiens', 'Le « syndrome du petit chien » (manque d’éducation)'],
    oslo: 'On me demande souvent si les petits chiens ont besoin d’éducation. Ma réponse : un chihuahua a autant de choses à dire qu’un bouvier ! Il faut juste se baisser pour l’écouter.',
  },
];

export const stages = [
  { key: 'chiot', label: 'Moins de 6 mois', title: 'L’âge des découvertes', text: 'C’est la période idéale pour la socialisation et les bonnes habitudes : propreté, solitude progressive, manipulations, découverte en douceur du monde. Beaucoup de sommeil (16 à 20 h par jour) et des séances très courtes.' },
  { key: 'junior', label: '6 mois à 2 ans', title: 'L’adolescence', text: 'Le rappel semble « disparaître », les limites sont testées, l’énergie déborde : c’est normal ! C’est une phase où la constance et la patience font toute la différence. Les acquis reviennent, plus solides.' },
  { key: 'adulte', label: '2 à 7 ans', title: 'L’âge adulte', text: 'Votre chien est dans la force de l’âge. C’est le bon moment pour travailler un comportement installé ou découvrir une activité canine adaptée à son profil.' },
  { key: 'senior', label: '8 ans et plus', title: 'L’âge de la sagesse', text: 'Comme Oslo ! Les besoins évoluent : balades plus douces mais toujours stimulantes, jeux de flair, attention aux articulations. Un chien senior apprend encore, et adore ça.' },
];

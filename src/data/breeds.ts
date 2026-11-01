// Breed name -> group slug (see groups.ts). Grouped by behavioural function rather than strict FCI groups.
const byGroup: Record<string, string[]> = {
  'bergers-bouviers': [
    'Border collie', 'Berger australien', 'Berger australien miniature', 'Berger américain miniature', 'Berger allemand', 'Berger belge malinois', 'Berger belge', 'Malinois',
    'Berger belge tervueren', 'Berger belge groenendael', 'Berger belge laekenois', 'Berger blanc suisse', 'Berger des Shetland', 'Shetland',
    'Colley', 'Colley à poil long', 'Colley barbu', 'Bearded collie', 'Bouvier de l’Entlebuch', 'Bouvier d’Appenzell', 'Bouvier des Flandres',
    'Welsh corgi pembroke', 'Welsh corgi cardigan', 'Corgi', 'Berger des Pyrénées', 'Beauceron', 'Berger de Beauce', 'Briard', 'Berger de Brie',
    'Berger picard', 'Berger hollandais', 'Bouvier australien', 'Australian cattle dog', 'Kelpie', 'Bobtail', 'Old english sheepdog',
    'Berger hongrois', 'Puli', 'Mudi', 'Schipperke', 'Berger de Bergame', 'Chien de berger catalan', 'Berger polonais de plaine', 'Berger croate',
  ],
  'molosses-gardiens': [
    'Rottweiler', 'Cane corso', 'Dogue allemand', 'Dogue de Bordeaux', 'Boxer', 'Bullmastiff', 'Mastiff', 'Mâtin napolitain', 'Mâtin espagnol',
    'Terre-neuve', 'Saint-Bernard', 'Leonberg', 'Montagne des Pyrénées', 'Patou', 'Berger de Maremme', 'Berger d’Anatolie', 'Kangal',
    'Berger du Caucase', 'Berger d’Asie centrale', 'Dobermann', 'Schnauzer géant', 'Schnauzer moyen', 'Hovawart', 'Bouvier bernois',
    'Grand bouvier suisse', 'Shar-pei', 'Dogue argentin', 'Fila brasileiro', 'Tosa', 'Rafeiro do Alentejo', 'Landseer', 'Pinscher allemand',
    'Bouledogue américain', 'Cão de gado transmontano', 'Dogue du Tibet',
  ],
  terriers: [
    'Jack Russell', 'Jack Russell terrier', 'Parson Russell terrier', 'Fox terrier', 'Fox terrier à poil dur', 'Yorkshire terrier', 'Yorkshire',
    'West Highland white terrier', 'Westie', 'Cairn terrier', 'Scottish terrier', 'Bull terrier', 'Bull terrier miniature',
    'Staffordshire bull terrier', 'Staffie', 'American Staffordshire terrier', 'Amstaff', 'American pit bull terrier', 'Pitbull', 'Pit bull', 'Airedale terrier',
    'Border terrier', 'Bedlington terrier', 'Terrier irlandais', 'Irish soft coated wheaten terrier', 'Kerry blue terrier', 'Welsh terrier',
    'Lakeland terrier', 'Norfolk terrier', 'Norwich terrier', 'Skye terrier', 'Terrier tibétain', 'Terrier de chasse allemand',
    'Teckel', 'Teckel nain', 'Teckel kaninchen', 'Schnauzer nain', 'Pinscher nain', 'Ratier', 'Ratier de Prague', 'Terrier australien',
    'Terrier brésilien', 'Silky terrier',
  ],
  'primitifs-nordiques': [
    'Husky', 'Husky sibérien', 'Malamute', 'Malamute de l’Alaska', 'Shiba inu', 'Shiba', 'Akita inu', 'Akita américain', 'Akita', 'Basenji',
    'Samoyède', 'Spitz allemand', 'Spitz nain', 'Loulou de Poméranie', 'Spitz japonais', 'Spitz finlandais', 'Chow-chow', 'Chien-loup tchécoslovaque',
    'Chien-loup de Saarloos', 'Chien du Groenland', 'Eurasier', 'Keeshond', 'Elkhound', 'Chien d’élan norvégien', 'Shikoku', 'Kishu', 'Jindo',
    'Podenco', 'Podenco ibicenco', 'Podenco canario', 'Cirneco de l’Etna', 'Pharaon', 'Chien du pharaon', 'Chien nu du Pérou', 'Xoloitzcuintle',
    'Thai ridgeback', 'Laïka', 'Chien de Canaan', 'Lapphund', 'Buhund norvégien', 'Spitz des Visigoths',
  ],
  'chiens-d-arret': [
    'Épagneul breton', 'Braque allemand', 'Braque allemand à poil court', 'Braque de Weimar', 'Weimaraner', 'Braque hongrois', 'Vizsla',
    'Braque français', 'Braque d’Auvergne', 'Braque de l’Ariège', 'Braque du Bourbonnais', 'Braque italien', 'Setter anglais', 'Setter irlandais',
    'Setter gordon', 'Pointer', 'Drahthaar', 'Braque allemand à poil dur', 'Griffon Korthals', 'Griffon d’arrêt à poil dur', 'Munsterlander',
    'Épagneul français', 'Épagneul picard', 'Épagneul de Pont-Audemer', 'Spinone', 'Pudelpointer', 'Épagneul de Münster', 'Langhaar',
  ],
  'chiens-courants': [
    'Beagle', 'Beagle harrier', 'Basset hound', 'Basset artésien normand', 'Basset fauve de Bretagne', 'Petit basset griffon vendéen',
    'Grand basset griffon vendéen', 'Griffon vendéen', 'Saint-Hubert', 'Bloodhound', 'Rhodesian ridgeback', 'Dalmatien', 'Harrier',
    'Anglo-français', 'Porcelaine', 'Ariégeois', 'Griffon nivernais', 'Grand bleu de Gascogne', 'Petit bleu de Gascogne', 'Foxhound',
    'Chien de rouge de Hanovre', 'Rouge de Bavière', 'Briquet griffon vendéen', 'Coonhound', 'Fauve de Bretagne', 'Billy', 'Poitevin',
  ],
  'rapporteurs-chiens-d-eau': [
    'Labrador', 'Labrador retriever', 'Golden retriever', 'Golden', 'Flat-coated retriever', 'Chesapeake bay retriever', 'Curly-coated retriever',
    'Retriever de la Nouvelle-Écosse', 'Toller', 'Cocker anglais', 'Cocker spaniel', 'Cocker américain', 'Springer anglais', 'English springer spaniel',
    'Welsh springer spaniel', 'Field spaniel', 'Clumber spaniel', 'Sussex spaniel', 'Barbet', 'Lagotto romagnolo', 'Lagotto',
    'Chien d’eau portugais', 'Chien d’eau espagnol', 'Chien d’eau irlandais', 'Kooikerhondje', 'Wetterhoun', 'Chien d’eau frison',
  ],
  levriers: [
    'Lévrier', 'Whippet', 'Greyhound', 'Galgo', 'Galgo espagnol', 'Lévrier espagnol', 'Lévrier afghan', 'Afghan', 'Saluki', 'Barzoï', 'Lévrier russe',
    'Petit lévrier italien', 'Levrette d’Italie', 'Sloughi', 'Azawakh', 'Lévrier irlandais', 'Irish wolfhound', 'Deerhound', 'Lévrier écossais',
    'Lévrier polonais', 'Lévrier hongrois', 'Lurcher',
  ],
  compagnie: [
    'Bouledogue français', 'Bulldog français', 'Frenchie', 'Bouledogue anglais', 'Bulldog anglais', 'Carlin', 'Cavalier King Charles', 'Cavalier', 'King Charles', 'Chihuahua', 'Bichon frisé',
    'Bichon maltais', 'Bichon havanais', 'Havanais', 'Bichon bolonais', 'Shih tzu', 'Lhassa apso', 'Caniche', 'Caniche nain', 'Caniche toy',
    'Caniche moyen', 'Caniche royal', 'Coton de Tuléar', 'Boston terrier', 'Papillon', 'Épagneul nain continental', 'Phalène', 'Pékinois',
    'Griffon bruxellois', 'Griffon belge', 'Petit brabançon', 'Épagneul japonais', 'Chin', 'Épagneul tibétain', 'Petit chien lion',
    'Chien chinois à crête', 'Kromfohrländer', 'Bichon', 'Russkiy toy',
  ],
};

export const breeds: { name: string; group: string }[] = Object.entries(byGroup)
  .flatMap(([group, names]) => names.map((name) => ({ name, group })))
  .sort((a, b) => a.name.localeCompare(b.name, 'fr'));

export const normalize = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’'`-]/g, ' ').replace(/\s+/g, ' ').trim();

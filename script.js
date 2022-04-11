
/*éléments HTML*/

var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var p3 = document.getElementById("p3")
var b13 = document.getElementsByClassName("b13")
var b13_1 = document.getElementById("b13_1")
var b13_2 = document.getElementById("b13_2")
var b13_3 = document.getElementById("b13_3")
var b13_4 = document.getElementById("b13_4")
var b13_5 = document.getElementById("b13_5")
var b13_6 = document.getElementById("b13_6")
var b13_7 = document.getElementById("b13_7")
var b13_8 = document.getElementById("b13_8")
var b13_9 = document.getElementById("b13_9")
var b13_10 = document.getElementById("b13_10")
var b13_11 = document.getElementById("b13_11")
var b13_12 = document.getElementById("b13_12")
var b13t = document.getElementById("b13t")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b1 = document.getElementById("b1")

const Lof = ["Nathalie Arthaud", "Nicolas Dupont-Aignan", "Anne Hidalgo", "Yannick Jadot", "Jean Lassale", "Marine Le Pen", "Emmanuel Macron", "Jean-Luc Mélenchon", "Valérie Pécresse", "Philipe Poutou", "Fabien Roussel", "Eric Zemmour"]
var lc =[]
var Lc2 = []
var Lm = []
var Lr = []
var Ls = []

/* TEXTES : CONSTANTES*/

const p_bienv = "<strong>Bienvenue !</strong><br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si vous ne savez pas pour qui voter pour <strong>l'élection présidentielle</strong>, alors vous êtes au bon endroit ! Nous allons vous proposer de sélectionner des candidat(e)s à comparer, puis un questionnaire vous sera posé avec les mesures que ces candidat(e)s souhaitent mettre en place (sans le nom qui correspond à la mesure, bien sûr). A la fin de ce court questionnaire, vous verrez vos résultats apparaitre avec votre <strong>candidat favori</strong>. Aucune de vos données ne seront enregistrées, mise à part le nombre de connexions sur le site."
const accept = "Etes-vous d'accord ?"
const continuer = "Oui, continuer"
const perror_candtwo = "Veuillez sélectionner au moins deux candidats"
const selec = "Sélectionnez les candidats que vous souhaitez comparer (au minimum 2)."
const next = "Suivant"
const next_un = "Mesure suivante"
const choisir = "Veuillez choisir une réponse"

const mes_nat = ["Supprimer la TVA", "Augmenter les taxes sur les profits des grandes entreprises", "Faire en sort qu'aucune retraite et aucun salaire ne sera à moins de 2000€", "Baisser le temps de travail", "Interdire les licenciements", "Mettre la retraite à 60 ans", "Supprimer les frais d'inscription à l'unviersité et augmenter les bourses étudiantes", "Mettre en place la gratuité totale des soins", "Retirer les militaires en Afrique et au Moyen-Orient", "Accueillir tous les réfugiés et migrants sans conditions", "Débarrasser l'Europe des frontières", "Instaurer la possibilité de révoquer des élus, par la population", "Allonger la durée du congé paternité afin qu'il soit identique au congé maternité", "Ne pas organiser les JO de Paris 2024", "Payer le permis de consuire par l'Etat pour les + défavorisés", "Prendre en compte le vote blanc", "Supprimer le secret industriel et commercial", "Interdire la chasse à courre et mettre fin à l'élevage intensif"]
const mes_nic = ["Supprimer toutes les restrictions sanitaires, notamment le pass vaccinal", "Augmenter de 8% le salaire de tous les salarié(e)s qui gagnent moins de 4800€ brut par mois", "Rétablir l'ISF (impôt sur la fortune", "Supprimer la loi votée en 2019 qui aménage les peines de prison courtes", "Abaisser la majorité pénale à 16 ans", "Créer 40 000 places de prison supplémentaires en France", "Expulser les délinquants étrangers à l'issue de leur peine, voir qu'ils purgent leur peine dans leur pays d'origine", "Renvoyer les mineurs isolés étrangers", "Supprimer le droit du sol", "Quitter l'UE ou changer ses règles pour la transformer en communauté des nations libres", "Faire adopter les grandes réformes par référendum", "Permettre aux français de proposer un référendum si 500 000 citoyens insrits sur les listes électorales signent une pétition", "Faire durer le mandat d'un président 7 ans, tout en supprimant la réélection et en instaurant un référend  um de mi-mandat permettant de destituer le Président de ses fonctions", "Prendre en compte le vote blanc et ainsi annuler le vote si la majorité vote blanc", "Créer un service civique national obligatoire à 18 ans pour tous, composé de missions d'intérêt général, et d'un facultatif passage de permis et conduire gratuit et/ou service militaire d'un an", "Verser, pour les jeunes et les personnes au chômage, de l'argent en échange de missions d'intérêt général à mi-temps", "Remettre en place le système de filières S, L, et ES", "Supprimer la part de contrôle continu au bac", "Passer, en école primaire, le temps consacré aux maths et au français de 9h à 15h par semaine", "Augmenter le salaire brut des enseignants de 20%", "Doubler le nombre de médecins en France", "créer 80 000 postes dans les Eh pad", "ajouter 250 000 places disponibles dans les crèches", "Maintenir le nucléaire comme aujourd'hui, c'est à dire à 70% de sa capacité de production", "Supprimer les éoliennes", "Développer les transports en commun plus propres", "Ouvrir les musées gratuitement le dimanche"]
const mes_ann = ["Accorder le droit de vote dès 16 ans", "Accorder le droit de vote aux étrangers pour les élections locales", "Augmenter le smic de 15% (+200€)", "Verser 5000€ à tous les jeunes dès leurs 18 ans", "Mettre en place un revenu minimum de 564€ par mois pour les jeunes défavorisés", "Augmenter les salaires des professeurs débutants, de telle façon que ces professeurs gagnent l'équivalent d'un cadre à bac+5 (2300€ net par mois)", "Le ou la ministre du climat sera n°2 du gouvernement", "Inscrire le changement climatique dans la Constitution", "Instaurer un ISF climatique, modulé en fonction de l'impact environnemental des placements financiers", "Rétablir un ministère uniquement dédié au droit des femmes", "Laisser la possibilité aux entreprises de faire travailler leurs salariés moins de 35 heures par semaine", "Permettre à ceux qui le veulent de se faire euthanasier légalement", "Créer un référendum d'initiative citoyenne permettant aux citoyens de proposer des référendums", "Supprimer Parcoursup pour le remplacer par un nouveau système", "Construire 150 000 logements sociaux par an", "Prolonger le congé paternité à 16 semaines", "Mettre en place l'égalité salariale hommes-femmes", "Atteindre 100% d'énergies renouvelables aussi rapidement que possible sans construire de nouvelles centrales nucléaires", "Mettre l'UE au coeur des projets entrepris"]
const mes_yan = ["Sortir de l'élevage industriel", "Sortir du nucléaire", "Mettre en place un ISF climatique, en fonction de l'impact environnemental", "Instaurer un revenu citoyen permettant à tous de toucher au minimum 920€ par mois", "Augmenter le smic de 125€", "Augmenter de 20% le salaire des enseignants", "Recruter 65 000 enseignants supplémentaires afin de baisser le nombre d'élèves dans les classes", "Augmenter de 10% le salaire du personnel soignant", "Mettre en place une semaine de 32 heures et/ou de 4 jours", "Allonger le mandat présidentiel à 7 ans au lieu de  5 ans", "Recentrer sur le pouvoir sur le Parlement", "Investir 1 milliard d'euros dans la lutte contre les violences sexistes et sexuelles", "Inscrire l'IVG (Interruption Volontaire de Grossesse) dans la Constitution", "Mettre une femme à la place de la présidence de l'assemblée nationale et une femme et au poste de premier ministre", "Supprimer une grande partie des accords avec la Chine, jugée comme une violente dictature", "Boycotter les marques de produits provenant de régions où sont persécutés les Ouïghours", "Réformer l'organisation de la police afin de changer le système actuel étant trop complaisant avec les violences policières", "Abaisser le droit de vote à 16 ans", "Supprimer Parcoursup", "Légaliser le cannabis", "Reconnaitre le burn-out et la dépression comme des maladies professionnelles", "Créer 700 000 nouveaux logements sociaux", "Conserver l'âge de départ à la retraite à 62 ans"]
const mes_jeal = ["Ouvrir 20 000 lits d'hôpitaux et recruter 100 000 soignants", "Mettre fin aux brevets pharmaceutiques sur les médicaments les plus utilisés pour réduire leur prix", "Rétablir l'ISF", "Elargir l'accès au RSA (Revenu de Solidarité Active) aux jeunes de 18 à 25 ans", "Favoriser la gratuité des transports publics pour les jeunes", "Etablir un prêt étudiant de 20 000 € que ceux-ci devront rembourser à un taux 0", "Rétablir un service militaire ou civil (au choix) pour les jeunes de 18 ans de 9 mois, les jeunes touchant 900€ par mois et l'année comptant comme un cotisation pour la retraite, durant lequel il sera possible de passer son permis de conduire", "Nationaliser les entreprises stratégiques privées", "Investir 3 milliards d'euros dans la ruralité, notamment avec l'instauration d'un ticket paysan permettant d'acheter des produits locaux", "Prioriser les aides de la PAC (Politique d'Agriculture Commune en UE) aux paysans qui respectent leurs terres", "Assurer un toit à tous les sans-abris, en encourageant le bénévolat ainsi qu'en proposant des logements peu chers et en aidant les sans-abris dans les démarches administratives", "Augmenter le SMIC à 1 400 € net par mois", "Instaurer le référendum d'initiative citoyenne, permettant des référendums si 700 000 citoyens signent une pétition", "Organiser un référendum permettant de décider d'un éventuel passage à 7 ans pour un mandat de président", "Reconnaitre le vote blanc, notamment lors du second tour à l'élection présidentielle où cela empêcherait potentiellement un des deux candidats de dépasser la barre des 50%, et entrainant ainsi une réélection totale (premier + second tour)", "Sortir la France de l'OTAN", "Retirer les troupes françaises présentes dans des pays étrangers sous condition d'un vote du Parlement ou d'un référendum", "Renforcer la cyberdéfense", "Investir dans les énergies renouvelables (mise à part les éoliennes), notamment en construisant de nouvelles centrales nucléaires", "Recruter 6 000 gendarmes et policiers", "Rétablir le cumul de mandats (permettant notamment à un député d'être également maire)", "Augmenter le salaire des enseignants en début de carrière, en le mettant à 2 400 € net par mois", "Intsaurer l'indépendance de l'allocation aux adultes handicapés et des revenus du conjoint", "Mettre en place un suivi psychologique plus important pour les élèves victimes de harcèlement"]
const mes_mar = ["Organiser un référendum sur l'immigration, entrainant l'instauration d'une éventuelle loi qui expulsera les étrangers qui n'ont pas travaillés depuis 1 an ou qui ont été condamnés par la justice, supprimera le droit du sol, réservera les allocations familiales aux français, interdira le RSA (Revenu de Solidarité Active) aux étrangers n'ayant pas travaillés plus de 5 ans en France, supprimera l'AME (Aide Médicale d'Etat) aux étrangers", "Rétablir les peines plancher (plafond minimum de peine en cas de récidive d'un crime ou d'un délit pour un individu)", "Etablir une peine de prison à perpétuité pour certains crimes", "S'allier avec d'autres pays de l'UE pour la changer","Supprimer l'impôt sur le revenu aux moins de 30 ans", "Supprimer l'impôt sur les sociétés des entrepreneurs de moins de 30 ans", "Mettre en place un prêt de 100 000 € : pour un couple dont la moyenne d'âge est moins de 30 ans, qui souhaite s'acheter un bien immobilier, ce prêt n'étant plus à rembourser dès le ou la troisième enfant du couplé né(e)", "Supprimer les cotisations patronales sur toutes les augmentations de salaire allant jusqu'à 10%, pour les salaires ne dépassant pas trois fois le smic", "Baisser la TVA à 5,5% sur le carburant, contre 20% avant", "Lancer la construction de 6 réacteurs nucléaires nouvelles génération, et démanteler toutes les éoliennes de France", "Maintenir l'âge de la retraite à 65 ans et baisser cet âge pour les jeunes qui commencent à travailler avant 20 ans", "Augmenter le buget du ministère de la défense de 30% d'ici 2027, pour qu'il atteigne 55 milliards d'euros", "Sortir de l'OTAN", "Rendre gratuit les trains pour les jeunes de - de 25 ans aux heures creuses (de 8h à 17h, et de 18h30 à 6h30 du matin du lundi au jeudi et le vendredi de 8h à 14h, et tout le week-end sauf le dimanche de 15h à 20h", "Créer 100 000 logements sociaux", "Revaloriser l'allocation aux handicapés", "Instaurer le référendum d'initiative citoyenne", "Organiser un référendum sur l'écologie", "Renationaliser les autoroutes", "Créer un ministère de la mer et de l'outre-mer", "Créer un ministère dédié à la lutte contre les fraudes", "Supprimer le pass vaccinal"]
const mes_emm = ["Repousser l'âge de départ à la retraite à 65 ans, excepté pour les personnes en situation de handicap et les métiers pénibles", "Encourager le cumul emploi-retraite (travailler + toucher une retraite)", "Passe de 645€ par mois de retraite à 1100€ minimum", "Favoriser l'utilisation d'un compte épargne temps (accumuler des heures de travail supplémentaires pour les transformer en long congé à un moment de sa vie)", "Verser le RSA uniquement si une activité de 15 à 20h par semaine est pratiquée (une formation, un apprentissage...)", "Verser à la source les aides sociales (remplir les informations nécessaires à un seul endroit pour être versé à un seul endroit)", "Augmenter la prime 'Macron' à 3 000€ maximum par an (prime versée directement dans la poche d'un salarié par un employeur sans taxes)", "Généraliser le SNU (Service National Universel) en le rendant potentiellement obligatoire", "Instaurer une allocation de 2 500€ par an pour financer les études des jeunes s'engageant dans la réserve de l'armée", "Augmenter le budget militaire à 50 milliards d'euros par an en 2025", "Mettre en place des référents de sante : des pharmaciens(iennes), infirmiers(ières)... qui pourront effectuer des actions médicales simples comme renvouveler un ordonnance, afin de lutter contre les déserts médicaux", "Recruter 50 000 infirmiers(ières) et aides-soignant(e)s de plus dans les Eh pad.", "Augmenter les heures de français et de mathématiques en primaire et en sixième", "Remettre les mathématiques dans le tronc commun au lycée", "Augmenter les heures de sport : 30min par jour en primaire et 2h supplémentaires chaque semaine au collège", "Augmenter de 50% les périodes de stage pour les lycéens et les étudiants", "Rémunérer les stages pour les lycéens", "Mettre en valeur la filière professionnelle au lycée", "Relancer le développement nucléaire avec la construction de 6 réacteurs ainsi que 8 autres éventuels d'ici 2050", "Développer l'énergie solaire", "Implanter 50 parcs éoliens en mer", "Rénover 700 000 logements par an pour qu'ils consomment moins d'énergie", "Réformer le droit d'asile pour les immigrés, afin de savoir plus vite quels immigrés sont éligibles, notamment avec le passage d'un test de français et une insertion professionnelle", "Renforcer les liens avec l'UE, notamment en créant une armée européenne", "Rester dans l'OTAN", "Rendre possible la réalisation d'un bilan de santé complet et gratuit à 25 ans, 45 ans et 60 ans"]
const mes_jeam = ["Augmenter le smic à 1 400€ net par mois", "Mettre en place un salaire maximum autorisé : le plus haut salaire dans une entreprise ne peut pas être 20 fois supérieur au plus bas salaire dans l'entreprise", "Verser une allocation d'autonomie d'un montant de 1 300€ par mois pour les jeunes de moins de 25 ans étudiant en université ou en lycée professionnel et indépendant de leurs parents", "Mettre en place un service militaire obligatoire pour tous les jeunes de moins de 25 ans, d'une durée de 9 mois, et pas obligatoirement axé sur l'aspect militaire, payé au salaire minimum", "Sortir du nucléaire et des énergies fossiles en les remplaçant progressivement par des énergies renouvelables d'ici 2050, comme le solaire ou l'éolien", "Inscrire la règle verte dans la Constitution : on ne peut pas prélever plus dans la nature que ce que la nature peut reconstituer", "Interdire tout les OGM et tout les pesticides", "Participer davantage dans les programmes de recherche sapatiale, notamment pour aller sur Mars", "Créer une université de l'espace, pour créer des emplois dans le secteur spatial", "Taxer beaucoup plus lourdement les héritages les plus élevés, pour réduire les inégalités : l'Etat prélève tout l'argent dépassant 12 millions d'euros lors d'un héritage", "Faire passer l'âge de la retraite à 60 ans", "Réduire le nombre d'années de travail pour les travails pénibles, notamment le travail de nuit à 32 ans", "Passer à la VIème République : donner moins de pouvoir au Président, plus aux citoyens, changer le fonctionnement des institutions, le tout par un référendum qui votera une nouvelle constitution écrite par un ensemble de citoyens", "Démanteler la BAC (Brigade Anti Criminalité), remplacée par une police de proximité spécialisée par zones", "Changer et/ou interdire certaines méthodes trop violentes de la police", "Renégocier les traités européens pour favoriser les produits locaux, en taxant ainsi les produits importés de l'étranger, et dans le cas où les négociations ne réussissent pas, ne pas respecter certains traités", "Quitter l'OTAN", "Utiliser 1 milliard d'euros pour lutter contre le sexisme et les violences faites aux femmes", "Rendre indépendant l'allocation adulte handicapée des revenus du conjoint", "Légaliser le cannabis", "Mettre fin au pass vaccinal", "Abaisser le droite de vote à 16 ans", "Nationaliser les aéroports, autoroutes, FDJ", "Bloquer les prix des produits de première nécessité"]
const mes_val = ["Réduire les dépenses de l'Etat, en supprimant 200 000 fonctionnaires, mais en recruter 50 000 dont la moitié seront dans le secteur de la santé", "Augmenter les salaires de 3%, permis par une prise en charge d'une partie des cotisations sociales par l'Etat", "Mettre fin à la règle des 35 heures de travail par semaine, pour les remplacer avec une base de 39 heures négociables en entreprises", "Augmenter l'âge de départ à la retraite à 65 ans", "Mettre en place pour les jeunes de moins de 26 ans non étudiants et non employés un revenu jeunes actifs de 500 à 670€ par mois si ces jeunes font des formations gratuites pour des métiers qui recrutent", "Ralentir l'immigration en mettant en place les quotas d'accueil qui fixent des nombres maximums d'immigrés par an, votés chaque année par le Parlement", "Mettre fin au droit du sol", "Investir 5 milliards d'euros dans les équipements policiers", "Construire 20 000 nouvelles places de prison", "Mettre en place un peine d'un an dès qu'un individu s'en prend aux forces de l'ordre (implique une modification de la Constitution)", "Miser sur le nucléaire, en modernisant les centrales nucléaires existantes, et en construisant de nouvelles centrales", "Développer des transports en commun plus propres", "Interdire à partir de 2035 la vente de voiture à carburant", "Ajouter 2h de français et 1h de mathématiques par semaine à l'école primaire", "Créer un examen avant l'entrée en sixième, qui permettra de repérér les élèves les plus en difficulté (et non, dans le cas général, empêcher un passage de l'élève en sixième)", "Confiner les personnes non-vaccinées en cas de nouveau pic de l'épidémie", "Améliorer les relations diplomatiques entre les Etats-Unis et la France", "Faire en sorte qu'une personne puisse avoir jusqu'à 200 000€ d'héritage sans payer d'impôts", "Charger un comité d'une grande simplification de l'administration française", "Abaisser la majorité pénale à 16 ans", "Prélever les amendes directement sur le salaire d'une personne", "Instaurer une prime de 900€ par an dès la naissance d'un enfant et jusqu'à sa majorité", "Créer une banque des jeunes pour les aider à financer leurs études ou leur entreprise"]
const mes_phi = ["Sortir du capitalisme", "L'Etat reprend le contrôle des secteurs clés de l'économie", "Augmenter le SMIC à 1800€ net par mois", "Instaurer une allocation d'autonomie pour les jeunes de 16 à 25 ans à 1800€ nets par mois", "Diminuer le temps de travail à 28h par semaine sur 4 jours", "Introduire une sixième semaine de congés payés chez les salariés", "Abaisser l'âge de départ à la retraite à 60 ans", "Interdire les licenciements", "Détruire l'arme nucléaire français", "Stopper toutes les opérations militaires français", "Sortir de toutes les alliances miliataires dont la France fait partie (notamment l'OTAN)", "Mettre fin aux ventes d'armes aux pays étrangers", "Atteindre 100% d'énergies renouvelables en France en 2050", "Démanteler et exproprier les groupes pétroliers ou les banques qui subventionnent ces extractions de gaz", "Rendre les transports en commun gratuits pour tout le monde", "Accueillir en France tout les migrants qui désirent venir", "Régulariser tous les sans-papiers", "Allonger le délai légal pour avorter à 24 semaines (5 mois et demi) après le début de la grossesse", "Rendre possible la PMA (Procréation Médicalement Assistée à tous les couples", "Mettre fin au pass vaccinal", "Embaucher 200 000 personnels hospitaliers et ouvrir 100 000 lits supplémentaires", "Rembourser tous les soins à 100% pour tout le monde", "Accorder le droit de vote aux étrangers à toutes les élections en France", "Rembourser à 100% les parcours de transition pour toutes les personnes trans", "Réquisitionnner tous les logements vides en France pour les sans abris"]
const mes_fab = ["Mettre le SMIC à 1500€", "Instaurer une semaine de 32 heures de travail", "Abaisser l'âge de départ à la retraite à 60 ans", "Permettre aux personnes ayant un travail pénible de partir plus tôt", "Augmenter le budget de l'éducation nationale de 45% (augmentation de 25 milliards d'euros", "Augmenter le buget de l'enseignement supérieur de 43%", "Recruter 500 000 fonctionnaires, principalement du personnel soignant", "Recruter 100 000 personnes dans les maisons de retraite", "Recruter 90 000 enseignants", "Augmenter le salaire des enseignants de 30%", "Créer un revenu étudiant de 850€ par mois minimum pour tous les étudiants sans conditions", "Etendre l'accès au RSA (Revenu de Solidarité Active) aux jeunes de 18 à 25 ans", "Les personnes en alternance seront payées au moins au smic", "Donner à chaque jeune qui termine ses études une offre d'emploi en CDI qui correspond à ses compétences", "Remettre en place l'ISF (Impot Sur la Fortune) et le tripler", "Mettre en place le repas à 1€ dans les cantines scolaires", "Avoir une nourriture plus saine en utilisant des produits français sans pesticides", "Interdire l'importation de produits ne respectant pas les normes françaises", "Augmenter les retraites agricoles afin qu'elles ne soient pas en dessous du SMIC", "Avoir 500 000 agriculteur d'ici 2030 en France, en créant des postes d'enseignant(e)s et formateurs(trices) agricoles", "Miser sur le nucléaire, en construisant 6 à 8 réacteurs nucléaires nouvelle génération,tout en continuant à développer les énergies renouvelables", "Créer une police nationale de proximité afin de reconquérir certains quartiers dits abandonnés par l'Etat, et de recréer un lien entre la police et la population", "Augmenter les salaires des policiers", "Instaurer une infraction spécifique concernant les violences faites contre les policiers", "Quitter l'OTAN, afin de se détacher des Etat-Unis sur le plan militaire", "Créer une nouvelle organisation militaire avec l'Europe et les Etats voisins", "Mettre fin aux opérations militaires françaises à létranger et fermer toutes les bases militaires à l'étranger", "Réouvrir les maternités de proximité", "Faire en sorte que tout le monde dispose d'un établissement de santé à moins de 30min de transport depuis chez soi", "Rouvrir de petites lignes SNCF à travers la France", "Supprimer l'élection du Président au suffrage universel, celui-ci n'ayant plus qu'un rôle de représentation"]
const mes_eri = ["Réduire l'immigration à 0", "Mettre fin au regroupement familial (possibilité pour les étrangers avec un titre de séjour de rejoindre les membres de leur famille)", "Limiter le droit d'asile à quelques dizaines ou centaines de personnes par an", "Accueillir uniquement les meilleurs étudiants étrangers", "Reduire le droit du sol", "Supprimer les aides sociales (les allocations familiales, les aides au logement, le RSA (Revenu de Solidarité Acitve), le minimum vielliesse, l'aide médicale d'Etat) aux étrangers qui ne sont pas européens", "Expulser les étrangers indésirables : qui ne travaillent pas depuis 6 mois, arrivés clandestinement, criminels ou délinquants", "Retirer la nationalité française à tout les criminels et délinquants multirécidivistes qui ont une double nationalité", "Abaisser la majorité pénale à 16 ans", "Les parents de mineurs pénaux ne receveront plus d'aides financières de l'Etat", "Baisser les impôts sur les importations et les productions", "Supprimer les impôts payés lors de la transmission des entreprises familiales", "Supprimer la contribution sociale généralisée pour les personnes gagnant moins de 2000€ net par mois", "Supprimer les impôts et les cotisations sociales sur les heures supplémentaires", "Instaurer une prime 0 charges directement de l'entreprise vers le salarié", "Instaurer au collège les classes de niveaux regroupant les élèves bons d'un côté et les élèves moins forts de l'autre", "Remettre la blouse à l'école primaire", "Interdiction des signes religieux dans l'espace publique à l'exception des professionnels de la religion", "Développer le nucléaire à grande échelle en ouvrant 14 réacteurs d'ici 2050", "Interdire la construction d'éoliennes sur terre et sur mer", "Intediction de la PMA (Procréation Médicalement assistée) sans père", "Interdire aux parents de donner un prénom étranger à leurs enfants", "Verser 10 000€ à chaque famille vivant en zone rurale pour chaque naissance", "Supprimer le permis à point", "Faire rembourser par l'entreprise la moitié des frais de carburant de leurs salariés"]


/* PAGE DE DEBUT : 1*/

/* paragraphes pour cette partie */

p1.innerHTML = p_bienv
p2.innerHTML = accept
p3.innerHTML = ""
b1.innerHTML = continuer
b2.style.visibility = "hidden"
b3.style.visibility = "hidden"
b13t.style.visibility = "hidden"    
for (let i = 0; i<b13.length; i++) {
    b13[i].style.visibility = "hidden"
}

/* évènement pour passer à la suite */

b1.addEventListener("click", function() {
    if (b1.textContent == continuer) {
        stape2()
    }
})

/* PAGE DE CHOIX DES CANDIDATS : 2*/

function stape2 () {
    /* paragraphes pour cette partie */

    p1.innerHTML = ""
    p2.innerHTML = selec
    b13t.style.visibility = "visible"
    for (let i = 0; i<b13.length; i++) {
        b13[i].style.visibility = "visible"
    }
    b1.innerHTML = next

    /* évènement pour passer à la suite */

    var n_candidats = 0


    b1.addEventListener("click", function(){
        if (b1.textContent == "Suivant")
            stape3()
    })

    for (let i = 0; i<b13.length; i++) {
        b13[i].addEventListener("click", function() {
            if (b13[i].style.color != "red") {
                b13[i].style.color = "red"
                n_candidats += 1
                lc.push(b13[i].textContent)
                if (n_candidats == 12) {
                    b13t.style.color = "red"
                }
            }
            else {
                b13[i].style.color = "black"
                n_candidats = n_candidats - 1
                lc.splice(lc.indexOf(b13[i].textContent), 1)
                b13t.style.color = "black"
            }
        })
    }

    b13t.addEventListener("click", function () {
        for (let j = 0; j<b13.length; j++) {
            b13[j].style.color = "red"
        }
        b13t.style.color = "red"
        n_candidats = 12
        lc = ["Nathalie Arthaud", "Nicolas Dupont-Aignan", "Anne Hidalgo", "Yannick Jadot", "Jean Lassale", "Marine Le Pen", "Emmanuel Macron", "Jean-Luc Mélenchon", "Valérie Pécresse", "Philipe Poutou", "Fabien Roussel", "Eric Zemmour"]
    })
}


/* PAGE DE QUESTIONNAIRE : 3*/

function stape3 () {

    /* paragraphes pour cette partie */

    p1.style.visibility = "visible"
    b2.innerHTML = "Oui"
    b3.innerHTML = "Non"
    b2.style.visibility = "visible"
    b3.style.visibility = "visible"
    p2.innerHTML = "Approuvez-vous cette mesure ?"
    for (let l = 0; l<b13.length; l++) {
        b13[l].style.visibility = "hidden"
    b13t.style.visibility = "hidden"
    }
    


    Lc2 = lc
    
    if (lc.indexOf("Nathalie Arthaud") !== -1) {
        for (let k = 0; k<mes_nat.length; k++) {
            Lm.push(mes_nat[k])
        }
        lc.splice(lc.indexOf("Nathalie Arthaud"), 1)
        var nat = true
    }

    if (lc.indexOf("Nicolas Dupont-Aignan") !== -1) {
        for (let k = 0; k<mes_nic.length; k++) {
            Lm.push(mes_nic[k])
        }
        lc.splice(lc.indexOf("Nicolas Dupont-Aignan"), 1)
        var nic = true
    }

    if (lc.indexOf("Anne Hidalgo") !== -1) {
        for (let k = 0; k<mes_ann.length; k++) {
            Lm.push(mes_ann[k])
        }
        lc.splice(lc.indexOf("Anne Hidalgo"), 1)
        var ann = true
    }

    if (lc.indexOf("Yannick Jadot") !== -1) {
        for (let k = 0; k<mes_yan.length; k++) {
            Lm.push(mes_yan[k])
        }
        lc.splice(lc.indexOf("Yannick Jadot"), 1)
        var yan = true
    }

    if (lc.indexOf("Jean Lassale") !== -1) {
        for (let k = 0; k<mes_jeal.length; k++) {
            Lm.push(mes_jeal[k])
        }
        lc.splice(lc.indexOf("Jean Lassale"), 1)
        var jeal = true
    }

    if (lc.indexOf("Marine Le Pen") !== -1) {
        for (let k = 0; k<mes_mar.length; k++) {
            Lm.push(mes_mar[k])
        }
        lc.splice(lc.indexOf("Marine Le Pen"), 1)
        var mar = true
    }

    if (lc.indexOf("Emmanuel Macron") !== -1) {
        for (let k = 0; k<mes_emm.length; k++) {
            Lm.push(mes_emm[k])
        }
        lc.splice(lc.indexOf("Emmanuel Macron"), 1)
        var emm = true
    }

    if (lc.indexOf("Jean-Luc Mélenchon") !== -1) {
        for (let k = 0; k<mes_jeam.length; k++) {
            Lm.push(mes_jeam[k])
        }
        lc.splice(lc.indexOf("Jean-Luc Mélenchon"), 1)
        var jeam = true
    }

    if (lc.indexOf("Valérie Pécresse") !== -1) {
        for (let k = 0; k<mes_val.length; k++) {
            Lm.push(mes_val[k])
        }
        lc.splice(lc.indexOf("Valérie Pécresse"), 1)
        var val = true
    }

    if (lc.indexOf("Philipe Poutou") !== -1) {
        for (let k = 0; k<mes_phi.length; k++) {
            Lm.push(mes_phi[k])
        }
        lc.splice(lc.indexOf("Philipe Poutou"), 1)
        var phi = true
    }

    if (lc.indexOf("Fabien Roussel") !== -1) {
        for (let k = 0; k<mes_fab.length; k++) {
            Lm.push(mes_fab[k])
        }
        lc.splice(lc.indexOf("Fabien Roussel"), 1)
        var fab = true
    }

    if (lc.indexOf("Eric Zemmour") !== -1) {
        for (let k = 0; k<mes_eri.length; k++) {
            Lm.push(mes_eri[k])
        }
        lc.splice(lc.indexOf("Eric Zemmour"), 1)
        var eri = true
    }
    
    var n_q = Lm.length


    var z = 0

    p1.innerHTML = Lm[0]
    p3.innerHTML = "Il reste"
    p3.innerHTML += n_q.toString()
    p3.innerHTML += " questions"
    b1.innnerHTML = "Mesure suivante"
    var rep = ""    

    b2.addEventListener("click", function() {
        b2.style.color = "red"
        b3.style.color = "black"
        rep = "oui"
    })
    b3.addEventListener("click", function() {
        b3.style.color = "red"
        b2.style.color = "black"
        rep = "non"
    })
    b1.addEventListener("click", function() {
        if (b2.style.color === "red" || b3.style.color === "red") {
            if (z === 0) {
                Lm = _.shuffle(Lm)
            }
            Lr.push(rep)
            b2.style.color = "black"
            b3.style.color = "black"
            z += 1
            p1.innerHTML = Lm[z]
            p3.innerHTML = "Il reste "
            p3.innerHTML += n_q.toString()
            p3.innerHTML += " questions"
            n_q -= 1
            if (Lr.length == Lm.length) {
                stape4()
            }
        }
    })
}
/* PAGE DE REPONSE : 4*/

function stape4() {
    b1.style.visibility = "hidden"
    b2.style.visibility = "hidden"
    b3.style.visibility = "hidden"
    p2.style.visibility = "hidden"

    if (typeof nat !== undefined) {
        nat = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_nat.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    nat += 1
                }
            }
        }
    }

    if (typeof nic !== undefined) {
        nic = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_nic.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    nic += 1
                }
            }
        }
    }

    if (typeof ann !== undefined) {
        ann = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_ann.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    ann += 1
                }
            }
        }
    }

    if (typeof yan !== undefined) {
        yan = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_yan.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    yan += 1
                }
            }
        }
    }

    if (typeof jeal !== undefined) {
        jeal = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_jeal.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    jeal += 1
                }
            }
        }
    }

    if (typeof mar !== undefined) {
        mar = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_mar.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    mar += 1
                }
            }
        }
    }

    if (typeof emm !== undefined) {
        emm = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_emm.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    emm += 1
                }
            }
        }
    }

    if (typeof jeam !== undefined) {
        jeam = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_jeam.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    jeam += 1
                }
            }
        }
    }

    if (typeof val !== undefined) {
        val = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_val.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    val += 1
                }
            }
        }
    }

    if (typeof phi !== undefined) {
        phi = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_phi.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    phi += 1
                }
            }
        }
    }

    if (typeof fab !== undefined) {
        fab = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_fab.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    fab += 1
                }
            }
        }
    }

    if (typeof eri !== undefined) {
        eri = 0
        for (let f = 0; f<Lm.length; f++) {
            if (mes_eri.indexOf(Lm[f]) !== -1) {
                if (Lr[f] === "oui") {
                    eri += 1
                }
            }
        }
    }


    nat = parseInt((nat/(mes_nat.length))*100)
    nic = parseInt((nic/(mes_nic.length))*100)
    ann = parseInt((ann/(mes_ann.length))*100)
    yan = parseInt((yan/(mes_yan.length))*100)
    jeal = parseInt((jeal/(mes_jeal.length))*100)
    mar = parseInt((mar/(mes_mar.length))*100)
    emm = parseInt((emm/(mes_emm.length))*100)
    jeam = parseInt((jeam/(mes_jeam.length))*100)
    val = parseInt((val/(mes_val.length))*100)
    phi = parseInt((phi/(mes_phi.length))*100)
    fab = parseInt((fab/(mes_fab.length))*100)
    eri = parseInt((eri/(mes_eri.length))*100)

    function valeur_max(tableau){
        var max=0;
    for (let i=0;i<tableau.length;i++) if(tableau[i]>max) max=tableau[i];
    return max;
    }
    
    Ls = [nat, nic, ann, yan, jeal, mar, emm, jeam, val, phi, fab, eri]
    function trouv_cand (index) {
        return Lof[index]
    }

    var pos1 = [valeur_max(Ls), trouv_cand(Ls.indexOf(valeur_max(Ls)))]
    Ls[Ls.indexOf(valeur_max(Ls))] = 0
    var pos2 = [valeur_max(Ls), trouv_cand(Ls.indexOf(valeur_max(Ls)))]
    txt = ( pos2[0], "pourcents des mesures de", pos2[1])
    p1.innerHTML = ""
    p1.innerHTML += "<strong>Test terminé</strong> !<br><br>Votre candidat(e) favorit(e) est "
    p1.innerHTML += pos1[1].toString()
    p1.innerHTML += " : vous êtes d'accord avec "
    p1.innerHTML += pos1[0].toString()
    p1.innerHTML += " % de ses mesures. <br>Vous êtes d'accord avec "
    p1.innerHTML += pos2[0].toString()
    p1.innerHTML += " % des mesures de "
    p1.innerHTML += pos2[1].toString()
}

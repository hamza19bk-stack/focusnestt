/**
 * TEXTES PROPRES À CE SITE — fusionnés par-dessus src/data/content.ts.
 *
 * Laisse l'objet vide pour garder les textes du template.
 * Clés possibles : ui, home, about, services, booking, contact, notFound, offers.
 * Seules les valeurs indiquées remplacent celles du template ; tout le reste est conservé.
 * Pour `offers` (tableau), l'élément N remplace les champs de la N-ième offre.
 *
 * Mêmes règles que content.ts : aucun fait inventé (chiffres, diplômes, avis),
 * aucune promesse commerciale, aucune allégation médicale, ni prix ni tarif.
 *
 * FocusNestt — angle : un cadre rassurant pour débuter. La peur du regard des
 * autres, le fait de ne pas savoir quoi faire, les premiers pas accompagnés
 * en confiance. Bienveillance et sécurité avant tout le reste.
 */
import { isSet, nb } from '../lib/utils';
import { site } from './site';

/* Ville ou zone gérée automatiquement par site.ts (jamais écrite en dur ici). */
const place = isSet(site.contact.area) ? site.contact.area : isSet(site.contact.city) ? site.contact.city : '';

export const overrides: Record<string, unknown> = {
  // ================================================================ ACCUEIL
  home: {
    seo: {
      title: place
        ? `Coach sportif à ${place}${nb}: débuter dans un cadre rassurant`
        : `Coach sportif${nb}: débuter dans un cadre rassurant`,
      description: `Coaching sportif pour des premiers pas en confiance${nb}: séances en présentiel ou en visio et programmes à distance, dans un cadre calme où chaque geste est montré avant d’être demandé.`,
    },
    hero: {
      eyebrow: 'Coaching sportif pour débuter',
      titleLead: 'Un endroit où commencer,',
      titleMark: 'loin du regard des autres',
      lead: `Ne pas savoir quoi faire, craindre de mal s’y prendre, redouter d’être jugée ou jugé${nb}: voilà ce qui retient vraiment. Ici, tout démarre au calme, avec des consignes simples et un coach qui montre le mouvement avant de te le demander.`,
      visualLabel: 'Premiers pas accompagnés',
    },
    highlights: {
      eyebrow: 'Le cadre',
      title: 'Ce qui rend le premier pas plus simple',
      subtitle: `Quatre repères pensés pour celles et ceux qui n’ont jamais osé pousser la porte d’une salle${nb}: ils enlèvent la pression avant même la première séance.`,
      items: [
        { title: 'Un bilan, pas un examen', text: 'Tu dis où tu en es, ce que tu n’as jamais fait et ce qui t’inquiète. Personne ne note, personne ne compare, et aucune réponse ne fait sourire.' },
        { title: 'Le mouvement montré d’abord', text: 'Chaque geste t’est présenté calmement, décomposé, puis essayé à vide. Tu ne te retrouves jamais face à un exercice dont tu ignores tout.' },
        { title: 'Le droit de dire non', text: `Un exercice qui intimide, une consigne qui gêne, une journée sans énergie${nb}: tu le signales et on adapte sur place. Rien ne t’est imposé.` },
        { title: 'Des débuts de taille raisonnable', text: 'Les premières séances restent volontairement modestes. Mieux vaut repartir avec l’envie de revenir qu’avec des courbatures et un mauvais souvenir.' },
      ],
    },
    offers: {
      eyebrow: 'Les services',
      title: 'Choisis le cadre où tu te sentiras bien',
    },
    method: {
      eyebrow: 'La méthode',
      title: 'Quatre étapes pour démarrer en confiance',
      subtitle: `Tu sais à l’avance ce qui t’attend${nb}: aucun test d’entrée, aucune mise en difficulté pour voir ce que tu vaux.`,
      steps: [
        { title: 'On parle avant de bouger', text: `Ton histoire avec le sport, ce qui t’a arrêtée ou arrêté par le passé, ce qui t’intimide aujourd’hui${nb}: rien ne commence tant que tu n’es pas à l’aise.` },
        { title: 'Les tout premiers gestes', text: 'Quelques mouvements simples, sans charge, dans un environnement calme. Ils servent à situer ton point de départ et surtout à te montrer que c’est à ta portée.' },
        { title: 'Un plan volontairement court', text: 'Peu d’exercices, bien choisis, écrits noir sur blanc. Tu arrives en séance en sachant exactement ce que tu vas faire, et cela change tout.' },
        { title: 'La confiance qui s’installe', text: 'À force de répétition, les gestes deviennent familiers. On ajoute de la difficulté seulement quand les précédents te semblent faciles.' },
      ],
    },
    cta: {
      eyebrow: 'Premier pas',
      title: `Et si tu essayais${nb}?`,
      lead: 'Une première séance sans enjeu, pour poser toutes tes questions, voir à quoi cela ressemble vraiment et décider ensuite, tranquillement.',
    },
  },

  // =============================================================== À PROPOS
  about: {
    seo: {
      title: `À propos${nb}: un coach sportif pour des débuts en douceur`,
      description: `Une approche du coaching sportif faite pour les débuts${nb}: cadre calme, gestes montrés avant d’être demandés et progression prudente, sans jugement sur ton passé sportif.`,
    },
    hero: {
      eyebrow: 'À propos',
      titleLead: 'Un coaching',
      titleMark: 'qui met à l’aise',
      lead: `Beaucoup de personnes n’arrêtent pas le sport par manque de volonté, mais parce qu’elles se sont senties déplacées dès la première séance. Le parti pris est l’inverse${nb}: un cadre calme, des consignes simples et le temps qu’il faut pour que les gestes deviennent naturels.`,
    },
    approach: {
      eyebrow: 'L’approche',
      title: 'Quatre convictions pour bien démarrer',
      subtitle: 'Elles orientent chaque séance, du premier message jusqu’au moment où tu te sens chez toi dans ton entraînement.',
      steps: [
        { title: 'Enlever la peur avant tout', text: 'Tant que l’appréhension domine, aucun programme ne tient. On commence donc par créer les conditions dans lesquelles tu te sens en sécurité.' },
        { title: 'Aucun passé sportif n’est un problème', text: `Des années sans activité, un souvenir de cours de sport difficile, une tentative abandonnée${nb}: ce sont des points de départ comme les autres, jamais des reproches.` },
        { title: 'Montrer plutôt que demander', text: 'Un exercice se présente, se décompose et s’essaie doucement. Une consigne lancée sans démonstration met mal à l’aise et se retient mal.' },
        { title: 'Avancer quand tu es à l’aise', text: 'La difficulté augmente lorsque le geste précédent est devenu confortable, pas parce qu’un plan théorique l’a décidé à ta place.' },
      ],
    },
    philosophy: {
      eyebrow: 'La philosophie',
      title: 'Bienveillant sur le ton, sérieux sur la sécurité',
      subtitle: 'Trois principes qui font de chaque séance un moment où tu te sens à ta place.',
      items: [
        { title: 'Doux avant d’être exigeant', text: 'Une séance réussie, au début, est une séance qui te donne envie de revenir. L’exigence technique vient ensuite, quand la confiance est installée.' },
        { title: 'Rassurant à chaque étape', text: 'Tu sais où tu vas, ce qui va se passer et pourquoi. Aucune surprise, aucun exercice sorti de nulle part au milieu d’une séance.' },
        { title: 'Sûr avant d’être impressionnant', text: 'Les mouvements spectaculaires attendront. La priorité va à des gestes maîtrisés, exécutés dans de bonnes conditions, sans risque inutile.' },
      ],
      commitmentsTitle: 'Ce que tu trouveras ici',
      commitments: [
        'Un accueil sans jugement sur ton niveau ni sur ton passé sportif.',
        'Des exercices toujours montrés avant de t’être demandés.',
        'La possibilité de dire qu’un mouvement t’intimide, à tout moment.',
        'Une progression qui attend que tu sois à l’aise pour accélérer.',
      ],
      notHereTitle: 'Ce que tu ne trouveras pas ici',
      notHere: [
        'Des séances où l’on crie pour motiver.',
        'Des comparaisons avec les personnes accompagnées avant toi.',
        `Des exercices imposés «${nb}parce qu’il faut bien en passer par là${nb}».`,
        `Des conseils médicaux${nb}: pour toute question de santé, ton médecin reste l’interlocuteur de référence.`,
      ],
      quote: `«${nb}Le plus dur n’est pas la séance${nb}: c’est d’oser la première.${nb}»`,
    },
    values: {
      eyebrow: 'Les valeurs',
      title: 'Ce qui rend le cadre sûr',
      subtitle: 'Des repères valables dès le premier message et tout au long de l’accompagnement.',
      items: [
        { title: 'Écoute', text: 'Tes appréhensions sont des informations utiles, pas des faiblesses. Les dire permet d’adapter la séance avant qu’elles ne te bloquent.' },
        { title: 'Patience', text: 'Le temps d’apprentissage varie énormément d’une personne à l’autre. On avance au tien, sans chercher à rattraper un retard imaginaire.' },
        { title: 'Discrétion', text: 'Ce que tu confies reste entre nous. Tes doutes, ton point de départ et tes difficultés ne servent jamais d’exemple à quelqu’un d’autre.' },
        { title: 'Sécurité', text: 'Charges modestes, gestes maîtrisés, échauffement tenu. Tout est organisé pour que tu repartes de séance en bon état et en confiance.' },
      ],
    },
    formats: {
      eyebrow: 'Travailler ensemble',
      title: 'Plusieurs cadres, la même attention',
      subtitle: `Certaines personnes débutent plus facilement chez elles, d’autres accompagnées sur place${nb}: les deux se valent.`,
      texts: {
        inPerson: 'Des séances individuelles en salle, à domicile ou en extérieur, sans public autour et avec quelqu’un qui corrige chaque geste sur le moment.',
        online: `En visio, tu restes dans ton environnement habituel et tu es guidée ou guidé en direct${nb}: un format apprécié quand la salle intimide encore.`,
        remote: 'Un programme écrit, détaillé et volontairement simple, pour t’entraîner chez toi à l’abri des regards, avec des points de suivi réguliers.',
      },
    },
    cta: {
      eyebrow: 'La suite',
      title: `Tu hésites encore${nb}?`,
      lead: 'Dis simplement ce qui te retient. Poser la question ne t’engage à rien, et c’est déjà un premier pas.',
    },
  },

  // =============================================================== SERVICES
  services: {
    seo: {
      title: `Services de coaching sportif${nb}: des formats faits pour débuter`,
      description: `Séances individuelles en présentiel ou en visio, programme d’entraînement simple et repères nutritionnels${nb}: des formats de coaching sportif pensés pour des premiers pas en confiance.`,
    },
    hero: {
      eyebrow: 'Les services',
      titleLead: 'Plusieurs cadres,',
      titleMark: 'un seul état d’esprit',
      lead: `Que tu préfères être accompagnée ou accompagné sur place, guidé en visio ou t’entraîner chez toi, la règle reste la même${nb}: on commence doucement, on montre avant de demander, et on n’accélère qu’une fois que tu es à l’aise.`,
    },
    offers: {
      eyebrow: 'Le détail',
      title: 'Trouve le format le moins intimidant',
    },
    common: {
      eyebrow: 'Quel que soit le format',
      title: 'Les garde-fous communs',
      subtitle: `Quatre repères présents dans chaque accompagnement${nb}: ce sont eux qui rendent le début supportable, puis agréable.`,
      items: [
        { title: 'Un départ sans jugement', text: 'Aucune séance ne commence sans avoir posé calmement ton point de départ, tes craintes et un objectif que tu trouves toi-même atteignable.' },
        { title: 'Une progression prudente', text: 'La difficulté avance par petites marches, jamais par bonds. Tu dois pouvoir finir chaque séance sans t’être fait peur.' },
        { title: 'Une parole toujours ouverte', text: `Un exercice t’angoisse ou te paraît au-dessus de tes moyens${nb}? Tu le dis directement à ton coach et le contenu change.` },
        { title: 'Des repères encourageants', text: `Gestes maîtrisés, aisance dans les escaliers, souffle plus long${nb}: on suit ce qui se sent au quotidien, et pas seulement ce qui se mesure.` },
      ],
    },
    process: {
      eyebrow: 'Comment ça se passe',
      title: 'Du premier message à la première séance',
      subtitle: `Chaque étape t’est décrite à l’avance${nb}: tu sais exactement dans quoi tu mets les pieds.`,
      steps: [
        { title: 'Le premier message', text: 'Tu écris ou tu réserves. Tu peux raconter aussi bien ton objectif que ce qui t’empêchait jusqu’ici de franchir le pas.' },
        { title: 'Le bilan tranquille', text: 'Habitudes, niveau de départ, lieu d’entraînement, points de vigilance éventuels. On fixe ensemble un objectif que tu juges raisonnable.' },
        { title: 'Le plan de départ', text: 'Peu d’exercices, des consignes claires, un rythme réaliste. Tu repars avec un document que tu peux relire tranquillement chez toi.' },
        { title: 'Les premières séances', text: `On avance geste par geste, avec des corrections douces. Au bout de quelques séances, on refait le point${nb}: ce qui est devenu facile, ce qui demande encore du temps.` },
      ],
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: `Une inquiétude avant de te lancer${nb}?`,
      lead: 'Pose-la sans détour. Une première séance permet surtout de découvrir l’ambiance et de vérifier par toi-même que le cadre te convient.',
    },
  },

  // ============================================================ RÉSERVATION
  booking: {
    seo: {
      title: `Réservation${nb}: une première séance de coaching sportif sans pression`,
      description: `Réserve ta première séance de coaching sportif${nb}: un échange calme, quelques mouvements simples et un point de départ défini ensemble, sans test d’entrée.`,
    },
    hero: {
      eyebrow: 'Réservation',
      titleLead: 'Une première séance',
      titleMark: 'sans pression',
      lead: `Pas de test d’entrée, pas de performance à montrer, pas de discours commercial. On discute, on essaie quelques mouvements simples et tu repars avec un point de départ${nb}— rien de plus, rien de moins.`,
    },
    cta: {
      eyebrow: 'Dernier détail',
      title: 'Le plus dur, c’est de prendre rendez-vous',
      lead: 'La séance, elle, est bien plus simple que tu ne l’imagines. Tu ressors en sachant où tu en es et par quoi commencer.',
    },
  },

  // ================================================================ CONTACT
  contact: {
    seo: {
      title: `Contact${nb}: poser une question à ton coach sportif`,
      description: `Une hésitation avant de commencer le sport${nb}? Écris, appelle ou réserve directement ta première séance de coaching sportif.`,
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: `Quelque chose te retient${nb}?`,
      titleMark: 'Dis-le simplement',
      lead: `Pas de formulaire anonyme${nb}: tu écris ou tu appelles, et ton coach te répond. Tu peux poser la question qui te semble bête, celle qui t’empêche de franchir le pas${nb}— c’est souvent la plus utile.`,
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: 'Une question aujourd’hui, une séance quand tu le sens',
      lead: `Si tu veux seulement savoir comment ça se passe, écris-nous. Si tu te sens d’essayer, réserve une première séance${nb}: elle sert justement à lever les doutes.`,
    },
  },

  // ================================================================= OFFRES
  offers: [
    {
      summary: `Une séance en tête-à-tête, sans public autour${nb}: chaque geste est montré, corrigé doucement et adapté à ta forme du jour.`,
      description:
        'Ton coach reste à tes côtés du premier au dernier mouvement. Chaque exercice est présenté et décomposé avant que tu l’essaies, la posture est corrigée sans brusquerie, et l’intensité tient compte de ce que tu te sens capable de faire aujourd’hui.',
      includes: [
        `Bilan de départ${nb}: objectifs, habitudes, appréhensions`,
        'Séances en salle, à domicile ou en extérieur, selon la zone couverte',
        'Démonstration de chaque mouvement avant l’essai',
        `Points d’étape réguliers${nb}: ce qui est devenu facile, ce qui demande du temps`,
      ],
      forWho:
        'Tu n’as jamais vraiment pratiqué, ou la salle t’intimide, et tu as besoin de quelqu’un à côté de toi pour oser commencer.',
    },
    {
      summary: `Le même accompagnement depuis chez toi${nb}: une séance guidée en direct, dans un lieu où tu te sens bien.`,
      description:
        'Caméra allumée, la séance se déroule dans ton salon ou dans la pièce de ton choix. Tu es guidée ou guidé pas à pas, les mouvements sont observés puis ajustés série après série, et personne d’autre que ton coach ne te voit.',
      includes: [
        'Séance guidée en direct, échauffement et retour au calme compris',
        'Exercices adaptés au matériel disponible, ou sans matériel',
        'Consignes simples pour t’installer face à la caméra',
        'Deux ou trois points à travailler d’une séance à l’autre',
      ],
      forWho:
        'L’idée d’aller en salle te bloque encore, ou tu préfères simplement débuter dans un endroit familier, avec un vrai guidage en direct.',
    },
    {
      summary: `Un plan écrit volontairement simple${nb}: peu d’exercices, des consignes claires et une progression douce.`,
      description:
        'Un programme construit à partir de ton objectif, de ton niveau réel et de l’espace dont tu disposes. Il comporte peu d’exercices, choisis pour être faciles à réaliser correctement, et chaque séance est décrite pas à pas pour que tu ne te demandes jamais quoi faire.',
      includes: [
        `Entretien de cadrage${nb}: objectif, contraintes, matériel`,
        'Plan court et lisible, avec une progression prudente',
        'Variantes plus accessibles pour chaque exercice',
        'Révision du plan en fin de cycle, d’après tes retours',
      ],
      forWho:
        'Tu préfères t’entraîner chez toi, à l’abri des regards, mais tu ne sais pas quoi faire une fois le tapis déroulé.',
    },
    {
      summary: `Des repères simples d’hygiène alimentaire pour accompagner tes débuts${nb}: pas de régime, pas d’aliment interdit.`,
      description:
        'Aucun régime, aucun aliment interdit, aucune pesée à chaque repas. On part de ce que tu manges déjà et on pose des repères généraux d’hygiène alimentaire, sans bouleverser tes habitudes du jour au lendemain ni ajouter une contrainte de plus à tes débuts.',
      includes: [
        'Point sur tes habitudes actuelles, sans jugement',
        'Repères simples pour composer tes repas au quotidien',
        'Organisation des repas autour des séances et des jours de repos',
        'Idées de repas rapides et de courses réalistes',
      ],
      forWho:
        'Tu commences le sport et tu voudrais que ton alimentation suive, sans te lancer dans un bouleversement intimidant.',
    },
  ],
};

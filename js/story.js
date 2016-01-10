var story = {

	"start": {
	    "text": "Bonjour capitaine, votre mission est de retrouver le robot RO-BO2 qui n'émet plus de signal depuis 2 semaines. Il a été aperçu pour la dernière fois sur la planète Mars, et depuis il s'est sûrement déplacé.",
	    "target": "Init",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
	    "buttons": ["option-4"],
	    "choices": {
	    	"option-4": ["start-2"]
	    }
	},

	"start-2": {
	    "text": "A vous de parcourir tout le système solaire pour retrouver des indices qui sauveront notre cher robot RO-BO2. Mais attention à votre niveau de carburant et d'oxygène, votre vie en dépend.",
	    "target": "Init",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
	    "buttons": ["option-4"],
	    "choices": {
	    	"option-4": ["start-3"]
	    }
	},

	"start-3": {
	    "text": "Sur quelle planète souhaitez-vous démarer votre enquête ?",
	    "target": "Init",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["earth-1", "Aller sur Terre"],
	    	"option-2": ["mars-1", "Aller sur Mars"],
	    	"option-3": ["uranus-1", "Aller sur Uranus"]
	    }
	},

	"mars-1": {
	    "text": "Vous êtes arrivé sur Mars, là où le dernier signal de RO-BO2 a été émis. Que souhaitez-vous faire maintenant ?",
	    "target": "Mars",
	    "actions": {
	    	"life": 0,
	    	"fuel": -20,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["mars-2", "Sortir du vaisseau"],
	    	"option-2": ["venus-1", "Aller sur Vénus"],
	    	"option-3": ["mercure-1", "Aller sur Mercure"]
	    }
	},

	"mars-2": {
	    "text": "Vous sortez du vaisseau pour vous rendre sur le dernier lieu connu de RO-BO2.",
	    "target": "Mars",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": -20
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["mars-3", "Examiner le sol"],
	    	"option-2": ["mars-4", "Examiner la montagne"]
	    }
	},

	"mars-3": {
	    "text": "Vous examinez le sol et vous avez trouvé des traces de RO-BO2, mais cela ne vous aide pas beaucoup...",
	    "target": "Mars",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": -20
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["mars-4", "Examiner la montagne"],
	    	"option-2": ["mars-5", "Retourner au vaisseau"]
	    }
	},

	"mars-4": {
	    "text": "Vous arrivez sur la montagne, vous examinez la pierre et vous appercevez des traces qui sembleraient venir des propulseurs de RO-BO2.",
	    "target": "Mars",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": -20
	    },
	    "buttons": ["option-4"],
	    "choices": {
	    	"option-4": ["mars-4-2"]
	    }
	},

	"mars-4-2": {
	    "text": "Vous analysez l'angle de propulsion et vous en arrivez à la conclusion qu'il se dirigeait vers Saturne.",
	    "target": "Mars",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["mars-3", "Allez sur le dernier lieu connu de RO-BO2 "],
	    	"option-2": ["mars-5", "Retourner au vaisseau"]
	    }
	},

	"mars-5": {
	    "text": "Vous êtes de retour au vaisseau, où souhaitez vous aller maintenant ?",
	    "target": "Mars",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": -20
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["earth-2", "Allez sur la terre pour récupérer du carburant"],
	    	"option-2": ["saturn-1", "Aller sur Saturne"],
	    	"option-3": ["uranus-2", "Aller sur Uranus"]
	    }
	},

	"saturn-1": {
	    "text": "Vous êtes arrivé sur Saturne, que souhaitez-vous faire maintenant ?",
	    "target": "Saturn",
	    "actions": {
	    	"life": 0,
	    	"fuel": -20,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["saturn-2", "Sortir du vaisseau"],
	    	"option-2": ["earth-3", "Retourner sur Terre"],
	    	"option-3": ["mars-1", "Retourner sur Mars"]
	    }
	},

	"saturn-2": {
	    "text": "Vous sortez du vaisseau, et vous vous rendez compte qu'il fait extrèmenent froid. Il faut faire vite sur cette planète car vous perdez de la vie. Où souhaitez-vous aller ?",
	    "target": "Saturn",
	    "actions": {
	    	"life": -15,
	    	"fuel": 0,
	    	"oxygen": -15
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["saturn-3", "Examiner les alentours du vaisseau"],
	    	"option-2": ["saturn-4", "Suivre les bruits"],
	    	"option-3": ["saturn-5", "Rentrer au vaisseau"]
	    }
	},

	"saturn-3": {
	    "text": "En inspectant le sol vous trouvez le réservoir de carburant de secours de RO-BO2, il ne peut donc pas être parti très loins.",
	    "target": "Saturn",
	    "actions": {
	    	"life": -15,
	    	"fuel": 0,
	    	"oxygen": -15
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["saturn-4", "Suivre les bruits"],
	    	"option-2": ["saturn-8", "Rentrer au vaisseau"]
	    }
	},

	"saturn-4": {
	    "text": "Vous decidez de suivre ces bruits étranges que vous entendez depuis votre arrivée sur Saturne. Ils semblent venir du cratère un peu plus loins.",
	    "target": "Saturn",
	    "actions": {
	    	"life": -15,
	    	"fuel": 0,
	    	"oxygen": -15
	    },
	    "buttons": ["option-4"],
	    "choices": {
	    	"option-4": ["saturn-5", "Aller au cratère"],
	    }
	},

	"saturn-5": {
	    "text": "Vous vous approchez du cratère et vous appercevez des créatures étranges. En vous approchant encore plus, elles commencent à vous poursuivre. Que souhaitez-vous faire ?",
	    "target": "Saturn",
	    "actions": {
	    	"life": -15,
	    	"fuel": 0,
	    	"oxygen": -15
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["saturn-6", "Demander des informations sur RO-BO2"],
	    	"option-2": ["saturn-7", "Retourner en courant au vaisseau"]
	    }
	},

	"saturn-6": {
	    "text": "Les créatures ne semblent pas vouloir parler, vous vous faites attaquer",
	    "target": "Saturn",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
	    "buttons": ["option-4"],
	    "choices": {
	    	"option-4": ["dead"]
	    }
	},

	"saturn-7": {
	    "text": "Vous êtes de retour au vaisseau et vous avez réussi à vous décoller. Malheureusement les créatures ont cassé votre deuxième réservoir de carburant. Ou souhaitez-vous aller ?",
	    "target": "Saturn",
	    "actions": {
	    	"life": -15,
	    	"fuel": -50,
	    	"oxygen": -15
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["earth-4", "Allez sur la terre pour récupérer du carburant"],
	    	"option-2": ["mars-1", "Aller sur Mars"],
	    	"option-3": ["jupiter-1", "Aller sur Jupiter"]
	    }
	},

	"saturn-8": {
	    "text": "Vous êtes de retour au vaisseau. Ou souhaitez-vous aller ?",
	    "target": "Saturn",
	    "actions": {
	    	"life": -15,
	    	"fuel": 0,
	    	"oxygen": -15
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["earth-4", "Allez sur la terre pour récupérer du carburant"],
	    	"option-2": ["mars-1", "Aller sur Mars"],
	    	"option-3": ["jupiter-1", "Aller sur Jupiter"]
	    }
	},

	"jupiter-1": {
	    "text": "Vous êtes arrivé sur Jupiter, que souhaitez-vous faire maintenant ?",
	    "target": "Jupiter",
	    "actions": {
	    	"life": 0,
	    	"fuel": -50,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["jupiter-2", "Sortir du vaisseau"],
	    	"option-2": ["venus-2", "Aller sur Venus"],
	    	"option-3": ["earth-5", "Allez sur la terre pour récupérer du carburant"]
	    }
	},

	"jupiter-2": {
	    "text": "Vous sortez du vaisseau et vous appercevez des traces de RO-BO2 sur le sol, il est donc passé par ici. Que souhaitez-vous faire ?",
	    "target": "Jupiter",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": -15
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["jupiter-3", "Suivre les traces"],
	    	"option-2": ["jupiter-10", "Retourner au vaisseau"]
	    }
	},

	"jupiter-3": {
	    "text": "En suivant les traces au sol vous trouvez une caméra qui semble venir de RO-BO2. Que souhaitez-vous faire ?",
	    "target": "Jupiter",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": -15
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["jupiter-4", "Continuer à suivre les traces"],
	    	"option-2": ["jupiter-5", "Retourner au vaisseau pour examiner la caméra"]
	    }
	},

	"jupiter-4": {
	    "text": "Vous continuer à suivre les traces mais une tempête de sable surgit. Vous être pris au piège",
	    "target": "Jupiter",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
	    "buttons": ["option-4"],
	    "choices": {
	    	"option-4": ["dead"]
	    }
	},

	"jupiter-5": {
	    "text": "En examinant la caméra vous vous appercevez qu'elle est toujours en marche. Vous savez donc exactement où est passé RO-BO2.",
	    "target": "Jupiter",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["jupiter-6", "Sortir du vaisseau pour aller chercher RO-BO2"],
	    	"option-2": ["jupiter-7", "Prévenir la terre de la position exacte de RO-BO2"]
	    }
	},

	"jupiter-6": {
	    "text": "Vous suivez la direction où est parti RO-BO2 et une tempête surgit. Vous êtres pris au piège",
	    "target": "Jupiter",
	    "actions": {
	    	"life": -0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
	    "buttons": ["option-4"],
	    "choices": {
	    	"option-4": ["dead"]
	    }
	},

	"jupiter-7": {
	    "text": "Vous prévenez la terre qui vous oblige à rester dans le vaisseau en attendant les renforts",
	    "target": "Jupiter",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["jupiter-8", "Sortir quand même du vaisseau pour aller chercher RO-BO2"],
	    	"option-2": ["jupiter-9", "Attendre"]
	    }
	},

	"jupiter-8": {
	    "text": "Vous sortez quand même du vaisseau et suivez la direction où est parti RO-BO2. Une tempête surgit. Vous êtres pris au piège",
	    "target": "Jupiter",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
	    "buttons": ["option-4"],
	    "choices": {
	    	"option-4": ["dead"]
	    }
	},

	"jupiter-9": {
	    "text": "Après 3 semaines d'attente, une équipe est venu vous aider à retrouver RO-BO2. Vous avez réussi à sauver toutes les données, vous êtes le nouveau héro de la galaxie.",
	    "target": "Jupiter",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
	    "buttons": ["option-4"],
	    "choices": {
	    	"option-4": ["victory"]
	    }
	},

	"jupiter-10": {
	    "text": "Vous êtes de retour au vaisseau, que souhaitez-vous fare maintenant ?",
	    "target": "Jupiter",
	    "actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": -15
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["jupiter-2", "Sortir du vaisseau"],
	    	"option-2": ["venus-1", "Aller sur Venus"],
	    	"option-3": ["earth-5", "Allez sur la terre pour récupérer du carburant"]
	    }
	},

	"uranus-1": {
	    "text": "Vous êtes arrivé sur Uranus, et vous ne trouvez rien de spécial. En même temps ce n'était peut être pas le choix le plus logique...",
	    "target": "Uranus",
	    "actions": {
	    	"life": 0,
	    	"fuel": -20,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["mars-1", "Aller sur Mars"],
	    	"option-2": ["neptune-1", "Aller sur Neptune"],
	    	"option-3": ["earth-6", "Récupérer du carburant sur terre"]
	    }
	},

	"uranus-2": {
	    "text": "Vous êtes arrivé sur Uranus, et vous ne trouvez rien de spécial. Vous avez perdu beaucoup de carburant, en même temps ce n'était peut être pas le choix le plus logique...",
	    "target": "Uranus",
	    "actions": {
	    	"life": 0,
	    	"fuel": -40,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["mars-1", "Aller sur Mars"],
	    	"option-2": ["saturn-1", "Aller sur Saturne"],
	    	"option-3": ["earth-6", "Récupérer du carburant sur terre"]
	    }
	},

	"neptune-1": {
	    "text": "Vous êtes arrivé sur Neptune, et vous ne trouvez toujours rien. Savez-vous ce que vous faites Capitaine ?",
	    "target": "Neptune",
	    "actions": {
	    	"life": 0,
	    	"fuel": -10,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["uranus-1", "Aller sur Uranus"],
	    	"option-2": ["mars-1", "Aller sur Mars"],
	    	"option-3": ["earth-7", "Récupérer du carburant sur terre"]
	    }
	},

	"venus-1": {
	    "text": "Vous êtes arrivé sur Venus, et il commence à faire très chaud, vous perdez un peu de vie. En plus vous ne trouvez rien d'intéressant sur cette planète.",
	    "target": "Venus",
	    "actions": {
	    	"life": -25,
	    	"fuel": -15,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["mercure-1", "Aller sur Mercure"],
	    	"option-2": ["mars-1", "Retourner sur Mars"],
	    	"option-3": ["earth-8", "Récupérer du carburant sur terre"]
	    }
	},

	"venus-2": {
	    "text": "Vous êtes arrivé sur Venus, et il commence à faire très chaud, vous perdez un peu de vie. En plus vous ne trouvez rien d'intéressant sur cette planète.",
	    "target": "Venus",
	    "actions": {
	    	"life": -25,
	    	"fuel": -45,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["jupiter-1", "Aller sur Jupiter"],
	    	"option-2": ["mars-1", "Retourner sur Mars"],
	    	"option-3": ["earth-8", "Récupérer du carburant sur terre"]
	    }
	},

	"mercure-1": {
	    "text": "Vous vous approchez de Mercure mais la chaleur désintègre votre vaisseau...",
	    "target": "Mercure",
	    "actions": {
	    	"life": 0,
	    	"fuel": -10,
	    	"oxygen": 0
	    },
	    "buttons": ["option-4"],
	    "choices": {
	    	"option-4": ["dead"]
	    }
	},

	"earth-1": {
	    "text": "Vous êtes de retour sur Terre, que souhaitez-vous faire ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": -15,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["fuel-1", "Refaire le plein"],
	    	"option-2": ["mars-1", "Aller sur Mars"],
	    	"option-3": ["mercure-1", "Aller sur Mercure"]
	    }
	},

	"fuel-1": {
	    "text": "Vous avez fait le plein de carburant et vous êtes prêt à continuer votre mission. Où souhaitez-vous aller ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": 100,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["mars-1", "Aller sur Mars"],
	    	"option-2": ["mercure-1", "Aller sur Mercure"]
	    }
	},

	"earth-2": {
	    "text": "Vous êtes de retour sur Terre, que souhaitez-vous faire ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": -10,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["fuel-2", "Refaire le plein"],
	    	"option-2": ["mars-1", "Retourner sur Mars"],
	    	"option-3": ["saturn-1", "Aller sur Saturne"]
	    }
	},

	"fuel-2": {
	    "text": "Vous avez fait le plein de carburant et vous êtes prêt à continuer votre mission. Où souhaitez-vous aller ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": 100,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["mars-1", "Aller sur Mars"],
	    	"option-2": ["saturn-1", "Aller sur Saturne"]
	    }
	},

	"earth-3": {
	    "text": "Vous êtes de retour sur Terre, que souhaitez-vous faire ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": -30,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["fuel-3", "Refaire le plein"],
	    	"option-2": ["mars-1", "Aller sur Mars"],
	    	"option-3": ["saturn-1", "Retourner sur Saturne"]
	    }
	},

	"fuel-3": {
	    "text": "Vous avez fait le plein de carburant et vous êtes prêt à continuer votre mission. Où souhaitez-vous aller ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": 100,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["mars-1", "Aller sur Mars"],
	    	"option-2": ["saturn-1", "Aller sur Saturne"]
	    }
	},

	"earth-4": {
	    "text": "Vous êtes de retour sur Terre, que souhaitez-vous faire ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": -30,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["fuel-4", "Refaire le plein"],
	    	"option-2": ["jupiter-1", "Aller sur Jupiter"],
	    	"option-3": ["saturn-1", "Retourner sur Saturne"]
	    }
	},

	"fuel-4": {
	    "text": "Vous avez fait le plein de carburant et vous êtes prêt à continuer votre mission. Où souhaitez-vous aller ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": 100,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["jupiter-1", "Aller sur Jupiter"],
	    	"option-2": ["saturn-1", "Aller sur Saturne"]
	    }
	},

	"earth-5": {
	    "text": "Vous êtes de retour sur Terre, que souhaitez-vous faire ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": -25,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["fuel-5", "Refaire le plein"],
	    	"option-2": ["jupiter-1", "Retourner sur Jupiter"],
	    	"option-3": ["mars-1", "Aller sur Mars"]
	    }
	},

	"fuel-5": {
	    "text": "Vous avez fait le plein de carburant et vous êtes prêt à continuer votre mission. Où souhaitez-vous aller ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": 100,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["jupiter-1", "Aller sur Jupiter"],
	    	"option-2": ["mars-1", "Aller sur Mars"]
	    }
	},

	"earth-6": {
	    "text": "Vous êtes de retour sur Terre, que souhaitez-vous faire ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": -50,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["fuel-6", "Refaire le plein"],
	    	"option-2": ["uranus-1", "Retourner sur Uranus"],
	    	"option-3": ["mars-1", "Aller sur Mars"]
	    }
	},

	"fuel-6": {
	    "text": "Vous avez fait le plein de carburant et vous êtes prêt à continuer votre mission. Où souhaitez-vous aller ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": 100,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["uranus-1", "Aller sur Uranus"],
	    	"option-2": ["mars-1", "Aller sur Mars"]
	    }
	},

	"earth-7": {
	    "text": "Vous êtes de retour sur Terre, que souhaitez-vous faire ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": -65,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["fuel-7", "Refaire le plein"],
	    	"option-2": ["neptune-1", "Retourner sur Neptune"],
	    	"option-3": ["mars-1", "Aller sur Mars"]
	    }
	},

	"fuel-7": {
	    "text": "Vous avez fait le plein de carburant et vous êtes prêt à continuer votre mission. Où souhaitez-vous aller ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": 100,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["neptune-1", "Aller sur Neptune"],
	    	"option-2": ["mars-1", "Aller sur Mars"]
	    }
	},

	"earth-8": {
	    "text": "Vous êtes de retour sur Terre, que souhaitez-vous faire ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": -20,
	    	"oxygen": 100
	    },
	    "buttons": ["option-1", "option-2", "option-3"],
	    "choices": {
	    	"option-1": ["fuel-8", "Refaire le plein"],
	    	"option-2": ["venus-1", "Retourner sur Venus"],
	    	"option-3": ["mars-1", "Aller sur Mars"]
	    }
	},

	"fuel-8": {
	    "text": "Vous avez fait le plein de carburant et vous êtes prêt à continuer votre mission. Où souhaitez-vous aller ?",
	    "target": "Earth",
	    "actions": {
	    	"life": 0,
	    	"fuel": 100,
	    	"oxygen": 0
	    },
	    "buttons": ["option-1", "option-2"],
	    "choices": {
	    	"option-1": ["venus-1", "Aller sur Venus"],
	    	"option-2": ["mars-1", "Aller sur Mars"]
	    }
	},

	"dead": {
		"text": "Oh non, vous n'avez pas survécu au voyage... RO-BD2 est perdu pour toujours.",
		"target": "Init",
		"actions": {
	    	"life": -100,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
		"buttons": ["option-5"],
		"choices": {
			"option-5": ["restart"]
		}
	},

	"outOfFuel": {
		"text": "Vous n'avez pas eu assez de carburant pour arriver à votre destination. Vous êtes perdu pour toujours dans l'immense univers",
		"target": "Init",
		"actions": {
	    	"life": 0,
	    	"fuel": -100,
	    	"oxygen": 0
	    },
		"buttons": ["option-5"],
		"choices": {
			"option-5": ["restart"]
		}
	},

	"outOfOxygen": {
		"text": "Vous n'avez plus d'oxygène pour respirer...",
		"target": "Init",
		"actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": -100
	    },
		"buttons": ["option-5"],
		"choices": {
			"option-5": ["restart"]
		}
	},

	"victory": {
		"text": "Bravo Capitain, vous avez sauvé les données de RO-BO2. Grâce à vous ces données vont faire avancer nos recherches.",
		"target": "Init",
		"actions": {
	    	"life": 0,
	    	"fuel": 0,
	    	"oxygen": 0
	    },
		"buttons": ["option-5"],
		"choices": {
			"option-5": ["restart"]
		}
	}
}
db.getCollection('questionnaires').insertMany([
  /* 1 */
  {
    "_id" : ObjectId("5dd3c3b477100638a6b9ce32"),
    "title" : "Les jeux olympiques",
    "level" : "Moyen",
    "category" : "sport",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3c3b477100638a6b9ce41"),
        "title" : "Londres est la seule ville qui a accueilli trois fois les Jeux olympiques d’été.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c3b477100638a6b9ce42"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3c3b477100638a6b9ce3f"),
        "title" : "C’est au mont Olympe, la plus haute montage de Grèce, que se sont déroulés les premiers Jeux olympiques de l’Antiquité.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c3b477100638a6b9ce40"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3c3b477100638a6b9ce3d"),
        "title" : "En 1964, parce que l’Afrique du Sud avait une politique d’apartheid, le CIO a banni ce pays des Jeux.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c3b477100638a6b9ce3e"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3c3b477100638a6b9ce3b"),
        "title" : "Pour la dernière fois en 1992, les jeux d'hiver et d'été se sont tenus la même année.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c3b477100638a6b9ce3c"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3c3b477100638a6b9ce39"),
        "title" : "En 1968, les Canadiens ont gagné à la fois les médailles d'or au hockey sur glace et au hockey sur gazon",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c3b477100638a6b9ce3a"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3c3b477100638a6b9ce37"),
        "title" : "Dans les Jeux de l’Antiquité, les gagnants recevaient une chèvre plutôt qu’une médaille.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c3b477100638a6b9ce38"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3c3b477100638a6b9ce35"),
        "title" : "Le Suédois Oscar Swahn a gagné une médaille d’argent à l’âge de 72 ans.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c3b477100638a6b9ce36"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3c3b477100638a6b9ce33"),
        "title" : "Jusqu’en 1994, les Jeux olympiques d’hiver et d’été avaient lieu la même année.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c3b477100638a6b9ce34"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      }
    ],
    "players" : []
  },

  /* 2 */
  {
    "_id" : ObjectId("5dd3c62977100638a6b9ce43"),
    "title" : "Le Basket-ball",
    "level" : "Facile",
    "category" : "sport",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3c98a77100638a6b9ce8f"),
        "title" : "Combien de pas sont autorisés sans le dribble",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce92"),
            "choice" : "1"
          },
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce91"),
            "choice" : "3"
          },
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce90"),
            "choice" : "4"
          }
        ],
        "response" : "2"
      },
      {
        "_id" : ObjectId("5dd3c98a77100638a6b9ce8b"),
        "title" : "Ou s'effectue l'engagement au début d'un match",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce8e"),
            "choice" : "Derrière le panier"
          },
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce8d"),
            "choice" : "Ou on veut"
          },
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce8c"),
            "choice" : "Sur une touche"
          }
        ],
        "response" : "Au milieu du terrain"
      },
      {
        "_id" : ObjectId("5dd3c98a77100638a6b9ce87"),
        "title" : "Combien de points vaut un panier dans la raquette",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce8a"),
            "choice" : "1"
          },
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce89"),
            "choice" : "3"
          },
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce88"),
            "choice" : "5"
          }
        ],
        "response" : "2"
      },
      {
        "_id" : ObjectId("5dd3c98a77100638a6b9ce83"),
        "title" : "Combien de points au maximum un joueur peut-il marquer en 1 seul shoot",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce86"),
            "choice" : "4"
          },
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce85"),
            "choice" : "1"
          },
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce84"),
            "choice" : "2"
          }
        ],
        "response" : "3"
      },
      {
        "_id" : ObjectId("5dd3c98a77100638a6b9ce7f"),
        "title" : "Combien de joueurs par équipe se trouvent sur un terrain",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce82"),
            "choice" : "6"
          },
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce81"),
            "choice" : "7"
          },
          {
            "_id" : ObjectId("5dd3c98a77100638a6b9ce80"),
            "choice" : "3"
          }
        ],
        "response" : "5"
      }
    ],
    "players" : []
  },

  /* 3 */
  {
    "_id" : ObjectId("5dd3c85e77100638a6b9ce58"),
    "title" : "Le Water-polo",
    "level" : "Facile",
    "category" : "sport",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3c85e77100638a6b9ce68"),
        "title" : "Comment appelle-t-on quelqu'un qui fait du water-polo ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce6a"),
            "choice" : "Un Water-liste"
          },
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce69"),
            "choice" : "Un Water-poloïste"
          }
        ],
        "response" : "Un poloïste"
      },
      {
        "_id" : ObjectId("5dd3c85e77100638a6b9ce65"),
        "title" : "Quelle est la zone ou on ne peut pas faire de passe ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce67"),
            "choice" : "2 mètres"
          },
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce66"),
            "choice" : "10 mètres"
          }
        ],
        "response" : "5 mètres"
      },
      {
        "_id" : ObjectId("5dd3c85e77100638a6b9ce62"),
        "title" : "Quelle nage de pieds est utilisée pour rester à la surface et monter en hauteur ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce64"),
            "choice" : "La brasse"
          },
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce63"),
            "choice" : "Les battements"
          }
        ],
        "response" : "Le rétro"
      },
      {
        "_id" : ObjectId("5dd3c85e77100638a6b9ce5f"),
        "title" : "Combien y'a t-il de joueurs, avec le gardien, par équipe ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce61"),
            "choice" : "7"
          },
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce60"),
            "choice" : "9"
          }
        ],
        "response" : "6"
      },
      {
        "_id" : ObjectId("5dd3c85e77100638a6b9ce5c"),
        "title" : "Laquelle de ces règles est interdite au water-polo ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce5e"),
            "choice" : "Couler un adversaire"
          },
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce5d"),
            "choice" : "Tirer un adversaire par le pied"
          }
        ],
        "response" : "Prendre la balle à deux mains"
      },
      {
        "_id" : ObjectId("5dd3c85e77100638a6b9ce59"),
        "title" : "Quelle est la durée réglementaire d'un match ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce5b"),
            "choice" : "3  périodes de 5 minutes"
          },
          {
            "_id" : ObjectId("5dd3c85e77100638a6b9ce5a"),
            "choice" : "4 périodes de 3 minutes"
          }
        ],
        "response" : "4 périodes de 8 minutes"
      }
    ],
    "players" : []
  },

  /* 4 */
  {
    "_id" : ObjectId("5dd3cb9d77100638a6b9ce93"),
    "title" : "Le Volley-ball",
    "level" : "Moyen",
    "category" : "sport",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3cb9d77100638a6b9cea0"),
        "title" : "Dans quel pays le Volley-ball a-t-il été inventé ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3cb9d77100638a6b9cea2"),
            "choice" : "En France"
          },
          {
            "_id" : ObjectId("5dd3cb9d77100638a6b9cea1"),
            "choice" : "En Espagne"
          }
        ],
        "response" : "Aux Etats-Unis"
      },
      {
        "_id" : ObjectId("5dd3cb9d77100638a6b9ce9d"),
        "title" : "Quel est le but principal du Volley-ball",
        "choices" : [
          {
            "_id" : ObjectId("5dd3cb9d77100638a6b9ce9f"),
            "choice" : "Réussir à toucher ses adversaire"
          },
          {
            "_id" : ObjectId("5dd3cb9d77100638a6b9ce9e"),
            "choice" : "Réussir à faire tomber le ballon hors du terrain"
          }
        ],
        "response" : "Réussir à faire tomber le ballon de l'autre côté du filet"
      },
      {
        "_id" : ObjectId("5dd3cb9d77100638a6b9ce9a"),
        "title" : "De quels sports le Volley-ball s'inspire ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3cb9d77100638a6b9ce9c"),
            "choice" : "Du football et du basket"
          },
          {
            "_id" : ObjectId("5dd3cb9d77100638a6b9ce9b"),
            "choice" : "Du handball et du basket"
          }
        ],
        "response" : "Du basket et du tennis"
      },
      {
        "_id" : ObjectId("5dd3cb9d77100638a6b9ce97"),
        "title" : "Combien de points faut-il marquer pour gagner un set",
        "choices" : [
          {
            "_id" : ObjectId("5dd3cb9d77100638a6b9ce99"),
            "choice" : "21 points"
          },
          {
            "_id" : ObjectId("5dd3cb9d77100638a6b9ce98"),
            "choice" : "15 points"
          }
        ],
        "response" : "25 points"
      },
      {
        "_id" : ObjectId("5dd3cb9d77100638a6b9ce94"),
        "title" : "Combien de sets faut-il pour gagner un match ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3cb9d77100638a6b9ce96"),
            "choice" : "4"
          },
          {
            "_id" : ObjectId("5dd3cb9d77100638a6b9ce95"),
            "choice" : "5"
          }
        ],
        "response" : "3"
      }
    ],
    "players" : []
  },

  /* 5 */
  {
    "_id" : ObjectId("5dd3d0ad77100638a6b9cea3"),
    "title" : "Les films de Quentin Tarantino",
    "level" : "Difficile",
    "category" : "cinema",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3d0ad77100638a6b9ceb0"),
        "title" : "La Chevelle Malibu 1964 que Vincent Vega, joué par John Travolta, conduit dans Pulp Fiction appartenait à Tarantino.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3d0ad77100638a6b9ceb1"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3d0ad77100638a6b9ceae"),
        "title" : "Le film Django Unchained, sorti en 2012, a été mis en nomination dans cinq catégories aux Oscars, dont celui du meilleur film.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3d0ad77100638a6b9ceaf"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3d0ad77100638a6b9ceac"),
        "title" : "Christoph Waltz n’était pas le premier choix de Tarantino pour incarner Hans Landa dans Inglourious Basterds, en 2009.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3d0ad77100638a6b9cead"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3d0ad77100638a6b9ceaa"),
        "title" : "Le réalisateur Robert Rodriguez est un bon ami de Tarantino et ne l’a payé que 1$ pour réaliser une scène dans son film Sin City, sorti en 2005.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3d0ad77100638a6b9ceab"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3d0ad77100638a6b9cea8"),
        "title" : "Les critiques ont démoli Reservoir Dogs lors de sa première aux festivals de Sundance, de Cannes et de Toronto.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3d0ad77100638a6b9cea9"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3d0ad77100638a6b9cea6"),
        "title" : "Once Upon a Time in… Hollywood signe la troisième collaboration entre Leonardo DiCaprio et Quentin Tarantino.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3d0ad77100638a6b9cea7"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3d0ad77100638a6b9cea4"),
        "title" : "L’intrigue de Death Proof est racontée à l’aide de retours en arrière, ce qui est devenu le style caractéristique de Tarantino.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3d0ad77100638a6b9cea5"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      }
    ],
    "players" : []
  },

  /* 6 */
  {
    "_id" : ObjectId("5dd3e6b5bb1735188072fc47"),
    "title" : "OSS 117",
    "level" : "Facile",
    "category" : "cinema",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3e9b7bb1735188072fc5a"),
        "title" : "En quelle année le première film a-t-il été produit ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc5c"),
            "choice" : "2003"
          },
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc5b"),
            "choice" : "2009"
          }
        ],
        "response" : "2005"
      },
      {
        "_id" : ObjectId("5dd3e9b7bb1735188072fc58"),
        "title" : "Qui joue le rôle principal",
        "choices" : [
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc59"),
            "choice" : "Gerard Depardieu"
          }
        ],
        "response" : "Jean Dujardin"
      },
      {
        "_id" : ObjectId("5dd3e9b7bb1735188072fc55"),
        "title" : "Quelle est la véritable identité de OSS 117 ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc57"),
            "choice" : "Ce n'est jamais mentionné dans le film"
          },
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc56"),
            "choice" : "Noël Flantier"
          }
        ],
        "response" : "Hubert Bonisseur de la Bath"
      },
      {
        "_id" : ObjectId("5dd3e9b7bb1735188072fc52"),
        "title" : "Quel acteur belge a joué dans ce film",
        "choices" : [
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc54"),
            "choice" : "Benoît Poelvoorde"
          },
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc53"),
            "choice" : "Jean-Claude Van Damme"
          }
        ],
        "response" : "François Damiens"
      },
      {
        "_id" : ObjectId("5dd3e9b7bb1735188072fc4f"),
        "title" : "Comment se nomme le meilleur ami du personnage principal ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc51"),
            "choice" : "Bernard"
          },
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc50"),
            "choice" : "Peter"
          }
        ],
        "response" : "Jack"
      },
      {
        "_id" : ObjectId("5dd3e9b7bb1735188072fc4c"),
        "title" : "Les aigles de ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc4e"),
            "choice" : "Kéops"
          },
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc4d"),
            "choice" : "Kéhops"
          }
        ],
        "response" : "Khéops"
      },
      {
        "_id" : ObjectId("5dd3e9b7bb1735188072fc4a"),
        "title" : "Quelle chanson est reprise en version parodique en arabe par le personnage principal",
        "choices" : [
          {
            "_id" : ObjectId("5dd3e9b7bb1735188072fc4b"),
            "choice" : "Thriller"
          }
        ],
        "response" : "Bambino"
      }
    ],
    "players" : []
  },

  /* 7 */
  {
    "_id" : ObjectId("5dd3ea46bb1735188072fc5d"),
    "title" : "Les citations de films",
    "level" : "Difficile",
    "category" : "cinema",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3ea46bb1735188072fc68"),
        "title" : "Tom Cruise dit «À moi l’ivresse… de la vitesse!» dans le film de course Days of Thunder, sorti en 1990.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ea46bb1735188072fc69"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ea46bb1735188072fc66"),
        "title" : "La phrase «Je vais avoir ce qu’elle a» vient de la comédie de 1989 When Harry Met Sally.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ea46bb1735188072fc67"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3ea46bb1735188072fc64"),
        "title" : "Dans Apollo 13, Jim Lovell, incarné par Tom Hanks, dit «Houston, nous avons un problème».",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ea46bb1735188072fc65"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3ea46bb1735188072fc62"),
        "title" : "James Bond commande «Un martini. Au shaker, pas à la cuillère» dans le film Dr. No.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ea46bb1735188072fc63"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ea46bb1735188072fc60"),
        "title" : "Renée Zellweger a popularisé la phrase «Tu m’as eu à Bonjour» dans Bridget Jones’s Diary.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ea46bb1735188072fc61"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ea46bb1735188072fc5e"),
        "title" : "«La cupidité, faute d’un meilleur terme, est bonne» provient du drame Wall Street, sorti en 1987.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ea46bb1735188072fc5f"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      }
    ],
    "players" : []
  },

  /* 8 */
  {
    "_id" : ObjectId("5dd3ebccbb1735188072fc6a"),
    "title" : "La chanson française",
    "level" : "Moyen",
    "category" : "musique",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3ebddbb1735188072fc7e"),
        "title" : "Edith Piaf a chanté la chanson \"A quoi ça sert l'amour\"",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ebddbb1735188072fc80"),
            "choice" : "Georges Moustaki"
          },
          {
            "_id" : ObjectId("5dd3ebddbb1735188072fc7f"),
            "choice" : "Yves Montand"
          }
        ],
        "response" : "Théo Sarapo"
      },
      {
        "_id" : ObjectId("5dd3ebddbb1735188072fc7c"),
        "title" : "Qui a gagné le Grand Prix Eurovision en 1965 avec \"Poupée de cire\" ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ebddbb1735188072fc7d"),
            "choice" : "Françoise Hardy"
          }
        ],
        "response" : "France Gall"
      },
      {
        "_id" : ObjectId("5dd3ebddbb1735188072fc79"),
        "title" : "Quel était le surnom de la chanteuse Barbara?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ebddbb1735188072fc7b"),
            "choice" : "La Grande Dame"
          },
          {
            "_id" : ObjectId("5dd3ebddbb1735188072fc7a"),
            "choice" : "La Belle Dame"
          }
        ],
        "response" : "La Dame en noir"
      },
      {
        "_id" : ObjectId("5dd3ebddbb1735188072fc76"),
        "title" : "Lequel de ces titres n'appartient pas au répertoire de Charles Aznavour?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ebddbb1735188072fc78"),
            "choice" : "Et pourtant"
          },
          {
            "_id" : ObjectId("5dd3ebddbb1735188072fc77"),
            "choice" : "Hier encore"
          }
        ],
        "response" : "Nantes"
      }
    ],
    "players" : []
  },

  /* 9 */
  {
    "_id" : ObjectId("5dd3ee09bb1735188072fc81"),
    "title" : "Les années 1980",
    "level" : "Moyen",
    "category" : "musique",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3ee09bb1735188072fc8c"),
        "title" : "La chanson Cruel Summer a été enregistrée par le groupe féminin The Go-Go’s.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee09bb1735188072fc8d"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ee09bb1735188072fc8a"),
        "title" : "Toni Basil a changé les paroles de la chanson Mickey pour qu’elle parle d’un homme et non d’une femme.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee09bb1735188072fc8b"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3ee09bb1735188072fc88"),
        "title" : "C’est la chanteuse Tina Turner qui interprète la chanson Licence to Kill, pour la trame sonore du film de James Bond.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee09bb1735188072fc89"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ee09bb1735188072fc86"),
        "title" : "David Bowie a collaboré avec tous les artistes suivants : Queen, Tina Turner et Mick Jagger.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee09bb1735188072fc87"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3ee09bb1735188072fc84"),
        "title" : "La chanteuse Tiffany a connu le succès grâce à sa tournée des centres commerciaux.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee09bb1735188072fc85"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3ee09bb1735188072fc82"),
        "title" : "Le premier vidéoclip à avoir été diffusé sur les ondes de MTV est You Better Run de Pat Benatar.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee09bb1735188072fc83"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      }
    ],
    "players" : []
  },

  /* 10 */
  {
    "_id" : ObjectId("5dd3ee90bb1735188072fc8e"),
    "title" : "Les femmes en sciences",
    "level" : "Difficile",
    "category" : "science",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3ee90bb1735188072fc99"),
        "title" : "En 2015, Tu Youyou a remporté le prix Nobel de la paix, une première pour une Chinoise.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee90bb1735188072fc9a"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ee90bb1735188072fc97"),
        "title" : "Le code de Margaret Hamilton a permis à Neil Armstrong de marcher sur la Lune.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee90bb1735188072fc98"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3ee90bb1735188072fc95"),
        "title" : "En 1980, Katherine Johnson est la première femme mathématicienne afro-américaine engagée par la NASA.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee90bb1735188072fc96"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ee90bb1735188072fc93"),
        "title" : "Pour suivre des cours à distance à l’École de polytechnique, la mathématicienne Sophie Germain a dû emprunter l’identité d’un homme.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee90bb1735188072fc94"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ee90bb1735188072fc91"),
        "title" : "Jusqu’en 2018, les femmes avaient reçu 20 des prix Nobel de sciences, sur près de 600 lauréats.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee90bb1735188072fc92"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3ee90bb1735188072fc8f"),
        "title" : "Elizabeth Blackwell, la première femme à obtenir un diplôme de médecine aux États-Unis, a dû fonder son hôpital pour travailler.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ee90bb1735188072fc90"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      }
    ],
    "players" : []
  },

  /* 11 */
  {
    "_id" : ObjectId("5dd3ef01bb1735188072fc9b"),
    "title" : "La lune",
    "level" : "Moyen",
    "category" : "science",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3ef01bb1735188072fca4"),
        "title" : "Le bacon faisait partie du premier repas mangé sur la Lune.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ef01bb1735188072fca5"),
            "choice" : "Faux"
          }
        ],
        "response" : "Vrai"
      },
      {
        "_id" : ObjectId("5dd3ef01bb1735188072fca2"),
        "title" : "C’est la deuxième plus grosse lune du système solaire.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ef01bb1735188072fca3"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ef01bb1735188072fca0"),
        "title" : "Seulement deux hommes, Neil Armstrong et Buzz Aldrin, ont marché sur la Lune.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ef01bb1735188072fca1"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ef01bb1735188072fc9e"),
        "title" : "La Lune s’approche lentement de la Terre.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ef01bb1735188072fc9f"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      },
      {
        "_id" : ObjectId("5dd3ef01bb1735188072fc9c"),
        "title" : "La gravité sur la Lune équivaut à 5 % de celle de la Terre.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3ef01bb1735188072fc9d"),
            "choice" : "Vrai"
          }
        ],
        "response" : "Faux"
      }
    ],
    "players" : []
  },

  /* 12 */
  {
    "_id" : ObjectId("5dd3f0a4bb1735188072fca6"),
    "title" : "Culture scientifique",
    "level" : "Moyen",
    "category" : "science",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3f0a4bb1735188072fcb0"),
        "title" : "Combien de satellites naturels gravitent autour de la terre",
        "choices" : [
          {
            "_id" : ObjectId("5dd3f0a4bb1735188072fcb2"),
            "choice" : "3"
          },
          {
            "_id" : ObjectId("5dd3f0a4bb1735188072fcb1"),
            "choice" : "4"
          }
        ],
        "response" : "1"
      },
      {
        "_id" : ObjectId("5dd3f0a4bb1735188072fcad"),
        "title" : "Quel minerai était utilisé auparavant dans les postes de radio ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3f0a4bb1735188072fcaf"),
            "choice" : "La bauxite"
          },
          {
            "_id" : ObjectId("5dd3f0a4bb1735188072fcae"),
            "choice" : "La sidérite"
          }
        ],
        "response" : "La galène"
      },
      {
        "_id" : ObjectId("5dd3f0a4bb1735188072fcaa"),
        "title" : "Quel est le nom de l'unité de résistance électrique ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3f0a4bb1735188072fcac"),
            "choice" : "Ampère"
          },
          {
            "_id" : ObjectId("5dd3f0a4bb1735188072fcab"),
            "choice" : "Watt"
          }
        ],
        "response" : "Ohm"
      },
      {
        "_id" : ObjectId("5dd3f0a4bb1735188072fca7"),
        "title" : "A quel inventeur doit-on la première calculatrice ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3f0a4bb1735188072fca9"),
            "choice" : "Henri Becquerel"
          },
          {
            "_id" : ObjectId("5dd3f0a4bb1735188072fca8"),
            "choice" : "Thomas Edison"
          }
        ],
        "response" : "Blaise Pascal"
      }
    ],
    "players" : []
  },

  /* 13 */
  {
    "_id" : ObjectId("5dd3f1cfbb1735188072fcb3"),
    "title" : "Mathématiques simples",
    "level" : "Facile",
    "category" : "science",
    "questionnaire" : [
      {
        "_id" : ObjectId("5dd3f1cfbb1735188072fcbd"),
        "title" : "Dans un triangle ABC rectangle en B : AB = 12cm, et BC = 16cm. A l'aide d'un théorème, calculez AC.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3f1cfbb1735188072fcbf"),
            "choice" : "AC = 17cm"
          },
          {
            "_id" : ObjectId("5dd3f1cfbb1735188072fcbe"),
            "choice" : "AC = 14cm"
          }
        ],
        "response" : "AC = 20cm"
      },
      {
        "_id" : ObjectId("5dd3f1cfbb1735188072fcbb"),
        "title" : "Dans un triangle DEF : DE = 8 cm, DF = 6 cm, et EF = 10 cm. Montrez que le triangle est rectangle et dites en quel point.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3f1cfbb1735188072fcbc"),
            "choice" : "Le triangle est rectangle en F."
          }
        ],
        "response" : "Le triangle est rectangle en D."
      },
      {
        "_id" : ObjectId("5dd3f1cfbb1735188072fcb9"),
        "title" : "Développez et réduisez : A= 6(8x+2)²-(3x-4)(3x+4)+(3x-6)²",
        "choices" : [
          {
            "_id" : ObjectId("5dd3f1cfbb1735188072fcba"),
            "choice" : "A = 408x² + 178x + 32"
          }
        ],
        "response" : "A = 384x² + 156x + 76"
      },
      {
        "_id" : ObjectId("5dd3f1cfbb1735188072fcb6"),
        "title" : "Déterminez le PGCD des nombres 10400 et 256.",
        "choices" : [
          {
            "_id" : ObjectId("5dd3f1cfbb1735188072fcb8"),
            "choice" : "64"
          },
          {
            "_id" : ObjectId("5dd3f1cfbb1735188072fcb7"),
            "choice" : "256"
          }
        ],
        "response" : "32"
      },
      {
        "_id" : ObjectId("5dd3f1cfbb1735188072fcb4"),
        "title" : "Quelle est la probabilité de faire 2, 3, 4, ou 5 en lançant un dé non truqué à six faces ?",
        "choices" : [
          {
            "_id" : ObjectId("5dd3f1cfbb1735188072fcb5"),
            "choice" : "1/3"
          }
        ],
        "response" : "2/3"
      }
    ],
    "players" : []
  }
]);

// display the final initial data
db.getCollection('questionnaires').find({});

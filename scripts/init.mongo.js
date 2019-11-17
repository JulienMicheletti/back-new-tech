db.getCollection('questionnaires').insertMany([
  {
    "level": "Facile",
    "title": "test",
    "category": "Animaux",
    "players": [
      {
        "pseudo": "Julien",
        "score": 1000,
      },
      {
        "pseudo": "Pseudo2",
        "score": 900,
      },
      {
        "pseudo": "Pseudo3",
        "score": 10,
      },
      {
        "pseudo": "Pseudo4",
        "score": 1992,
      },
      {
        "pseudo": "Pseudo5",
        "score": 1991,
      },
    ],
    "questionnaire": [
      {
        "choices": [
          {
            "choice": "Réponse fausse"
          },
          {
            "choice": "Réponse juste"
          }
        ],
        "title": "Question facile",
        "response": "Réponse juste"
      },
      {
        "choices": [
          {
            "choice": "Réponse fausse"
          },
          {
            "choice": "Réponse juste"
          }
        ],
        "title": "Une autre question",
        "response": "Réponse juste"
      }
    ],
  },
  {
    "level": "Facile",
    "title": "Les animaux sont ils tous poilus",
    "category": "Animaux",
    "players": [
      {
        "pseudo": "Julien",
        "score": 1000,
      },
      {
        "pseudo": "Pseudo2",
        "score": 900,
      },
      {
        "pseudo": "Pseudo3",
        "score": 10,
      },
      {
        "pseudo": "Pseudo4",
        "score": 1992,
      },
      {
        "pseudo": "Pseudo5",
        "score": 1991,
      },
    ],
    "questionnaire": [
      {
        "title": "Question facile",
        "choices": [
          {
            "choice": "Réponse fausse",
          },
          {
            "choice": "Réponse juste",
          },
        ],
        "response": "Réponse juste",
      },
      {
        "title": "Une autre question",
        "choices": [
          {
            "choice": "Réponse fausse",
          },
          {
            "choice": "Réponse juste",
          },
        ],
        "response": "Réponse juste",
      },
    ],
  },
  {
    "level": "Difficile",
    "title": "Test de culture sur la pétanque",
    "category": "Sport",
    "players": [
      {
        "pseudo": "Julien",
        "score": 1000,
      },
      {
        "pseudo": "Pseudo2",
        "score": 900,
      },
      {
        "pseudo": "Pseudo3",
        "score": 10,
      },
      {
        "pseudo": "Pseudo4",
        "score": 1992,
      },
      {
        "pseudo": "Pseudo5",
        "score": 1991,
      },
    ],
    "questionnaire": [
      {
        "title": "Question bof",
        "choices": [
          {
            "choice": "Réponse fausse",
          },
          {
            "choice": "Réponse juste",
          },
        ],
        "response": "Réponse juste",
      },
      {
        "title": "Une autre question",
        "choices": [
          {
            "choice": "Réponse fausse",
          },
          {
            "choice": "Réponse juste",
          },
        ],
        "response": "Réponse juste",
      },
    ],
  },
]);

// display the final initial data
db.getCollection('questionnaires').find({});

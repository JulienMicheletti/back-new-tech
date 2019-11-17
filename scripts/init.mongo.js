db.getCollection('questionnaires').insertMany([
      {
        "level": "Facile",
        "title": "test",
        "category": "Animaux",
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
      "category": "Animaux",
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
      "category": "Sport",
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

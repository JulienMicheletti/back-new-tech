export interface Questionnaire {
  id: string;
  level: string;
  categorie: string;
  questionnaire: Question[];
}

export interface Question {
  title: string;
  choices: Choice[];
  response: string;
}

export interface Choice {
  text: string;
}

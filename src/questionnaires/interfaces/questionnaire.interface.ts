export interface Questionnaire {
  id: string;
  questionnaire: Question[];
}

export interface Question {
  id: string;
  level: string;
  title: string;
  choices: Choice[];
  response: string;
}

export interface Choice {
  text: string;
}

import { Exclude, Expose } from 'class-transformer';
import { QuestionnaireChoiceEntity } from './questionnaire-choice.entity';

@Exclude()
export class QuestionnaireQuestionEntity {
  @Expose()
  title: string;

  @Expose()
  choices: QuestionnaireChoiceEntity[];

  @Expose()
  response: string;
}

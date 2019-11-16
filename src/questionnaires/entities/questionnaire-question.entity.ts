import { Exclude, Expose, Type } from 'class-transformer';
import { QuestionnaireChoiceEntity } from './questionnaire-choice.entity';

@Exclude()
export class QuestionnaireQuestionEntity {
  @Expose()
  title: string;

  @Expose()
  @Type(() => QuestionnaireChoiceEntity)
  choices: QuestionnaireChoiceEntity[];

  @Expose()
  response: string;
}

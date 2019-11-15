import { Exclude, Expose, Type } from 'class-transformer';
import { QuestionnaireQuestionEntity } from './questionnaire-question.entity';

@Exclude()
export class QuestionnaireEntity {
  @Expose()
  @Type(() => String)
  id: string;

  @Expose()
  @Type(() => String)
  level: string;

  @Expose()
  @Type(() => String)
  category: string;

  @Expose()
  @Type(() => QuestionnaireQuestionEntity)
  questionnaire: QuestionnaireQuestionEntity[];

  /**
   * Class constructor
   *
   * @param partial data to insert in object instance
   */
  constructor(partial: Partial<QuestionnaireEntity>) {
    Object.assign(this, partial);
  }
}

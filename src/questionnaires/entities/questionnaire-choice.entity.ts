import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class QuestionnaireChoiceEntity {
  @Expose()
  choice: string;
}

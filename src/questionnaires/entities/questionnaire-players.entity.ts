import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class QuestionnairePlayersEntity {
  @Expose()
  pseudo: string;

  @Expose()
  score: number;
}

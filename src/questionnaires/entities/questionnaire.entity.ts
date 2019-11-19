import { Exclude, Expose, Type } from 'class-transformer';
import { QuestionnaireQuestionEntity } from './questionnaire-question.entity';
import { QuestionnairePlayersEntity } from './questionnaire-players.entity';

@Exclude()
export class QuestionnaireEntity {
  @Expose()
  @Type(() => String)
  id: string;

  @Expose()
  @Type(() => String)
  title: string;

  @Expose()
  @Type(() => String)
  level: string;

  @Expose()
  @Type(() => String)
  category: string;

  @Expose()
  @Type(() => QuestionnaireQuestionEntity)
  questionnaire: QuestionnaireQuestionEntity[];

  @Expose()
  @Type(() => QuestionnairePlayersEntity)
  players: QuestionnairePlayersEntity[];
  /**
   * Class constructor
   *
   * @param partial data to insert in object instance
   */
  constructor(partial: Partial<QuestionnaireEntity>) {
    Object.assign(this, partial);
  }

  addPlayer(player: QuestionnairePlayersEntity): QuestionnaireEntity {
    this.players.push(player);
    return this;
  }
}

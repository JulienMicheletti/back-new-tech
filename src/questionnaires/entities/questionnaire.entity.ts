import { Exclude, Expose, Type } from 'class-transformer';
import { QuestionnaireQuestionEntity } from './questionnaire-question.entity';
import { QuestionnairePlayersEntity } from './questionnaire-players.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { QuestionnairePlayersDto } from '../dto/questionnaire-players.dto';

@Exclude()
export class QuestionnaireEntity {
  @Expose()
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '5763cd4dc378a38ecd387737' })
  @Type(() => String)
  id: string;

  @Expose()
  @ApiModelProperty({ description: 'Title of a questionnaire', example: 'My Quiz' })
  @Type(() => String)
  title: string;

  @Expose()
  @ApiModelProperty({ description: 'Difficulty', example: 'Hard' })
  @Type(() => String)
  level: string;

  @Expose()
  @ApiModelProperty({ description: 'Category', example: 'Music' })
  @Type(() => String)
  category: string;

  @Expose()
  @ApiModelProperty({ description: 'Questions' , type: [QuestionnaireQuestionEntity] })
  @Type(() => QuestionnaireQuestionEntity)
  questionnaire: QuestionnaireQuestionEntity[];

  @Expose()
  @ApiModelProperty({ description: 'Players' , type: [QuestionnairePlayersDto] })
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
}

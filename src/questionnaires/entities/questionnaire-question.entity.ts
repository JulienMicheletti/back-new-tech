import { Exclude, Expose, Type } from 'class-transformer';
import { QuestionnaireChoiceEntity } from './questionnaire-choice.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { QuestionnairePlayersDto } from '../dto/questionnaire-players.dto';
import { QuestionnaireChoiceDto } from '../dto/questionnaire-choice.dto';

@Exclude()
export class QuestionnaireQuestionEntity {
  @Expose()
  @ApiModelProperty({ description: 'Question', example: 'What is your name' })
  title: string;

  @Expose()
  @ApiModelProperty({ description: 'Choices', type: [QuestionnaireChoiceDto] })
  @Type(() => QuestionnaireChoiceEntity)
  choices: QuestionnaireChoiceEntity[];

  @Expose()
  @ApiModelProperty({ description: 'Response', example: 'Marc' })
  response: string;
}

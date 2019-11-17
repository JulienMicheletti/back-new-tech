import { QuestionnaireQuestionDto } from './questionnaire-question.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInstance, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionnairePlayersDto } from './questionnaire-players.dto';

export class CreateQuestionnaireDto {
  @ApiModelProperty({ description: 'Title', example: 'My awesome quiz' })
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiModelProperty({ description: 'Level', example: 'Easy' })
  @IsString()
  @IsNotEmpty()
  readonly level: string;

  @ApiModelProperty({ description: 'Category', example: 'Animals' })
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiModelProperty({ description: 'Questionnaire' })
  @IsInstance(QuestionnaireQuestionDto, {each: true})
  @Type(() => QuestionnaireQuestionDto)
  readonly questionnaire: QuestionnaireQuestionDto[];

  @ApiModelProperty({ description: 'Players' })
  @IsInstance(QuestionnairePlayersDto, {each: true})
  @Type(() => QuestionnairePlayersDto)
  readonly players: QuestionnairePlayersDto[];
}

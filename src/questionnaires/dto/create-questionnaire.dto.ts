import { QuestionnaireQuestionDto } from './questionnaire-question.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInstance, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionnairePlayersDto } from './questionnaire-players.dto';
import { type } from 'os';

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

  @ApiModelProperty({ description: 'Questionnaire' , type: [QuestionnaireQuestionDto]})
  @IsInstance(QuestionnaireQuestionDto, {each: true})
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireQuestionDto)
  readonly questionnaire: QuestionnaireQuestionDto[];

  @ApiModelProperty({ description: 'Players', type: [QuestionnairePlayersDto] })
  @IsInstance(QuestionnairePlayersDto, {each: true})
  @ValidateNested({ each: true })
  @Type(() => QuestionnairePlayersDto)
  readonly players: QuestionnairePlayersDto[];
}

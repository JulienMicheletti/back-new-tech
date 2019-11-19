import { QuestionnaireQuestionDto } from './questionnaire-question.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionnairePlayersDto } from './questionnaire-players.dto';

export class UpdateQuestionnaireDto {
  @ApiModelProperty({ description: 'Title', example: 'My awesome quiz' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly title?: string;

  @ApiModelProperty({ description: 'Level', example: 'Easy' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly level?: string;

  @ApiModelProperty({ description: 'Category', example: 'Animals' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly category?: string;

  @ApiModelProperty({ description: 'Players' , type: [QuestionnairePlayersDto] })
  @IsOptional()
  @IsInstance(QuestionnairePlayersDto, {each: true})
  @ValidateNested({ each: true })
  @Type(() => QuestionnairePlayersDto)
  readonly players?: QuestionnairePlayersDto[];

  @ApiModelProperty({ description: 'Questionnaire', type: [QuestionnaireQuestionDto] })
  @IsOptional()
  @IsInstance(QuestionnaireQuestionDto, {each: true})
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireQuestionDto)
  readonly questionnaire?: QuestionnaireQuestionDto[];
}

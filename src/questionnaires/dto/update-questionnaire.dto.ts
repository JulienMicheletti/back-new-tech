import { QuestionnaireQuestionDto } from './questionnaire-question.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateQuestionnaireDto {
  @ApiModelProperty({ description: 'Level', example: 'Easy' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly level: string;

  @ApiModelProperty({ description: 'Category', example: 'Animals' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiModelProperty({ description: 'Questionnaire' })
  @IsOptional()
  @IsInstance(QuestionnaireQuestionDto)
  @Type(() => QuestionnaireQuestionDto)
  readonly questionnaire: QuestionnaireQuestionDto[];
}

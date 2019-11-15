import { QuestionnaireQuestionDto } from './questionnaire-question.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInstance, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuestionnaireDto {
  @ApiModelProperty({ description: 'Level', example: 'Easy' })
  @IsString()
  @IsNotEmpty()
  readonly level: string;

  @ApiModelProperty({ description: 'Category', example: 'Animals' })
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiModelProperty({ description: 'Questionnaire' })
  @IsInstance(QuestionnaireQuestionDto)
  @Type(() => QuestionnaireQuestionDto)
  readonly questionnaire: QuestionnaireQuestionDto[];
}

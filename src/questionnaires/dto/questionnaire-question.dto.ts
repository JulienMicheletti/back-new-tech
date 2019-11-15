import { QuestionnaireChoiceDto } from './questionnaire-choice.dto';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class QuestionnaireQuestionDto {
  @ApiModelProperty({ description: 'Title', example: 'Question example' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiModelPropertyOptional({ description: 'Choices' })
  @IsInstance(QuestionnaireChoiceDto, {each: true})
  @Type(() => QuestionnaireChoiceDto)
  @ValidateNested({ each: true })
  choices: QuestionnaireChoiceDto[];

  @ApiModelProperty({ description: 'Response', example: 'Response example' })
  @IsString()
  @IsNotEmpty()
  response: string;
}

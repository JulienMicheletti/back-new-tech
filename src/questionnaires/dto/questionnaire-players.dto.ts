import { QuestionnaireChoiceDto } from './questionnaire-choice.dto';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsInstance, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class QuestionnairePlayersDto {
  @ApiModelProperty({ description: 'Pseudo', example: 'Pseudo' })
  @IsString()
  @IsNotEmpty()
  pseudo: string;

  @ApiModelProperty({ description: 'score', example: 100 })
  @IsNumber()
  @IsNotEmpty()
  score: number;
}

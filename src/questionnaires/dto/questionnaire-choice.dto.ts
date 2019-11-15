import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class QuestionnaireChoiceDto {
  @ApiModelProperty({ description: 'Choices given for a question', example: 'Choice example' })
  @IsString()
  @IsNotEmpty()
  choice: string;
}

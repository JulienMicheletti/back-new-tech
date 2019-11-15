import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class QuestionnaireChoiceDto {
  @ApiModelProperty({ description: '', example: 'Easy' })
  @IsString()
  @IsNotEmpty()
  text: string;
}

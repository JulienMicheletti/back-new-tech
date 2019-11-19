import { Exclude, Expose } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Exclude()
export class QuestionnaireChoiceEntity {
  @Expose()
  @ApiModelProperty({ description: 'Choice', example: 'True' })
  choice: string;
}

import { Exclude, Expose } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Exclude()
export class QuestionnairePlayersEntity {
  @Expose()
  @ApiModelProperty({ description: 'Pseudo', example: 'Julien' })
  pseudo: string;

  @Expose()
  @ApiModelProperty({ description: 'Score', example: 14 })
  score: number;
}

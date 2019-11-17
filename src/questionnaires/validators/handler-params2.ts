import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class HandlerParams2 {
  @IsNotEmpty()
  @IsString()
  category: string;
}

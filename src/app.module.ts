import { Module } from '@nestjs/common';
import { QuestionnairesModule } from './questionnaires/questionnaires.module';
import { QuestionnairesController } from './questionnaires/questionnaires.controller';

@Module({
  imports: [QuestionnairesModule],
})
export class AppModule {}

import { Get, Module } from '@nestjs/common';
import { QuestionnairesController } from './questionnaires.controller';
import { Observable, of } from 'rxjs';
import { Question } from './interfaces/questionnaire.interface';
import { QuestionnairesService } from './questionnaires.service';

@Module({
  controllers: [ QuestionnairesController ],
  providers: [QuestionnairesService],
})
export class QuestionnairesModule {
}

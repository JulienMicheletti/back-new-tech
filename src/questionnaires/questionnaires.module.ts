import { Get, Module } from '@nestjs/common';
import { QuestionnairesController } from './questionnaires.controller';
import { Observable, of } from 'rxjs';
import { Question } from './interfaces/questionnaire.interface';
import { Questionnaires } from '../data/questionnaires';

@Module({
  controllers: [ QuestionnairesController ],
})
export class QuestionnairesModule {
}

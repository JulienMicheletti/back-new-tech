import { Get, Logger, Module } from '@nestjs/common';
import { QuestionnairesController } from './questionnaires.controller';
import { Observable, of } from 'rxjs';
import { Question } from './interfaces/questionnaire.interface';
import { QuestionnairesService } from './questionnaires.service';
import { QuestionnairesDao } from './dao/questionnairesDao';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionnaireSchema } from './schemas/questionnaire.schema';

@Module({
  imports: [ MongooseModule.forFeature([ { name: 'Questionnaire', schema: QuestionnaireSchema } ]) ],
  controllers: [ QuestionnairesController ],
  providers: [QuestionnairesService, Logger, QuestionnairesDao],
})
export class QuestionnairesModule {
}

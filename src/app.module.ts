import { Module } from '@nestjs/common';
import { QuestionnairesModule } from './questionnaires/questionnaires.module';
import { QuestionnairesController } from './questionnaires/questionnaires.controller';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import * as Config from 'config';

@Module({
  imports: [
    QuestionnairesModule,
    MongooseModule.forRoot(Config.get<string>('mongodb.uri'), Config.get<MongooseModuleOptions>('mongodb.options')),
  ],
})
export class AppModule {}

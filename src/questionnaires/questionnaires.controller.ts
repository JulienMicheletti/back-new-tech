import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Question, Questionnaire } from './interfaces/questionnaire.interface';
import { Questionnaires } from '../data/questionnaires';
import { ApiNoContentResponse, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('questionnaires')
@Controller('questionnaires')
export class QuestionnairesController {
  @ApiOkResponse({ description: 'Returns an array of questions', isArray: true })
  @ApiNoContentResponse({ description: 'No questions exists in database' })
  @Get()
  findAll(): Observable<Questionnaire[]> {
    return of(Questionnaires);
  }
}

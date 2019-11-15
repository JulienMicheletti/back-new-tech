import { Injectable, NotFoundException } from '@nestjs/common';
import { Questionnaire } from './interfaces/questionnaire.interface';
import { from, Observable, of, throwError } from 'rxjs';
import { find, flatMap, map, tap } from 'rxjs/operators';
import { QUESTIONNAIRES } from '../data/questionnaires';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';

@Injectable()
export class QuestionnairesService {
  // tslint:disable-next-line:variable-name
  private _questionnaires: Questionnaire[];

  constructor() {
    this._questionnaires = QUESTIONNAIRES;
  }

  findAll(): Observable<Questionnaire[] | void> {
    return of(this._questionnaires)
      .pipe(
        map( _ => (!!_ && !!_.length) ? _ : undefined),
      );
  }

  findOne(id: string): Observable<Questionnaire | void> {
    return from(this._questionnaires)
      .pipe(
        find(_ => _.id === id),
        flatMap(_ => !!_ ? of(_) : throwError(new NotFoundException('Questionnaire not found'))),
      );
  }

  create(questionnaire: CreateQuestionnaireDto): Observable<Questionnaire> {
    return of(questionnaire)
      .pipe(
        map( _ => Object.assign(_, {
          id: this._createId(),
        }) as Questionnaire ),
        tap(_ => this._questionnaires = this._questionnaires.concat(_)),
      );
  }

  private _createId(): string {
    return `${new Date().getTime()}`;
  }
}

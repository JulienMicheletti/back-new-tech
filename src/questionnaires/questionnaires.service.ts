import { Injectable, NotFoundException } from '@nestjs/common';
import { Questionnaire } from './interfaces/questionnaire.interface';
import { from, Observable, of, throwError } from 'rxjs';
import { find, findIndex, flatMap, map, tap } from 'rxjs/operators';
import { QUESTIONNAIRES } from '../data/questionnaires';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';

@Injectable()
export class QuestionnairesService {
  private _questionnaires: Questionnaire[];

  /**
   * Class constructor
   *
   * @param {QuestionnairesDao} _questionnaireDao instance of the DAO
   */
  constructor() {
    this._questionnaires = QUESTIONNAIRES;
  }

  /**
   * Returns all existing questionnaires in the list
   *
   * @returns {Observable<QuestionnaireEntity[] | void>}
   */
  findAll(): Observable<Questionnaire[] | void> {
    return of(this._questionnaires)
      .pipe(
        map( _ => (!!_ && !!_.length) ? _ : undefined),
      );
  }

  /**
   * Returns one questionnaire of the list matching id in parameter
   *
   * @param {string} id of the questionnaire
   *
   * @returns {Observable<QuestionnaireEntity>}
   */
  findOne(id: string): Observable<Questionnaire | void> {
    return from(this._questionnaires)
      .pipe(
        find(_ => _.id === id),
        flatMap(_ => !!_ ? of(_) : throwError(new NotFoundException('Questionnaire not found'))),
      );
  }


  /**
   * Add a questionnaire in questionnaires list
   *
   * @param questionnaire to create
   *
   * @returns {Observable<QuestionnaireEntity>}
   */
  create(questionnaire: CreateQuestionnaireDto): Observable<Questionnaire> {
    return of(questionnaire)
      .pipe(
        map( _ => Object.assign(_, {
          id: this._createId(),
        }) as Questionnaire ),
        tap(_ => this._questionnaires = this._questionnaires.concat(_)),
      );
  }

  /**
   * Update a questionnaire in questionnaires list
   *
   * @param {string} id of the questionnaire to update
   * @param questionnaire data to update
   *
   * @returns {Observable<QuestionnaireEntity>}
   */
  update(id: string, questionnaire: UpdateQuestionnaireDto): Observable<Questionnaire> {
    return this._findQuestionnaireIndexOfList(id)
      .pipe(
        tap(_ => Object.assign(this._questionnaires[ _ ], questionnaire)),
        map(_ => this._questionnaires[ _ ]),
      );
  }

  private _findQuestionnaireIndexOfList(id: string): Observable<number> {
    return from(this._questionnaires)
      .pipe(
        findIndex(_ => _.id === id),
        flatMap(_ => _ > -1 ?
          of(_) :
          throwError(new NotFoundException(`Questionnaire with id '${id}' not found`)),
        ),
      );
  }

  private _createId(): string {
    return `${new Date().getTime()}`;
  }
}

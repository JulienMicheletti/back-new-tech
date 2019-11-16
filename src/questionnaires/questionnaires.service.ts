import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Questionnaire } from './interfaces/questionnaire.interface';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, find, findIndex, flatMap, map, tap } from 'rxjs/operators';
import { QUESTIONNAIRES } from '../data/questionnaires';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { QuestionnaireEntity } from './entities/questionnaire.entity';
import { QuestionnairesDao } from './dao/questionnairesDao';

@Injectable()
export class QuestionnairesService {

  /**
   * Class constructor
   *
   * @param {QuestionnairesDao} _questionnaireDao instance of the DAO
   */
  constructor(private readonly _questionnaireDao: QuestionnairesDao) {
  }

  /**
   * Returns all existing questionnaires in the list
   *
   * @returns {Observable<QuestionnaireEntity[] | void>}
   */
  findAll(): Observable<QuestionnaireEntity[] | void> {
    return this._questionnaireDao.find()
      .pipe(
        map( _ => (!!_ && !!_.length) ? _.map(__ => new QuestionnaireEntity(__)) : undefined),
      );
  }

  /**
   * Returns one questionnaire of the list matching id in parameter
   *
   * @param {string} id of the questionnaire
   *
   * @returns {Observable<QuestionnaireEntity>}
   */
  findOne(id: string): Observable<QuestionnaireEntity> {
    return this._questionnaireDao.findById(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException(e.message))),
        flatMap(_ =>
          !!_ ?
            of(new QuestionnaireEntity(_)) :
            throwError(new NotFoundException(`Questionnaire with id '${id}' not found`)),
        ),
      );
  }

  /**
   * Add a questionnaire in questionnaires list
   *
   * @param questionnaire to create
   *
   * @returns {Observable<QuestionnaireEntity>}
   */
  create(questionnaire: CreateQuestionnaireDto): Observable<QuestionnaireEntity> {
    return of(questionnaire)
      .pipe(
        flatMap(_ => this._questionnaireDao.create(_)),
        catchError(e => throwError(new UnprocessableEntityException(e.message)),
        ),
        map(_ => new QuestionnaireEntity(_)),
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
  update(id: string, questionnaire: UpdateQuestionnaireDto): Observable<QuestionnaireEntity> {
    return this._questionnaireDao.findByIdAndUpdate(id, questionnaire)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException(e.message)),
          ),
        flatMap(_ =>
          !!_ ?
            of(new QuestionnaireEntity((_))) :
            throwError(new NotFoundException(`Questionnaire with id '${id}' not found`)),
        ),
      );
  }
  /**
   * Deletes one questionnaire in people list
   *
   * @param {string} id of the questionnaire to delete
   *
   * @returns {Observable<void>}
   */
  delete(id: string): Observable<void> {
    return this._questionnaireDao.findByIdAndRemove(id)
      .pipe(
        catchError(e => throwError(new NotFoundException(e.message))),
        flatMap(_ =>
          !!_ ?
            of(undefined) :
            throwError(new NotFoundException(`Questionnaire with id '${id}' not found`)),
        ),
      );
  }
}

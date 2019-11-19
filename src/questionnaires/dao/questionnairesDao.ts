import { Injectable } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { from, Observable } from 'rxjs';
import { Questionnaire } from '../interfaces/questionnaire.interface';
import { map } from 'rxjs/operators';
import { CreateQuestionnaireDto } from '../dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from '../dto/update-questionnaire.dto';
import { QuestionnaireSchema } from '../schemas/questionnaire.schema';

@Injectable()
export class QuestionnairesDao {
  constructor(@InjectModel('Questionnaire') private readonly _questionnaireModel: Model<Questionnaire>) {
  }

  /**
   * Call mongoose method, call toJSON on each result and returns Questionnaire[] or undefined
   *
   * @return {Observable<Questionnaire[] | void>}
   */
  find(): Observable<Questionnaire[] | void> {
    return from(this._questionnaireModel.find({}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  findByCategory(category: string): Observable<Questionnaire[] | void> {
    return from(this._questionnaireModel.find({category: category}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  /**
   * Returns one questionnaire of the list matching id in parameter
   *
   * @param {string} id of the questionnaire in the db
   *
   * @return {Observable<Questionnaire | void>}
   */
  findById(id: string): Observable<Questionnaire | void> {
    return from(this._questionnaireModel.findById(id))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  /**
   * Check if questionnaire already exists with index and add it in questionnaire list
   *
   *
   * @return {Observable<CreateQuestionnairedDto>}
   * @param person
   */
  create(person: CreateQuestionnaireDto): Observable<Questionnaire> {
    return from(this._questionnaireModel.create(person))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      );
  }

  /**
   * Update a person in people list
   *
   * @param {string} id
   * @param {UpdateQuestionnaireDto} person
   *
   * @return {Observable<Questionnaire | void>}
   */
  findByIdAndUpdate(id: string, person: UpdateQuestionnaireDto): Observable<Questionnaire | void> {
    return from(this._questionnaireModel.findByIdAndUpdate(id, person, { new: true }))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  /**
   * Delete a person in people list
   *
   * @param {string} id
   *
   * @return {Observable<Questionnaire | void>}
   */
  findByIdAndRemove(id: string): Observable<Questionnaire | void> {
    return from(this._questionnaireModel.findByIdAndRemove(id))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  /**
   * Ajoute un player dans le quizz
   *
   * @return {Observable<CreateQuestionnairedDto>}
   * @param person
   */
  addPlayer(person: CreateQuestionnaireDto): Observable<Questionnaire> {
    return from(this._questionnaireModel.create(person))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      );
  }
}

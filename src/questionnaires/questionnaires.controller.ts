import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Question, Questionnaire } from './interfaces/questionnaire.interface';
import { QUESTIONNAIRES } from '../data/questionnaires';
import {
  ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiImplicitBody, ApiImplicitParam,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnprocessableEntityResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { QuestionnairesService } from './questionnaires.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { HandlerParams } from './validators/handler-params';
import { QuestionnaireEntity } from './entities/questionnaire.entity';

@ApiUseTags('questionnaires')
@Controller('questionnaires')
export class QuestionnairesController {
  /**
   * Class constructor
   * @param _questionnairesService
   */
  constructor(private readonly _questionnairesService: QuestionnairesService) {}

  /**
   * Handler to answer to GET /questionnaires route
   *
   * @returns Observable<QuestionnairesEntity[] | void>
   */
  @ApiOkResponse({ description: 'Returns an array of questions', isArray: true })
  @ApiNoContentResponse({ description: 'No questions exists in database' })
  @Get()
  findAll(): Observable<Questionnaire[] | void> {
    return this._questionnairesService.findAll();
  }

  /**
   * Handler to answer to GET /questionnaires/:id route
   *
   * @param {HandlerParams} params list of route params to take questionnaire id
   *
   * @returns Observable<QuestionnairesEntity>
   */
  @ApiOkResponse({ description: 'Returns the questionnaire for the given "id"'})
  @ApiNotFoundResponse({ description: 'Questionnaire with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the questionnaire in the database', type: String })
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<QuestionnaireEntity | void > {
    return this._questionnairesService.findOne(params.id);
  }

  /**
   * Handler to answer to POST /questionnaires route
   *
   * @param createQuestionnaireDto data to create
   *
   * @returns Observable<QuestionnairesEntity>
   */
  @ApiCreatedResponse({ description: 'The Questionnaire has been successfully created'})
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiImplicitBody({ name: 'CreateQuestionnaireDto', description: 'Payload to create a new Questionnaire', type: CreateQuestionnaireDto })
  @Post()
  create(@Body() createQuestionnaireDto: CreateQuestionnaireDto): Observable<QuestionnaireEntity> {
    return this._questionnairesService.create(createQuestionnaireDto);
  }

  /**
   * Handler to answer to PUT /questionnaire/:id route
   *
   * @param {HandlerParams} params list of route params to take person id
   * @param updateQuestionnaireDto data to update
   *
   * @returns Observable<QuestionnaireEntity>
   */
  @ApiOkResponse({ description: 'The questionnaire has been successfully updated'})
  @ApiNotFoundResponse({ description: 'Person with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the questionnaire in the database', type: String })
  @ApiImplicitBody({ name: 'UpdateQuestionnaireDto', description: 'Payload to update a questionnaire', type: UpdateQuestionnaireDto })
  @Put(':id')
  update(@Param() params: HandlerParams, @Body() updateQuestionnaireDto: UpdateQuestionnaireDto): Observable<QuestionnaireEntity> {
    return this._questionnairesService.update(params.id, updateQuestionnaireDto);
  }

  /**
   * Handler to answer to DELETE /questionnaire/:id route
   *
   * @param {string} id of the questionnaire to delete
   *
   * @returns Observable<void>
   */
  @ApiNoContentResponse({ description: 'The questionnaire has been successfully deleted' })
  @ApiNotFoundResponse({ description: 'Questionnaire with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the questionnaire in the database', type: String })
  @Delete(':id')
  delete(@Param() params: HandlerParams): Observable<void> {
    return this._questionnairesService.delete(params.id);
  }
}

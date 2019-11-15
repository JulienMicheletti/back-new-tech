import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  findOne(@Param('id') id: string): Observable<Questionnaire | void > {
    return this._questionnairesService.findOne(id);
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
  create(@Body() createQuestionnaireDto: CreateQuestionnaireDto): Observable<Questionnaire> {
    return this._questionnairesService.create(createQuestionnaireDto);
  }
}

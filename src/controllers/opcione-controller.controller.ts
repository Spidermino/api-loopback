import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Opcione} from '../models';
import {OpcioneRepository} from '../repositories';

export class OpcioneControllerController {
  constructor(
    @repository(OpcioneRepository)
    public opcioneRepository : OpcioneRepository,
  ) {}

  @post('/opciones')
  @response(200, {
    description: 'Opcione model instance',
    content: {'application/json': {schema: getModelSchemaRef(Opcione)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Opcione, {
            title: 'NewOpcione',
            exclude: ['idOpcion'],
          }),
        },
      },
    })
    opcione: Omit<Opcione, 'idOpcion'>,
  ): Promise<Opcione> {
    return this.opcioneRepository.create(opcione);
  }

  @get('/opciones/count')
  @response(200, {
    description: 'Opcione model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Opcione) where?: Where<Opcione>,
  ): Promise<Count> {
    return this.opcioneRepository.count(where);
  }

  @get('/opciones')
  @response(200, {
    description: 'Array of Opcione model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Opcione, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Opcione) filter?: Filter<Opcione>,
  ): Promise<Opcione[]> {
    return this.opcioneRepository.find(filter);
  }

  @patch('/opciones')
  @response(200, {
    description: 'Opcione PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Opcione, {partial: true}),
        },
      },
    })
    opcione: Opcione,
    @param.where(Opcione) where?: Where<Opcione>,
  ): Promise<Count> {
    return this.opcioneRepository.updateAll(opcione, where);
  }

  @get('/opciones/{id}')
  @response(200, {
    description: 'Opcione model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Opcione, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Opcione, {exclude: 'where'}) filter?: FilterExcludingWhere<Opcione>
  ): Promise<Opcione> {
    return this.opcioneRepository.findById(id, filter);
  }

  @patch('/opciones/{id}')
  @response(204, {
    description: 'Opcione PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Opcione, {partial: true}),
        },
      },
    })
    opcione: Opcione,
  ): Promise<void> {
    await this.opcioneRepository.updateById(id, opcione);
  }

  @put('/opciones/{id}')
  @response(204, {
    description: 'Opcione PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() opcione: Opcione,
  ): Promise<void> {
    await this.opcioneRepository.replaceById(id, opcione);
  }

  @del('/opciones/{id}')
  @response(204, {
    description: 'Opcione DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.opcioneRepository.deleteById(id);
  }
}

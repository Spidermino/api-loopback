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
import {Administrativo} from '../models';
import {AdministrativoRepository} from '../repositories';

export class AdministrativoControllerController {
  constructor(
    @repository(AdministrativoRepository)
    public administrativoRepository : AdministrativoRepository,
  ) {}

  @post('/administrativos')
  @response(200, {
    description: 'Administrativo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Administrativo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Administrativo, {
            title: 'NewAdministrativo',
            exclude: ['noEmpleado'],
          }),
        },
      },
    })
    administrativo: Omit<Administrativo, 'noEmpleado'>,
  ): Promise<Administrativo> {
    return this.administrativoRepository.create(administrativo);
  }

  @get('/administrativos/count')
  @response(200, {
    description: 'Administrativo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Administrativo) where?: Where<Administrativo>,
  ): Promise<Count> {
    return this.administrativoRepository.count(where);
  }

  @get('/administrativos')
  @response(200, {
    description: 'Array of Administrativo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Administrativo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Administrativo) filter?: Filter<Administrativo>,
  ): Promise<Administrativo[]> {
    return this.administrativoRepository.find(filter);
  }

  @patch('/administrativos')
  @response(200, {
    description: 'Administrativo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Administrativo, {partial: true}),
        },
      },
    })
    administrativo: Administrativo,
    @param.where(Administrativo) where?: Where<Administrativo>,
  ): Promise<Count> {
    return this.administrativoRepository.updateAll(administrativo, where);
  }

  @get('/administrativos/{id}')
  @response(200, {
    description: 'Administrativo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Administrativo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Administrativo, {exclude: 'where'}) filter?: FilterExcludingWhere<Administrativo>
  ): Promise<Administrativo> {
    return this.administrativoRepository.findById(id, filter);
  }

  @patch('/administrativos/{id}')
  @response(204, {
    description: 'Administrativo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Administrativo, {partial: true}),
        },
      },
    })
    administrativo: Administrativo,
  ): Promise<void> {
    await this.administrativoRepository.updateById(id, administrativo);
  }

  @put('/administrativos/{id}')
  @response(204, {
    description: 'Administrativo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() administrativo: Administrativo,
  ): Promise<void> {
    await this.administrativoRepository.replaceById(id, administrativo);
  }

  @del('/administrativos/{id}')
  @response(204, {
    description: 'Administrativo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.administrativoRepository.deleteById(id);
  }
}

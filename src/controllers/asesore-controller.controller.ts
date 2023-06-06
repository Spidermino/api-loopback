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
import {Asesore} from '../models';
import {AsesoreRepository} from '../repositories';

export class AsesoreControllerController {
  constructor(
    @repository(AsesoreRepository)
    public asesoreRepository : AsesoreRepository,
  ) {}

  @post('/asesores')
  @response(200, {
    description: 'Asesore model instance',
    content: {'application/json': {schema: getModelSchemaRef(Asesore)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesore, {
            title: 'NewAsesore',
            
          }),
        },
      },
    })
    asesore: Asesore,
  ): Promise<Asesore> {
    return this.asesoreRepository.create(asesore);
  }

  @get('/asesores/count')
  @response(200, {
    description: 'Asesore model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Asesore) where?: Where<Asesore>,
  ): Promise<Count> {
    return this.asesoreRepository.count(where);
  }

  @get('/asesores')
  @response(200, {
    description: 'Array of Asesore model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Asesore, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Asesore) filter?: Filter<Asesore>,
  ): Promise<Asesore[]> {
    return this.asesoreRepository.find(filter);
  }

  @patch('/asesores')
  @response(200, {
    description: 'Asesore PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesore, {partial: true}),
        },
      },
    })
    asesore: Asesore,
    @param.where(Asesore) where?: Where<Asesore>,
  ): Promise<Count> {
    return this.asesoreRepository.updateAll(asesore, where);
  }

  @get('/asesores/{id}')
  @response(200, {
    description: 'Asesore model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Asesore, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Asesore, {exclude: 'where'}) filter?: FilterExcludingWhere<Asesore>
  ): Promise<Asesore> {
    return this.asesoreRepository.findById(id, filter);
  }

  @patch('/asesores/{id}')
  @response(204, {
    description: 'Asesore PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesore, {partial: true}),
        },
      },
    })
    asesore: Asesore,
  ): Promise<void> {
    await this.asesoreRepository.updateById(id, asesore);
  }

  @put('/asesores/{id}')
  @response(204, {
    description: 'Asesore PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() asesore: Asesore,
  ): Promise<void> {
    await this.asesoreRepository.replaceById(id, asesore);
  }

  @del('/asesores/{id}')
  @response(204, {
    description: 'Asesore DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.asesoreRepository.deleteById(id);
  }
}

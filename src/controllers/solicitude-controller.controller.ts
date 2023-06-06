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
import {Solicitude} from '../models';
import {SolicitudeRepository} from '../repositories';

export class SolicitudeControllerController {
  constructor(
    @repository(SolicitudeRepository)
    public solicitudeRepository : SolicitudeRepository,
  ) {}

  @post('/solicitudes')
  @response(200, {
    description: 'Solicitude model instance',
    content: {'application/json': {schema: getModelSchemaRef(Solicitude)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitude, {
            title: 'NewSolicitude',
            exclude: ['idSolicitud'],
          }),
        },
      },
    })
    solicitude: Omit<Solicitude, 'idSolicitud'>,
  ): Promise<Solicitude> {
    return this.solicitudeRepository.create(solicitude);
  }

  @get('/solicitudes/count')
  @response(200, {
    description: 'Solicitude model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Solicitude) where?: Where<Solicitude>,
  ): Promise<Count> {
    return this.solicitudeRepository.count(where);
  }

  @get('/solicitudes')
  @response(200, {
    description: 'Array of Solicitude model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Solicitude, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Solicitude) filter?: Filter<Solicitude>,
  ): Promise<Solicitude[]> {
    return this.solicitudeRepository.find(filter);
  }

  @patch('/solicitudes')
  @response(200, {
    description: 'Solicitude PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitude, {partial: true}),
        },
      },
    })
    solicitude: Solicitude,
    @param.where(Solicitude) where?: Where<Solicitude>,
  ): Promise<Count> {
    return this.solicitudeRepository.updateAll(solicitude, where);
  }

  @get('/solicitudes/{id}')
  @response(200, {
    description: 'Solicitude model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Solicitude, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Solicitude, {exclude: 'where'}) filter?: FilterExcludingWhere<Solicitude>
  ): Promise<Solicitude> {
    return this.solicitudeRepository.findById(id, filter);
  }

  @patch('/solicitudes/{id}')
  @response(204, {
    description: 'Solicitude PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitude, {partial: true}),
        },
      },
    })
    solicitude: Solicitude,
  ): Promise<void> {
    await this.solicitudeRepository.updateById(id, solicitude);
  }

  @put('/solicitudes/{id}')
  @response(204, {
    description: 'Solicitude PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() solicitude: Solicitude,
  ): Promise<void> {
    await this.solicitudeRepository.replaceById(id, solicitude);
  }

  @del('/solicitudes/{id}')
  @response(204, {
    description: 'Solicitude DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.solicitudeRepository.deleteById(id);
  }
}

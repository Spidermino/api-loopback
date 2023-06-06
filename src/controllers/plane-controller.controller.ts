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
import {Plane} from '../models';
import {PlaneRepository} from '../repositories';

export class PlaneControllerController {
  constructor(
    @repository(PlaneRepository)
    public planeRepository : PlaneRepository,
  ) {}

  @post('/planes')
  @response(200, {
    description: 'Plane model instance',
    content: {'application/json': {schema: getModelSchemaRef(Plane)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plane, {
            title: 'NewPlane',
            exclude: ['idPlan'],
          }),
        },
      },
    })
    plane: Omit<Plane, 'idPlan'>,
  ): Promise<Plane> {
    return this.planeRepository.create(plane);
  }

  @get('/planes/count')
  @response(200, {
    description: 'Plane model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Plane) where?: Where<Plane>,
  ): Promise<Count> {
    return this.planeRepository.count(where);
  }

  @get('/planes')
  @response(200, {
    description: 'Array of Plane model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Plane, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Plane) filter?: Filter<Plane>,
  ): Promise<Plane[]> {
    return this.planeRepository.find(filter);
  }

  @patch('/planes')
  @response(200, {
    description: 'Plane PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plane, {partial: true}),
        },
      },
    })
    plane: Plane,
    @param.where(Plane) where?: Where<Plane>,
  ): Promise<Count> {
    return this.planeRepository.updateAll(plane, where);
  }

  @get('/planes/{id}')
  @response(200, {
    description: 'Plane model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Plane, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Plane, {exclude: 'where'}) filter?: FilterExcludingWhere<Plane>
  ): Promise<Plane> {
    return this.planeRepository.findById(id, filter);
  }

  @patch('/planes/{id}')
  @response(204, {
    description: 'Plane PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plane, {partial: true}),
        },
      },
    })
    plane: Plane,
  ): Promise<void> {
    await this.planeRepository.updateById(id, plane);
  }

  @put('/planes/{id}')
  @response(204, {
    description: 'Plane PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() plane: Plane,
  ): Promise<void> {
    await this.planeRepository.replaceById(id, plane);
  }

  @del('/planes/{id}')
  @response(204, {
    description: 'Plane DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.planeRepository.deleteById(id);
  }
}

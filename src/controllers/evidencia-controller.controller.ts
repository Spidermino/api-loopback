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
import {Evidencia} from '../models';
import {EvidenciaRepository} from '../repositories';

export class EvidenciaControllerController {
  constructor(
    @repository(EvidenciaRepository)
    public evidenciaRepository : EvidenciaRepository,
  ) {}

  @post('/evidencias')
  @response(200, {
    description: 'Evidencia model instance',
    content: {'application/json': {schema: getModelSchemaRef(Evidencia)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Evidencia, {
            title: 'NewEvidencia',
            exclude: ['idEvidencia'],
          }),
        },
      },
    })
    evidencia: Omit<Evidencia, 'idEvidencia'>,
  ): Promise<Evidencia> {
    return this.evidenciaRepository.create(evidencia);
  }

  @get('/evidencias/count')
  @response(200, {
    description: 'Evidencia model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Evidencia) where?: Where<Evidencia>,
  ): Promise<Count> {
    return this.evidenciaRepository.count(where);
  }

  @get('/evidencias')
  @response(200, {
    description: 'Array of Evidencia model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Evidencia, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Evidencia) filter?: Filter<Evidencia>,
  ): Promise<Evidencia[]> {
    return this.evidenciaRepository.find(filter);
  }

  @patch('/evidencias')
  @response(200, {
    description: 'Evidencia PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Evidencia, {partial: true}),
        },
      },
    })
    evidencia: Evidencia,
    @param.where(Evidencia) where?: Where<Evidencia>,
  ): Promise<Count> {
    return this.evidenciaRepository.updateAll(evidencia, where);
  }

  @get('/evidencias/{id}')
  @response(200, {
    description: 'Evidencia model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Evidencia, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Evidencia, {exclude: 'where'}) filter?: FilterExcludingWhere<Evidencia>
  ): Promise<Evidencia> {
    return this.evidenciaRepository.findById(id, filter);
  }

  @patch('/evidencias/{id}')
  @response(204, {
    description: 'Evidencia PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Evidencia, {partial: true}),
        },
      },
    })
    evidencia: Evidencia,
  ): Promise<void> {
    await this.evidenciaRepository.updateById(id, evidencia);
  }

  @put('/evidencias/{id}')
  @response(204, {
    description: 'Evidencia PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() evidencia: Evidencia,
  ): Promise<void> {
    await this.evidenciaRepository.replaceById(id, evidencia);
  }

  @del('/evidencias/{id}')
  @response(204, {
    description: 'Evidencia DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.evidenciaRepository.deleteById(id);
  }
}

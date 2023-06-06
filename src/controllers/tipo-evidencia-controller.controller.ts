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
import {TipoEvidencia} from '../models';
import {TipoEvidenciaRepository} from '../repositories';

export class TipoEvidenciaControllerController {
  constructor(
    @repository(TipoEvidenciaRepository)
    public tipoEvidenciaRepository : TipoEvidenciaRepository,
  ) {}

  @post('/tipo-evidencias')
  @response(200, {
    description: 'TipoEvidencia model instance',
    content: {'application/json': {schema: getModelSchemaRef(TipoEvidencia)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoEvidencia, {
            title: 'NewTipoEvidencia',
            exclude: ['idTipo'],
          }),
        },
      },
    })
    tipoEvidencia: Omit<TipoEvidencia, 'idTipo'>,
  ): Promise<TipoEvidencia> {
    return this.tipoEvidenciaRepository.create(tipoEvidencia);
  }

  @get('/tipo-evidencias/count')
  @response(200, {
    description: 'TipoEvidencia model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TipoEvidencia) where?: Where<TipoEvidencia>,
  ): Promise<Count> {
    return this.tipoEvidenciaRepository.count(where);
  }

  @get('/tipo-evidencias')
  @response(200, {
    description: 'Array of TipoEvidencia model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TipoEvidencia, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TipoEvidencia) filter?: Filter<TipoEvidencia>,
  ): Promise<TipoEvidencia[]> {
    return this.tipoEvidenciaRepository.find(filter);
  }

  @patch('/tipo-evidencias')
  @response(200, {
    description: 'TipoEvidencia PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoEvidencia, {partial: true}),
        },
      },
    })
    tipoEvidencia: TipoEvidencia,
    @param.where(TipoEvidencia) where?: Where<TipoEvidencia>,
  ): Promise<Count> {
    return this.tipoEvidenciaRepository.updateAll(tipoEvidencia, where);
  }

  @get('/tipo-evidencias/{id}')
  @response(200, {
    description: 'TipoEvidencia model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TipoEvidencia, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TipoEvidencia, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoEvidencia>
  ): Promise<TipoEvidencia> {
    return this.tipoEvidenciaRepository.findById(id, filter);
  }

  @patch('/tipo-evidencias/{id}')
  @response(204, {
    description: 'TipoEvidencia PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoEvidencia, {partial: true}),
        },
      },
    })
    tipoEvidencia: TipoEvidencia,
  ): Promise<void> {
    await this.tipoEvidenciaRepository.updateById(id, tipoEvidencia);
  }

  @put('/tipo-evidencias/{id}')
  @response(204, {
    description: 'TipoEvidencia PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipoEvidencia: TipoEvidencia,
  ): Promise<void> {
    await this.tipoEvidenciaRepository.replaceById(id, tipoEvidencia);
  }

  @del('/tipo-evidencias/{id}')
  @response(204, {
    description: 'TipoEvidencia DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipoEvidenciaRepository.deleteById(id);
  }
}

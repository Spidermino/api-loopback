import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoEvidencia extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idTipo?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  responsable?: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'string',
    required: true,
  })
  formato: string;


  constructor(data?: Partial<TipoEvidencia>) {
    super(data);
  }
}

export interface TipoEvidenciaRelations {
  // describe navigational properties here
}

export type TipoEvidenciaWithRelations = TipoEvidencia & TipoEvidenciaRelations;

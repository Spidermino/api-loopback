import {Entity, model, property} from '@loopback/repository';

@model()
export class Evidencia extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idEvidencia?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'buffer',
  })
  archivo?: Buffer;

  @property({
    type: 'string',
    required: true,
  })
  estatus: string;

  @property({
    type: 'number',
    required: true,
  })
  cantEntregada: number;

  @property({
    type: 'number',
    required: true,
  })
  idTipo: number;

  @property({
    type: 'number',
    required: true,
  })
  idSolicitud: number;


  constructor(data?: Partial<Evidencia>) {
    super(data);
  }
}

export interface EvidenciaRelations {
  // describe navigational properties here
}

export type EvidenciaWithRelations = Evidencia & EvidenciaRelations;

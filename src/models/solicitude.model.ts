import {Entity, model, property} from '@loopback/repository';

@model()
export class Solicitude extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idSolicitud?: number;

  @property({
    type: 'string',
    required: true,
  })
  fechaRegistro: string;

  @property({
    type: 'string',
  })
  fechaAtencion?: string;

  @property({
    type: 'string',
    required: true,
  })
  estatus: string;

  @property({
    type: 'string',
    required: true,
  })
  opcion: string;

  @property({
    type: 'number',
    required: true,
  })
  noControl: number;

  @property({
    type: 'string',
    required: true,
  })
  coordinador: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  producto: string;

  @property({
    type: 'number',
    required: true,
  })
  numeroEstudiantes: number;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;

  constructor(data?: Partial<Solicitude>) {
    super(data);
  }
}

export interface SolicitudeRelations {
  // describe navigational properties here
}

export type SolicitudeWithRelations = Solicitude & SolicitudeRelations;

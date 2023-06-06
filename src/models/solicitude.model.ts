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
    type: 'date',
    required: true,
  })
  fechaRegistro: string;

  @property({
    type: 'date',
  })
  fechaAtencion?: string;

  @property({
    type: 'string',
    required: true,
  })
  estatus: string;

  @property({
    type: 'number',
    required: true,
  })
  idOpcion: number;

  @property({
    type: 'number',
    required: true,
  })
  noControl: number;

  @property({
    type: 'number',
    required: true,
  })
  noEmpleado: number;


  constructor(data?: Partial<Solicitude>) {
    super(data);
  }
}

export interface SolicitudeRelations {
  // describe navigational properties here
}

export type SolicitudeWithRelations = Solicitude & SolicitudeRelations;

import {Entity, model, property} from '@loopback/repository';

@model()
export class Proyecto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idProyecto?: number;

  @property({
    type: 'number',
    required: true,
  })
  idSolicitud: number;

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

  @property({
    type: 'number',
    required: true,
  })
  noControl: number;


  constructor(data?: Partial<Proyecto>) {
    super(data);
  }
}

export interface ProyectoRelations {
  // describe navigational properties here
}

export type ProyectoWithRelations = Proyecto & ProyectoRelations;

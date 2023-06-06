import {Entity, model, property} from '@loopback/repository';

@model()
export class Carrera extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCarrera?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  siglas: string;

  @property({
    type: 'number',
    required: true,
  })
  creditos: number;

  @property({
    type: 'string',
    required: true,
  })
  especialidad: string;

  @property({
    type: 'number',
    required: true,
  })
  noEmpleado: number;


  constructor(data?: Partial<Carrera>) {
    super(data);
  }
}

export interface CarreraRelations {
  // describe navigational properties here
}

export type CarreraWithRelations = Carrera & CarreraRelations;

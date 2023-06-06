import {Entity, model, property} from '@loopback/repository';

@model()
export class Alumno extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  noControl?: number;

  @property({
    type: 'number',
    required: true,
  })
  anioEgreso: number;

  @property({
    type: 'number',
    required: true,
  })
  idPlan: number;

  @property({
    type: 'number',
    required: true,
  })
  idUsuario: number;

  @property({
    type: 'number',
    required: true,
  })
  idCarrera: number;


  constructor(data?: Partial<Alumno>) {
    super(data);
  }
}

export interface AlumnoRelations {
  // describe navigational properties here
}

export type AlumnoWithRelations = Alumno & AlumnoRelations;

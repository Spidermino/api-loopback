import {Entity, model, property} from '@loopback/repository';

@model()
export class Plane extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPlan?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'number',
    required: true,
  })
  creditos: number;

  @property({
    type: 'string',
    required: true,
  })
  vigencia: string;

  @property({
    type: 'number',
    required: true,
  })
  idCarrera: number;


  constructor(data?: Partial<Plane>) {
    super(data);
  }
}

export interface PlaneRelations {
  // describe navigational properties here
}

export type PlaneWithRelations = Plane & PlaneRelations;

import {Entity, model, property} from '@loopback/repository';

@model()
export class Opcione extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idOpcion?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<Opcione>) {
    super(data);
  }
}

export interface OpcioneRelations {
  // describe navigational properties here
}

export type OpcioneWithRelations = Opcione & OpcioneRelations;

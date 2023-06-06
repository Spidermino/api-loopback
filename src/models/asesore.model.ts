import {Entity, model, property} from '@loopback/repository';

@model()
export class Asesore extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  noDocente: number;

  @property({
    type: 'number',
    required: true,
  })
  idProyecto: number;


  constructor(data?: Partial<Asesore>) {
    super(data);
  }
}

export interface AsesoreRelations {
  // describe navigational properties here
}

export type AsesoreWithRelations = Asesore & AsesoreRelations;

import {Entity, model, property} from '@loopback/repository';

@model()
export class Administrativo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  noEmpleado?: number;

  @property({
    type: 'string',
    required: true,
  })
  puesto: string;

  @property({
    type: 'string',
    required: true,
  })
  estatus: string;

  @property({
    type: 'number',
    required: true,
  })
  idUsuario: number;


  constructor(data?: Partial<Administrativo>) {
    super(data);
  }
}

export interface AdministrativoRelations {
  // describe navigational properties here
}

export type AdministrativoWithRelations = Administrativo & AdministrativoRelations;

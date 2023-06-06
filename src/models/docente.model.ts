import {Entity, model, property} from '@loopback/repository';

@model()
export class Docente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  noDocente?: number;

  @property({
    type: 'string',
    required: true,
  })
  escolaridad: string;

  @property({
    type: 'string',
    required: true,
  })
  cedula: string;

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


  constructor(data?: Partial<Docente>) {
    super(data);
  }
}

export interface DocenteRelations {
  // describe navigational properties here
}

export type DocenteWithRelations = Docente & DocenteRelations;

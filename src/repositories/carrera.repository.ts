import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Carrera, CarreraRelations} from '../models';

export class CarreraRepository extends DefaultCrudRepository<
  Carrera,
  typeof Carrera.prototype.idCarrera,
  CarreraRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Carrera, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Plane, PlaneRelations} from '../models';

export class PlaneRepository extends DefaultCrudRepository<
  Plane,
  typeof Plane.prototype.idPlan,
  PlaneRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Plane, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Solicitude, SolicitudeRelations} from '../models';

export class SolicitudeRepository extends DefaultCrudRepository<
  Solicitude,
  typeof Solicitude.prototype.idSolicitud,
  SolicitudeRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Solicitude, dataSource);
  }
}

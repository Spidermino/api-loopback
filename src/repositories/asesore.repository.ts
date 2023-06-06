import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Asesore, AsesoreRelations} from '../models';

export class AsesoreRepository extends DefaultCrudRepository<
  Asesore,
  typeof Asesore.prototype.noDocente, idProyecto,
  AsesoreRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Asesore, dataSource);
  }
}

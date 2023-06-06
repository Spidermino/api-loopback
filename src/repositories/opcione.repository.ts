import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Opcione, OpcioneRelations} from '../models';

export class OpcioneRepository extends DefaultCrudRepository<
  Opcione,
  typeof Opcione.prototype.idOpcion,
  OpcioneRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Opcione, dataSource);
  }
}

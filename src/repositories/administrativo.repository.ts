import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Administrativo, AdministrativoRelations} from '../models';

export class AdministrativoRepository extends DefaultCrudRepository<
  Administrativo,
  typeof Administrativo.prototype.noEmpleado,
  AdministrativoRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Administrativo, dataSource);
  }
}

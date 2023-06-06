import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Docente, DocenteRelations} from '../models';

export class DocenteRepository extends DefaultCrudRepository<
  Docente,
  typeof Docente.prototype.noDocente,
  DocenteRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Docente, dataSource);
  }
}

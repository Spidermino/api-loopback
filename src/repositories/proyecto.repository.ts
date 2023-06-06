import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Proyecto, ProyectoRelations} from '../models';

export class ProyectoRepository extends DefaultCrudRepository<
  Proyecto,
  typeof Proyecto.prototype.idProyecto,
  ProyectoRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Proyecto, dataSource);
  }
}

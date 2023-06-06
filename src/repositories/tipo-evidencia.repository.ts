import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {TipoEvidencia, TipoEvidenciaRelations} from '../models';

export class TipoEvidenciaRepository extends DefaultCrudRepository<
  TipoEvidencia,
  typeof TipoEvidencia.prototype.idTipo,
  TipoEvidenciaRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(TipoEvidencia, dataSource);
  }
}

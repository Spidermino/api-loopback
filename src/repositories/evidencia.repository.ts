import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Evidencia, EvidenciaRelations} from '../models';

export class EvidenciaRepository extends DefaultCrudRepository<
  Evidencia,
  typeof Evidencia.prototype.idEvidencia,
  EvidenciaRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Evidencia, dataSource);
  }
}

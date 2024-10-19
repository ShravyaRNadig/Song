import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SongDataSource} from '../datasources';
import {Song, SongRelations} from '../models';

export class SongRepository extends DefaultCrudRepository<
  Song,
  typeof Song.prototype.id,
  SongRelations
> {
  constructor(
    @inject('datasources.Song') dataSource: SongDataSource,
  ) {
    super(Song, dataSource);
  }
}

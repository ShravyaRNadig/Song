import {Entity, model, property} from '@loopback/repository';

@model()
export class Song extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  artist: string;

  @property({
    type: 'string',
  })
  album?: string;

  @property({
    type: 'date',
  })
  releaseDate?: string;

  constructor(data?: Partial<Song>) {
    super(data);
  }
}

export interface SongRelations {
  // define any relations here, for example:
  // albums?: Album[];
}

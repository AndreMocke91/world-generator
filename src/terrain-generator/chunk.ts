import { Tile } from './tile'
import { Construct } from '../shared/construct'
import { Coordinates } from '../shared/coordinates'

export class Chunk {
  public coordinates: Coordinates
  public tiles: Tile[][]

  constructor(init: Construct<Chunk>) {
    Object.assign(this, init)
  }
}

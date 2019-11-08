import { Coordinates } from '../shared/coordinates'
import { Construct } from '../shared/construct'

export class Tile {
  public coordinates: Coordinates

  constructor(init: Construct<Tile>) {
    Object.assign(this, init)
  }
}

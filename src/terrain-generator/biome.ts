import { Construct } from '../shared/construct'
import { normalize } from '../shared/normalize'

/**
 * @param traversable is this tile traversable
 * @param background may be any valid css prop
 * @param startingHeight should be between -1 and 1
 */
export interface TileBody {
  name: string
  description?: string
  traversable: boolean
  background: string
  startingHeight: number
}

export class Biome {
  tileBodies: TileBody[]

  constructor(init: Construct<Biome>) {
    Object.assign(this, init)
  }

  selectTileBody? = (z: number) => {
    if (!this.tileBodies.length) {
      throw new Error('No tiles added')
    }
    let index = 0
    let selectedTile = this.tileBodies[index]

    while (index < this.tileBodies.length) {
      if (this.tileBodies[index].startingHeight >= normalize(z)) {
        break
      }
      selectedTile = this.tileBodies[index]
      index++
    }
    return selectedTile
  }

  
}

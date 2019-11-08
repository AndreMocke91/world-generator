import { Biome } from './biome'
import { Construct } from '../shared/construct'

interface BiomeHeight {
  startingHeight: number
  endingHeight: number
  biome: Biome
}

export class World {
  biomeHeightMap: BiomeHeight[]

  constructor(init: Construct<World>) {
    Object.assign(this, init)
  }

  selectBiome? = (z: number) => {
    if (!this.biomeHeightMap.length) {
      throw new Error('No biomes added')
    }
    let index = 0
    let selectedBiome = this.biomeHeightMap[index]
    while (index < this.biomeHeightMap.length) {
      if (this.biomeHeightMap[index].startingHeight >= z) {
        break
      }
      selectedBiome = this.biomeHeightMap[index]
      index++
    }
    return selectedBiome
  }
}

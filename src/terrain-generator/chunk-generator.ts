import { Coordinates } from '../shared/coordinates'
import { RandomGenerator } from '../shared/random'
import { TerrainMap } from './terrain-map'
import { Tile } from './tile'
import { Chunk } from './chunk'

import tumult from 'tumult'
const perlin = new tumult.Perlin2(
  RandomGenerator.randomFloat({ min: 0, max: 10 })
)

export class ChunkGenerator {
  public static async generateChunk(params: {
    topLeftCoordinates: Coordinates
  }): Promise<Chunk> {
    const { topLeftCoordinates } = params
    return new Promise((resolve, reject) => {
      let tiles: Tile[][] = []
      for (
        let x = topLeftCoordinates.x;
        x < topLeftCoordinates.x + TerrainMap.chunkSize;
        x++
      ) {
        tiles.push([])
        for (
          let y = topLeftCoordinates.y;
          y < topLeftCoordinates.y + TerrainMap.chunkSize;
          y++
        ) {
          const tileCoordinates = new Coordinates({
            x,
            y,
            z: this.getZValues({ x, y })
          })
          tiles[x].push(
            new Tile({
              coordinates: tileCoordinates
            })
          )
        }
      }

      resolve(
        new Chunk({
          coordinates: topLeftCoordinates,
          tiles
        })
      )
    })
  }

  public static getZValues(params: { x: number; y: number }) {
    const zoom = 0.05
    const result = perlin.octavate(1, params.x * zoom, params.y * zoom)

    if(result > TerrainMap.maxHeight){
      TerrainMap.maxHeight = result
    }
    if(result < TerrainMap.minHeight){
      TerrainMap.minHeight = result
    }
    // console.log({min, max, floor, ceil, result})
    return result
  }
}

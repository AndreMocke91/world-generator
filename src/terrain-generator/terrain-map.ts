import { Chunk } from './chunk'
import { Coordinates } from '../shared/coordinates'
import { ChunkGenerator } from './chunk-generator'
import { Earth } from './default-worlds/earth'

export class TerrainMap {
  private static chunkMap = new WeakMap<Coordinates, Chunk>()
  public static chunkSize = 100
  public static variance = 0.03
  public static world = Earth

  public static maxHeight = -1
  public static minHeight = 1

  public static async generateChunk(params: {
    topLeftCoordinates: Coordinates
  }) {
    const { topLeftCoordinates } = params

    if (this.chunkMap.get(topLeftCoordinates)) {
      return
    }

    this.chunkMap.set(
      topLeftCoordinates,
      await ChunkGenerator.generateChunk({ topLeftCoordinates })
    )
  }

  public static getChunk(params: { coordinates: Coordinates }) {
    const foundChunk = this.chunkMap.get(params.coordinates)

    if (!foundChunk) {
      return
    }

    return foundChunk
  }

  public static getTile(params: { coordinates: Coordinates }) {
    const { coordinates } = params

    const chunkCoordinates = new Coordinates({
      x: Math.floor(coordinates.x / this.chunkSize),
      y: Math.floor(coordinates.y / this.chunkSize)
    })

    const foundChunk = this.getChunk({ coordinates: chunkCoordinates })

    if (!foundChunk) {
      return
    }

    return foundChunk.tiles[coordinates.x][coordinates.y]
  }

  prettyPrint = (chunk: Chunk) => {
    for (
      let x = chunk.coordinates.x;
      x < chunk.coordinates.x + TerrainMap.chunkSize;
      x++
    ) {
      console.log(chunk.tiles[x].map(y => y.coordinates.z).join('\t\t'))
    }
  }
}

(window as any).TerrainMap = TerrainMap

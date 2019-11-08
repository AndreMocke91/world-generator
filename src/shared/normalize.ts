import { TerrainMap } from '../terrain-generator/terrain-map'
export const normalize = (
  z: number,
  min: number = TerrainMap.minHeight,
  max: number = TerrainMap.maxHeight
) => {
  const result = ((z - min) / (max - min)) * 2 - 1
  return result
}

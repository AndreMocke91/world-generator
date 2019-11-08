import * as React from 'react'
import { TerrainMap } from '../terrain-generator/terrain-map'
import styled from 'styled-components'
import { Coordinates } from '../shared/coordinates'
import { normalize } from '../shared/normalize'

interface Props {}

interface State {
  loading: boolean
  viewingChunkCoordinates: Coordinates
}

export class MapRenderer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      loading: true,
      viewingChunkCoordinates: new Coordinates({ x: 0, y: 0, z: 0 })
    }
  }

  componentDidMount() {
    TerrainMap.generateChunk({
      topLeftCoordinates: this.state.viewingChunkCoordinates
    }).then(() => {
      this.setState({ loading: false })
    })
  }

  render() {
    const foundChunk = TerrainMap.getChunk({
      coordinates: this.state.viewingChunkCoordinates
    })

    if (!foundChunk || this.state.loading) {
      return null
    }

    try {
      return (
        <MapContainer>
          {foundChunk.tiles.map(row => (
            <ChunkRow>
              {row.map(tile => (
                <ChunkTile z={tile.coordinates.z}>{}</ChunkTile>
              ))}
            </ChunkRow>
          ))}
        </MapContainer>
      )
    } catch (e){
      return <div>{JSON.stringify(e)}</div>
    }
  }
}

const MapContainer = styled.div`
  box-sizing: border-box;
  box-shadow: 0 0 5px 5px rgba(50, 50, 50, 0.2);
  margin: 2.5vh 2.5vw;
  display: flex;
  flex-direction: column;
`

const ChunkRow = styled.div`
  display: flex;
`

const ChunkTile = styled.div`
  height: ${() => (`calc(95vh/${TerrainMap.chunkSize})`)};
  width: ${() => (`calc(95vw/${TerrainMap.chunkSize})`)};
  background: ${props => {
    const selectedBiome = TerrainMap.world.selectBiome!(props.z)
    const selectedTile = selectedBiome.biome.selectTileBody!(normalize(props.z, selectedBiome.startingHeight, selectedBiome.endingHeight))

    return selectedTile.background
  }};
`

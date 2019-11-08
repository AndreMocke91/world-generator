import React from 'react'
import './App.css'
import { MapRenderer } from './renderer/map-renderer'
import { TerrainMap } from './terrain-generator/terrain-map'

const App: React.FC = () => {

  (window as any).terrainMap = TerrainMap;
  
  return <div className='App'>
    <MapRenderer>

    </MapRenderer>
  </div>
}

export default App


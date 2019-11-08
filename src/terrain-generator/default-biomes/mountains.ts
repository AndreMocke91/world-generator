import { Biome } from "../biome";

export const Mountains = new Biome({
    tileBodies: [
      {
        name: 'grass',
        traversable: true,
        background: 'green',
        startingHeight: -1,
      },
      {
        name: 'dark-grass',
        traversable: true,
        background: 'darkgreen',
        startingHeight: -0.7,
      },
      {
        name: 'mountains',
        traversable: true,
        background: 'grey',
        startingHeight: -0.2,
      },
      {
        name: 'highmountains',
        traversable: true,
        background: 'black',
        startingHeight: 0.2,
      },
    ]
  })
  
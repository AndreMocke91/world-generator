import { Biome } from "../biome";

export const Plains = new Biome({
    tileBodies: [
      {
        name: 'sand',
        traversable: true,
        background: 'yellow',
        startingHeight: -1,
      },
      {
        name: 'grass',
        traversable: true,
        background: 'green',
        startingHeight: -0.5,
      },
      {
        name: 'dark-grass',
        traversable: true,
        background: 'darkgreen',
        startingHeight: 0.5,
      },
      {
        name: 'mountains',
        traversable: true,
        background: 'grey',
        startingHeight: 0.8,
      },
    ]
  })
  
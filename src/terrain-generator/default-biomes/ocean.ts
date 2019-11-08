import { Biome } from "../biome";

export const Ocean = new Biome({
    tileBodies: [
      {
        name: 'shallows',
        traversable: false,
        background: 'cyan',
        startingHeight: -1
      },
      {
        name: 'water',
        traversable: false,
        background: 'blue',
        startingHeight: -0.7
      },
      {
        name: 'deepwater',
        traversable: false,
        background: 'navy',
        startingHeight: -0.2
      }
    ]
  })
  
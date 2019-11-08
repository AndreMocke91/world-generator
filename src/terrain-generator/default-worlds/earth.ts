import { World } from "../world";
import { Ocean } from "../default-biomes/ocean";
import { Plains } from "../default-biomes/plains";
import { Mountains } from "../default-biomes/mountains";

export const Earth = new World({
    biomeHeightMap: [
        {
            startingHeight: -0.1,
            endingHeight: -0.4,
            biome: Ocean
        },
        {
            startingHeight: -0.4,
            endingHeight: 0.8,
            biome: Plains
        },
        {
            startingHeight: 0.8,
            endingHeight: 1,
            biome: Mountains
        }
    ]
})
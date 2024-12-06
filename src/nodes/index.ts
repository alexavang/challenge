import type { NodeTypes } from "@xyflow/react";

import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
  {
    id: "pokedex",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "Pokédex (Select a Pokemon)" },
  },
  {
    id: "pokemon-details",
    position: { x: 100, y: 100 },
    data: { label: "Pokémon Details" },
  },
  {
    id: "pokemon-moves",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "Pokémon Moves" },
  },
];

export const nodeTypes = {
  // Add any of your custom nodes here!
} satisfies NodeTypes;

import type { NodeTypes } from "@xyflow/react";

import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
  {
    id: "1",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "Genre" },
  },
  {
    id: "2",
    type: "input",
    position: { x: 100, y: 100 },
    data: { label: "Mood" },
  },
  {
    id: "3",
    type: "input",
    position: { x: 0, y: 200 },
    data: { label: "Tempo" },
  },
  {
    id: "4",
    type: "output",
    position: { x: 200, y: 0 },
    data: { label: "Playlist" },
  },
];

export const nodeTypes = {
  // Add any of your custom nodes here!
} satisfies NodeTypes;

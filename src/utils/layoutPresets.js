export const layoutPresets = [
  {
    id: "flex-row",
    name: "Flex Row",
    type: "flex",
    direction: "row",
  },
  {
    id: "flex-col",
    name: "Flex Column",
    type: "flex",
    direction: "column",
  },
  {
    id: "grid-one",
    name: "Grid - One Column",
    type: "grid",
    grid: [{ id: "row-1", columns: 1 }],
  },
  {
    id: "grid-two",
    name: "Grid - Two Column",
    type: "grid",
    grid: [{ id: "row-1", columns: 2 }],
  },
  {
    id: "grid-three",
    name: "Grid - Three Column",
    type: "grid",
    grid: [{ id: "row-1", columns: 3 }],
  },
  {
    id: "list",
    name: "List",
    type: "list",
    grid: [{ id: "row-1", columns: 1 }],
  },
  {
    id: "align-left",
    name: "Align Left",
    type: "alignment",
    align: "left",
  },
  {
    id: "align-center",
    name: "Align Center",
    type: "alignment",
    align: "center",
  },
  {
    id: "align-right",
    name: "Align Right",
    type: "alignment",
    align: "right",
  },
  {
    id: "align-justify",
    name: "Justify",
    type: "alignment",
    align: "justify",
  },
];

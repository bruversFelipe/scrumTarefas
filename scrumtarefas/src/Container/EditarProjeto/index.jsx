import React from "react";
import GridLayout from "react-grid-layout";

const layoutColumns = [
  { i: "a", x: 0, y: 0, w: 1, h: 1 },
  { i: "b", x: 1, y: 0, w: 1, h: 1 },
  { i: "c", x: 2, y: 0, w: 1, h: 1 },
  { i: "d", x: 3, y: 0, w: 1, h: 1 }
];

const MeuProjeto = () => (
  <GridLayout
    className="layout"
    layout={layoutColumns}
    cols={4}
    rowHeight={'auto'}
    width={1060}
    compactType="horizontal"
  >
    <div style={{ border: "1px solid", cursor: "move" }} key="a">
      oi
    </div>
  </GridLayout>
);

export default MeuProjeto;

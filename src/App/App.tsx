import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Column, IColumn } from "../classes/Column";
import { changeArrayPositions } from "../functions/arrayFunctions";
import "../styles/App.css";

function App() {
  const [numColumns, setNumColumns] = useState(20);
  const [columns, setColumns] = useState<IColumn[]>(
    initializeRandomSortingColumns()
  );

  function initializeRandomSortingColumns(): Column[] {
    return Array.from(
      { length: numColumns },
      (_, index) => new Column(Math.random() * 100, index)
    );
  }

  return (
    <div className="App">
      <h1>Sorting Algorithms Visualizer</h1>
      <div className="sorting-container" data-testid={"sorting-container"}>
        {columns.map((c, index) => (
          <div
            id={index.toString()}
            className="sorting-column"
            data-testid="sorting-column"
            style={{ height: `${c.height}%` }}
          />
        ))}
      </div>
      <button>Insertion Sort</button>
      <button>Quicksort</button>
      <button>Bubblesort</button>
    </div>
  );
}

export default App;

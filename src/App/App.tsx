import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { bubblesortStep, checkIsSorted } from "../functions/sortingFunctions";
import "../styles/App.css";

function App() {
  const [numColumns, setNumColumns] = useState(100);
  const [columns, setColumns] = useState<number[]>(
    initializeRandomSortingColumns()
  );
  const [index, setIndex] = useState<number>(0);

  function initializeRandomSortingColumns(): number[] {
    return Array.from({ length: numColumns }, () => Math.random() * 100);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!checkIsSorted(columns)) {
        const [tempColumns, tempIndex] = bubblesortStep(columns, index);
        setColumns(tempColumns);
        setIndex(tempIndex);
      }
    }, 1);

    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <h1>Sorting Algorithms Visualizer</h1>
      <div className="sorting-container" data-testid={"sorting-container"}>
        {columns.map((c, index) => (
          <div
            id={index.toString()}
            className="sorting-column"
            data-testid="sorting-column"
            style={{ height: `${c}%` }}
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

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { bubblesortStep } from "../functions/sortingFunctions";
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
      setColumns(bubblesortStep(columns, index));
      setIndex(index + 1);

      if (index === numColumns - 2) {
        setIndex(0);
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

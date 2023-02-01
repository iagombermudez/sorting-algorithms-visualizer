import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  BubbleSort,
  InsertionSort,
  ISortingAlgorithm,
  QuickSort,
} from "../classes/SortingAlgorithm";
import { bubblesortStep, checkIsSorted } from "../functions/sortingFunctions";
import "../styles/App.css";

function App() {
  const [numColumns, setNumColumns] = useState(100);
  const [columns, setColumns] = useState<number[]>(
    initializeRandomSortingColumns()
  );
  const [originalColumns, setOriginalColumns] = useState<number[]>([
    ...columns,
  ]);
  const [indexes, setIndexes] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentAlgorithm, setCurrentAlgorithm] = useState<ISortingAlgorithm>(
    new BubbleSort()
  );
  function initializeRandomSortingColumns(): number[] {
    return Array.from({ length: numColumns }, () => Math.random() * 100);
  }

  useEffect(() => {
    if (!isRunning) return;
    if (!checkIsSorted(columns)) {
      const timer = setTimeout(() => {
        const [tempColumns, tempIndex] = currentAlgorithm.algorithm(
          columns,
          indexes
        );
        setColumns(tempColumns);
        setIndexes(tempIndex);
      }, 5);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
      setIndexes(currentAlgorithm.defaultIndexes);
    }
  });

  function handleChangeCurrentAlgorithm(newAlgorithm: ISortingAlgorithm) {
    setCurrentAlgorithm(newAlgorithm);
    resetColumns();
  }

  function resetColumns() {
    setIsRunning(false);
    setIndexes(currentAlgorithm.defaultIndexes);
    setColumns([...originalColumns]);
  }

  function handleChangeIsRunning() {
    setIsRunning(!isRunning);
  }

  return (
    <div className="App">
      <h1>Sorting Algorithms Visualizer</h1>
      <h3 data-testid="current-algorithm">
        Current algorithm:{" "}
        <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
          {currentAlgorithm.name}
        </span>{" "}
      </h3>
      <div className="sorting-container" data-testid={"sorting-container"}>
        {columns.map((c, i) => (
          <div
            id={i.toString()}
            className="sorting-column"
            data-testid="sorting-column"
            style={{
              height: `${c}%`,
              border: "1px solid #000",
              backgroundColor:
                indexes[0] <= i + 1 && indexes[0] >= i - 1 ? "red" : "blue",
            }}
          />
        ))}
      </div>
      <div>
        <button
          onClick={() => handleChangeCurrentAlgorithm(new InsertionSort())}
        >
          Insertion Sort
        </button>
        <button onClick={() => handleChangeCurrentAlgorithm(new QuickSort())}>
          Quicksort
        </button>
        <button onClick={() => handleChangeCurrentAlgorithm(new BubbleSort())}>
          Bubblesort
        </button>
      </div>
      <div>
        <button onClick={resetColumns}>Reset</button>
        <button onClick={handleChangeIsRunning}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default App;

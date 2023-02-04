import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Anim } from "../classes/Animation";
import {
  BogoSort,
  BubbleSort,
  InsertionSort,
  ISortingAlgorithm,
  MergeSort,
  QuickSort,
  SelectionSort,
} from "../classes/SortingAlgorithm";
import { arraySwap, checkIsSorted } from "../functions/sortingFunctions";
import "../styles/App.css";

function App() {
  const [numColumns, setNumColumns] = useState(100);
  const [columns, setColumns] = useState<number[]>(
    initializeRandomSortingColumns()
  );
  const [originalColumns, setOriginalColumns] = useState<number[]>([
    ...columns,
  ]);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentAlgorithm, setCurrentAlgorithm] = useState<ISortingAlgorithm>(
    new BubbleSort()
  );
  const [animations, setAnimations] = useState<Anim<number>[]>([]);
  function initializeRandomSortingColumns(): number[] {
    return Array.from({ length: numColumns }, () => Math.random() * 100);
  }

  useEffect(() => {
    if (!isRunning) return;
    if (!checkIsSorted(columns)) {
      const timer = setTimeout(() => {
        const tempColumns = [...columns];
        const nextAnim = animations.shift();
        if (nextAnim) {
          tempColumns[nextAnim.pos] = nextAnim.value;
          setColumns(tempColumns);
          if (animations.length === 0) {
            setIsRunning(false);
          }
        }
      }, 5);
      return () => clearTimeout(timer);
    }
  });

  function handleChangeCurrentAlgorithm(newAlgorithm: ISortingAlgorithm) {
    setCurrentAlgorithm(newAlgorithm);
    resetColumns();
  }

  function resetColumns() {
    setIsRunning(false);
    setAnimations([]);
    setColumns([...originalColumns]);
  }

  function handleChangeIsRunning() {
    if (!isRunning && animations.length === 0) {
      setAnimations(currentAlgorithm.algorithm([...columns]));
    }
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
              border: "1px solid #ede7e3",
              backgroundColor: "#489FB5",
            }}
          />
        ))}
      </div>
      <div>
        <button
          className="button"
          onClick={() => handleChangeCurrentAlgorithm(new InsertionSort())}
        >
          Insertion Sort
        </button>
        <button
          className="button"
          onClick={() => handleChangeCurrentAlgorithm(new SelectionSort())}
        >
          Selection Sort
        </button>
        <button
          className="button"
          onClick={() => handleChangeCurrentAlgorithm(new QuickSort())}
        >
          Quicksort
        </button>
        <button
          className="button"
          onClick={() => handleChangeCurrentAlgorithm(new BubbleSort())}
        >
          Bubblesort
        </button>
        <button
          className="button"
          onClick={() => handleChangeCurrentAlgorithm(new MergeSort())}
        >
          Mergesort
        </button>
        <button
          className="button"
          onClick={() => handleChangeCurrentAlgorithm(new BogoSort())}
        >
          Bogosort
        </button>
      </div>
      <div>
        <button className="button" onClick={resetColumns}>
          Reset
        </button>
        <button className="button" onClick={handleChangeIsRunning}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default App;

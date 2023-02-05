import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Anim } from "../classes/Animation";
import {
  BubbleSort,
  HeapSort,
  InsertionSort,
  ISortingAlgorithm,
  MergeSort,
  QuickSort,
  SelectionSort,
} from "../classes/SortingAlgorithm";
import AlgorithmButton from "../components/AlgorithmButton";
import "../styles/App.css";

function App() {
  const algorithms = [
    new InsertionSort(),
    new SelectionSort(),
    new QuickSort(),
    new BubbleSort(),
    new MergeSort(),
    new HeapSort(),
  ];
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
  const [animations, setAnimations] = useState<Anim<number>[][]>([]);
  const [indexes, setIndexes] = useState<number[]>([]);
  const [sortedAnimIsRunning, setSortedAnimIsRunning] =
    useState<boolean>(false);

  function initializeRandomSortingColumns(): number[] {
    return Array.from({ length: numColumns }, () => Math.random() * 100);
  }

  useEffect(() => {
    if (!isRunning) return;
    if (animations.length > 0 || sortedAnimIsRunning) {
      const timer = setTimeout(() => {
        if (sortedAnimIsRunning) {
          let tempIndexes = [...indexes];
          if (tempIndexes.length < columns.length) {
            tempIndexes.push(tempIndexes.length);
            setIndexes(tempIndexes);
          } else {
            setIsRunning(false);
          }
        } else {
          let tempColumns: number[] = [...columns];
          let tempIndexes: number[] = [];
          const nextAnim = animations.shift();
          if (nextAnim) {
            nextAnim.forEach((anim) => {
              tempColumns[anim.pos] = anim.value;
              tempIndexes.push(...anim.indexes);
            });
            setColumns(tempColumns);
            setIndexes(tempIndexes);

            if (animations.length === 0) {
              setIndexes([]);
              setSortedAnimIsRunning(true);
            }
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
    setSortedAnimIsRunning(false);
    setIndexes([]);
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
      <div className="sorting-container" data-testid={"sorting-container"}>
        {columns.map((c, i) => (
          <div
            id={i.toString()}
            className="sorting-column"
            data-testid="sorting-column"
            style={{
              height: `${c}%`,
              border: "1px solid #ede7e3",
              backgroundColor: indexes.includes(i)
                ? sortedAnimIsRunning
                  ? "#34ca5f"
                  : "#ffa62b"
                : "#49c2e0",
            }}
          />
        ))}
      </div>
      <div className="buttons-container">
        <div className="buttons-container-child">
          {algorithms.map((alg) => (
            <AlgorithmButton
              algorithm={alg}
              currentAlgorithm={currentAlgorithm}
              handleChangeCurrentAlgorithm={handleChangeCurrentAlgorithm}
            />
          ))}
        </div>
        <div className="buttons-container-child">
          <button className="button" onClick={resetColumns}>
            Reset
          </button>
          <button
            className={"button " + (isRunning ? "button-stop" : "button-start")}
            onClick={handleChangeIsRunning}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

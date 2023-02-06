import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Anim } from "../../classes/Animation";
import {
  BogoSort,
  BubbleSort,
  HeapSort,
  InsertionSort,
  ISortingAlgorithm,
  MergeSort,
  QuickSort,
  SelectionSort,
} from "../../classes/SortingAlgorithm";
import AlgorithmButton from "../AlgorithmButton";
import { checkIsSorted } from "../../functions/sortingFunctions";
import "../../styles/App.css";
import GitHubLink from "../GitHubLink";
import ButtonsContainer from "../ButtonsContainer";

function App() {
  const numColumns = 100;
  const algorithms: ISortingAlgorithm[] = [
    new InsertionSort(),
    new SelectionSort(),
    new QuickSort(),
    new BubbleSort(),
    new MergeSort(),
    new HeapSort(),
    new BogoSort(),
  ];

  const [columns, setColumns] = useState<number[]>(
    initializeRandomSortingColumns()
  );
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentAlgorithm, setCurrentAlgorithm] = useState<ISortingAlgorithm>(
    algorithms[0]
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
          playColumnsAreSortedAnimation();
        } else {
          playSortAnimation();
        }
      }, 5);
      return () => clearTimeout(timer);
    }
  });

  function playColumnsAreSortedAnimation() {
    let tempIndexes = [...indexes];
    if (tempIndexes.length < columns.length) {
      tempIndexes.push(tempIndexes.length);
      setIndexes(tempIndexes);
    } else {
      setIsRunning(false);
    }
  }

  function playSortAnimation() {
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

  function handleChangeCurrentAlgorithm(newAlgorithm: ISortingAlgorithm) {
    if (currentAlgorithm.name !== newAlgorithm.name) {
      setCurrentAlgorithm(newAlgorithm);
      resetColumns();
    }
  }

  function resetColumns() {
    setIsRunning(false);
    setSortedAnimIsRunning(false);
    setIndexes([]);
    setAnimations([]);
    setColumns(initializeRandomSortingColumns());
  }

  function handleChangeIsRunning() {
    if (!isRunning && animations.length === 0) {
      setAnimations(currentAlgorithm.algorithm([...columns]));
    }
    if (!checkIsSorted(columns)) setIsRunning(!isRunning);
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
      <ButtonsContainer
        resetColumns={resetColumns}
        isRunning={isRunning}
        handleChangeIsRunning={handleChangeIsRunning}
        algorithms={algorithms}
        currentAlgorithm={currentAlgorithm}
        handleChangeCurrentAlgorithm={handleChangeCurrentAlgorithm}
      />
      <GitHubLink />
    </div>
  );
}

export default App;

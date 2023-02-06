import React from "react";
import { ISortingAlgorithm } from "../classes/SortingAlgorithm";
import AlgorithmButton from "./AlgorithmButton";

interface Props {
  resetColumns: () => void;
  isRunning: boolean;
  handleChangeIsRunning: () => void;
  handleChangeCurrentAlgorithm: (newAlgorithm: ISortingAlgorithm) => void;
  algorithms: ISortingAlgorithm[];
  currentAlgorithm: ISortingAlgorithm;
}

export default function ButtonsContainer(props: Props) {
  const {
    resetColumns,
    isRunning,
    handleChangeIsRunning,
    algorithms,
    currentAlgorithm,
    handleChangeCurrentAlgorithm,
  } = props;

  return (
    <div className="buttons-container">
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
      <div className="buttons-container-child">
        {algorithms.map((alg) => (
          <AlgorithmButton
            algorithm={alg}
            currentAlgorithm={currentAlgorithm}
            handleChangeCurrentAlgorithm={handleChangeCurrentAlgorithm}
          />
        ))}
      </div>
    </div>
  );
}

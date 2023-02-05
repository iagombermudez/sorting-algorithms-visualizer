import React from "react";
import { ISortingAlgorithm } from "../classes/SortingAlgorithm";

interface Props {
  algorithm: ISortingAlgorithm;
  currentAlgorithm: ISortingAlgorithm;
  handleChangeCurrentAlgorithm: (newAlgorithm: ISortingAlgorithm) => void;
}
export default function AlgorithmButton(props: Props) {
  const { algorithm, currentAlgorithm, handleChangeCurrentAlgorithm } = props;
  return (
    <button
      className={
        "button " +
        (currentAlgorithm.name === algorithm.name ? "algo-button-selected" : "")
      }
      onClick={() => handleChangeCurrentAlgorithm(algorithm)}
    >
      {algorithm.name}
    </button>
  );
}

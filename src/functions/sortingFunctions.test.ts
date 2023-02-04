import { act } from "react-dom/test-utils";
import { heapsort } from "./heapsort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { quicksort } from "./quicksort";
import { selectionsort } from "./selectionsort";
import { checkIsSorted } from "./sortingFunctions";

test("checks if it's sorted", () => {
  let array: number[] = [1, 2, 3, 4];
  expect(checkIsSorted(array)).toBeTruthy();
});

test("bubblesort checks if it's not sorted", () => {
  let array: number[] = [1, 2, 4, 2];
  expect(checkIsSorted(array)).toBeFalsy();
});

test("insertion sort sorts array", () => {
  let array: number[] = [4, 2, 3, 1, 7];
  act(() => {
    insertionSort(array);
  });
  expect(array).toStrictEqual([1, 2, 3, 4, 7]);
});

test("insertion sort sorts array that is completely backwards", () => {
  let array: number[] = [5, 4, 3, 2, 1];
  act(() => {
    insertionSort(array);
  });
  expect(array).toStrictEqual([1, 2, 3, 4, 5]);
});

test("insertion sort sorts array with negativa numbers", () => {
  let array: number[] = [5, -4, 3, -2, 1];
  act(() => {
    insertionSort(array);
  });
  expect(array).toStrictEqual([-4, -2, 1, 3, 5]);
});

test("mergesort sorts empty list", () => {
  let array: number[] = [];

  act(() => {
    mergeSort(array);
  });
  expect(array).toStrictEqual([]);
});

test("mergesort sorts 2 element list", () => {
  let array: number[] = [2, 1];

  act(() => {
    mergeSort(array);
  });
  expect(array).toStrictEqual([1, 2]);
});

test("mergesort sorts 4 element list", () => {
  let array: number[] = [2, 1, 4, 3];

  act(() => {
    mergeSort(array);
  });
  expect(array).toStrictEqual([1, 2, 3, 4]);
});

test("mergesort sorts 100 element list", () => {
  let array: number[] = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 100)
  );
  let sortedArray = [...array];
  sortedArray.sort((a, b) => a - b);

  act(() => {
    mergeSort(array);
  });
  expect(array).toStrictEqual(sortedArray);
});

test("quicksort sorts 2 element list", () => {
  let array: number[] = [2, 1];

  act(() => {
    quicksort(array);
  });
  expect(array).toStrictEqual([1, 2]);
});

test("quicksort sorts 4 element list", () => {
  let array: number[] = [2, 1, 4, 3];

  act(() => {
    quicksort(array);
  });
  expect(array).toStrictEqual([1, 2, 3, 4]);
});

test("quicksort sorts 100 element list", () => {
  let array: number[] = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 100)
  );
  let sortedArray = [...array];
  sortedArray.sort((a, b) => a - b);

  act(() => {
    quicksort(array);
  });
  expect(array).toStrictEqual(sortedArray);
});

test("selectionsort sorts 2 element list", () => {
  let array: number[] = [2, 1];

  act(() => {
    selectionsort(array);
  });
  expect(array).toStrictEqual([1, 2]);
});

test("selectionsort sorts 4 element list", () => {
  let array: number[] = [2, 1, 4, 3];

  act(() => {
    selectionsort(array);
  });
  expect(array).toStrictEqual([1, 2, 3, 4]);
});

test("selectionsort sorts 100 element list", () => {
  let array: number[] = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 100)
  );
  let sortedArray = [...array];
  sortedArray.sort((a, b) => a - b);

  act(() => {
    selectionsort(array);
  });
  expect(array).toStrictEqual(sortedArray);
});

test("heapsort sorts 2 element list", () => {
  let array: number[] = [2, 1];

  act(() => {
    heapsort(array);
  });
  expect(array).toStrictEqual([1, 2]);
});

test("heapsort sorts 100 element list", () => {
  let array: number[] = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 100)
  );
  let sortedArray = [...array];
  sortedArray.sort((a, b) => a - b);

  act(() => {
    heapsort(array);
  });
  expect(array).toStrictEqual(sortedArray);
});

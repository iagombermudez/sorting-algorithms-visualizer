import { changeArrayPositions } from "./arrayFunctions";

test("elements change when changeArrayPositions is called", () => {
  let array = [1, 2, 3, 4];

  array = changeArrayPositions(0, 1, array);
  expect(array).toStrictEqual([2, 1, 3, 4]);

  array = [1, 2, 3, 4];
  array = changeArrayPositions(1, 2, array);
  expect(array).toStrictEqual([1, 3, 2, 4]);
});

test(`elements don't change when indexes are out of range 
      in changeArrayPositions is called`, () => {
  let array = [1, 2];

  array = changeArrayPositions(3, 4, array);
  expect(array).toStrictEqual([1, 2]);

  array = changeArrayPositions(-3, -4, array);
  expect(array).toStrictEqual([1, 2]);

  array = changeArrayPositions(-3, 1, array);
  expect(array).toStrictEqual([1, 2]);

  array = changeArrayPositions(1, -3, array);
  expect(array).toStrictEqual([1, 2]);
});

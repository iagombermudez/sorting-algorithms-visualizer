export function changeArrayPositions<T>(a: number, b: number, array: T[]) {
  if (a >= 0 && a < array.length && b >= 0 && b < array.length) {
    const toret = [...array];
    const columnA = array[a];
    const columnB = array[b];
    toret[a] = columnB;
    toret[b] = columnA;
    return toret;
  }
  return array;
}

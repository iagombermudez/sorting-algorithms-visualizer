export class Anim<T> {
  pos: number;
  value: T;
  indexes: number[];
  constructor(pos: number, value: T, indexes: number[]) {
    this.pos = pos;
    this.value = value;
    this.indexes = indexes;
  }

  static arraySwapAnimation<T>(
    array: T[],
    i: number,
    j: number,
    indexes: number[]
  ): [Anim<T>, Anim<T>] {
    return [new Anim(i, array[j], []), new Anim(j, array[i], indexes)];
  }

  //animation that only shows how index change (doesn't change any value in the array)
  static indexAnimation<T>(array: T[], indexes: number[]): [Anim<T>, Anim<T>] {
    return Anim.arraySwapAnimation(array, 0, 0, indexes);
  }
}

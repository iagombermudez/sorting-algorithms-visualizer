export class Anim<T> {
  pos: number;
  value: T;
  constructor(pos: number, value: T) {
    this.pos = pos;
    this.value = value;
  }

  static arraySwapAnimation<T>(
    array: T[],
    i: number,
    j: number
  ): [Anim<T>, Anim<T>] {
    return [new Anim(i, array[j]), new Anim(j, array[i])];
  }
}

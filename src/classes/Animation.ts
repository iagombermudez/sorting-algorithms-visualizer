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
    j: number,
    animations: Anim<T>[]
  ): [Anim<T>, Anim<T>] {
    let temp = array[i];
    return [new Anim(i, array[j]), new Anim(j, temp)];
  }
}

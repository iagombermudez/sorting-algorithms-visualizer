export interface IColumn {
  height: number;
  position: number;
}

export class Column implements IColumn {
  height: number;
  position: number;

  constructor(height: number, position: number) {
    this.height = height;
    this.position = position;
  }
}

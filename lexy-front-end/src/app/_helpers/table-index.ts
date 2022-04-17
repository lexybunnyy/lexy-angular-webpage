export class TableIndex {
    constructor(public x: number, public y: number) {
    }
    equals(x: number, y: number) {
      return this.x === x && this.y === y;
    }
    equals2(other: TableIndex) {
      return this.x === other.x && this.y === other.y;
    }
  
    static push(array: Array<TableIndex>, x: number, y: number) {
      array.push(new TableIndex(x, y));
    }
  }
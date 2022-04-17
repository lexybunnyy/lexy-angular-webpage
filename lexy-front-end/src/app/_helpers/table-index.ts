export class TableIndex {
    constructor(public x: number, public y: number) {
    }

    public equalsI(x: number, y: number) {
      return this.x === x && this.y === y;
    }
    
    public equalsO(other: TableIndex) {
      return this.x === other.x && this.y === other.y;
    }
  }

export class TableIndexArray extends Array<TableIndex> {
  public pushI(x: number, y: number) {
    this.push(new TableIndex(x, y));
  }

  public includesI(x: number, y: number): boolean {
    return this.some(v => v.equalsI(x, y))
  }
}
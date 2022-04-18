export class TableIndex {
    constructor(public x: number, public y: number) {
    }

    public equalsI(x: number, y: number) {
      return this.x === x && this.y === y;
    }
    
    public equalsO(other: TableIndex) {
      return this.x === other.x && this.y === other.y;
    }

    public set(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    public getXorY(xy: String) {
      return xy === 'x' ? this.x : this.y;
    }

    public setXorY(xy: String, value: number) {
      if (xy === 'x') {
        this.x = value;
      } else {
        this.y = value;
      }
    }
  }

export class TableIndexArray extends Array<TableIndex> {
  public pushI(x: number, y: number) {
    this.push(new TableIndex(x, y));
  }

  public includesI(x: number, y: number): boolean {
    return this.some(v => v.equalsI(x, y))
  }

  public clear() {
    this.splice(0, this.length);
  }
}
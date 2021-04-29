class Cell {
  constructor(key, figure, active) {
    this.key = key;
    this.figure = figure;
    this.active = active;
    this.cell = null;
    this.color = undefined;
  }
  createCell(field) {
    const cell = document.createElement("div");
    cell.id = this.key;
    cell.className = "field__cell";
    this.cell = cell;
    field.append(cell);
  }
  checkCellColor() {
    if (this.color === "white") {
      this.cell.classList.add("field__cell_white");
    } else {
      this.cell.classList.add("field__cell_black");
    }
  }
}

export { Cell };

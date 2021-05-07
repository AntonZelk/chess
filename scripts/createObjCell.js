import { chessBoardField } from "./objectChessBoard.js";

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
  checkActive() {
    if (this.active) {
      this.cell.classList.add("active");
    } else {
      this.cell.classList.remove("active");
    }
  }

  moveToThisCell() {
    this.cell.addEventListener("click", () => {
      if (this.active && this.figure === null) {
        console.log("hi");
        chessBoardField.removeAllActive();
      }
    });
  }
  selectCell() {
    this.cell.addEventListener("click", () => {
      if (!this.active && this.figure != null) {
        chessBoardField.removeAllActive();
        this.active = true;
        console.log(this.figure);
        this.figure.showPossibleMoves(chessBoardField.matrixChessBoard);
        this.figure.possibleMoves.forEach((cell) => {
          cell.moveToThisCell();
        });
      }
      this.checkActive();
    });
  }
}

export { Cell };

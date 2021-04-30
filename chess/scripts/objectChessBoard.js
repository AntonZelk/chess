import { matrixChessBoard } from "./createMatrixChessBoard.js";

const field = document.querySelector("#field");

const chessBoardField = {
  matrixChessBoard,
  width: 400,
  height: 400,
  drawField() {
    this.matrixChessBoard.forEach((arr, i) => {
      arr.forEach((cell, j) => {
        cell.createCell(field);
        cell.color = "white";
        if ((i + 1) % 2 === 0) {
          if ((j + 1) % 2 !== 0) {
            cell.color = "black";
          }
        } else {
          if ((j + 1) % 2 === 0) {
            cell.color = "black";
          }
        }
        cell.checkCellColor();
      });
    });
  },
  drawFigures() {
    const step = 50;
    this.matrixChessBoard.forEach((arr, i) => {
      let counterForX = 0;

      for (let cell of arr) {
        let coordX = counterForX * step;
        let coordY = i * step;

        if (cell.figure !== null) {
          cell.figure.createFigure(field, coordX, coordY, cell);
        }
        counterForX++;
      }
    });
  },
  removeAllActive() {
    this.matrixChessBoard.forEach((arr, i) => {
      for (let cell of arr) {
        cell.active = false;
        cell.checkActive();
        cell.checkEventClick();
      }
    });
  },
};

export { chessBoardField };

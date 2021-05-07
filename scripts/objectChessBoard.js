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
        cell.selectCell();
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
    this.matrixChessBoard.forEach((arr, i) => {
      for (let cell of arr) {
        if (cell.figure !== null) {
          cell.figure.createFigure(cell);
        }
      }
    });
  },
  removeAllActive() {
    this.matrixChessBoard.forEach((arr) => {
      for (let cell of arr) {
        cell.active = false;
        cell.checkActive();
      }
    });
  },
  // updateMatrix() {
  //   this.matrixChessBoard.forEach((el) => {
  //     el.forEach((cell) => {
  //       console.log(cell);
  //     });
  //   });
  // },
};

export { chessBoardField };

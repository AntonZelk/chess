import { matrixChessBoard } from "./createMatrixChessBoard.js";
import { Cell } from "./createObjCell.js";

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
    const chessBoard = document.querySelector("#chessBoard");
    const step = 50;
    this.matrixChessBoard.forEach((arr, i) => {
      let counterForX = 0;

      for (let cell of arr) {
        let coordX = counterForX * step;
        let coordY = i * step;

        if (cell.figure !== null) {
          cell.figure.createFigure(field, coordX, coordY);
        }
        counterForX++;
      }
    });
  },
  //   const step = 50;
  //   this.matrixChessBoard.forEach((arr, i) => {
  //     let counterForX = 0;

  //     for (let el of arr) {
  //       let coordX = counterForX * step;
  //       let coordY = i * step;

  //       if (el.figure !== null) {
  //         el.figure.createFigure(coordX, coordY, el.key, el);
  //       }
  //       counterForX++;
  //     }
  //   });
  // },
};

export { chessBoardField };

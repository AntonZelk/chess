import { matrixChessBoard } from "./createMatrixChessBoard.js";
import { selectItem } from "./selectItem.js";

const chessBoardField = {
  matrixChessBoard: matrixChessBoard,
  width: 400,
  height: 400,
  drawField() {
    const field = document.querySelector("#field");

    this.matrixChessBoard.forEach((arr, i) => {
      arr.forEach((el, j) => {
        const cell = document.createElement("div");
        cell.id = `${el.key}`;
        cell.className = "field__cell";
        if ((i + 1) % 2 === 0) {
          if ((j + 1) % 2 !== 0) {
            cell.classList.add("field__cell_black");
          }
        } else {
          if ((j + 1) % 2 === 0) {
            cell.classList.add("field__cell_black");
          }
        }

        el.cell = {
          cellonTheBoard: cell,
          active: false,
        };
        field.append(cell);
      });
    });
  },
  addFigures() {
    const step = 50;
    this.matrixChessBoard.forEach((arr, i) => {
      let counterForX = 0;
      for (let el of arr) {
        let coordX = counterForX * step;
        let coordY = i * step;

        if (el.figure !== null) {
          // el.figure.fi.addEventListener("click", () => {

          //   selectItem(el);
          // });
          el.figure.createFigure(coordX, coordY, el.key);
        }
        counterForX++;
      }
    });
  },
};

export { chessBoardField };

import { chessBoardField } from "./objectChessBoard.js";

const possibleMoves = (objCell) => {
  const idFifure = objCell.figure.id,
    matrix = chessBoardField.matrixChessBoard;

  // if (idFifure === "pawn") {
  //   let keyHorizontalCurrentCell = Number(objCell.key[1]);
  //   let keyVerticalCurrentCell = objCell.key[0];

  //   for (
  //     let i = keyHorizontalCurrentCell + 1;
  //     i < keyHorizontalCurrentCell + 3;
  //     i++
  //   ) {
  //     matrix.forEach((arr, j) => {
  //       for (let el of arr) {
  //         if (el.key.startsWith(keyVerticalCurrentCell)) {
  //           if (el.key.endsWith(i)) {
  //             el.cell.cellonTheBoard.classList.toggle("active");
  //             el.cell.active = true;
  //           }
  //         }
  //       }
  //     });
  //   }
  // }
};

export { possibleMoves };

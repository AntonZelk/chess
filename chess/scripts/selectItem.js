import { chessBoardField } from "./objectChessBoard.js";
import { possibleMoves } from "./possibleMoves.js";

// const changeDescriptions = (objCell, select) => {
//   objCell.cell.cellonTheBoard.classList.toggle("active");
//   objCell.figure.selected = select;
//   objCell.cell.active = select;
// };

const selectItem = (objCell) => {
  console.log(objCell);
  // if (!objCell.cell.active) {
  //   chessBoardField.matrixChessBoard.forEach((arr, i) => {
  //     for (let el of arr) {
  //       if (el.figure !== null) {
  //         el.cell.cellonTheBoard.classList.remove("active");
  //       }
  //     }
  //   });
  //   changeDescriptions(objCell, true);
  //   possibleMoves(objCell);
  // } else {
  //   changeDescriptions(objCell, false);
  // }
};

export { selectItem };

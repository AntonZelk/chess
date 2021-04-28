import { chessBoardField } from "./objectChessBoard.js";
import { possibleMoves } from "./possibleMoves.js";

const selectItem = (obj) => {
  console.log(obj);
  if (obj.figure !== null) {
    console.log(obj);
    chessBoardField.matrixChessBoard.forEach((arr, i) => {
      //   for (let el in arr) {
      //     if (el.figure !== null) {
      //       el.figure.selected = false;
      //       el.figure.elemOnTheBoard.classList.remove("selected");
      //     }
      //   }
    });
    // obj.elemOnTheBoard.classList.toggle("selected");
    // console.log(chessBoardField.matrixChessBoard);
    // obj.selected = true;
    // possibleMoves(obj);
  } else {
    // obj.elemOnTheBoard.classList.toggle("selected");
    // obj.selected = false;
  }
};

export { selectItem };

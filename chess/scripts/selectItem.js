import { chessBoardField } from "./objectChessBoard.js";

const selectItem = (cell, figure) => {
  if (!cell.active) {
    chessBoardField.removeAllActive();
    cell.active = true;
    figure.selected = true;
    figure.showPossibleMoves(chessBoardField.matrixChessBoard);
  } else {
    chessBoardField.removeAllActive();
    cell.active = false;
    figure.selected = false;
  }

  cell.checkActive();
};

export { selectItem };

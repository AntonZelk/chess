import { chessBoardField } from "./objectChessBoard.js";
import { possibleMoves } from "./possibleMoves.js";

const selectItem = (cell, figure) => {
  if (!cell.active) {
    chessBoardField.removeAllClassActive();
    cell.active = true;
    figure.selected = true;
    figure.showPossibleMoves();
  } else {
    cell.active = false;
    figure.selected = false;
  }

  cell.checkActive();
};

export { selectItem };

// import { drawFigures } from "./drawFigures.js";
import { chessBoard } from "./objectChessBoard.js";

let startGame = () => {
  chessBoard.field.drawField();
  chessBoard.field.addFigures();
  console.log(chessBoard.matrixChessBoard);
};

startGame();

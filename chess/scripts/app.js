// import { drawFigures } from "./drawFigures.js";
import { chessBoardField } from "./objectChessBoard.js";

let startGame = () => {
  chessBoardField.drawField();
  chessBoardField.addFigures();
};

startGame();

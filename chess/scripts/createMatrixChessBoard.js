import { Pawn, Rook, Knight, Bishop, Queen, King } from "./classFigure.js";

const createMatrixChessBoard = () => {
  const array = [],
    myArrayLetters = ["A", "B", "C", "D", "E", "F", "G", "H"],
    startPosition = [
      ["r", "n", "b", "q", "k", "b", "n", "r"],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      ["P", "P", "P", "P", "P", "P", "P", "P"],
      ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ];

  for (let i = 0; i < 8; i++) {
    const obj = {};

    for (let j = 0; j < 8; j++) {
      let newFigure;
      let side = "white";

      if (startPosition[i][j] === startPosition[i][j].toUpperCase()) {
        side = "black";
      }
      switch (startPosition[i][j]) {
        case "r":
        case "R":
          newFigure = new Rook(`fa-chess-rook`, side);
          break;
        case "n":
        case "N":
          newFigure = new Knight(`fa-chess-knight`, side);
          break;
        case "b":
        case "B":
          newFigure = new Bishop(`fa-chess-bishop`, side);
          break;
        case "q":
        case "Q":
          newFigure = new Queen(`fa-chess-queen`, side);
          break;
        case "k":
        case "K":
          newFigure = new King(`fa-chess-king`, side);
          break;
        case "p":
        case "P":
          newFigure = new Pawn(`fa-chess-pawn`, side);
          break;
        case " ":
          newFigure = "";
          break;
      }

      obj[`${myArrayLetters[j]}${i + 1}`] = newFigure;
    }
    array.push(obj);
  }
  return array.reverse();
};
const matrixChessBoard = createMatrixChessBoard();

export { matrixChessBoard };

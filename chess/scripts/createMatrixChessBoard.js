import { Pawn, Rook, Knight, Bishop, Queen, King } from "./classFigure.js";
import { Cell } from "./createObjCell.js";

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
    const horizontal = [];

    for (let j = 0; j < 8; j++) {
      let side = "white";
      let key = `${myArrayLetters[j]}${i + 1}`;

      let cell = new Cell(key);
      cell.active = false;

      if (startPosition[i][j] === startPosition[i][j].toUpperCase()) {
        side = "black";
      }
      let id = side;
      switch (startPosition[i][j]) {
        case "r":
        case "R":
          cell.figure = new Rook(key, side, id);
          break;
        case "n":
        case "N":
          cell.figure = new Knight(key, side, id);
          break;
        case "b":
        case "B":
          cell.figure = new Bishop(key, side, id);
          break;
        case "q":
        case "Q":
          cell.figure = new Queen(key, side, id);
          break;
        case "k":
        case "K":
          cell.figure = new King(key, side, id);
          break;
        case "p":
        case "P":
          cell.figure = new Pawn(key, side, id);
          break;
        case " ":
          cell.figure = null;
          break;
      }

      horizontal.push(cell);
    }
    array.push(horizontal);
  }
  return array.reverse();
};
const matrixChessBoard = createMatrixChessBoard();

export { matrixChessBoard };

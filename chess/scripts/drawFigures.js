import { Pawn, Rook, Knight, Bishop, Queen, King } from "./classFigure.js";

const createMatrixChessBoard = () => {
  let counterNum = 8;
  let counterLetters = 8;
  const array = new Array(8).fill("").map((elNum, i) => {
    return (elNum = new Array(8).fill("").map((elLetter, j) => {
      let k = "\u0041";
      console.log(k);
      let key = "1";
      elLetter = new Map();
      elLetter.set("1", key);
      return elLetter;
    }));
  });

  return array;
};

const matrixChessBoard = createMatrixChessBoard();

console.log(matrixChessBoard);
const drawFiguresWithType = (side, type, coordX, coordY, amount, dopNumber) => {
  for (let i = 0; i < amount; i++) {
    let newFigure;
    if (type === "pawn" || type === "rook") {
      if (type === "pawn") {
        newFigure = new Pawn(`fa-chess-${type}`, side);
      }
      if (type === "rook") {
        newFigure = new Rook(`fa-chess-${type}`, side);
      }
      newFigure.createFigure(`${i * coordX}px`, coordY);
    } else {
      if (type === "knight") {
        newFigure = new Knight(`fa-chess-${type}`, side);
      }
      if (type === "bishop") {
        newFigure = new Bishop(`fa-chess-${type}`, side);
      }
      if (type === "queen") {
        newFigure = new Queen(`fa-chess-${type}`, side);
      }
      if (type === "king") {
        newFigure = new King(`fa-chess-${type}`, side);
      }
      newFigure.createFigure(`${coordX + i * coordX * dopNumber}px`, coordY);
    }
  }
};

const drawFigures = () => {
  drawFiguresWithType("white", "pawn", 50, "300px", 8);
  drawFiguresWithType("white", "rook", 350, "350px", 2);
  drawFiguresWithType("white", "knight", 50, "350px", 2, 5);
  drawFiguresWithType("white", "bishop", 100, "350px", 2, 1.5);
  drawFiguresWithType("white", "queen", 150, "350px", 1, 0);
  drawFiguresWithType("white", "king", 200, "350px", 1, 0);

  drawFiguresWithType("black", "pawn", 50, "50px", 8);
  drawFiguresWithType("black", "rook", 350, "0", 2);
  drawFiguresWithType("black", "knight", 50, "0", 2, 5);
  drawFiguresWithType("black", "bishop", 100, "0", 2, 1.5);
  drawFiguresWithType("black", "queen", 150, "0", 1, 0);
  drawFiguresWithType("black", "king", 200, "0", 1, 0);
};

export { drawFigures };

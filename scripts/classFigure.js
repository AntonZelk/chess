import { chessBoardField } from "./objectChessBoard.js";
class ChessFigure {
  constructor(key, side) {
    this.key = key;
    this.side = side;
    this.possibleMoves = [];
  }
  createFigure(objCell) {
    const newItem = document.createElement("i");

    newItem.className = "fas";
    newItem.classList.add(this.className);

    if (this.side === "white") {
      newItem.style.color = "rgb(255, 196, 0)";
    } else {
      newItem.style.color = "rgb(17, 200, 63)";
    }

    newItem.style.position = "absolute";

    objCell.cell.append(newItem);
  }
  showPossibleMoves(matrix, numbPotentialMoves, condition) {
    const horizontalKey = Number(this.key[1]),
      verticalKey = this.key[0],
      arrayKeysPossibleMoves = condition(
        horizontalKey,
        verticalKey,
        numbPotentialMoves
      );

    arrayKeysPossibleMoves.forEach((key) => {
      matrix.forEach((arr) => {
        arr.forEach((cell) => {
          if (cell.key === key) {
            this.possibleMoves.push(cell);
            cell.active = true;
            cell.checkActive();
          }
        });
      });
    });
  }
  move(objCell) {
    console.log(objCell);
  }
}

class Pawn extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-pawn";
    this.id = `${id}-pawn`;
  }
  showPossibleMoves(matrix) {
    const condition = (horizontalKey, verticalKey, numbPotentialMoves) => {
      let array = [];
      for (let i = 1; i <= numbPotentialMoves; i++) {
        let key = verticalKey;
        if (this.side === "white") {
          key = key + `${horizontalKey + i}`;
        } else {
          key = key + `${horizontalKey - i}`;
        }
        array.push(key);
      }
      return array;
    };
    super.showPossibleMoves(matrix, 2, condition);
  }
}

class Rook extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-rook";
    this.id = `${id}-rook`;
  }
  showPossibleMoves(matrix) {}
}

class Knight extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-knight";
    this.id = `${id}-knight`;
  }
  showPossibleMoves(matrix) {}
}
class Bishop extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-bishop";
    this.id = `${id}-bishop`;
  }
  showPossibleMoves(matrix) {}
}
class Queen extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-queen";
    this.id = `${id}-queen`;
  }
  showPossibleMoves(matrix) {}
}
class King extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-king";
    this.id = `${id}-king`;
  }
  showPossibleMoves(matrix) {}
}

export { Pawn, Rook, Knight, Bishop, Queen, King };

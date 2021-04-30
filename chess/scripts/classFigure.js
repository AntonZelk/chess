import { selectItem } from "./selectItem.js";

class ChessFigure {
  constructor(key, side, id) {
    this.key = key;
    this.side = side;
    this.id = id;
    this.coordX = undefined;
    this.coordY = undefined;
    this.element = null;
    this.selected = false;
  }
  createFigure(field, coordX, coordY, objCell) {
    const newItem = document.createElement("i");

    newItem.className = "fas";
    newItem.classList.add(this.className);

    if (this.side === "white") {
      newItem.style.color = "rgb(255, 196, 0)";
    } else {
      newItem.style.color = "rgb(17, 200, 63)";
    }

    newItem.style.position = "absolute";
    this.coordX = coordX;
    this.coordY = coordY;
    newItem.style.left = this.coordX + "px";
    newItem.style.top = this.coordY + "px";

    newItem.addEventListener("click", () => {
      selectItem(objCell, this);
    });

    this.element = newItem;

    field.append(newItem);
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
            cell.active = true;
            cell.checkActive();
            cell.checkEventClick();
          }
        });
      });
    });
  }
  move(arrCoord) {}
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

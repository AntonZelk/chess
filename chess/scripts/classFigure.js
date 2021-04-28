class ChessFigure {
  constructor(className, side) {
    this.className = className;
    this.side = side;
    this.elemOnTheBoard = null;
    this.key = "";
    this.selected = false;
  }
  createFigure(coordX, coordY, key) {
    let newItem = document.createElement("i");
    let chessBoard = document.querySelector("#chessBoard");

    newItem.className = "fas";
    newItem.classList.add(this.className);

    if (this.side === "white") {
      newItem.style.color = "rgb(255, 196, 0)";
    } else {
      newItem.style.color = "rgb(17, 200, 63)";
    }

    newItem.style.position = "absolute";
    newItem.style.left = coordX + "px";
    newItem.style.top = coordY + "px";

    this.elemOnTheBoard = newItem;
    this.key = key;

    chessBoard.append(newItem);
  }
}

class Pawn extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this.id = "pawn";
  }
}

class Rook extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this.id = "rook";
  }
}

class Knight extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this.id = "knight";
  }
}
class Bishop extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this.id = "bishop";
  }
}
class Queen extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this.id = "queen";
  }
}
class King extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this.id = "king";
  }
}

export { Pawn, Rook, Knight, Bishop, Queen, King };

class ChessFigure {
  constructor(className, side) {
    this._className = className;
    this._side = side;
  }
  createFigure(coordX, coordY) {
    let newItem = document.createElement("i");
    let chessBoard = document.querySelector("#chessBoard");

    newItem.className = "fas";
    newItem.classList.add(this._className);

    if (this._side === "white") {
      newItem.style.color = "rgb(255, 196, 0)";
    } else {
      newItem.style.color = "rgb(17, 200, 63)";
    }

    newItem.style.position = "absolute";
    newItem.style.left = coordX + "px";
    newItem.style.top = coordY + "px";

    chessBoard.append(newItem);
  }
  pickFigure() {
    console.log("hi");
  }
}

class Pawn extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this._id = "pawn";
  }
}

class Rook extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this._id = "rook";
  }
}

class Knight extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this._id = "knight";
  }
}
class Bishop extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this._id = "bishop";
  }
}
class Queen extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this._id = "queen";
  }
}
class King extends ChessFigure {
  constructor(className, side) {
    super(className, side);
    this._id = "king";
  }
}

export { Pawn, Rook, Knight, Bishop, Queen, King };

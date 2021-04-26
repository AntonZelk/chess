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
    newItem.style.left = coordX;
    newItem.style.top = coordY;

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
  //   constructor(...args) {
  //     super(...args);
  //   }
}

class Knight extends ChessFigure {
  //   constructor(...args) {
  //     super(...args);
  //   }
}
class Bishop extends ChessFigure {
  //   constructor(...args) {
  //     super(...args);
  //   }
}
class Queen extends ChessFigure {
  //   constructor(...args) {
  //     super(...args);
  //   }
}
class King extends ChessFigure {
  //   constructor(...args) {
  //     super(...args);
  //   }
}

export { Pawn, Rook, Knight, Bishop, Queen, King };

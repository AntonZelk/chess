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
  createFigure(field, coordX, coordY) {
    const newItem = document.createElement("i");

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

    this.element = newItem;

    field.append(newItem);
  }
}

class Pawn extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-pawn";
    this.id = `${id}-pawn`;
  }
}

class Rook extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-rook";
    this.id = `${id}-rook`;
  }
}

class Knight extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-knight";
    this.id = `${id}-knight`;
  }
}
class Bishop extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-bishop";
    this.id = `${id}-bishop`;
  }
}
class Queen extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-queen";
    this.id = `${id}-queen`;
  }
}
class King extends ChessFigure {
  constructor(key, side, id) {
    super(key, side);
    this.className = "fa-chess-king";
    this.id = `${id}-king`;
  }
}

export { Pawn, Rook, Knight, Bishop, Queen, King };

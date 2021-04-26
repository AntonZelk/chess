import { createCanvas } from "./canvas.js";
import { drawFigures } from "./drawFigures.js";

let chessBoard = document.querySelector("#chessBoard");

chessBoard.addEventListener("click", (event) => {
  let target = event.target.closest("i");
  if (!target) return;
  if (!chessBoard.contains(target)) return;
});

drawFigures();
createCanvas();

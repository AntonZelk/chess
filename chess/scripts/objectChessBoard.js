import { matrixChessBoard } from "./createMatrixChessBoard.js";

const chessBoard = {
  matrixChessBoard: matrixChessBoard,
  field: {
    width: 400,
    height: 400,
    drawField() {
      const canvas = document.querySelector("#canvas");

      canvas.width = this.width;
      canvas.height = this.height;

      let ctx = canvas.getContext("2d");
      ctx.fillStyle = "#000";

      ctx.fillRect(0, 0, 400, 400);
      for (let i = 0; i < 8; i += 2) {
        for (let j = 0; j < 8; j += 2) {
          ctx.clearRect(0 + i * 50, 0 + j * 50, 50, 50);
          ctx.clearRect(0 + (i + 1) * 50, 0 + (j + 1) * 50, 50, 50);
        }
      }
    },
    addFigures() {
      const step = 50;
      chessBoard.matrixChessBoard.forEach((obj, i) => {
        let counterForX = 0;
        for (let key in obj) {
          let coordX = counterForX * step;
          let coordY = i * step;
          if (obj[key] instanceof Object) {
            obj[key].createFigure(coordX, coordY);
          }
          counterForX++;
        }
      });
    },
  },
};

export { chessBoard };

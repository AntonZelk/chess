const createCanvas = () => {
  const canvas = document.querySelector("#canvas");

  canvas.width = 400;
  canvas.height = 400;

  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";

  ctx.fillRect(0, 0, 400, 400);
  for (let i = 0; i < 8; i += 2) {
    for (let j = 0; j < 8; j += 2) {
      ctx.clearRect(0 + i * 50, 0 + j * 50, 50, 50);
      ctx.clearRect(0 + (i + 1) * 50, 0 + (j + 1) * 50, 50, 50);
    }
  }
};

export { createCanvas };

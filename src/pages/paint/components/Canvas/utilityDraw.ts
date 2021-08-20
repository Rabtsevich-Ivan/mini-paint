interface DrawOperation {
  event: React.MouseEvent<HTMLCanvasElement>;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  getMousePos: (
    canvas: HTMLCanvasElement,
    event: React.MouseEvent<HTMLCanvasElement>
  ) => { x: number; y: number };
  initialX: number;
  initialY: number;
}

//Drawing with brush
export const draw = (
  canvas: DrawOperation['canvas'],
  event: DrawOperation['event'],
  ctx: DrawOperation['ctx'],
  getMousePos: DrawOperation['getMousePos']
): void => {
  const pos = getMousePos(canvas, event);

  ctx.lineCap = 'round';
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
};

//Drawing Line
export const drawLine = (
  canvas: DrawOperation['canvas'],
  event: DrawOperation['event'],
  ctx: DrawOperation['ctx'],
  getMousePos: DrawOperation['getMousePos'],
  initialX: DrawOperation['initialX'],
  initialY: DrawOperation['initialY']
): void => {
  const pos = getMousePos(canvas, event);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(initialX, initialY);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
};

//Drawing Reactangle
export const drawRectangle = (
  canvas: DrawOperation['canvas'],
  event: DrawOperation['event'],
  ctx: DrawOperation['ctx'],
  getMousePos: DrawOperation['getMousePos'],
  initialX: DrawOperation['initialX'],
  initialY: DrawOperation['initialY']
): void => {
  const pos = getMousePos(canvas, event);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(initialX, initialY, pos.x - initialX, pos.y - initialY);
};

//Drawing Circle
export const drawCircle = (
  canvas: DrawOperation['canvas'],
  event: DrawOperation['event'],
  ctx: DrawOperation['ctx'],
  getMousePos: DrawOperation['getMousePos'],
  initialX: DrawOperation['initialX'],
  initialY: DrawOperation['initialY']
): void => {
  const pos = getMousePos(canvas, event);
  const radius = Math.sqrt(
    Math.pow(initialX - pos.x, 2) + Math.pow(initialY - pos.y, 2)
  );

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(initialX, initialY, radius, 2 * Math.PI, 0);
  ctx.stroke();
};

//Drawing Star
export const drawStar = (
  canvas: DrawOperation['canvas'],
  event: DrawOperation['event'],
  ctx: DrawOperation['ctx'],
  getMousePos: DrawOperation['getMousePos'],
  initialX: DrawOperation['initialX'],
  initialY: DrawOperation['initialY']
): void => {
  const pos = getMousePos(canvas, event);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawingStar(initialX, initialY, 5, initialX - pos.x, initialY - pos.y, ctx);
};

//utility
export const drawingStar = (
  cx: number,
  cy: number,
  spikes: number,
  outerRadius: number,
  innerRadius: number,
  ctx: CanvasRenderingContext2D
): void => {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.lineWidth = 5;

  ctx.stroke();

  ctx.fill();
};

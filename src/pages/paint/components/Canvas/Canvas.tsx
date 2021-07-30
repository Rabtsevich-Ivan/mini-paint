import React, { FC } from 'react';
import { ForwardRefRenderFunction } from 'react';
import { CanvasProps } from './types';

export const Canvas: ForwardRefRenderFunction<HTMLCanvasElement, CanvasProps> = ({
  controlType,
  ctx,
  canvas,
  brushColor,
  brushWidth,
}, ref) => {
  //Vars
  let painting = false;
  let initialX: number, initialY: number;

  //Get mouse Position
  const getMousePos = (
    canvas: HTMLCanvasElement,
    e: React.MouseEvent<HTMLCanvasElement>
  ) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  //Check if mouse within canvas
  const startPosition = (e: React.MouseEvent<HTMLCanvasElement>) => {
    painting = true;

    const pos = getMousePos(canvas, e);
    initialX = pos.x;
    initialY = pos.y;

    draw(e);
  };

  //Finish Drawing
  const finishedPosition = () => {
    painting = false;
    ctx.beginPath();
  };
  const outsidePosition = () => {
    painting = false;
    ctx.beginPath();
  };

  //Drawing with brush
  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getMousePos(canvas, e);

    ctx.lineCap = 'round';
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  //Drawing Line
  function drawLine(e: React.MouseEvent<HTMLCanvasElement>) {
    const pos = getMousePos(canvas, e);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(initialX, initialY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  //Drawing Reactangle
  const drawRectangle = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getMousePos(canvas, e);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(initialX, initialY, pos.x - initialX, pos.y - initialY);
  };

  //Drawing Circle
  const drawCircle = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getMousePos(canvas, e);
    const radius = Math.sqrt(
      Math.pow(initialX - pos.x, 2) + Math.pow(initialY - pos.y, 2)
    );

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(initialX, initialY, radius, 2 * Math.PI, 0);
    ctx.stroke();
  };

  //Complex function which handles drawing
  const handleDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    //If mouse is not in canvas or not pressed down
    if (!painting) return;

    //Set width and color for drawing
    ctx.strokeStyle = brushColor;
    ctx.fillStyle = brushColor;
    ctx.lineWidth = brushWidth;

    switch (controlType) {
      case 'Eraser':
        ctx.strokeStyle = 'white';
        draw(e);
        break;
      case 'Brush':
        draw(e);
        break;
      case 'Line':
        drawLine(e);
        break;
      case 'Rectangle':
        ctx.lineWidth = 1;
        drawRectangle(e);
        break;
      case 'Circle':
        drawCircle(e);
        break;
    }
    return;
  };
  /* END of Canvas Basic Drawing*/

  return (
    <canvas
      onMouseDown={startPosition}
      onMouseUp={finishedPosition}
      onMouseMove={handleDrawing}
      onMouseOut={outsidePosition}
      ref={ref}
      id='canvas'
    ></canvas>
  );
};

export default React.forwardRef(Canvas);

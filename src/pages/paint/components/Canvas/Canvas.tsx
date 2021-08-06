import { posix } from 'path';
import React, { ForwardRefRenderFunction } from 'react';
import { CanvasProps } from './types';

//Typescript generic type practical usage
//interface ForwardRefRenderFunction<T, P = {}> -- meaning  = interface ForwardRefRenderFunction<T, P = {canvas: HTMLCanvasElement, ctx: ...}>
export const Canvas: ForwardRefRenderFunction<HTMLCanvasElement, CanvasProps> =
  ({ controlType, ctx, canvas, brushColor, brushWidth }, ref) => {
    //Vars
    let painting = false;
    let initialX: number, initialY: number;

    //Get mouse Position
    const getMousePos = (
      canvas: HTMLCanvasElement,
      e: React.MouseEvent<HTMLCanvasElement>
    ): { x: number; y: number } => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    //Check if mouse within canvas
    const startPosition = (e: React.MouseEvent<HTMLCanvasElement>): void => {
      painting = true;

      const pos = getMousePos(canvas, e);
      initialX = pos.x;
      initialY = pos.y;

      draw(e);
    };

    //Finish Drawing
    const finishedPosition = (): void => {
      painting = false;
      ctx.beginPath();
    };
    const outsidePosition = (): void => {
      painting = false;
      ctx.beginPath();
    };

    //Drawing with brush
    const draw = (e: React.MouseEvent<HTMLCanvasElement>): void => {
      const pos = getMousePos(canvas, e);

      ctx.lineCap = 'round';
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    };

    //Drawing Line
    const drawLine = (e: React.MouseEvent<HTMLCanvasElement>): void => {
      const pos = getMousePos(canvas, e);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(initialX, initialY);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    };

    //Drawing Reactangle
    const drawRectangle = (e: React.MouseEvent<HTMLCanvasElement>): void => {
      const pos = getMousePos(canvas, e);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(initialX, initialY, pos.x - initialX, pos.y - initialY);
    };

    //Drawing Circle
    const drawCircle = (e: React.MouseEvent<HTMLCanvasElement>): void => {
      const pos = getMousePos(canvas, e);
      const radius = Math.sqrt(
        Math.pow(initialX - pos.x, 2) + Math.pow(initialY - pos.y, 2)
      );

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(initialX, initialY, radius, 2 * Math.PI, 0);
      ctx.stroke();
    };

    //Drawing Star
    const drawStar = (e: React.MouseEvent<HTMLCanvasElement>): void => {
      const pos = getMousePos(canvas, e);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawingStar(initialX, initialY, 5, initialX - pos.x, initialY - pos.y)
    };

    //utility
    const drawingStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number): void => {
      var rot = (Math.PI / 2) * 3;
      var x = cx;
      var y = cy;
      var step = Math.PI / spikes;

      ctx.strokeSyle = '#000';
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
    }

    //Complex function which handles drawing
    const handleDrawing = (e: React.MouseEvent<HTMLCanvasElement>): void => {
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
        case 'Star':
          drawStar(e);
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

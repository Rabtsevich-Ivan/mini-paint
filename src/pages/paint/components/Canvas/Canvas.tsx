import React, { ForwardRefRenderFunction } from 'react';
import { CanvasProps } from './types';
import { PaintTools } from '../../../../core/constants/paintTools';
import {
  draw,
  drawLine,
  drawCircle,
  drawRectangle,
  drawStar,
} from './utilityDraw';

export const Canvas: ForwardRefRenderFunction<HTMLCanvasElement, CanvasProps> =
  ({ controlType, ctx, canvas, brushColor, brushWidth }, ref) => {
    //Vars
    let painting = false;
    let initialX: number, initialY: number;

    //Get mouse Position
    const getMousePos = (
      canvas: HTMLCanvasElement,
      event: React.MouseEvent<HTMLCanvasElement>
    ): { x: number; y: number } => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    //Check if mouse within canvas
    const startPosition = (
      event: React.MouseEvent<HTMLCanvasElement>
    ): void => {
      painting = true;

      const pos = getMousePos(canvas, event);
      initialX = pos.x;
      initialY = pos.y;

      draw(canvas, event, ctx, getMousePos);
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

    //Complex function which handles drawing
    const handleDrawing = (
      event: React.MouseEvent<HTMLCanvasElement>
    ): void => {
      //If mouse is not within canvas or not pressed down
      if (!painting) return;

      //Set width and color for drawing
      ctx.strokeStyle = brushColor;
      ctx.fillStyle = brushColor;
      ctx.lineWidth = Number(brushWidth);

      switch (controlType) {
        case PaintTools.ERASER:
          ctx.strokeStyle = 'white';
          draw(canvas, event, ctx, getMousePos);
          break;
        case PaintTools.BRUSH:
          draw(canvas, event, ctx, getMousePos);
          break;
        case PaintTools.LINE:
          drawLine(canvas, event, ctx, getMousePos, initialX, initialY);
          break;
        case PaintTools.RECTANGLE:
          ctx.lineWidth = 1;
          drawRectangle(canvas, event, ctx, getMousePos, initialX, initialY);
          break;
        case PaintTools.CIRCLE:
          drawCircle(canvas, event, ctx, getMousePos, initialX, initialY);
          break;
        case PaintTools.STAR:
          drawStar(canvas, event, ctx, getMousePos, initialX, initialY);
          break;
      }
      return;
    };
    /* END of Canvas handleDrawing*/

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

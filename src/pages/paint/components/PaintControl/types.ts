import React from 'react';

export interface ControlProps {
  handleControl: (type: string) => void;
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  handleClear: (
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => void;
  handleSave: (canvas: HTMLCanvasElement, imageName: string) => void;
  handleBrushColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBrushWidth: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

import React from "react";

export interface ControlProps {
  handleControl: (type: string) => void;
  context: any;
  canvas: HTMLCanvasElement;
  handleClear: (context: any, canvas: HTMLCanvasElement) => void;
  handleSave: (canvas: HTMLCanvasElement, imageName: string) => void;
  // Two ways to define function types
  //random guy method
  handleBrushColor(e: React.ChangeEvent<HTMLInputElement>): void;
  //webDev channel method
  handleBrushWidth: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ControlProps {
  handleControl: Function;
  context: any;
  canvas: HTMLCanvasElement;
  handleClear: Function;
  handleSave: Function;
  handleBrushColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBrushWidth: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

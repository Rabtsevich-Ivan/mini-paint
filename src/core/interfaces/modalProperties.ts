export interface ModalProperties {
  title: string;
  type: string;
  description?: string;
  canvas?: HTMLCanvasElement;
  handleSave?: (canvas: HTMLCanvasElement, imageName: string) => void;
}

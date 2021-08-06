import React, { FC, useState, useRef, useEffect, ChangeEvent } from 'react';
import { Switch } from 'react-router';
import Canvas from './components/Canvas/Canvas';
import PaintControl from './components/PaintControl/PaintControl';
import * as Styled from './styled';
import { saveData } from '../../core/services/save';
import { auth } from '../../core/firebase/firebase';

const PaintPage: FC = () => {
  const [controlType, setControlType] = useState<String>('Brush');
  const [brushColor, setBrushColor] = useState<String>('#000');
  const [brushWidth, setBrushWidth] = useState<String>('30');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState(undefined);

  /* Set context only when canvas is loaded */
  useEffect(() => {
    setCtx(canvasRef.current.getContext('2d'));

    canvasRef.current.setAttribute(
      'width',
      String(window.innerWidth - 240)
      //window.getComputedStyle(canvasRef.current.parentElement).width
    );
    canvasRef.current.setAttribute(
      'height',
      String(window.innerHeight)
      //window.getComputedStyle(canvasRef.current.parentElement).height
    );
  }, []);

  //To inform canvas what tool it should use
  const handleControl = (type: String): void => {
    setControlType(type);
  };

  //To inform canvas what Color it should use
  const handleBrushColor = (e: ChangeEvent<HTMLInputElement>): void => {
    setBrushColor(e.target.value);
  };

  //To inform canvas what Brush Width it should use
  const handleBrushWidth = (e: ChangeEvent<HTMLInputElement>): void => {
    setBrushWidth(e.target.value);
  };

  //To clear canvas of any Drawings
  const handleClear = (context: any, canvas: HTMLCanvasElement): void => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Save Image to Firebase Storage
  const currentUser = auth.currentUser;
  const handleSave = (canvas: HTMLCanvasElement, imageName: string): void => {
    canvas.toBlob((blob: Blob): void => {
      saveData(imageName, blob, currentUser);
    });
  };

  return (
    <div>
      <main className='paint-section'>
        <Styled.PaintWrapper>
          <Styled.PaintControl>
            <PaintControl
              handleControl={handleControl}
              context={ctx}
              canvas={canvasRef.current}
              handleClear={handleClear}
              handleSave={handleSave}
              handleBrushColor={handleBrushColor}
              handleBrushWidth={handleBrushWidth}
            />
          </Styled.PaintControl>
          <Styled.PaintArea>
            <Canvas
              ref={canvasRef}
              controlType={controlType}
              ctx={ctx}
              canvas={canvasRef.current}
              brushColor={brushColor}
              brushWidth={brushWidth}
            />
          </Styled.PaintArea>
        </Styled.PaintWrapper>
      </main>
      <div id='img-cont'></div>
    </div>
  );
};

export default PaintPage;

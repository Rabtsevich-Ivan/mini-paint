import React, { FC, useState, useRef, useEffect, ChangeEvent } from 'react';
import Canvas from './components/Canvas/Canvas';
import PaintControl from './components/PaintControl/PaintControl';
import * as Styled from './styled';
import { auth } from '../../core/firebase/firebase';
import { useDispatch } from 'react-redux';
import { saveImage } from '../../core/actions/data';

const PaintPage: FC = () => {
  const dispatch = useDispatch();

  const [controlType, setControlType] = useState<string>('Brush');
  const [brushColor, setBrushColor] = useState<string>('#000');
  const [brushWidth, setBrushWidth] = useState<string>('30');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>(undefined);

  /* Set context only when canvas is loaded */
  /* and */
  /* Rerender canvas with new width and height after resize */
  useEffect(() => {
    setCtx(canvasRef.current.getContext('2d'));

    const handleResize = () => {
      canvasRef.current.height = window.innerHeight;
      canvasRef.current.width = window.innerWidth - 240;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // Rerender canvas with new width and height after resize
  }, []);

  //To inform canvas what tool it should use
  const handleControl = (type: string): void => {
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
  const handleClear = (
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ): void => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Save Image to Firebase Storage
  const currentUser = auth.currentUser;
  const handleSave = (canvas: HTMLCanvasElement, imageName: string): void => {
    canvas.toBlob((blob: Blob): void => {
      dispatch(saveImage(imageName, blob, currentUser));
    });
  };

  return (
    <div>
      <main>
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
    </div>
  );
};

export default PaintPage;

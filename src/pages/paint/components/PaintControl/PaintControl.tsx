import React, { FC } from 'react';
import * as Styled from './styled';
import { ControlProps } from './types';
import Button from '../../../../core/components/Buttons/Button';
import { Header } from '../../../../core/components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../../../core/actions/modal';
import Modal from '../../../../core/components/Modal/Modal';

//export const PaintControl: FC<{canvas: HTMLCanvasElement;handleBrushWidth: (e: React.ChangeEvent<HTMLInputElement>) => void; ...}> = ({
export const PaintControl: FC<ControlProps> = ({
  handleControl,
  context,
  canvas,
  handleClear,
  handleSave,
  handleBrushColor,
  handleBrushWidth,
}) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state: any) => state.modal.modal); 

  return (
    <>
      <Header condition={true} />
      <Styled.ToolSection>
        <Styled.ToolSectionTitle>Brush Color</Styled.ToolSectionTitle>
        <Styled.BtnColor
          onChange={handleBrushColor}
          type='color'
          name='brush-color'
          id='brush-color'
        />
      </Styled.ToolSection>

      <Styled.ToolSection>
        <Styled.ToolSectionTitle>Brush Width</Styled.ToolSectionTitle>
        <input
          onChange={handleBrushWidth}
          type='range'
          name='brush-width'
          id='brush-width'
          min='5'
          max='30'
        />
      </Styled.ToolSection>

      <Styled.ToolSection>
        <Styled.ToolSectionTitle>Tools</Styled.ToolSectionTitle>
        <Styled.ToolGrid>
          <div>
            <Styled.ToolBtn
              onClick={() => {
                handleControl('Brush');
              }}
              id='Brush'
            >
              <i className='fas fa-paint-brush'></i>
            </Styled.ToolBtn>
          </div>
          <div>
            <Styled.ToolBtn
              onClick={() => {
                handleControl('Eraser');
              }}
              id='eraser'
            >
              <i className='fas fa-eraser'></i>
            </Styled.ToolBtn>
          </div>
          <div>
            <Styled.ToolBtn
              onClick={() => {
                handleControl('Line');
              }}
              id='line'
            >
              <i className='fas fa-slash'></i>
            </Styled.ToolBtn>
          </div>
          <div>
            <Styled.ToolBtn
              onClick={() => {
                handleControl('Circle');
              }}
              id='circle'
            >
              <i className='fas fa-circle'></i>
            </Styled.ToolBtn>
          </div>
          <div>
            <Styled.ToolBtn
              onClick={() => {
                handleControl('Rectangle');
              }}
              id='rectangle'
            >
              <i className='fas fa-square-full'></i>
            </Styled.ToolBtn>
          </div>
          <div>
            <Styled.ToolBtn
              onClick={() => {
                handleControl('Star');
              }}
              id='star'
            >
              <i className="fas fa-star"></i>
            </Styled.ToolBtn>
          </div>
        </Styled.ToolGrid>
      </Styled.ToolSection>

      <Styled.ToolSection>
        <Button
          onClick={() => {
            dispatch(showModal());
          }}
          id='canvas-save'
          btnType='canvasSave'
        >
          Save
        </Button>
      </Styled.ToolSection>

      <Styled.ToolSection>
        <Button
          onClick={() => {
            handleClear(context, canvas);
          }}
          id='canvas-clear'
        >
          Clear
        </Button>
      </Styled.ToolSection>
      { modalStatus && <Modal canvas={canvas} handleSave={handleSave} /> }
    </>
  );
};

export default PaintControl;

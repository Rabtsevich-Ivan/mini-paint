import React, { FC } from 'react';
import * as Styled from './styled';
import { ControlProps } from './types';

export const PaintControl: FC<ControlProps> = ({
  handleControl,
  context,
  canvas,
  handleClear,
  handleSave,
  handleBrushColor,
  handleBrushWidth,
}) => {
  return (
    <>
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
        </Styled.ToolGrid>
      </Styled.ToolSection>

      <Styled.ToolSection>
        <Styled.CanvasSaveBtn
          onClick={() => {
            handleSave(canvas);
          }}
          id='canvas-save'
        >
          Save
        </Styled.CanvasSaveBtn>
      </Styled.ToolSection>

      <Styled.ToolSection>
        <Styled.CanvasClearBtn
          onClick={() => {
            handleClear(context, canvas);
          }}
          id='canvas-clear'
        >
          Clear
        </Styled.CanvasClearBtn>
      </Styled.ToolSection>
    </>
  );
};

export default PaintControl;

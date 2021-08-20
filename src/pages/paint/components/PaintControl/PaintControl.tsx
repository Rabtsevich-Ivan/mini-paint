import React, { FC } from 'react';
import * as Styled from './styled';
import { ControlProps } from './types';
import Button from '../../../../core/components/Buttons/Button';
import { Header } from '../../../../core/components/Header/Header';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../../core/actions/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faEraser,
  faPaintBrush,
  faSlash,
  faSquareFull,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { ModalTypes } from '../../../../core/constants/modal';

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

  //Handlers
  const handleBrush = (): void => {
    handleControl('Brush');
  };

  const handleEraser = (): void => {
    handleControl('Eraser');
  };

  const handleLine = (): void => {
    handleControl('Line');
  };

  const handleCircle = (): void => {
    handleControl('Circle');
  };

  const handleRectangle = (): void => {
    handleControl('Rectangle');
  };

  const handleStar = (): void => {
    handleControl('Star');
  };

  const handleClearButton = (): void => {
    handleClear(context, canvas);
  };

  const handleShowModal = (): void => {
    dispatch(
      showModal({
        title: 'Please name your creation!',
        type: ModalTypes.MODAL_FORM,
        canvas,
        handleSave,
      })
    );
  };

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
            <Styled.ToolBtn onClick={handleBrush} id='Brush'>
              <FontAwesomeIcon icon={faPaintBrush} />
            </Styled.ToolBtn>
          </div>
          <div>
            <Styled.ToolBtn onClick={handleEraser} id='eraser'>
              <FontAwesomeIcon icon={faEraser} />
            </Styled.ToolBtn>
          </div>
          <div>
            <Styled.ToolBtn onClick={handleLine} id='line'>
              <FontAwesomeIcon icon={faSlash} />
            </Styled.ToolBtn>
          </div>
          <div>
            <Styled.ToolBtn onClick={handleCircle} id='circle'>
              <FontAwesomeIcon icon={faCircle} />
            </Styled.ToolBtn>
          </div>
          <div>
            <Styled.ToolBtn onClick={handleRectangle} id='rectangle'>
              <FontAwesomeIcon icon={faSquareFull} />
            </Styled.ToolBtn>
          </div>
          <div>
            <Styled.ToolBtn onClick={handleStar} id='star'>
              <FontAwesomeIcon icon={faStar} />
            </Styled.ToolBtn>
          </div>
        </Styled.ToolGrid>
      </Styled.ToolSection>

      <Styled.ToolSection>
        <Button onClick={handleShowModal} id='canvas-save' btnType='canvasSave'>
          Save
        </Button>
      </Styled.ToolSection>

      <Styled.ToolSection>
        <Button onClick={handleClearButton} id='canvas-clear'>
          Clear
        </Button>
      </Styled.ToolSection>
    </>
  );
};

export default PaintControl;

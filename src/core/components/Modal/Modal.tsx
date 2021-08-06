import React, { FC, useState } from 'react';
import * as Styled from './styled';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modal';

export const Modal: FC<{ handleSave: any; canvas: HTMLCanvasElement }> = ({
  handleSave,
  canvas,
}) => {
  const dispatch = useDispatch();
  const [imageName, setImageName] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <Styled.ModalOverlay>
      <Styled.Modal>
        <h3>Please name your creation!</h3>
        <Styled.ModalField
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setImageName(e.target.value);
          }}
          type='text'
          placeholder='random drawing 777'
        />
        <Styled.ModalSubmit
          onClick={() => {
            handleSave(canvas, imageName);
            setSuccessMessage(true);
            setTimeout(() => {
              dispatch(closeModal());
            }, 1500);
          }}
        >
          Save
        </Styled.ModalSubmit>

        {successMessage && (
          <Styled.ModalSuccessMessage>
            Your image was successfully created!!
          </Styled.ModalSuccessMessage>
        )}

        <Styled.ModalClose
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          &#10005;
        </Styled.ModalClose>
      </Styled.Modal>
    </Styled.ModalOverlay>
  );
};

export default Modal;

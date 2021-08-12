import React, { FC, useState } from 'react';
import * as Styled from './styled';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { ModalProps } from './types';

export const Modal: FC<ModalProps> = ({ handleSave, canvas }) => {
  const dispatch = useDispatch();

  const [imageName, setImageName] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSave(canvas, imageName);
    setSuccessMessage(true);
    setTimeout(() => {
      dispatch(closeModal());
    }, 1500);
  };

  const createImageName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setImageName(e.target.value);
  };

  return (
    <Styled.ModalOverlay>
      <Styled.Modal>
        <h3>Please name your creation!</h3>
        <form action='#' onSubmit={handleSubmit}>
          <Styled.ModalField
            onChange={createImageName}
            type='text'
            placeholder='random drawing 777'
            required
          />
          <Styled.ModalSubmit type='submit'>Save</Styled.ModalSubmit>
        </form>

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

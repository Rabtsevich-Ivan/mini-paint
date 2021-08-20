import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ModalState } from '../../../reducers/modal';
import { ModalField, ModalSubmit } from '../styled';

export const ModalForm: FC = () => {
  const modal = useSelector(
    (state: { modal: ModalState }) => state.modal.modal
  );
  let imageName = '';

  const createImageName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    imageName = e.target.value;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    modal.handleSave(modal.canvas, imageName);
  };

  return (
    <form action='#' onSubmit={handleSubmit}>
      <ModalField
        onChange={createImageName}
        type='text'
        placeholder='random drawing 777'
        required
      />
      <ModalSubmit type='submit'>Save</ModalSubmit>
    </form>
  );
};

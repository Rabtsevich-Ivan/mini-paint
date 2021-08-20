import React, { FC } from 'react';
import * as Styled from './styled';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { ModalState } from '../../reducers/modal';
import { useSelector } from 'react-redux';
import { ModalForm } from './components/ModalForm';
import { ModalTypes } from '../../constants/modal';

export const Modal: FC = () => {
  const dispatch = useDispatch();
  const modal = useSelector(
    (state: { modal: ModalState }) => state.modal.modal
  );

  if (!modal) {
    return null;
  }

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Styled.ModalOverlay>
      <Styled.Modal>
        <h3>{modal.title}</h3>
        {modal.type === ModalTypes.MODAL_FORM ? <ModalForm /> : null}
        {modal.type === ModalTypes.MODAL_INFO ? (
          <p>{modal.description}</p>
        ) : null}

        <Styled.ModalClose onClick={handleCloseModal}>
          &#10005;
        </Styled.ModalClose>
      </Styled.Modal>
    </Styled.ModalOverlay>
  );
};

export default Modal;

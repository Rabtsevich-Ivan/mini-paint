import { ModalActionTypes } from '../constants/actionTypes';
import { Action } from '../interfaces/action';

export const showModal = (): Action<ModalActionTypes> => {
  return { type: ModalActionTypes.SHOWMODAL };
};

export const closeModal = (): Action<ModalActionTypes> => ({
  type: ModalActionTypes.CLOSEMODAL,
});

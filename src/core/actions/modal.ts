import { Action } from '../interfaces/action';
import { ModalProperties } from '../interfaces/modalProperties';

export enum ModalActionTypes {
  SHOWMODAL = '[Modal] SHOWMODAL',
  CLOSEMODAL = '[Modal] CLOSEMODAL',
}

export const showModal = (
  payload: ModalProperties
): Action<ModalActionTypes> => {
  return { type: ModalActionTypes.SHOWMODAL, payload };
};

export const closeModal = (): Action<ModalActionTypes> => ({
  type: ModalActionTypes.CLOSEMODAL,
});

import { ModalActionTypes } from './../actions/modal';
import { Action } from '../interfaces/action';
import { ModalProperties } from '../interfaces/modalProperties';

export interface ModalState {
  modal: ModalProperties | null | undefined;
}

const initialState: ModalState = {
  modal: null,
};

const modal = (
  state = initialState,
  action: Action<ModalActionTypes>
): ModalState => {
  switch (action.type) {
    case ModalActionTypes.SHOWMODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case ModalActionTypes.CLOSEMODAL:
      return {
        ...state,
        modal: null,
      };
    default:
      return state;
  }
};

export default modal;

import { ModalActionTypes } from '../constants/actionTypes';
import { ModalState } from '../interfaces/states';
import { Action } from '../interfaces/action';

const initialState: ModalState = {
  modal: false,
};

const modal = (
  state = initialState,
  action: Action<ModalActionTypes>
): ModalState => {
  switch (action.type) {
    case ModalActionTypes.SHOWMODAL:
      return {
        ...state,
        modal: true,
      };
    case ModalActionTypes.CLOSEMODAL:
      return initialState;
    default:
      return state;
  }
};

export default modal;

import { ModalActionTypes } from '../constants/actionTypes';
import { ModalAction } from '../actions/modal';

interface State {
  modal: boolean;
}

const initialState: State = {
  modal: false,
};

const modal = (state = initialState, action: ModalAction) => {
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

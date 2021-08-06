import { ModalActionTypes } from "../constants/actionTypes";

export interface ModalAction {
    type: ModalActionTypes;
    payload?: any;
}

export const showModal = () => ({
    type: ModalActionTypes.SHOWMODAL,
});

export const closeModal = () => ({
    type: ModalActionTypes.CLOSEMODAL,
});
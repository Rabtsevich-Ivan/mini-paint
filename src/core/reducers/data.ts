import { ImagesActionTypes } from '../constants/actionTypes';
import { DataState } from '../interfaces/states';
import { Action } from '../interfaces/action';

const initialState: DataState = {
  images: [],
  isLoading: false,
  error: null,
};

const images = (
  state = initialState,
  action: Action<ImagesActionTypes>
): DataState => {
  switch (action.type) {
    case ImagesActionTypes.FETCH_IMAGES:
      return {
        ...state,
        isLoading: true,
      };
    case ImagesActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        images: action.payload.images,
      };
    case ImagesActionTypes.FETCH_IMAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default images;

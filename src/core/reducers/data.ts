import { ImagesActionTypes } from '../constants/actionTypes';

interface State {
  images: object;
  isLoading: boolean;
  error: string;
}

const initialState: State = {
  images: [],
  isLoading: false,
  error: null,
};

const images = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
): State => {
  switch (type) {
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
        images: payload.images,
      };
    // Should be tested!
    case ImagesActionTypes.FETCH_IMAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default images;

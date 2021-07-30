import { FETCH_IMAGES, FETCH_IMAGES_SUCCESS } from '../constants/constants';

const initialState = {
  images: [1, 2, 3],
};

const images = (
  state: any = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: payload.images,
      };
    default:
      return state;
  }
};

export default images;

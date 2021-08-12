import { ImagesActionTypes } from './../constants/actionTypes';
import { Image } from '../interfaces/image';
import { Action } from '../interfaces/action';

export const fetchImages = (): Action<ImagesActionTypes> => ({
  type: ImagesActionTypes.FETCH_IMAGES,
  payload: undefined,
});

export const fetchImagesSuccess = (
  images: Image[]
): Action<ImagesActionTypes> => ({
  type: ImagesActionTypes.FETCH_IMAGES_SUCCESS,
  payload: { images },
});

export const fetchImagesFailed = (
  error: string
): Action<ImagesActionTypes> => ({
  type: ImagesActionTypes.FETCH_IMAGES_FAILED,
  payload: { error },
});

export default fetchImages;

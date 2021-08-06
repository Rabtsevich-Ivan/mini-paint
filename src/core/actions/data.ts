import { Action } from 'redux';
import { ImagesActionTypes } from './../constants/actionTypes';
import { ImageInterface } from '../interfaces/image';

export const fetchImages = () => ({
  type: ImagesActionTypes.FETCH_IMAGES,
});

//(images: ImageInterface[])
export const fetchImagesSuccess = (images: any) => ({
  type: ImagesActionTypes.FETCH_IMAGES_SUCCESS,
  payload: { images },
});

export const fetchImagesFailed = (error: string) => ({
  type: ImagesActionTypes.FETCH_IMAGES_FAILED,
  payload: { error },
});

export default fetchImages;

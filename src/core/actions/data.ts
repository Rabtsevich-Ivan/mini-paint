import { Action } from 'redux';
import { FETCH_IMAGES, FETCH_IMAGES_SUCCESS } from '../constants/constants';

export const fetchImages = () => ({
  type: FETCH_IMAGES,
});

export const fetchImagesSuccess = (images: any) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: { images },
});

export default fetchImages;

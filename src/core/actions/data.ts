import { Image } from '../interfaces/image';
import { Action } from '../interfaces/action';
import firebase from 'firebase';

export enum ImagesActionTypes {
  FETCH_IMAGES = 'FETCH_IMAGES',
  FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
  FETCH_IMAGES_FAILED = 'FETCH_IMAGES_FAILED',
  SAVE_IMAGE = 'SAVE_IMAGE',
}

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

export const saveImage = (
  imageName: string,
  blob: Blob,
  currentUser: firebase.User
): Action<ImagesActionTypes> => ({
  type: ImagesActionTypes.SAVE_IMAGE,
  payload: { imageName, blob, currentUser },
});

export default fetchImages;

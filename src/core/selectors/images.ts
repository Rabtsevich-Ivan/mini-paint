import { createSelector } from 'reselect';
import { DataState } from './../reducers/data';
import { RootState } from '../reducers';

const selectImages = (state: RootState): DataState => state.images;

export const selectImagesArray = createSelector(
  selectImages,
  (state) => state.images
);

export const selectImagesIsLoading = createSelector(
  selectImages,
  (state) => state.isLoading
);

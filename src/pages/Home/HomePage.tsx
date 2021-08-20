import React, { FC, useEffect } from 'react';
import { Header } from '../../core/components/Header/Header';
import * as Styled from './styled';
import { useDispatch, useSelector } from 'react-redux';
import fetchImages from '../../core/actions/data';
import { Image } from '../../core/interfaces/image';
import {
  selectImagesArray,
  selectImagesIsLoading,
} from '../../core/selectors/images';
import { ImagesLinks } from '../../core/constants/imagesLinks';

const HomePage: FC = () => {
  const images: Image[] = useSelector(selectImagesArray);
  const isLoading = useSelector(selectImagesIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  //Condition for Header component to render nav-link referring on PaintPage or HomePage
  return (
    <div>
      <Header condition={false} />
      <main>
        <Styled.Container>
          <Styled.GridWrap>
            {isLoading ? (
              <Styled.Loader alt='loading' src={ImagesLinks.LOADER} />
            ) : (
              Array.isArray(images) &&
              images.map((doc: Image, index: number) => (
                <Styled.ImageWrap key={`image_${doc.id}`}>
                  <Styled.Img src={doc.url} alt={`image_${index}`} />
                </Styled.ImageWrap>
              ))
            )}
          </Styled.GridWrap>
        </Styled.Container>
      </main>
    </div>
  );
};

export default HomePage;

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
        <div className='container'>
          <Styled.GridWrap>
            {isLoading ? (
              <Styled.Loader
                alt='loading'
                src='https://media1.tenor.com/images/a6a6686cbddb3e99a5f0b60a829effb3/tenor.gif?itemid=7427055'
              />
            ) : (
              Array.isArray(images) &&
              images.map((doc: Image, index: number) => (
                <Styled.ImageWrap key={'image_' + index}>
                  <Styled.Img
                    src={doc.url}
                    alt={'image_' + index}
                    id={'image_' + index}
                  />
                </Styled.ImageWrap>
              ))
            )}
          </Styled.GridWrap>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

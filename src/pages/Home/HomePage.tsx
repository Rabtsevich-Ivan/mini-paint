import React, { FC, useEffect, useState } from 'react';
import { Header } from '../../core/components/Header/Header';
import * as Styled from './styled';
import { useDispatch, useSelector } from 'react-redux';
import fetchImages from '../../core/actions/data';
import { getData } from '../../core/services/data';
import { auth } from '../../core/firebase/firebase';

const HomePage: FC = () => {
  //Create Array of objects which gets ID and imageURL from database
  const images: any = useSelector((state: any) => state.images.images);
  const isLoading: any = useSelector((state: any) => state.images.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
    console.log();
  }, []);

  //Condition for Header to render link to paint or home page
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
              images.map((doc: any, index: number) => (
                <Styled.ImageWrap key={'image_' + index}>
                  <Styled.Img src={doc.url} alt='pic from firebase' />
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

import React, { FC, useEffect, useState } from 'react';
import { Header } from '../../core/components/Header/Header';
import { useAuth } from '../../core/contexts/AuthContext';
import { auth } from '../../core/firebase/firebase';
import * as Styled from './styled';
import { useDispatch, useSelector } from 'react-redux';
import fetchImages from '../../core/actions/data';

const HomePage: FC = () => {
  //Create Array of objects which gets ID and imageURL from database
  const images = useSelector( (state: any) => state.images.images);
  console.log(images, 123)
  
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    //getData(setDocs, currentUser);
    dispatch(fetchImages());
  }, []);
  let docs: any = images;

  //Condition for Header to render link to paint or home page
  return (
    <div>
      <Header condition={false} />
      <main>
        <div className='container'>
          <Styled.GridWrap>
            {docs &&
              docs
                //.filter(doc => doc.user === currentUser.email)
                .map((doc: any) => (
                  <Styled.ImageWrap key={"image_" + doc.id}>
                    <Styled.Img src={doc.url} alt='pic from firebase' />
                  </Styled.ImageWrap>
                ))}
            <div className='img-wrap'></div>
          </Styled.GridWrap>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

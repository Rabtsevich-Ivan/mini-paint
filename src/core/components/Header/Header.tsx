import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../actions/auth';
import * as Styled from './styled';
import { HeaderProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'react-redux-firebase';
import {
  selectFirebaseAuth,
  selectFirebaseAuthEmail,
} from '../../selectors/auth';

export const Header: FC<HeaderProps> = ({ condition }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const email = useSelector(selectFirebaseAuthEmail);
  const auth = useSelector(selectFirebaseAuth);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logout());
  };

  if (isEmpty(auth)) {
    history.push('/login');
  }

  return (
    <header>
      <Styled.Container condition={condition}>
        <nav className='nav-bar'>
          {condition ? <h1>Navigation</h1> : ''}
          <Styled.NavList>
            {condition ? (
              <Styled.NavListItem>
                <Link to='/'>Images</Link>
              </Styled.NavListItem>
            ) : (
              <Styled.NavListItem>
                <Link to='/paint'>Paint</Link>
              </Styled.NavListItem>
            )}

            <Styled.NavListItem>
              <a onClick={handleLogout}>Sign Out</a>
            </Styled.NavListItem>
            <Styled.NavListItem>
              <a className='focused'>{email}</a>
            </Styled.NavListItem>
          </Styled.NavList>
        </nav>
        <Styled.Hr />
      </Styled.Container>
    </header>
  );
};

import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../actions/auth';
import * as Styled from './styled';
import { HeaderProps } from './types';
import { useDispatch, useSelector } from 'react-redux';

export const Header: FC<HeaderProps> = ({ condition }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const email = useSelector((state:any) => state.firebase.auth.email)

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/login');
  };

  return (
    <header>
      <Styled.Container condition={condition} >
        <nav className='nav-bar'>
          { condition ? <h1>Navigation</h1> : '' }
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

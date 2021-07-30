import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../firebase/firebase';
import * as Styled from './styled';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ condition }) => {
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push('/login');
    } catch {}
  }

  return (
    <header>
      <div className='container'>
        <nav className='nav-bar'>
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
              <a className='focused'>{auth.currentUser.email}</a>
            </Styled.NavListItem>
          </Styled.NavList>
        </nav>
        <Styled.Hr />
      </div>
    </header>
  );
};

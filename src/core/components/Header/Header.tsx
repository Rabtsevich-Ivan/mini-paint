import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../actions/auth';
import * as Styled from './styled';
import { HeaderProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'react-redux-firebase';
import {
  selectFirebaseAuth,
  selectFirebaseAuthEmail,
} from '../../selectors/auth';
import { AppRoutes } from '../../constants/appRoutes';
import { showModal } from '../../actions/modal';
import { ModalTypes } from '../../constants/modal';

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

  const handleShowModal = (): void => {
    dispatch(
      showModal({
        title: 'User Information',
        type: ModalTypes.MODAL_INFO,
        description: `Current user is ${email}`,
      })
    );
  };

  return (
    <header>
      <Styled.Container condition={condition}>
        <nav>
          {condition ? <h1>Navigation</h1> : ''}
          <Styled.NavList>
            {condition ? (
              <Styled.NavListItem>
                <Styled.NavRouterLink to={AppRoutes.Home}>
                  Images
                </Styled.NavRouterLink>
              </Styled.NavListItem>
            ) : (
              <Styled.NavListItem>
                <Styled.NavRouterLink to={AppRoutes.Paint}>
                  Paint
                </Styled.NavRouterLink>
              </Styled.NavListItem>
            )}

            <Styled.NavListItem>
              <Styled.NavLink onClick={handleShowModal}>Info</Styled.NavLink>
            </Styled.NavListItem>
            <Styled.NavListItem>
              <Styled.NavLink onClick={handleLogout}>Sign Out</Styled.NavLink>
            </Styled.NavListItem>
          </Styled.NavList>
        </nav>
        <Styled.Hr />
      </Styled.Container>
    </header>
  );
};

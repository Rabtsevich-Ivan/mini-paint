import styled from 'styled-components';
import { HeaderProps } from './types';

export const Container = styled.div<HeaderProps>`
  ${(p) => {
    if (p.condition === true) {
      return `
        margin: 0;
        padding: 0;
        position: relative;
        ul {
          padding: 0;
          flex-direction: column;
        }
        margin-bottom: 2rem;
        
        `;
    } else {
      return `
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      position: relative;
      `;
    }
  }}
`;

export const Hr = styled.hr`
  margin-top: 2px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  list-style: none;
  margin: 0;
  padding-top: 2px;
`;

export const NavListItem = styled.li`
  a {
    text-decoration: none;
    display: block;
    padding: 15px 20px;
    transition: all 0.2s ease-out;
    color: ${(props) => props.theme.colors['btn__text-inittial']};
  }
  a:hover {
    background-color: ${(props) => props.theme.colors['btn-nav_hover']};
    color: ${(props) => props.theme.colors['btn-nav__text']};
    cursor: pointer;
  }
  .focused {
    background-color: ${(props) => props.theme.colors['btn-nav_focused']};
    color: ${(props) => props.theme.colors['btn-nav__text']};
  }
`;

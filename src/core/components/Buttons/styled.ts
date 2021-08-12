import styled from 'styled-components';
import { ButtonProps } from './types';

export const Btn = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.theme.colors.btn};
  color: ${(props) => props.theme.colors['btn__text-inittial']};
  bottom: 0;
  outline: 0;
  border: 0;
  width: 100%;
  border-radius: 0;
  text-decoration: none;
  padding: 10px 0.5rem;
  border-radius: 2px;
  transition: all 0.2s ease-out;
  &:hover {
    background: ${(props) => props.theme.colors.btn__hover};
  }

  ${(props) => {
    if (props.btnType === 'formBtn') {
      return `background-color: ${props.theme.colors['btn-submit']};
        color: ${props.theme.colors['btn-submit__text']};
        padding: 0.7rem;
        margin-top: 1.5rem;
        font-size: 16px;
        &:hover {
          background-color: ${props.theme.colors['btn-submit__hover']};
        }`;
    } else if (props.btnType === 'canvasSave') {
      return `
        background-color: ${props.theme.colors['btn-save']};
        
        &:hover {
          background: ${props.theme.colors['btn-save__hover']};
        }`;
    }
  }}
`;

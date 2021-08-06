import React, { FC } from 'react';
import { StyledComponent, StyledProps } from 'styled-components';
import { Btn } from './styled';

interface ButtonProps {
  [propName: string]: string | (()=>void);
}

export const Button:FC<ButtonProps> = ({ ...rest }) => {
  return <Btn {...rest} />;
};

export default Button;

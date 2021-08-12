import React, { FC } from 'react';
import { Btn } from './styled';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ ...rest }) => {
  return <Btn {...rest} />;
};

export default Button;

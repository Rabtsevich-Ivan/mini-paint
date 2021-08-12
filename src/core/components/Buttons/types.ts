import React from 'react';

export interface ButtonProps {
  [propName: string]: string | (() => void) | React.ReactNode;
}

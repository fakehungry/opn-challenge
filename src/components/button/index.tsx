import React from 'react';
import { StyledButton } from './Button.style';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default React.memo(Button);

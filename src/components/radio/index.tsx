import React from 'react';
import { StyledLabel, StyledRadio } from './Radio.style';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio = (props: RadioProps) => {
  const { label, ...rest } = props;

  return (
    <>
      <StyledLabel htmlFor={rest.id}>
        <StyledRadio {...rest} type="radio" />
        <span>{label}</span>
      </StyledLabel>
    </>
  );
};

export default React.memo(Radio);

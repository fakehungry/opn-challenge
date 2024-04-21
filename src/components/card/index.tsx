import React, { useState } from 'react';
import { Container } from './Card.style';
import Button, { ButtonProps } from '../button';
import { XMarkIcon } from '../icons/x-mark-icon';
import { useTheme } from 'styled-components';
import Radio from '../radio';
import { donateAmount } from './donateAmount';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  place: string;
  imgsrc: string;
  imgalt: string;
  donateBtnProps?: ButtonProps;
  payBtnProps?: ButtonProps;
}

export const Card = (props: CardProps) => {
  const { place, imgsrc, imgalt, donateBtnProps, payBtnProps } = props;
  const theme = useTheme();

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <Container {...props}>
      <img src={imgsrc} alt={imgalt} />
      <div className="row">
        <h2>{place}</h2>
        <Button
          onClick={() => {
            setIsOverlayVisible(!isOverlayVisible);
          }}
          {...donateBtnProps}
        >
          Donate
        </Button>
      </div>
      {isOverlayVisible ? (
        <div className="overlay overlay-anim">
          <XMarkIcon
            onClick={() => setIsOverlayVisible(false)}
            color={theme.colors.tertiary}
          />
          <div className="column">
            <h2>Select the amount to donate (THB)</h2>
            <div className="radio-group">
              {donateAmount.map((amount) => (
                <Radio
                  key={amount}
                  id={amount.toString()}
                  name="donate"
                  value={amount}
                  label={amount.toString()}
                />
              ))}
            </div>
            <Button {...payBtnProps}>Pay</Button>
          </div>
        </div>
      ) : null}
    </Container>
  );
};

export default React.memo(Card);

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
  payBtnProps?: Omit<ButtonProps, 'onClick'>;
  handlerPay?: (amount: number) => void;
}

export const Card = (props: CardProps) => {
  const { place, imgsrc, imgalt, donateBtnProps, payBtnProps, handlerPay } =
    props;

  const theme = useTheme();

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);

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
                  id={`donate-${place}-${amount}`}
                  name={`donate-${place}`}
                  value={amount}
                  label={amount.toString()}
                  checked={selectedAmount === amount}
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                />
              ))}
            </div>
            <Button
              onClick={() => {
                setIsOverlayVisible(false);
                handlerPay && handlerPay(selectedAmount);
              }}
              {...payBtnProps}
            >
              Pay
            </Button>
          </div>
        </div>
      ) : null}
    </Container>
  );
};

export default React.memo(Card);

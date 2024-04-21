import { fireEvent } from '@testing-library/react';
import Card from '..';
import { renderProvider } from '../../../utils/render-provider';

describe('card component', () => {
  const props = {
    place: 'Baan Kru Noi',
    imgsrc: '/images/baan-kru-noi.jpg',
    imgalt: 'Baan Kru Noi',
  };

  it('should render card component and match snapshot', () => {
    const { container } = renderProvider(<Card {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render card component with overlay and match snapshot', () => {
    const { container, getByText } = renderProvider(<Card {...props} />);
    const donateBtn = getByText('Donate');
    fireEvent.click(donateBtn);
    expect(container).toMatchSnapshot();
  });

  it('should close overlay when X mark icon is clicked', () => {
    const { getByText, queryByText, getByTestId } = renderProvider(
      <Card {...props} />,
    );
    const donateBtn = getByText('Donate');
    fireEvent.click(donateBtn);
    fireEvent.click(getByTestId('x-mark-icon') as HTMLElement);
    expect(queryByText('Select the amount to donate (THB)')).toBeNull();
  });

  it('should close overlay when pay btn is clicked', () => {
    const { getByText, queryByText } = renderProvider(<Card {...props} />);
    const donateBtn = getByText('Donate');
    fireEvent.click(donateBtn);
    fireEvent.click(getByText('Pay') as HTMLElement);
    expect(queryByText('Select the amount to donate (THB)')).toBeNull();
  });

  it('should render card component with selected amount and match snapshot', () => {
    const { container, getByText } = renderProvider(<Card {...props} />);
    const donateBtn = getByText('Donate');
    fireEvent.click(donateBtn);
    fireEvent.click(getByText('100') as HTMLElement);
    expect(container).toMatchSnapshot();
  });
});

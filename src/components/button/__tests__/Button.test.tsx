import { fireEvent } from '@testing-library/react';
import Button from '..';
import { renderProvider } from '../../../utils/render-provider';

describe('button component', () => {
  it('should render button with text and match previous snapshot', () => {
    const { container } = renderProvider(
      <Button className="test-btn">Button</Button>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should change background color on hover', () => {
    const { container } = renderProvider(<Button>Button</Button>);

    fireEvent.mouseEnter(container);
    expect(container).toHaveStyle('background-color: #386bee, color: white');

    fireEvent.mouseLeave(container);
    expect(container).toHaveStyle(
      'background-color: transparent, color: #386bee',
    );
  });

  it('should render button with text and onClick event', () => {
    const mockFn = jest.fn();
    const { getByText } = renderProvider(
      <Button onClick={mockFn}>Button</Button>,
    );

    getByText('Button').click();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

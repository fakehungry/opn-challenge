import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '..';

describe('button component', () => {
  it('should render button with text and match previous snapshot', () => {
    const { container } = render(<Button className="test-btn">Button</Button>);

    expect(container).toMatchSnapshot();
  });

  it('should change background color on hover', () => {
    const { container } = render(<Button>Button</Button>);

    fireEvent.mouseEnter(container);
    expect(container).toHaveStyle('background-color: #386bee, color: white');

    fireEvent.mouseLeave(container);
    expect(container).toHaveStyle(
      'background-color: transparent, color: #386bee',
    );
  });

  it('should render button with text and onClick event', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Button onClick={mockFn}>Button</Button>);

    getByText('Button').click();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

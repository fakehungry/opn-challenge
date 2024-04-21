import { fireEvent } from '@testing-library/react';
import Radio from '..';
import { renderProvider } from '../../../utils/render-provider';

describe('radio component', () => {
  it('should render radio with label and match previous snapshot', () => {
    const { container } = renderProvider(<Radio label="Radio" />);

    expect(container).toMatchSnapshot();
  });

  it('should change background color on checked', () => {
    const { getByRole } = renderProvider(<Radio label="Radio" />);

    fireEvent.click(getByRole('radio'));
    expect(getByRole('radio')).toBeChecked();
    expect(getByRole('radio')).toHaveStyle('background-color: #0070f3');
  });
});

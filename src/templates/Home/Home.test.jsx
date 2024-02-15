import { screen } from '@testing-library/react';
import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';
import '@testing-library/jest-dom';

describe('<Home/>', () => {
  it('should render', () => {
    renderTheme(<Home />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

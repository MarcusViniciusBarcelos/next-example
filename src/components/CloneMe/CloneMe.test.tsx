import { screen } from '@testing-library/react';
import { CloneMe } from '.';
import { renderTheme } from '../../styles/render-theme';
import '@testing-library/jest-dom';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<CloneMe />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

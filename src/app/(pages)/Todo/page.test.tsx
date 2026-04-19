import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Todo Page', () => {
  it('renders without crashing', () => {
    render(<Page />);
  });

  it('renders a decorative image element', () => {
    const { container } = render(<Page />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', '');
  });

  it('renders a span with role="img" and aria-hidden', () => {
    render(<Page />);
    const span = screen.getByRole('img', { hidden: true });
    expect(span).toBeInTheDocument();
    expect(span.tagName.toLowerCase()).toBe('span');
    expect(span).toHaveAttribute('aria-hidden', 'true');
  });
});

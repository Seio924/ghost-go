import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './app';

describe('app', () => {
  it('앱 제목을 보여준다', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Ghost Go' })).toBeInTheDocument();
  });
});

import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('when Button is rendered', () => {
  it('should exist the new button', () => {
    const button = render(<Button />);
    expect(button.container.firstChild.type).toBe('button');
  });
});

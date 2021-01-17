import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

describe('Testing our acc component', () => {
  it('should display the first line', async () => {
    render(<App />);
    const DOMElement = await screen.findByTestId('line-1');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });
  it('should display the second line', async () => {
    render(<App />);
    const DOMElement = await screen.findByTestId('line-2');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });

});
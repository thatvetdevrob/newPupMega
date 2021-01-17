import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NavTabs from '../components/sidebar';

describe('Testing our acc component', () => {
  it('should display the first line nav bar', async () => {
    render(<NavTabs />);
    const DOMElement = await screen.findByTestId('line-4');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });
  it('should display the line in first child nav bar', async () => {
    render(<NavTabs />);
    const DOMElement = await screen.findByTestId('line-5');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });
  it('should display the net child in first child nav bar', async () => {
    render(<NavTabs />);
    const DOMElement = await screen.findByTestId('line-6');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });
  it('should display the next.next child in first child nav bar', async () => {
    render(<NavTabs />);
    const DOMElement = await screen.findByTestId('line-6');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });

});
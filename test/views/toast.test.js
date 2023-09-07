import { fireEvent, getByText } from '@testing-library/dom';
import toast from '../../src/views/toast';

describe('Toast', () => {
  it('Renderiza toast', () => {
    const content = jest.fn();
    const container = toast(content);
    expect(container).not.toBeUndefined();
  });
  it('Renderiza y clickea close', () => {
    const content = jest.fn();
    const container = toast(content);
    const button = getByText(container, 'Ok');
    fireEvent.click(button);
    expect(container).not.toBeUndefined();
  });
});

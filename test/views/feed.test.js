// import { fireEvent, getByText } from '@testing-library/dom';
import feed from '../../src/views/feed';
// import { signInWithCustomToken } from 'firebase/auth';

describe('Feed', () => {
  it('Renderiza feed', () => {
    const navigateTo = jest.fn();
    const container = feed(navigateTo);
    expect(container).not.toBeUndefined();
  });
});

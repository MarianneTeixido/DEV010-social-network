import { loginUser } from '../../../../src/lib/auth';

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: () =>
    new Promise((resolve) => resolve({ user: 'Mary' })),
  getAuth: jest.fn(),
}));
describe('lib auth', () => {
  it('loginUser', () => {
    const user = loginUser();
    expect(user).not.toBeUndefined();
  });
});

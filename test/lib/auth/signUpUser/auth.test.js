import { signUpUser } from '../../../../src/lib/auth';

jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: () =>
    new Promise((resolve) => resolve({ user: 'Mary' })),
  getAuth: jest.fn(),
}));
describe('lib auth', () => {
  it('signUpUser', () => {
    const user = signUpUser();
    expect(user).not.toBeUndefined();
  });
});

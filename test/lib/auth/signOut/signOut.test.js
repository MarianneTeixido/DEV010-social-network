import { signOutUser } from '../../../../src/lib/auth';

jest.mock('firebase/auth', () => ({
  signOut: () => new Promise((resolve) => resolve(true)),
  getAuth: jest.fn(),
}));
describe('lib auth', () => {
  it('signOutUser', () => {
    const user = signOutUser();
    expect(user).not.toBeUndefined();
  });
});

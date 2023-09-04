import { updateCurrentUser } from '../../../src/lib/auth';

/**
 * Firebase Auth Module
 */
jest.mock('firebase/auth', () => {
  const authInstance = {
    currentUser: null,
  };

  const mockedUserInfo = Object.freeze({
    email: 'example@example.com',
  });

  // container for attached callbacks and state variables
  const authChangeCallbacks = [];
  let authCurrentUserInfo = mockedUserInfo;

  // invoke all callbacks with current data
  const fireOnChangeCallbacks = () => {
    authInstance.currentUser = authCurrentUserInfo;
    authChangeCallbacks.forEach((cb) => {
      try {
        cb(mockedUserInfo); // invoke any active listeners
      } catch (err) {
        console.error('Error invoking callback', err);
      }
    });
  };

  authInstance.signOut = () => {
    // signInWithX will look similar to this
    authCurrentUserInfo = null;
    fireOnChangeCallbacks();
  };

  return {
    // Mock para currentUser
    getAuth: jest.fn(() => authInstance),
    onAuthStateChanged: jest.fn((authMock, onChangeCallback) => {
      onChangeCallback(mockedUserInfo);
    }),
    // mock para updateProfile
    updateProfile: () => new Promise((resolve) => resolve(true)),
  };
});

describe('lib auth', () => {
  it('updateCurrentUser', () => {
    const user = updateCurrentUser();
    expect(user).not.toBeUndefined();
  });
});

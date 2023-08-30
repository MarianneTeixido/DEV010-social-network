import { validateUserSession } from '../../../../src/lib/auth';

/**
 * Firebase Auth Module
 */
jest.mock('firebase/auth', () => {
  const authInstance = {
    // while handshaking with the Firebase Auth servers, currentUser
    // is null, regardless if someone is logged in or not.
    currentUser: null,
  };

  const mockedUserInfo = Object.freeze({
    // force read-only
    // mocked user info here - display name, email, etc
    email: 'example@example.com',
  });

  // container for attached callbacks and state variables
  const authChangeCallbacks = [];
  let authCurrentUserInfo = mockedUserInfo;
  let authTimer = null;
  let authTimerCompleted = false;

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
    authTimerCompleted = true;
  };

  authInstance.signOut = () => {
    // signInWithX will look similar to this
    authCurrentUserInfo = null;
    fireOnChangeCallbacks();
  };

  return {
    getAuth: jest.fn(() => authInstance),
    onAuthStateChanged: jest.fn((authMock, onChangeCallback) => {
      if (!authTimer) {
        // increase this delay to emulate slower connections
        authTimer = setTimeout(fireOnChangeCallbacks, 2000);
      }

      authChangeCallbacks.push(onChangeCallback);
      const unsubscriber = () => {
        const foundIndex = authChangeCallbacks.indexOf(onChangeCallback);
        if (foundIndex > -1) authChangeCallbacks.splice(foundIndex, 1);
      };

      if (authTimerCompleted) {
        // auth is "resolved" already, fire callback immediately
        onChangeCallback(mockedUserInfo);
      }

      return unsubscriber;
    }),
  };
});

global.console = { log: jest.fn() };
describe('lib auth', () => {
  it('validateUserSession user exists', () => {
    const user = validateUserSession();
    expect(user).toBeUndefined();
  });
});

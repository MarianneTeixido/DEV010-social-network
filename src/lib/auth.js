import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential;
  } catch (error) {
    console.log(error);
  }
};

export { signUpUser };

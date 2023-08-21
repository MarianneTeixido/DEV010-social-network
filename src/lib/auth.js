import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase';

const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential;
  } catch (error) {
    console.log(error);
    if (error.code === 'auth/email-already-in-use') {
      alert('This email is already in use');
    } else if (error.code === 'auth/invalid-email') {
      alert('Invalid email, please  try again');
    } else if (error.code === 'auth/weak-password') {
      alert('Your password is too short, please try again');
    } else if (error.code) {
      alert('Something went wrong, please try again');
    }
    return undefined;
  }
};

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential;
  } catch (error) {
    console.log(error);
    if (error.code === 'auth/wrong-password') {
      alert('Your password is wrong, please try again');
    } else if (error.code === 'auth/user-not-found') {
      alert('You are not signed up yet'); // Añadir botón de registro como mejorra
    } else if (error.code === 'auth/invalid-email') {
      alert('Invalid email, please try again');
    } else if (error.code) {
      alert('Something went wrong, please try again');
    }
    return undefined;
  }
};

const loginWithGoogle = async () => {
  try {
    // Inicializamos googleAuth
    const provider = new GoogleAuthProvider();
    // Invocamos el modal de iniciar sesion con google
    const userCredential = await signInWithPopup(auth, provider);

    return userCredential;
  } catch (error) {
    console.log(error);

    return undefined;
  }
};
const validateUserSession = (navigateTo) => {
  // Detecta el estado de autentificación
  // Este observador de firebase nos sirve para validar si el usuario ya habia iniciado sesion
  // o ya se habia registrado, en este caso navegamos a feed.
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      navigateTo('/feed');
    } else {
      // Si el usuario no tiene sesion activa, navegamos a onboardin
      navigateTo('/');
    }
  });
};
export { signUpUser, loginUser, loginWithGoogle, validateUserSession };
// file login finished
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';
import imgLogin from '../assets/img/hombre-entrenando-verde.png';

function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const imageLogin = document.createElement('img');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');

  inputEmail.placeholder = 'Write your email';
  inputEmail.type = 'email'; // Input para insertar email
  inputPass.placeholder = 'Password';
  inputPass.type = 'password'; // Contraseña no visible
  inputPass.pattern = '.{6,}'; // No acepta contraseñas de menos de 6 caracteres

  title.textContent = 'Log In';
  imageLogin.src = imgLogin;
  buttonLogin.textContent = 'Log In';
  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault(); // Evita que se recargue la página web
    // eslint-disable-next-line max-len
    const email = inputEmail.value; // Toma los valores cuando se da click al botón de iniciar sesión
    const userPassword = inputPass.value;
    console.log(email, userPassword);

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, userPassword);
      console.log(userCredentials);
    } catch (error) {
      console.log(error.code);

      if (error.code === 'auth/email-already-in-use') {
        alert('This email is already in use');
      } else if (error.code === 'auth/invalid-email') {
        alert('Invalid email, please  try again');
      } else if (error.code === 'auth/weak-password') {
        alert('Your password is too short, please try again');
      } else if (error.code) {
        alert('Something went wrong, please try again');
      }
    }

    navigateTo('/feed');
  });

  buttonReturn.textContent = 'Back to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  onAuthStateChanged(auth, async (user) => {
    console.log(user);
  });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, imageLogin, form, buttonReturn);

  return section;
}

export default login;

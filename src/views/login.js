// file login finished
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase/auth';
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

  inputEmail.placeholder = 'Escribe tu email';
  inputEmail.type = 'email'; // Input para insertar email
  inputPass.placeholder = 'Contraseña';
  inputPass.type = 'password'; // Contraseña no visible
  inputPass.pattern = '.{6,}';

  title.textContent = 'Inicia sesión';
  imageLogin.src = imgLogin;
  buttonLogin.textContent = 'Iniciar sesión';
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
      console.log(error)
    }
  });

  buttonReturn.textContent = 'Regresar a inicio';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, imageLogin, form, buttonReturn);

  return section;
}

export default login;

// file login finished
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
  inputPass.placeholder = 'Contraseña';

  title.textContent = 'Inicia sesión';
  imageLogin.src = imgLogin;
  buttonLogin.textContent = 'Iniciar sesión';

  buttonReturn.textContent = 'Regresar a inicio';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, imageLogin, form, buttonReturn);

  return section;
}

export default login;

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

  section.className = 'login';

  inputEmail.placeholder = 'Write your email';
  inputPass.placeholder = 'Password';

  title.textContent = 'Login';
  imageLogin.src = imgLogin;
  buttonLogin.textContent = 'Go';

  buttonReturn.textContent = 'Back to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, imageLogin, form, buttonReturn);

  return section;
}

export default login;

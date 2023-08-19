import { signUpUser } from '../lib/auth';

// file error.js
function signUp(navigateTo) {
  const divContainer = document.createElement('div');
  divContainer.classList.add('container-input');
  divContainer.innerHTML = `
    <button class="return">Volver</button>
        <h2>¡Bienvenid@!</h2>
        <form>
            <label for="">Nombre</label>
            <input type="text" id="" name="name" placeholder="Escribe tu Nombre">
          
            <label for="">Apellido</label>
            <input type="text" id="" name="lastName" placeholder="Escribe tu Apellido">
          
            <label for="">Email</label>
            <input type="email" id="" name="email" placeholder="Escribe tu Email">
          
            <label for="">Contraseña</label>
            <input type="password" id="" name="password" minlength="6" maxlength="10" placeholder="Escribe tu contraseña">
          
            <label for="">Confirma tu contraseña</label>
            <input type="password" id="" name="confirmPassword" minlength="6" maxlength="10" placeholder="Ingresa tu contraseña nuevamente">
          <div>
            <button id="button-signup" value="Unirme">Unirme</button> 
        </div>
          </form>
    `;

  const backButton = divContainer.querySelector('.return');
  backButton.addEventListener('click', () => {
    navigateTo('/login');
  });
  const inputName = divContainer.querySelector('input[name="name"]');
  const inputLastName = divContainer.querySelector('input[name="lastName"]');
  const inputEmail = divContainer.querySelector('input[name="email"]');
  const inputPassword = divContainer.querySelector('input[name="password"]');
  const inputConfirmPassword = divContainer.querySelector(
    'input[name="confirmPassword"]'
  );
  const buttonSignup = divContainer.querySelector('#button-signup');
  buttonSignup.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.value;
    const passwordValue = inputPassword.value;
    const newUser = await signUpUser(emailValue, passwordValue);
    console.log('usuario creado:', newUser);
    navigateTo('/feed');
  });

  return divContainer;
}

export default signUp;

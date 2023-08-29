// import { collection } from 'firebase/firestore';
import { updateProfile } from '@firebase/auth';
import { signUpUser } from '../lib/auth';
import { auth } from '../firebase';

// file error.js
function signUp(navigateTo) {
  const divContainer = document.createElement('div');
  divContainer.classList.add('container-input');
  divContainer.innerHTML = `
    <button class="return">Volver</button>
        <h2 class="title">¡Bienvenid@!</h2>
        <form class="form-input" action="" onsubmit="">
            <label for="">Nombre</label>
            <input type="text" name="name" placeholder="Escribe tu Nombre" required />
          
            <label for="">Apellido</label>
            <input type="text" name="lastName" placeholder="Escribe tu Apellido" required />
          
            <label for="">Email</label>
            <input type="email" name="email" placeholder="Escribe tu Email"  required />
          
            <label for="">Contraseña</label>
            <input type="password" name="password" minlength="6" maxlength="10" placeholder="Escribe tu contraseña" required />
          
            <label for="">Confirma tu contraseña</label>
            <input type="password" name="confirmPassword" minlength="6" maxlength="10" placeholder="Ingresa tu contraseña nuevamente" required />
          <div>
            <button id="button-signup" type="submit">Unirme</button> 
        </div>
          </form>
    `;

  const backButton = divContainer.querySelector('.return');
  backButton.addEventListener('click', () => {
    navigateTo('/login');
  });
  // const inputName = divContainer.querySelector('input[name="name"]');
  // const inputLastName = divContainer.querySelector('input[name="lastName"]');
  const inputEmail = divContainer.querySelector('input[name="email"]');
  const inputPassword = divContainer.querySelector('input[name="password"]');
  const inputConfirmPassword = divContainer.querySelector(
    'input[name="confirmPassword"]',
  );
  const inputUserName = divContainer.querySelector('input[name="name"]');
  const inputUserLastName = divContainer.querySelector('input[name="lastName"]');

  const formInput = divContainer.querySelector('.form-input');
  formInput.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.value;
    const passwordValue = inputPassword.value;
    const passwordConfirmValue = inputConfirmPassword.value;
    const userName = inputUserName.value.toString();
    console.log(userName);
    const userLastName = inputUserLastName.value.toString();
    const space = ' ';
    const completeUserName = userName + space + userLastName;
    console.log(userLastName);

    // const colRef = collection(db, 'Post');

    if (passwordValue !== passwordConfirmValue) {
      formInput.reset();
      return alert('Passwords are not the same');
    }
    const newUser = await signUpUser(emailValue, passwordValue); // función creada
    // const userProfile = await updateProfile(auth.currentUser, { displayName: completeUserName });

    if (newUser !== undefined) {
      await updateProfile(auth.currentUser, { displayName: completeUserName });
      alert('Now, you are signed up, please login to continue');
      navigateTo('/login'); // navega a login para que el usuario inicie sesión
    }
    return formInput.reset();
  });

  return divContainer;
}

export default signUp;

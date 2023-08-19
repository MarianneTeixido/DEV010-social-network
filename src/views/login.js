// file login finished

function login(navigateTo) {
  // const section = document.createElement('section');
  // const title = document.createElement('h2');
  // const imageLogin = document.createElement('img');
  // const buttonReturn = document.createElement('button');
  // const form = document.createElement('form');
  // const inputEmail = document.createElement('input');
  // const inputPass = document.createElement('input');
  // const buttonLogin = document.createElement('button');

  // section.className = 'login';

  // inputEmail.placeholder = 'Write your email';
  // inputPass.placeholder = 'Password';

  // title.textContent = 'Login';
  // imageLogin.src = imgLogin;
  // buttonLogin.textContent = 'Go';

  // buttonReturn.textContent = 'Back to home';
  // buttonReturn.addEventListener('click', () => {
  //   navigateTo('/');
  // });

  // form.append(inputEmail, inputPass, buttonLogin);
  // section.append(title, imageLogin, form, buttonReturn);

  // return section;
  const divContainer = document.createElement('div');
  divContainer.classList.add('login-container');
  divContainer.innerHTML = `
    <i class="fa-solid fa-user"></i>
    <h1>VitalHub</h1>
    <form id="login-form">
    <label for="">Email</label>
    <input
    type="email"
    name="email"
    placeholder="White your email"
    required
    />
    <label for="">Contraseña</label>
    <input
    type="password"
    name="password"
    placeholder="password"
    required
    />
    <button class="button-login" type="submit">Iniciar Sesion</button>
    <p>O</p>
    <button class="button-google" type="submit">
    <i class="fa-brands fa-google"></i>Continuar with Google
   </button>
   <div>
   <a >Olvide mi contraseña</a>
  <a class="button-register">¿No tienes cuenta ?¡Unete! </a>
  </div>
  </form>
  `;
  /*
  invocamos a divContainer en lugar de document, por que el divContainer aun no existe en el DOM
  Existira en el DOM hasta que retornemos divContainer
  */
  const email = divContainer.querySelector('input[name="email"]');
  const password = divContainer.querySelector('input[name="password"]');
  const buttonLogin = divContainer.querySelector('.button-login');
  const buttonGoogle = divContainer.querySelector('.button-google');
  const buttonRegister = divContainer.querySelector('.button-register');
  buttonRegister.addEventListener('click', () => {
    navigateTo('/signUp');
  });
  return divContainer;
}

export default login;

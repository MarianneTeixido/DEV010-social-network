function home(navigateTo) {
  // <section class="section-home">
  //     <div class="titles ">
  //     <button id="button">SKIP</button>
  //     <h2 class="welcome">¡Welcome to VitalHub!</h2>
  //     <div>
  //       <img
  //         class="img"
  //         src="./assets/img/entrenando-azul.png"
  //         alt="imagen entrenando-azul"
  //       />
  //     </div>
  //     <h3>Because we belive in banlance ...</h3>
  //     <p>Share your recipes and exercise routines in a healthy environment.</p>

  //   </div>
  //   </section>
  // const section = document.createElement('section');
  // section.classList.add('section-home');
  const divTitle = document.createElement('div');
  divTitle.classList.add('titles');
  const img3 = document.createElement('img');
  img3.classList.add('img2');
  img3.src = '../assets/img/logo-vitalhub.png';
  img3.alt = 'logo vitalHub';
  divTitle.appendChild(img3);
  const button = document.createElement('button');
  button.setAttribute('id', 'button');
  button.innerHTML = 'SKIP';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  const welcome = document.createElement('h2');
  welcome.classList.add('welcome');
  welcome.innerHTML = '¡Welcome to VitalHub!';
  const divImg = document.createElement('div');
  const img = document.createElement('img');
  img.classList.add('img');
  img.src = '../assets/img/entrenando-azul.png';
  img.alt = 'imagen entrenando-azul';

  const homeText = document.createElement('h3');
  homeText.innerHTML = 'Because we belive in balance ...';
  const homeText2 = document.createElement('p');
  homeText2.innerHTML =
    'Share your recipes and exercise routines in a healthy environment.';
  divImg.appendChild(img);
  divTitle.append(button, welcome, divImg, homeText, homeText2);

  return divTitle;
}

export default home;

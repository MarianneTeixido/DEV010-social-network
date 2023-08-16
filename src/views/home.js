// file home.js
// file main.js finished
import imgHome from '../assets/img/entrenando-azul.png';

function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const homeText = document.createElement('h3');
  const homeText2 = document.createElement('p');
  const button = document.createElement('button');
  const image = document.createElement('img');

  section.className = 'home';

  button.textContent = 'Skip';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  title.textContent = '¡Welcome to VitalHub!';
  homeText.textContent = 'Because we belive in banlance ...';
  homeText2.textContent = 'Share your recipes and exercise routines in a healthy environment.';
  image.src = imgHome;
  image.alt = 'Training';

  section.append(button, title, image, homeText, homeText2);
  return section;
}

export default home;

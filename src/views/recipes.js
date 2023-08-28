import navigationBar from './navigationBar';

function recipes(navigateTo) {
  const body = document.createElement('body');
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'Recipes';
  header.appendChild(title);
  const footer = document.createElement('footer');
  footer.appendChild(navigationBar(navigateTo));
  body.append(header, footer);
  return body;
}

export default recipes;

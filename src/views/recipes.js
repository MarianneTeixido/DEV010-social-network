import navigationBar from './navigationBar';

function recipes(navigateTo) {
  const body = document.createElement('body');
  const recipesTitle = document.createElement('h1');
  recipesTitle.textContent = 'Recipes';
  const footer = document.createElement('footer');
  console.log('Recipes');
  footer.append(navigationBar(navigateTo));
  body.append(recipesTitle, footer);
}

export default recipes;

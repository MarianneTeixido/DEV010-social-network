import navigationBar from './navigationBar';

function recipes(navigateTo) {
  const body = document.createElement('body');
  console.log('Recipes');
  body.append(navigationBar(navigateTo));
}

export default recipes;

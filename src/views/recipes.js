import { auth } from '../firebase';
import navigationBar from './navigationBar';
import filter from './filter';

function recipes(navigateTo) {
  const user = auth.currentUser;
  const recipesContainer = document.createElement('section');
  recipesContainer.classList.add('recipes-container');
  if (!user) {
    alert('Log in to see posts');
    navigateTo('/login');
  } else {
    const headerRecipes = document.createElement('header');
    headerRecipes.classList.add('header-recipes');
    const titleRecipes = document.createElement('h1');
    titleRecipes.classList.add('title-recipes');
    titleRecipes.textContent = 'Recipes';
    const img5 = document.createElement('img');
    img5.classList.add('img');
    img5.src = '../assets/img/logo-vitalhub.png';
    // img3.setAtributte('src', '../assets/img/logo-vitalhub.png')
    img5.alt = 'logo vitalHub';
    // img3.setAtributte('alt', 'logo vitalHub')
    headerRecipes.append(titleRecipes, img5);
    const footer = document.createElement('footer');
    footer.appendChild(navigationBar(navigateTo));
    recipesContainer.append(headerRecipes, filter(), footer);
  }
  return recipesContainer;
}

export default recipes;

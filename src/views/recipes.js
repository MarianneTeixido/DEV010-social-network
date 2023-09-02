import { auth } from '../firebase';
import navigationBar from './navigationBar';
import filter from './filter';

function recipes(navigateTo) {
  const user = auth.currentUser;
  const section = document.createElement('section');
  if (!user) {
    alert('Log in to see posts');
    navigateTo('/login');
  } else {
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'Recipes';
    header.appendChild(title);
    const footer = document.createElement('footer');
    footer.appendChild(navigationBar(navigateTo));
    section.append(header, filter(), footer);
  }
  return section;
}

export default recipes;

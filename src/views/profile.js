import { signOut } from 'firebase/auth';
import navigationBar from './navigationBar';
import { auth } from '../firebase';
import filter from './filter';

function profile(navigateTo) {
  const divTitle = document.createElement('section');
  divTitle.className = 'divTitle';
  const header = document.createElement('header');
  const title = document.createElement('h1');
  const logoutButton = document.createElement('button');

  title.textContent = 'Profile';
  logoutButton.textContent = 'Log out';

  logoutButton.addEventListener('click', (e) => {
    console.log('hola');
    e.preventDefault(e);
    signOut(auth);
    navigateTo('/');
    // logout(); // función
  });

  header.append(title, logoutButton);
  const footer = document.createElement('footer');
  footer.appendChild(navigationBar(navigateTo));
  divTitle.append(header, filter(), footer);
  return divTitle;
}

export default profile;

import { signOut } from 'firebase/auth';
import navigationBar from './navigationBar';
import { auth } from '../firebase';
import filter from './filter';

function profile(navigateTo) {
  const profileContainer = document.createElement('section');
  profileContainer.className = 'profileContainer';
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
  profileContainer.append(header, filter(), footer);
  return profileContainer;
}

export default profile;

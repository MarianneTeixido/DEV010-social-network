import { signOut } from 'firebase/auth';
import navigationBar from './navigationBar';
import { auth } from '../firebase';

function profile(navigateTo) {
  const section = document.createElement('section');
  const header = document.createElement('header');
  const title = document.createElement('h1');
  const logoutButton = document.createElement('button');

  title.textContent = 'Profile';
  logoutButton.textContent = 'Log out';

  logoutButton.addEventListener('click', (e) => {
    e.preventDefault(e);
    signOut(auth);
    navigateTo('/home');
    // logout(); // función
  });

  header.append(title, logoutButton);
  const footer = document.createElement('footer');
  footer.appendChild(navigationBar(navigateTo));
  section.append(header, footer);
  return section;
}

export default profile;

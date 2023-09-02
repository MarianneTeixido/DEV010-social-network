import { signOut } from 'firebase/auth';
import navigationBar from './navigationBar';
import { auth } from '../firebase';
import filter from './filter';

function profile(navigateTo) {
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('profile-container');
  const profileTitle = document.createElement('h2');
  profileTitle.classList.add('profile-title');
  profileTitle.textContent = 'Profile';
  const img4 = document.createElement('img');
  img4.classList.add('img4');
  img4.src = '../assets/img/logo-vitalhub (1)2.png';
  img4.alt = 'logo vitalHub';
  const signOut = document.createElement('button');
  signOut.classList.add('signOut');
  signOut.textContent = 'SingOut';
  const nameProfile = document.createElement('h2');
  nameProfile.classList.add('name-profile');
  nameProfile.textContent = 'John Done';
  const email = document.createElement('input');
  email.classList.add('email');
  // const placeholder = document.documentElement('placeholder');
  // placeholder.textContent = 'Email';
  // email.appendChild(placeholder);
  const h3 = document.createElement('h3');
  h3.textContent = 'John Done';
  const h4 = document.createElement('h4');
  h4.textContent = 'Rutina';

  const footer = document.createElement('footer');
  footer.appendChild(navigationBar(navigateTo));
  profileContainer.append(
    profileTitle,
    img4,
    signOut,
    nameProfile,
    email,
    h3,
    h4,
    footer,
  );
  return profileContainer;
}

export default profile;

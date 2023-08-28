import navigationBar from './navigationBar';

function profile(navigateTo) {
  const body = document.createElement('body');
  const profileTitle = document.createElement('h1');
  profileTitle.textContent = 'Profile';
  console.log('Profile');
  body.append(profileTitle, navigationBar(navigateTo));
}

export default profile;

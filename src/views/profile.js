import navigationBar from './navigationBar';

function profile(navigateTo) {
  const body = document.createElement('body');
  const footer = document.createElement('footer');
  const profileTitle = document.createElement('h1');
  profileTitle.textContent = 'Profile';
  console.log('Profile');
  footer.append(navigationBar(navigateTo));
  body.append(profileTitle, footer);
}

export default profile;

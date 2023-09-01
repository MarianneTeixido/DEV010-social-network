import navigationBar from './navigationBar';

function profile(navigateTo) {
  const divTitle = document.createElement('section');
  divTitle.className = 'divTitle';
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'Profile';
  header.appendChild(title);
  const footer = document.createElement('footer');
  footer.appendChild(navigationBar(navigateTo));
  divTitle.append(header, footer);
  return divTitle;
}

export default profile;

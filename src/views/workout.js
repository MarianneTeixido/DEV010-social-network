import navigationBar from './navigationBar';
import filter from './filter';

function workout(navigateTo) {
  const section = document.createElement('section');
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'Workout';
  header.appendChild(title);
  const footer = document.createElement('footer');
  footer.appendChild(navigationBar(navigateTo));
  section.append(header, filter(), footer);
  return section;
}

export default workout;

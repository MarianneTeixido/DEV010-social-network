import { auth } from '../firebase';
import navigationBar from './navigationBar';
import filter from './filter';

function workout(navigateTo) {
  const user = auth.currentUser;
  const sectionWorkout = document.createElement('section');
  if (!user) {
    alert('Log in to see posts');
    navigateTo('/login');
  } else {
    sectionWorkout.className = 'sectionWorkout';
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'Workout';
    const img3 = document.createElement('img');
    img3.className = 'img3';
    img3.src = '../assets/img/logo-vitalhub.png';
    img3.alt = 'logo vitalHub';
    header.append(title, img3);
    const footer = document.createElement('footer');
    footer.appendChild(navigationBar(navigateTo));
    sectionWorkout.append(header, filter(), footer);
  }
  return sectionWorkout;
}

export default workout;

import navigationBar from './navigationBar';

function workout(navigateTo) {
  const body = document.createElement('body');
  const workoutTitle = document.createElement('h1');
  workoutTitle.textContent = 'Workout';
  const footer = document.createElement('footer');
  console.log('Workout');
  footer.append(navigationBar(navigateTo));
  body.append(workoutTitle, footer);
}

export default workout;

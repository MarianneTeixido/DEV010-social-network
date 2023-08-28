import navigationBar from './navigationBar';

function workout(navigateTo) {
  const body = document.createElement('body');
  console.log('Workout');
  body.append(navigationBar(navigateTo));
}

export default workout;

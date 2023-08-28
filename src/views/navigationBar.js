function navigationBar(navigateTo) {
  const barContainer = document.createElement('section');
  const feedButton = document.createElement('button');
  feedButton.textContent = 'Feed';
  const recipesButton = document.createElement('button');
  recipesButton.textContent = 'Recipes';
  const workoutButton = document.createElement('button');
  workoutButton.textContent = 'Workout';
  const profileButton = document.createElement('button');
  profileButton.textContent = 'Profile';

  feedButton.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/feed');
  });

  recipesButton.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/recipes');
  });

  workoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/workout');
  });

  profileButton.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/profile');
  });

  barContainer.append(feedButton, recipesButton, workoutButton, profileButton);
  return barContainer;
}

export default navigationBar;

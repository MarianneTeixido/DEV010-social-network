// import feed from "./feed";

function navigationBar(navigateTo) {
  const barContainer = document.createElement('section');
  barContainer.className = 'buttons-container';
  const feedButton = document.createElement('button');
  feedButton.textContent = 'Feed';
  feedButton.className = 'navigation-buttons';
  const recipesButton = document.createElement('button');
  recipesButton.textContent = 'Recipes';
  recipesButton.className = 'navigation-buttons';
  const workoutButton = document.createElement('button');
  workoutButton.textContent = 'Workout';
  workoutButton.className = 'navigation-buttons';
  const profileButton = document.createElement('button');
  profileButton.textContent = 'Profile';
  profileButton.className = 'navigation-buttons';

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

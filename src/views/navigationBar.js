function navigationBar(navigateTo) {
  const barContainer = document.createElement('section');
  const feedButton = document.createElement('button');
  feedButton.textContent = 'Feed';
  const recipesButton = document.createElement('button');
  recipesButton.textContent = 'Recipes';
  const workoutButton = document.createElement('button');
  workoutButton.textContent = 'Workout';
  const profileButton = document.createElement('button');
  profileButton.textContent = document.createElement('Profile');

  feedButton.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/feed');
  });

  barContainer.append(feedButton, recipesButton, workoutButton, profileButton);
}

export default navigationBar;

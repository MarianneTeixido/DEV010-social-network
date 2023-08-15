// file home.js
// file main.js finished
function home(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const homeText = document.createElement('h3');
    const homeText2 = document.createElement('p');
    const button = document.createElement('button');
  
    button.textContent = 'Saltar';
    button.addEventListener('click', () => {
      navigateTo('/login');
    });
  
    title.textContent = '¡Bienvenida/o a VitalHub!';
    homeText.textContent = 'Porque creemos en el balance...';
    homeText2.textContent = 'Comparte tus recetas y rutinas de ejercicio en un entorno saludable.';
  
    section.append(button, title, homeText, homeText2);
    return section;
  }
  
  export default home;
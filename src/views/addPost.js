import { addDoc, collection, Timestamp } from 'firebase/firestore'; // falta  deleteDoc
import { db } from '../firebase.js';

const colRef = collection(db, 'Post');

function addPost() {
  const section = document.createElement('section'); // contiene textarea, select y submit button
  const select = document.createElement('select'); // para seleccionar tipo de post
  const option1 = document.createElement('option');
  option1.textContent = 'Recipe';
  option1.value = 'Recipe';
  const option2 = document.createElement('option');
  option2.textContent = 'Workout';
  option2.value = 'Workout';
  select.append(option1, option2);
  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Write your post here...';
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (textarea.value !== '') {
      addDoc(colRef, {
      // User: auth.currentUser.userValue,
        Date: Timestamp.now(), // agrega la fecha de creación al doc
        Content: textarea.value,
        Type: select.options[select.selectedIndex].text, // toma texto de la  opción seleccionada
      });
    } else {
      alert('Please, write something to continue');
    }

    textarea.value = ''; // limpiar el contenido del textarea con el click en submit
  });
  section.append(select, textarea, submitButton);
  return section;
}

export default addPost;

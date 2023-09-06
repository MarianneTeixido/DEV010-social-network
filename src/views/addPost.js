import { addDoc, collection, Timestamp } from 'firebase/firestore'; // falta  deleteDoc
import { db, auth } from '../firebase.js';

const colRef = collection(db, 'Post');

function addPost() {
  const section = document.createElement('section'); // contiene textarea, select y submit button
  const addPostContainer = document.createElement('div');
  addPostContainer.className = 'postContainer';

  // se ejecuta sólo si hay usuario loggeado
  const user = auth?.currentUser;
  console.log(user);
  const userID = user?.uid;
  console.log(userID);

  const select = document.createElement('select'); // para seleccionar tipo de post
  // select.placeholder = 'Choose one';
  const placeholderOption = document.createElement('option'); // placeholder
  const option1 = document.createElement('option');
  placeholderOption.textContent = 'Type post';
  // placeholderOption.disabled = true;
  option1.textContent = 'Recipe';
  option1.value = 'Recipe';
  const option2 = document.createElement('option');
  option2.textContent = 'Workout';
  option2.value = 'Workout';
  select.append(placeholderOption, option1, option2);
  const textarea = document.createElement('textarea');
  textarea.className = 'textPost';
  textarea.placeholder = 'Write your post here...';
  const submitButton = document.createElement('button');
  submitButton.className = 'sizeButton';
  submitButton.textContent = 'Submit';

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (textarea.value !== '') {
      addDoc(colRef, {
        // User: auth.currentUser.userValue,
        Date: Timestamp.now(), // agrega la fecha de creación al doc
        Content: textarea.value,
        Type: select.options[select.selectedIndex].text, // toma texto de la  opción seleccionada
        UserID: userID, // guarda el ID del usuario que escribió el post
        UserName: user?.displayName,
        Likes: [],
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

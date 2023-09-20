import { addDoc, collection } from 'firebase/firestore'; // falta  deleteDoc
import { db, auth } from '../firebase.js';

const colRef = collection(db, 'Post');

function addComment() {
  const section = document.createElement('section'); // contiene textarea, submit button
  const addPostContainer = document.createElement('div');
  addPostContainer.className = 'postContainer';

  // se ejecuta sólo si hay usuario loggeado
  const user = auth?.currentUser;
  const userID = user?.uid;

  const textarea = document.createElement('textarea');
  textarea.className = 'textComment';
  textarea.placeholder = 'Add comment here...';
  const submitButton = document.createElement('button');
  submitButton.className = 'sizeButton';
  submitButton.textContent = 'Comment';

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
        addDoc(colRef, {
          Date: new Date(), // agrega la fecha de creación al doc
          Content: textarea.value,
          Type: select.options[select.selectedIndex].text, // toma texto de la  opción seleccionada
          UserID: userID, // guarda el ID del usuario que escribió el post
          UserName: user?.displayName,
          //Likes: [], //Agregar en el futuro likes a los comentarios
        });
  });
  section.append(textarea, submitButton);

  return section;
}

export default addComment;

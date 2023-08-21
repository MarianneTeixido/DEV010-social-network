import { addDoc, collection } from 'firebase/firestore'; // falta  deleteDoc
import { db } from '../firebase.js';

const colRef = collection(db, 'Post');

function addPost() {
  const section = document.createElement('section');
  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Write your post here...';
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    addDoc(colRef, {
      Title: textarea.value,
      Content: textarea.value,
    });
  });
  section.append(textarea, submitButton);
  return section;
}

export default addPost;

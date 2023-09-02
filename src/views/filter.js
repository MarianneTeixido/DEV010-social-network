import {
  collection,
  query,
  onSnapshot,
  orderBy,
  where,
} from 'firebase/firestore'; // DocumentReference
import { db, auth } from '../firebase.js';

function filter() {
  const user = auth.currentUser; // usuario loggeado
  // const q = query(collection(db, 'Post'), orderBy('Date', 'desc'), orderByValue('Recipe'));
  const fatherContainer = document.createElement('section');
  const postsContainer = document.createElement('section');

  if (user) {
    if (window.location.pathname === '/recipes') {
      const q = query(
        collection(db, 'Post'),
        orderBy('Date', 'desc'),
        where('Type', '==', 'Recipe'),
      );
      onSnapshot(q, (querySnapshot) => {
        postsContainer.innerHTML = '';
        querySnapshot.forEach((doc) => {
          const onePost = document.createElement('section');
          onePost.className = 'individual-post';
          const typePost = document.createElement('p');
          const datePost = document.createElement('p');
          const postContent = document.createElement('p');
          const userName = document.createElement('p');

          userName.textContent = doc.data().UserName;
          typePost.textContent = doc.data().Type;
          datePost.textContent = doc.data().Date;
          postContent.textContent = doc.data().Content;

          onePost.append(userName, typePost, datePost, postContent);
          postsContainer.append(onePost);
        });
      });
      fatherContainer.appendChild(postsContainer);
    } else if (window.location.pathname === '/workout') {
      const q = query(
        collection(db, 'Post'),
        orderBy('Date', 'desc'),
        where('Type', '==', 'Workout'),
      );
      onSnapshot(q, (querySnapshot) => {
        postsContainer.innerHTML = '';
        querySnapshot.forEach((doc) => {
          const onePost = document.createElement('section');
          onePost.className = 'individual-post';
          const typePost = document.createElement('p');
          const datePost = document.createElement('p');
          const postContent = document.createElement('p');
          const userName = document.createElement('p');

          userName.textContent = doc.data().UserName;
          typePost.textContent = doc.data().Type;
          datePost.textContent = doc.data().Date;
          postContent.textContent = doc.data().Content;

          onePost.append(userName, typePost, datePost, postContent);
          postsContainer.append(onePost);
        });
      });
      fatherContainer.appendChild(postsContainer);
    } else if (window.location.pathname === '/profile') {
      const q = query(
        collection(db, 'Post'),
        orderBy('Date', 'desc'),
        where('UserID', '==', user.uid),
      );
      onSnapshot(q, (querySnapshot) => {
        postsContainer.innerHTML = '';
        querySnapshot.forEach((doc) => {
          const onePost = document.createElement('section');
          onePost.className = 'individual-post';
          const typePost = document.createElement('p');
          const datePost = document.createElement('p');
          const postContent = document.createElement('p');
          const userName = document.createElement('p');

          userName.textContent = doc.data().UserName;
          typePost.textContent = doc.data().Type;
          datePost.textContent = doc.data().Date;
          postContent.textContent = doc.data().Content;

          onePost.append(userName, typePost, datePost, postContent);
          postsContainer.append(onePost);
        });
      });
      fatherContainer.appendChild(postsContainer);
    }
  }

  return fatherContainer;
}

export default filter;

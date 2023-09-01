import { collection, query, onSnapshot, orderBy, where } from 'firebase/firestore'; // DocumentReference
import { db } from '../firebase.js';

function filter() {
  // const q = query(collection(db, 'Post'), orderBy('Date', 'desc'), orderByValue('Recipe'));
  const fatherContainer = document.createElement('section');
  const postsContainer = document.createElement('section');
  if (window.location.pathname === '/recipes') {
    const q = query(collection(db, 'Post'), orderBy('Date', 'desc'), where('Type', '==', 'Recipe'));
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
    const q = query(collection(db, 'Post'), orderBy('Date', 'desc'), where('Type', '==', 'Workout'));
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
  //   if (window.location.pathname === '/recipes') {
  //     onSnapshot(q, (querySnapshot) => {
  //       postsContainer.innerHTML = '';
  //       querySnapshot.forEach((doc) => {
  //         if (doc.data().Type === 'Recipes') {
  //           const onePost = document.createElement('section');
  //           onePost.className = 'individual-post';

  //           const typePost = document.createElement('p'); // tipo de post (receta o ejercicio)
  //           const datePost = document.createElement('p'); // fecha del post (cambiar formato)
  //           const postContent = document.createElement('p'); // contenido del post
  //           const userName = document.createElement('p'); // usuario que crea el post

  //           userName.textContent = doc.data().UserName;
  //           typePost.textContent = doc.data().Type;
  //           datePost.textContent = doc.data().Date;
  //           postContent.textContent = doc.data().Content;

  //           onePost.append(userName, typePost, datePost, postContent);
  //           postsContainer.append(onePost);
  //           fatherContainer.appendChild(postsContainer);
  //         } else if (window.location.pathname === '/workout') {
  //           console.log('Estoy en workout');
  //           console.log(doc.data().filter((element) => element.typePost === 'Workout'));
  //         }
  //         return fatherContainer;
  //       });
  //     });
  //   }
  //   return fatherContainer;
  return fatherContainer;
}

export default filter;

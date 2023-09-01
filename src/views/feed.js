import { collection, query, onSnapshot, orderBy, updateDoc, deleteDoc } from 'firebase/firestore'; // DocumentReference
// import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase.js';
import addPost from './addPost.js'; // textarea y botón de submit
import navigationBar from './navigationBar.js';

function feed(navigateTo) {
  const user = auth.currentUser;
  // const userID = user.uid;
  // console.log(userID);
  // console.log(user.displayName);
  const body = document.createElement('body'); // body del feed
  // const divHead = document.createElement('div');
  const header = document.createElement('header'); // header del feed
  const titleFeed = document.createElement('h4');
  const footer = document.createElement('footer');
  titleFeed.textContent = 'Feed';
  titleFeed.className = 'titleFeed';
  header.className = 'header';
  const img3 = document.createElement('img');
  img3.className = 'img3';
  img3.src = '../assets/img/logo-vitalhub.png';
  img3.alt = 'logo vitalHub';
  header.append(titleFeed, img3);
  body.appendChild(header);

  const q = query(collection(db, 'Post'), orderBy('Date', 'desc'));
  const sectionPosts = document.createElement('section');
  sectionPosts.append(addPost()); // addPost() imprime el textarea y submit

  const postsContainer = document.createElement('section');
  onSnapshot(q, (querySnapshot) => {
    postsContainer.innerHTML = ''; // para evitar que se dupliquen las publicaciones con el submit
    querySnapshot.forEach((doc) => {
      const onePost = document.createElement('section'); // sección individual post, para formato
      onePost.className += 'individual-post'; // asigna clase a posts individuales

      const typePost = document.createElement('p'); // tipo de post (receta o ejercicio)
      const datePost = document.createElement('p'); // fecha del post (cambiar formato)
      const postContent = document.createElement('p'); // contenido del post
      const userName = document.createElement('p'); // usuario que crea el post
      // db.ref('users').child(userID).once('value')

      userName.textContent = doc.data().UserName;
      typePost.textContent = doc.data().Type;
      datePost.textContent = doc.data().Date;
      postContent.textContent = doc.data().Content;

      const likeButton = document.createElement('img');
      likeButton.src = '../assets/img/like.png';
      likeButton.alt = 'Like';
      likeButton.className = 'likeButton';

      const likeContainer = document.createElement('section');
      likeContainer.className = 'likeContainer';
      likeContainer.append(likeButton);

      likeButton.addEventListener('click', () => {
      // Aquí implementar la lógica para incrementar un contador de likes
      });

      // prueba para editar posts
      if (doc.data().UserName === user.displayName) {
        const selectPost = document.createElement('select');
        const editOption = document.createElement('option');
        // const editButton = document.createElement('button');
        // editButton.textContent = 'Edit post';
        const deleteOption = document.createElement('option');
        // const deleteButton = document.createElement('button');
        // deleteButton.textContent = 'Delete post';
        const placeholderOption = document.createElement('option');
        placeholderOption.textContent = '...';
        editOption.textContent = 'Edit post';
        deleteOption.textContent = 'Delete post';
        // editOption.appendChild(editButton);
        // deleteOption.appendChild(deleteButton);
        selectPost.append(placeholderOption, editOption, deleteOption);
        onePost.append(selectPost);

        selectPost.addEventListener('change', () => {
          if (selectPost.selectedIndex === 1) {
            console.log('Edit');
            const textarea = document.createElement('textarea');
            const saveButton = document.createElement('button');
            textarea.textContent = doc.data().Content;
            saveButton.textContent = 'Save changes';
            onePost.append(textarea, saveButton);
            saveButton.addEventListener('click', async () => {
              await updateDoc(doc.ref, { Content: textarea.value });
              // await doc.updateDoc({ Content: textarea.value });
              onePost.removeChild(textarea);
              onePost.removeChild(saveButton);
              selectPost.selectedIndex = 0;
            });
          } else if (selectPost.selectedIndex === 2) {
            console.log('Delete');
            const dialog = document.createElement('dialog');
            const p = document.createElement('p');
            p.textContent = 'Are you sure you want to delete this post?';
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Yes';
            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';
            dialog.append(p, deleteButton, cancelButton);
            postsContainer.appendChild(dialog);
            dialog.showModal();

            deleteButton.addEventListener('click', async (e) => {
              e.preventDefault();
              await deleteDoc(doc.ref);
              onePost.remove();
              dialog.close();
            });

            cancelButton.addEventListener('click', (e) => {
              e.preventDefault();
              dialog.close();
            });
          }
        });

        // if (selectPost.selectedIndex === 1) {
        //   console.log('Edit post');
        // }

        // if (selectPost.selectedIndex === 2) {
        //   console.log('Delete post');
        // }
      }
      // termina prueba para editar posts
      const postLikeContainer = document.createElement('section');
      onePost.append(userName, typePost, datePost, postContent); // se añaden elementos a post indiv
      postLikeContainer.append(onePost, likeContainer);
      postsContainer.append(postLikeContainer); // se añaden posts individuales a section
    });

    // console.log(posts);
    sectionPosts.appendChild(postsContainer); // se añade contenedor de posts
    footer.appendChild(navigationBar(navigateTo));
    body.append(sectionPosts, footer); // se añade contenedor padre a body
    return body;
  });

  return body;
}

export default feed;

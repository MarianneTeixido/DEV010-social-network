import { collection, query, onSnapshot, orderBy, updateDoc, deleteDoc } from 'firebase/firestore'; // DocumentReference
// import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase.js';
import addPost from './addPost.js'; // textarea y botón de submit
import navigationBar from './navigationBar.js';

function feed(navigateTo) {
  const user = auth.currentUser; // usuario loggeado
  const currentUserName = user.displayName; // nombre el usuario loggeado
  // const userID = user.uid;
  // console.log(userID);
  // console.log(user.displayName);
  const divTitle = document.createElement('divTitle'); // body del feed
  divTitle.classList.add('divTitle');
  const header = document.createElement('header'); // header del feed
  header.className = 'header';

  const titleFeed = document.createElement('h1');
  titleFeed.textContent = 'Feed';
  titleFeed.className = 'titleFeed';

  const img3 = document.createElement('img');
  img3.className = 'img3';
  img3.src = '../assets/img/logo-vitalhub.png';
  img3.alt = 'logo vitalHub';

  const footer = document.createElement('footer');

  header.append(titleFeed, img3);

  const q = query(collection(db, 'Post'), orderBy('Date', 'desc'));
  const sectionPosts = document.createElement('section');
  sectionPosts.className = 'sectionPosts';
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

      userName.textContent = doc.data().UserName;
      typePost.textContent = doc.data().Type;
      datePost.textContent = doc.data().Date.toDate().toLocaleDateString();
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

      // empieza editar y borrar posts
      // const currentUserName = user.displayName;
      if (doc.data().UserName === currentUserName) { // si el post pertenece al usuario loggeado
        const selectPost = document.createElement('select'); // desplegable
        const editOption = document.createElement('option'); // opción de editar
        const deleteOption = document.createElement('option'); // opción de borrar
        const placeholderOption = document.createElement('option'); // placeholder
        placeholderOption.textContent = '...';
        editOption.textContent = 'Edit post';
        deleteOption.textContent = 'Delete post';

        selectPost.append(placeholderOption, editOption, deleteOption); // opciones al select
        onePost.append(selectPost); // se añade desplegable a cada post

        selectPost.addEventListener('change', () => { // listener para el desplegable
          if (selectPost.selectedIndex === 1) { // cuando se elige editar
            const editSection = document.createElement('section');
            editSection.className = 'editSection';
            const textarea = document.createElement('textarea'); // crea textarea en el post
            const saveButton = document.createElement('button'); // botón de guardar
            textarea.textContent = doc.data().Content; // se coloca contenido del post en textarea
            saveButton.textContent = 'Save changes';
            editSection.append(textarea, saveButton);
            onePost.append(editSection); // se añaden botón y textarea al post en cuestión

            saveButton.addEventListener('click', async () => { // listener botón de guardar
              await updateDoc(doc.ref, { Content: textarea.value }); // se actualiza el contenido
              // await doc.updateDoc({ Content: textarea.value });
              onePost.removeChild(editSection); // se elimina textarea y botón del post
              selectPost.selectedIndex = 0; // se regresa el desplegable a la opción '...'
            });
          } else if (selectPost.selectedIndex === 2) { // cuando se elige borrar
            const dialog = document.createElement('dialog'); // se crea diálogo
            const p = document.createElement('p'); // texto del diálogo
            p.textContent = 'Are you sure you want to delete this post?';
            const deleteButton = document.createElement('button'); // botón de borrar
            deleteButton.textContent = 'Yes';
            const cancelButton = document.createElement('button'); // botón cancelar
            cancelButton.textContent = 'Cancel';
            dialog.append(p, deleteButton, cancelButton);
            postsContainer.appendChild(dialog);
            dialog.showModal(); // se cierra el modal (diálogo)

            deleteButton.addEventListener('click', async (e) => { // botón de borrar
              e.preventDefault();
              await deleteDoc(doc.ref); // se borra el documento de la colección
              onePost.remove(); // se borra post de la view
              dialog.close(); // se cierra el diálogo
            });

            cancelButton.addEventListener('click', (e) => { // botón de cancelar
              e.preventDefault();
              dialog.close(); // sólo se cierra el diálogo
            });
          }
        });
      }
      // termina editar y borrar posts

      const postLikeContainer = document.createElement('section');
      onePost.append(userName, typePost, datePost, postContent); // se añaden elementos a post indiv
      postLikeContainer.append(onePost, likeContainer);
      postsContainer.append(postLikeContainer); // se añaden posts individuales a section
    });

    sectionPosts.appendChild(postsContainer); // se añade contenedor de posts
    footer.appendChild(navigationBar(navigateTo));
    divTitle.append(header, sectionPosts, footer); // se añade contenedor padre a body
    return divTitle;
  });

  return divTitle;
}

export default feed;

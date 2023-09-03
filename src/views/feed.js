import {
  collection,
  query,
  onSnapshot,
  orderBy,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'; // DocumentReference
import { db, auth } from '../firebase.js';
import addPost from './addPost.js'; // textarea y botón de submit
import navigationBar from './navigationBar.js';

function feed(navigateTo) {
  // Usamos el operador ternario para que no marque error cuando user sea nullo
  const user = auth?.currentUser; // usuario loggeado
  const divTitle = document.createElement('div'); // body del feed o contenedor padre

  const currentUserName = user?.displayName; // nombre el usuario loggeado
  divTitle.classList.add('divTitle'); // Agregamos la clase divTitle al contenedor padre
  const header = document.createElement('header'); // header del feed
  header.classList.add('header'); // Agregamos la clase header al header

  const titleFeed = document.createElement('h1');
  titleFeed.textContent = 'Feed';
  titleFeed.classList.add('titleFeed');

  const img3 = document.createElement('img');
  img3.classList.add('img3');
  img3.src = '../assets/img/logo-vitalhub.png';
  // img3.setAtributte('src', '../assets/img/logo-vitalhub.png')
  img3.alt = 'logo vitalHub';
  // img3.setAtributte('alt', 'logo vitalHub')
  const footer = document.createElement('footer');

  header.append(titleFeed, img3);

  // Query a firestore a la tabla o coleccion Post ordenando por descendente
  const q = query(collection(db, 'Post'), orderBy('Date', 'desc'));
  // select * from Post order by Date desc;
  const sectionPosts = document.createElement('section'); // Section para los post
  sectionPosts.classList.add('sectionPosts');
  sectionPosts.appendChild(addPost()); // addPost() es la vista para agregar post

  const postsContainer = document.createElement('section');
  // Observador o listener que se ejecutará cada vez que la tabla o coleccion Post cambie
  onSnapshot(q, (querySnapshot) => {
    postsContainer.innerHTML = ''; // para evitar que se dupliquen las publicaciones con el submit
    // En querySnapshot viene la data de la BD de Post en un array
    querySnapshot.forEach((doc) => {
      const onePost = document.createElement('section'); // sección individual post, para formato
      onePost.classList.add('individual-post'); // asigna clase a posts individuales

      const typePost = document.createElement('p'); // tipo de post (receta o ejercicio)
      const datePost = document.createElement('p'); // fecha del post (cambiar formato)
      const postContent = document.createElement('p'); // contenido del post
      const userName = document.createElement('p'); // usuario que crea el post

      // a traves de la funcion data() obtenemos el valor de UserName
      userName.textContent = doc.data().UserName;
      typePost.textContent = doc.data().Type;
      datePost.textContent = doc.data().Date.toDate().toLocaleDateString();
      postContent.textContent = doc.data().Content;

      // Componente likes
      const likeButton = document.createElement('img');
      likeButton.src = '../assets/img/like.png';
      likeButton.alt = 'Like';
      likeButton.classList.add('likeButton');

      const likeContainer = document.createElement('section');
      likeContainer.classList.add('likeContainer');
      likeContainer.append(likeButton);

      likeButton.addEventListener('click', () => {
        // Aquí implementar la lógica para incrementar un contador de likes
      });

      // empieza editar y borrar posts
      // const currentUserName = user.displayName;
      if (doc.data().UserName === currentUserName) {
        // si el post pertenece al usuario loggeado
        const selectPost = document.createElement('select'); // desplegable
        const editOption = document.createElement('option'); // opción de editar
        const deleteOption = document.createElement('option'); // opción de borrar
        const placeholderOption = document.createElement('option'); // placeholder
        placeholderOption.textContent = '...';
        editOption.textContent = 'Edit post';
        deleteOption.textContent = 'Delete post';

        selectPost.append(placeholderOption, editOption, deleteOption); // opciones al select
        onePost.append(selectPost); // se añade desplegable a cada post

        selectPost.addEventListener('change', () => {
          // listener para el desplegable
          if (selectPost.selectedIndex === 1) {
            // cuando se elige editar
            const editSection = document.createElement('section');
            editSection.className = 'editSection';
            const textarea = document.createElement('textarea'); // crea textarea en el post
            const saveButton = document.createElement('button'); // botón de guardar
            textarea.textContent = doc.data().Content; // se coloca contenido del post en textarea
            saveButton.textContent = 'Save changes';
            editSection.append(textarea, saveButton);
            onePost.append(editSection); // se añaden botón y textarea al post en cuestión

            saveButton.addEventListener('click', async () => {
              // listener botón de guardar para acualizar el registro firebase
              await updateDoc(doc.ref, { Content: textarea.value }); // se actualiza el contenido
              // await doc.updateDoc({ Content: textarea.value });
              onePost.removeChild(editSection); // se elimina textarea y botón del post
              selectPost.selectedIndex = 0; // se regresa el desplegable a la opción '...'
            });
          } else if (selectPost.selectedIndex === 2) {
            // cuando se elige borrar
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

            deleteButton.addEventListener('click', async (e) => {
              // botón de borrar
              e.preventDefault();
              await deleteDoc(doc.ref); // se borra el documento de la colección
              onePost.remove(); // se borra post de la view
              dialog.close(); // se cierra el diálogo
              selectPost.selectedIndex = 0; // se regresa el desplegable a la opción '...'
            });

            cancelButton.addEventListener('click', (e) => {
              // botón de cancelar
              e.preventDefault();
              dialog.close(); // sólo se cierra el diálogo
            });
          }
        });
      }
      // termina editar y borrar posts

      const postLikeContainer = document.createElement('section');
      onePost.append(userName, typePost, datePost, postContent); // se añaden elementos a post ind
      postLikeContainer.append(onePost, likeContainer);
      postsContainer.append(postLikeContainer); // se añaden posts individuales a section
    }); // Termina for each

    sectionPosts.appendChild(postsContainer); // se añade contenedor de posts
    footer.appendChild(navigationBar(navigateTo)); // agrega navigatiob bar como hijo al footer
    divTitle.append(header, sectionPosts, footer); // se añade contenedor padre a body
  });

  return divTitle;
}

export default feed;

import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'; // DocumentReference
// import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase.js';
// eslint-disable-next-line import/no-unresolved
// import { setUpPosts } from './post.js';
// import { setUpPosts } from './post.js';
import addPost from './addPost.js'; // textarea y botón de submit
import navigationBar from './navigationBar.js';

function feed(navigateTo) {
  // const user = auth.currentUser;
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

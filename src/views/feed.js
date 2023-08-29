import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase.js';
// eslint-disable-next-line import/no-unresolved
// import { setUpPosts } from './post.js';
// import { setUpPosts } from './post.js';
import addPost from './addPost.js'; // textarea y botón de submit
import navigationBar from './navigationBar.js';

function feed(navigateTo) {
  const body = document.createElement('body'); // body del feed
  const header = document.createElement('header'); // header del feed
  const titleFeed = document.createElement('h2');
  const footer = document.createElement('footer');
  titleFeed.textContent = 'Feed';
  header.append(titleFeed);
  const img3 = document.createElement('img');
  img3.classList.add('img2');
  img3.src = '../assets/img/logo-vitalhub.png';
  img3.alt = 'logo vitalHub';
  divTitle.appendChild(img3);
  body.append(header,divTitle);

  const q = query(collection(db, 'Post'), orderBy('Date', 'desc'));
  const sectionPosts = document.createElement('section');
  sectionPosts.append(titlePosts, addPost()); // addPost() imprime el textarea y submit
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
      userName.textContent = doc.data().User;
      typePost.textContent = doc.data().Type;
      datePost.textContent = doc.data().Date;
      postContent.textContent = doc.data().Content;
      onePost.append(typePost, datePost, postContent); // se añaden elementos a post individual
      postsContainer.appendChild(onePost); // se añaden posts individuales a section
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

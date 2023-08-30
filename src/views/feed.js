import {
  collection,
  query,
  onSnapshot,
  orderBy,
  updateDoc,
  increment,
} from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase.js';
// eslint-disable-next-line import/no-unresolved
// import { setUpPosts } from './post.js';
// import { setUpPosts } from './post.js';
import addPost from './addPost.js'; // textarea y botón de submit
import navigationBar from './navigationBar.js';

function feed(navigateTo) {
  const divTitle = document.createElement('div');
  divTitle.classList.add('divTitle');
  const header = document.createElement('header'); // header del feed
  const titleFeed = document.createElement('h4');
  const img3 = document.createElement('img');
  const footer = document.createElement('footer');

  titleFeed.textContent = 'Feed';
  titleFeed.className = 'titleFeed';
  header.className = 'header';
  img3.className = 'img3';
  img3.src = '../assets/img/logo-vitalhub.png';
  img3.alt = 'logo vitalHub';

  header.append(titleFeed, img3);
  // body.appendChild(header);

  const q = query(collection(db, 'Post'), orderBy('Date', 'desc'));
  const sectionPosts = document.createElement('section');
  sectionPosts.classList = 'sectionPosts';
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
      userName.textContent = doc.data().User;
      typePost.textContent = doc.data().Type;
      datePost.textContent = doc.data().Date;
      postContent.textContent = doc.data().Content;

      const likeButton = document.createElement('img');
      likeButton.src = '../assets/img/like.png';
      likeButton.alt = 'Like';
      likeButton.className = 'likeButton';

      // const likesCount = document.createElement('span');
      // likesCount.className = 'likesCount';
      // likesCount.textContent = doc.data().Likes.toString();

      const likeContainer = document.createElement('section');
      likeContainer.className = 'likeContainer';
      likeContainer.append(likeButton);

      likeButton.addEventListener('click', async () => {
        // const postId = doc.id; // Obtener el ID del post
        const postRef = doc.ref;

        await updateDoc(postRef, {
          Likes: increment(1),
        });
        console.log(increment);
        console.log(doc.id, ' => ', doc.data());

        // const likesCountElement = postLikeContainer.querySelector('.likesButton');
        // const currentLikes = parseInt(likesCountElement.textContent, 10);
        // likesCountElement.textContent = (currentLikes + 1).toString();
      });

      const postLikeContainer = document.createElement('section');

      onePost.append(typePost, datePost, postContent); // se añaden elementos a post individual
      postLikeContainer.append(onePost, likeContainer);
      postsContainer.append(postLikeContainer); // se añaden posts individuales a section
    });

    // console.log(posts);
    sectionPosts.append(postsContainer); // se añade contenedor de posts
    footer.appendChild(navigationBar(navigateTo));
    divTitle.append(header, sectionPosts, footer);
    // return divTitle;
  });

  return divTitle;
}

export default feed;

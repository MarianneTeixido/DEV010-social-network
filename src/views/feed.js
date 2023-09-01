import { collection, 
  query, 
  onSnapshot, 
  orderBy, 
  updateDoc, 
  increment } from 'firebase/firestore';
import { db } from '../firebase.js';
import addPost from './addPost.js'; // textarea y botón de submit
import navigationBar from './navigationBar.js';
import { updateCurrentUser } from 'firebase/auth';


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

  header.append(titleFeed, img3)
  //body.appendChild(header);

  const q = query(collection(db, 'Post'), orderBy('Date', 'desc'));
  const sectionPosts = document.createElement('section');
  sectionPosts.className = 'sectionPosts';
  sectionPosts.append(addPost()); // addPost() imprime el textarea y submit
  

  const postsContainer = document.createElement('section');
  postsContainer.className = 'postsContainer';
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

      const likesText= document.createElement('span');
      const likesCount = document.createElement('span');
      likesCount.textContent = '0';
      likesText.textContent = ' Likes';
  
      const likeContainer = document.createElement('section');
      likeContainer.className = 'likeContainer';
      likeContainer.append(likeButton, likesCount,likesText);

      likeButton.addEventListener('click', async() => {
        const postId = doc.id; // Obtener el ID del post
        const postRef = doc.ref; 
        const findUser = (updateCurrentUser.email);
        
        await updateDoc(postRef, {
          //Likes: increment(1) //tienen
          
        });
        console.log(doc.id, " => ", doc.data());

       // likesCountElement.textContent = (currentLikes + 1).toString();

      });
      
      const postLikeContainer = document.createElement('section');
      onePost.append(userName, typePost, datePost, postContent); // se añaden elementos a post indiv
      postLikeContainer.append(onePost, likeContainer);
      postsContainer.append(postLikeContainer); // se añaden posts individuales a section
    });

    // console.log(posts);
    sectionPosts.append(postsContainer); // se añade contenedor de posts
    footer.appendChild(navigationBar(navigateTo));
    divTitle.append(header,sectionPosts,footer)
    //return divTitle;
  });

  return divTitle;
}

export default feed;

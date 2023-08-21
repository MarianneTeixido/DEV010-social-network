import { getDocs, collection, query, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase.js';
// eslint-disable-next-line import/no-unresolved
import { setUpPosts } from './post.js';
import addPost from './addPost.js';

function feed(/* navigateTo */) {
  const section = document.createElement('section');
  const titleSection = document.createElement('section');
  const titleFeed = document.createElement('h2');
  titleFeed.textContent = 'Feed';
  titleSection.append(titleFeed);
  const titlePosts = document.createElement('h3');
  titlePosts.textContent = 'Posts';
  section.append(titleSection, titlePosts, addPost());

  const q = query(collection(db, "Post"));
  const sectionPosts = document.createElement('section');
  onSnapshot(q, (querySnapshot) => {
  const posts = [];
  querySnapshot.forEach((doc) => {
      const pPosts = document.createElement('p');
      pPosts.textContent = doc.data().Content;
      sectionPosts.appendChild(pPosts);
  });
  console.log(posts);
  section.appendChild(sectionPosts);
  return section;
});
  // onAuthStateChanged(auth, async (user) => {
  //   if (user) {
  //     addPost();
  //     const querySnapshot = await getDocs(collection(db, 'Post'));
  //     const posts = setUpPosts(querySnapshot.docs);
  //     section.append(posts);
  //   } else {
  //     setUpPosts([]);
  //     const p = document.createElement('p');
  //     p.textContent = 'Sign in to see posts.';
  //     section.append(p);
  //   }
  // });

  return section;
}

export default feed;

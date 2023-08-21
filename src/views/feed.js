import { getDocs, collection } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase.js';
import { setUpPosts } from './post.js';

function feed(/* navigateTo */) {
  const section = document.createElement('section');
  const titleSection = document.createElement('section');
  const titleFeed = document.createElement('h2');
  titleFeed.textContent = 'Feed';
  titleSection.append(titleFeed);
  const titlePosts = document.createElement('h3');
  titlePosts.textContent = 'Posts';
  section.append(titleSection, titlePosts);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const querySnapshot = await getDocs(collection(db, 'Post'));
      const posts = setUpPosts(querySnapshot.docs);
      section.append(posts);
    } else {
      setUpPosts([]);
      const p = document.createElement('p');
      p.textContent = 'Sign in to see posts.';
      section.append(p);
    }
  });
  // const buttonHome = document.createElement('button');
  // buttonHome.textContent = 'Go home';
  // buttonHome.addEventListener('click', () => {
  //   navigateTo('/home');
  // });
  return section;
}

export default feed;

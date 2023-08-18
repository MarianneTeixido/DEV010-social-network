import { getDocs, collection } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase.js';
import { setUpPosts } from './post.js';

function feed(/* navigateTo */) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const querySnapshot = await getDocs(collection(db, 'Post'));
      const sectionPosts = document.createElement('section');
      const title = document.createElement('h2');
      title.textContent = 'Posts';
      setUpPosts(querySnapshot.docs);
      sectionPosts.append(title);
    // } else {
    //   loginCheck(user);
    }
  });

  const section = document.createElement('section');
  const title = document.createElement('h2');
  // const buttonHome = document.createElement('button');

  title.textContent = 'Feed';
  // buttonHome.textContent = 'Go home';

  section.append(title);

  // buttonHome.addEventListener('click', () => {
  //   navigateTo('/home');
  // });

  return section;
}

export default feed;
